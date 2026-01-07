import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const StaticIO3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 90);
    camera.position.set(0.0, -0.8, 5.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(5, 6, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 1.0);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.5, 30);
    rim.position.set(-2.0, 2.2, -2.8);
    scene.add(rim);

    const accentLight1 = new THREE.PointLight(0x6ad4f2, 2.0, 15);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6ad4f2, 1.5, 15);
    accentLight2.position.set(-3, -1, 2);
    scene.add(accentLight2);

    const TEAL = new THREE.Color("#6ad4f2");
    const WHITE = new THREE.Color("#FFFFFF");

    function solidMaterial(baseColor: THREE.Color, emissiveIntensity = 0.3, rough = 0.2) {
      return new THREE.MeshPhysicalMaterial({
        color: baseColor,
        metalness: 0.1,
        roughness: rough,
        transmission: 0,
        transparent: false,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.5,
        specularIntensity: 1.0,
        emissive: baseColor,
        emissiveIntensity
      });
    }

    const io3D = new THREE.Group();
    scene.add(io3D);
    io3D.position.set(-1.8, -2.0, 0.0);

    function createItalicHollowI({
      width = 0.38,
      height = 0.98,
      stroke = 0.10,
      slant = 0.26,
      depth = 0.10
    } = {}) {
      const outer = new THREE.Shape();
      outer.moveTo(-width / 2, -height / 2);
      outer.lineTo(width / 2, -height / 2);
      outer.lineTo(width / 2 + slant, height / 2);
      outer.lineTo(-width / 2 + slant, height / 2);
      outer.lineTo(-width / 2, -height / 2);

      const iw = width - stroke * 2;
      const ih = height - stroke * 2;
      const innerSlant = slant * (ih / height);

      const inner = new THREE.Path();
      inner.moveTo(-iw / 2, -ih / 2);
      inner.lineTo(iw / 2, -ih / 2);
      inner.lineTo(iw / 2 + innerSlant, ih / 2);
      inner.lineTo(-iw / 2 + innerSlant, ih / 2);
      inner.lineTo(-iw / 2, -ih / 2);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.04,
        bevelSegments: 3
      });
      g.center();
      return g;
    }

    function createHollowO({ outerRadius = 0.65, ringThickness = 0.06, depth = 0.10, segments = 128 } = {}) {
      const innerRadius = outerRadius - ringThickness;

      const outer = new THREE.Shape();
      outer.absellipse(0, 0, outerRadius, outerRadius, 0, Math.PI * 2, false, 0);

      const inner = new THREE.Path();
      inner.absellipse(0, 0, innerRadius, innerRadius, 0, Math.PI * 2, true, 0);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.04,
        bevelSegments: 3,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    const io = new THREE.Group();
    io.position.set(0, 0.0, 0.0);
    io3D.add(io);

    const iMesh = new THREE.Mesh(createItalicHollowI({ width: 0.5, height: 1.3, stroke: 0.14, depth: 0.15 }), solidMaterial(TEAL, 0.4, 0.2));
    const oMesh = new THREE.Mesh(createHollowO({ outerRadius: 0.65, ringThickness: 0.26, depth: 0.15, segments: 256 }), solidMaterial(WHITE, 0.3, 0.2));

    iMesh.position.set(-0.65, 0.0, 0.0);
    oMesh.position.set(0.65, 0.0, 0.0);

    io.add(iMesh, oMesh);

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      io3D.scale.setScalar(mobile ? 1.4 : 2.2);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;

    function animate() {
      t += 0.008;

      const swing = Math.sin(t * 0.3) * 0.02;
      io.rotation.x = swing;
      io.rotation.y = Math.sin(t * 0.2) * 0.01;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default StaticIO3D;
