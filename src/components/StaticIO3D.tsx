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
    renderer.toneMappingExposure = 1.8;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 90);
    camera.position.set(0.0, -0.3, 5.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 5.0);
    key.position.set(5, 6, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 3.0);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 4.0, 40);
    rim.position.set(-2.0, 2.2, -2.8);
    scene.add(rim);

    const topLight = new THREE.DirectionalLight(0xffffff, 3.0);
    topLight.position.set(0, 8, 3);
    scene.add(topLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 4.0);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    const accentLight1 = new THREE.PointLight(0x6ad4f2, 10.0, 40);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6ad4f2, 8.0, 40);
    accentLight2.position.set(-3, -1, 2);
    scene.add(accentLight2);

    const glowLight = new THREE.PointLight(0x6ad4f2, 12.0, 45);
    glowLight.position.set(0, 0, 4);
    scene.add(glowLight);

    const TEAL = new THREE.Color("#6ad4f2");
    const WHITE = new THREE.Color("#FFFFFF");

    function polishedMaterial(baseColor: THREE.Color, emissiveIntensity = 0.5, rough = 0.05) {
      return new THREE.MeshPhysicalMaterial({
        color: baseColor,
        metalness: 0.15,
        roughness: rough,
        transmission: 0,
        transparent: false,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        envMapIntensity: 4.0,
        specularIntensity: 2.0,
        emissive: baseColor,
        emissiveIntensity,
        reflectivity: 1.0,
        sheen: 0.5,
        sheenRoughness: 0.1,
        sheenColor: baseColor
      });
    }

    function shieldOutlineMaterial() {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#4a6a70"),
        metalness: 0.8,
        roughness: 0.15,
        transparent: true,
        opacity: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 3.0,
        specularIntensity: 1.5,
        emissive: new THREE.Color("#6ad4f2"),
        emissiveIntensity: 0.4,
        reflectivity: 1.0
      });
    }

    const io3D = new THREE.Group();
    scene.add(io3D);
    io3D.position.set(0, -0.6, 0.0);

    function createShieldOutline(width = 2.6, height = 3.0, strokeWidth = 0.08, depth = 0.06, cornerRadius = 0.25) {
      const w = width / 2;
      const h = height / 2;
      const r = cornerRadius;
      const bottomTaper = 0.55;
      const bottomPointY = -h - 0.45;

      const outerShape = new THREE.Shape();
      outerShape.moveTo(-w + r, h);
      outerShape.lineTo(w - r, h);
      outerShape.quadraticCurveTo(w, h, w, h - r);
      outerShape.lineTo(w, -h * 0.3);
      outerShape.quadraticCurveTo(w, -h * 0.5, w * bottomTaper, -h);
      outerShape.lineTo(0, bottomPointY);
      outerShape.lineTo(-w * bottomTaper, -h);
      outerShape.quadraticCurveTo(-w, -h * 0.5, -w, -h * 0.3);
      outerShape.lineTo(-w, h - r);
      outerShape.quadraticCurveTo(-w, h, -w + r, h);

      const iw = w - strokeWidth;
      const ih = h - strokeWidth;
      const ir = Math.max(0.05, r - strokeWidth * 0.5);
      const iBottomTaper = bottomTaper;
      const iBottomPointY = bottomPointY + strokeWidth * 1.5;

      const innerPath = new THREE.Path();
      innerPath.moveTo(-iw + ir, ih);
      innerPath.lineTo(iw - ir, ih);
      innerPath.quadraticCurveTo(iw, ih, iw, ih - ir);
      innerPath.lineTo(iw, -ih * 0.3);
      innerPath.quadraticCurveTo(iw, -ih * 0.5, iw * iBottomTaper, -ih);
      innerPath.lineTo(0, iBottomPointY);
      innerPath.lineTo(-iw * iBottomTaper, -ih);
      innerPath.quadraticCurveTo(-iw, -ih * 0.5, -iw, -ih * 0.3);
      innerPath.lineTo(-iw, ih - ir);
      innerPath.quadraticCurveTo(-iw, ih, -iw + ir, ih);

      outerShape.holes.push(innerPath);

      const g = new THREE.ExtrudeGeometry(outerShape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.015,
        bevelSize: 0.015,
        bevelSegments: 3
      });
      g.center();
      return g;
    }

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
        bevelThickness: 0.025,
        bevelSize: 0.025,
        bevelSegments: 4
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
        bevelThickness: 0.025,
        bevelSize: 0.025,
        bevelSegments: 4,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    const shieldMesh = new THREE.Mesh(createShieldOutline(), shieldOutlineMaterial());
    shieldMesh.position.set(0, 0.2, -0.1);
    io3D.add(shieldMesh);

    const io = new THREE.Group();
    io.position.set(0, 0.45, 0.0);
    io3D.add(io);

    const iMesh = new THREE.Mesh(
      createHollowI({ width: 0.42, height: 1.15, stroke: 0.06, slant: 0.20, depth: 0.10 }),
      polishedMaterial(TEAL, 1.2, 0.03)
    );
    const oMesh = new THREE.Mesh(
      createHollowO({ outerRadius: 0.55, ringThickness: 0.20, depth: 0.10, segments: 256 }),
      polishedMaterial(WHITE, 0.7, 0.03)
    );

    iMesh.position.set(-0.55, 0.0, 0.0);
    oMesh.position.set(0.55, 0.0, 0.0);

    io.add(iMesh, oMesh);

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      io3D.scale.setScalar(mobile ? 1.5 : 2.3);
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

      shieldMesh.rotation.x = swing * 0.5;
      shieldMesh.rotation.y = Math.sin(t * 0.2) * 0.005;

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
