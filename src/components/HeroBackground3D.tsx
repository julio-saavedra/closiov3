import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const HeroBackground3D: React.FC = () => {
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
    renderer.setClearColor(0x000000, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 90);
    camera.position.set(0.0, 0.35, 8.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(5, 6, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.9);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.3, 30);
    rim.position.set(-2.0, 2.2, -2.8);
    scene.add(rim);

    const TEAL = new THREE.Color("#35E7E0");
    const WHITE = new THREE.Color("#FFFFFF");

    function glassMaterial(tint: THREE.Color, emissiveIntensity = 0.35, rough = 0.05, thickness = 1.2) {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#FFFFFF"),
        metalness: 0.0,
        roughness: rough,
        transmission: 1.0,
        thickness,
        ior: 1.52,
        transparent: true,
        opacity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 2.0,
        specularIntensity: 1.2,
        emissive: tint,
        emissiveIntensity
      });
    }

    const hero3D = new THREE.Group();
    scene.add(hero3D);
    hero3D.position.set(1.7, 0.0, 0.0);

    const topRingGeo = new THREE.TorusGeometry(1.4, 0.18, 64, 100);
    const ringTop = new THREE.Mesh(topRingGeo, glassMaterial(TEAL, 0.40, 0.04, 1.5));
    ringTop.position.set(0, 1.8, 0);
    hero3D.add(ringTop);

    const middleRingGeo = new THREE.TorusGeometry(0.9, 0.12, 64, 100);
    const ringMiddle = new THREE.Mesh(middleRingGeo, glassMaterial(WHITE, 0.35, 0.04, 1.5));
    ringMiddle.position.set(0, 0.35, 0);
    hero3D.add(ringMiddle);

    const bottomRingGeo = new THREE.TorusGeometry(1.4, 0.18, 64, 100);
    const ringBottom = new THREE.Mesh(bottomRingGeo, glassMaterial(TEAL, 0.40, 0.04, 1.5));
    ringBottom.position.set(0, -1.1, 0);
    hero3D.add(ringBottom);

    const chainGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.6, 16);
    const chainMat = glassMaterial(WHITE, 0.25, 0.05, 1.0);

    const chain1 = new THREE.Mesh(chainGeo, chainMat);
    chain1.position.set(0, 1.15, 0);
    hero3D.add(chain1);

    const chain2 = new THREE.Mesh(chainGeo, chainMat);
    chain2.position.set(0, -0.35, 0);
    hero3D.add(chain2);

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

      const iw = Math.max(0.01, width - stroke * 2);
      const ih = Math.max(0.01, height - stroke * 2);
      const inner = new THREE.Path();
      inner.moveTo(-iw / 2, -ih / 2);
      inner.lineTo(iw / 2, -ih / 2);
      inner.lineTo(iw / 2 + slant * (iw / width), ih / 2);
      inner.lineTo(-iw / 2 + slant * (iw / width), ih / 2);
      inner.lineTo(-iw / 2, -ih / 2);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelSegments: 2
      });
      g.center();
      return g;
    }

    function createSolidO({ radius = 0.36, depth = 0.10 } = {}) {
      const shape = new THREE.Shape();
      shape.absellipse(0, 0, radius, radius, 0, Math.PI * 2, false, 0);

      const g = new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelSegments: 2
      });
      g.center();
      return g;
    }

    const io = new THREE.Group();
    io.position.set(0, 0.35, 0.12);
    hero3D.add(io);

    const iMesh = new THREE.Mesh(createItalicHollowI(), glassMaterial(TEAL, 0.30, 0.08, 0.35));
    const oMesh = new THREE.Mesh(createSolidO(), glassMaterial(WHITE, 0.26, 0.09, 0.35));

    iMesh.position.set(-0.38, 0.0, 0.0);
    oMesh.position.set(0.40, 0.0, 0.0);

    io.add(iMesh, oMesh);

    const ioGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 1.0),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06, depthWrite: false })
    );
    ioGlow.position.set(0, 0, -0.10);
    io.add(ioGlow);

    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(0, 0);

    let hover = false;
    let pulse = 0;

    function updatePointerNDC(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointerNDC.x = x * 2 - 1;
      pointerNDC.y = -(y * 2 - 1);
    }

    let tx = 0, ty = 0;
    const handleMouseMove = (e: MouseEvent) => {
      updatePointerNDC(e);
      if (window.innerWidth < 900) return;
      tx = (e.clientX / window.innerWidth - 0.5) * 0.28;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.18;
    };

    const handleClick = () => { pulse = 1.0; };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      hero3D.position.x = mobile ? 0.4 : 1.70;
      hero3D.scale.setScalar(mobile ? 0.65 : 1.0);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;

    function animate() {
      t += 0.010;

      raycaster.setFromCamera(pointerNDC, camera);
      const hit = raycaster.intersectObjects([ringTop, ringMiddle, ringBottom, iMesh, oMesh], true);
      const isHover = hit.length > 0;
      if (isHover !== hover) hover = isHover;

      hero3D.rotation.y += ((tx - hero3D.rotation.y) * 0.06);
      hero3D.rotation.x += ((-ty - hero3D.rotation.x) * 0.06);

      const swing = Math.sin(t * 0.7) * 0.12;

      ringTop.rotation.x = swing;
      ringTop.rotation.z = Math.cos(t * 0.5) * 0.08;

      ringMiddle.rotation.x = swing * 0.8;
      ringMiddle.rotation.z = Math.cos(t * 0.5 + 0.3) * 0.06;

      ringBottom.rotation.x = swing * 0.6;
      ringBottom.rotation.z = Math.cos(t * 0.5 + 0.6) * 0.05;

      chain1.rotation.z = swing * 0.5;
      chain2.rotation.z = swing * 0.4;

      io.rotation.y = Math.sin(t * 0.55) * 0.10;
      io.rotation.x = Math.cos(t * 0.45) * 0.06;

      const targetEm = hover ? 0.55 : 0.40;
      (ringTop.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (targetEm - (ringTop.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ringBottom.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (targetEm - (ringBottom.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ringMiddle.material as THREE.MeshPhysicalMaterial).emissiveIntensity += ((hover ? 0.50 : 0.35) - (ringMiddle.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;

      const ioTarget = hover ? 0.38 : 0.26;
      (iMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (ioTarget - (iMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (oMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (ioTarget - (oMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ioGlow.material as THREE.MeshBasicMaterial).opacity += ((hover ? 0.085 : 0.06) - (ioGlow.material as THREE.MeshBasicMaterial).opacity) * 0.12;

      if (pulse > 0.001) {
        const s = 1 + pulse * 0.08;
        ringTop.scale.setScalar(s);
        ringMiddle.scale.setScalar(s);
        ringBottom.scale.setScalar(s);
        io.scale.setScalar(1.0 + pulse * 0.10);
        pulse *= 0.88;
      } else {
        ringTop.scale.setScalar(1);
        ringMiddle.scale.setScalar(1);
        ringBottom.scale.setScalar(1);
        io.scale.setScalar(1);
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-black"
        style={{ opacity: 0.92 }}
      />
    </div>
  );
};

export default HeroBackground3D;
