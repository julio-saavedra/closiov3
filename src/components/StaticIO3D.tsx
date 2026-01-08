import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

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
    renderer.toneMappingExposure = 1.4;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 90);
    camera.position.set(0.0, -0.2, 5.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 3.5);
    key.position.set(5, 6, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 2.0);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 3.0, 40);
    rim.position.set(-2.0, 2.2, -2.8);
    scene.add(rim);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
    topLight.position.set(0, 8, 3);
    scene.add(topLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 3.0);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    const accentLight1 = new THREE.PointLight(0x6ad4f2, 6.0, 40);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6ad4f2, 5.0, 40);
    accentLight2.position.set(-3, -1, 2);
    scene.add(accentLight2);

    const glowLight = new THREE.PointLight(0x6ad4f2, 8.0, 45);
    glowLight.position.set(0, 0, 4);
    scene.add(glowLight);

    const TEAL = new THREE.Color("#6ad4f2");
    const WHITE = new THREE.Color("#F8F8F8");

    function solidMaterial(baseColor: THREE.Color, emissiveIntensity = 0.25, rough = 0.3) {
      return new THREE.MeshPhysicalMaterial({
        color: baseColor,
        metalness: 0.08,
        roughness: rough,
        transmission: 0,
        transparent: false,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
        envMapIntensity: 1.2,
        specularIntensity: 0.6,
        emissive: baseColor,
        emissiveIntensity,
        reflectivity: 0.5
      });
    }

    const io3D = new THREE.Group();
    scene.add(io3D);
    io3D.position.set(0, -0.15, 0.0);

    function createHollowI({
      width = 0.38,
      height = 0.98,
      stroke = 0.06,
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
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 5
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
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 5,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    const io = new THREE.Group();
    io.position.set(0, 0.0, 0.0);
    io3D.add(io);

    const iMesh = new THREE.Mesh(
      createHollowI({ width: 0.45, height: 1.2, stroke: 0.12, slant: 0.22, depth: 0.18 }),
      solidMaterial(TEAL, 0.35, 0.28)
    );
    const oMesh = new THREE.Mesh(
      createHollowO({ outerRadius: 0.58, ringThickness: 0.22, depth: 0.18, segments: 256 }),
      solidMaterial(WHITE, 0.15, 0.32)
    );

    iMesh.position.set(-0.58, 0.0, 0.0);
    oMesh.position.set(0.58, 0.0, 0.0);

    io.add(iMesh, oMesh);

    io.rotation.x = 0.12;

    io.scale.set(0, 0, 0);
    gsap.to(io.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.8,
      ease: "elastic.out(1, 0.6)",
      delay: 0.2
    });

    gsap.fromTo(io.rotation,
      { y: Math.PI * 0.3 },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
      }
    );

    gsap.to(accentLight1.position, {
      x: -3,
      y: -1,
      duration: 6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

    gsap.to(accentLight2.position, {
      x: 3,
      y: 1,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      io3D.scale.setScalar(mobile ? 1.6 : 2.4);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;

    function animate() {
      t += 0.012;

      const floatY = Math.sin(t * 0.4) * 0.03;
      const floatX = Math.cos(t * 0.3) * 0.015;
      io.position.y = floatY;
      io.position.x = floatX;

      io.rotation.y = Math.sin(t * 0.25) * 0.08;
      io.rotation.x = 0.12 + Math.sin(t * 0.35) * 0.04;

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
