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
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 90);
    camera.position.set(0.0, 0.35, 7.8);

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
    const PINK = new THREE.Color("#FF64D8");
    const WHITE = new THREE.Color("#FFFFFF");
    const GRAY = new THREE.Color("#B7BCC8");

    function glassMaterial(tint: THREE.Color, emissiveIntensity = 0.20, rough = 0.10, thickness = 0.7) {
      return new THREE.MeshPhysicalMaterial({
        color: tint.clone().lerp(WHITE, 0.58),
        metalness: 0.0,
        roughness: rough,
        transmission: 1.0,
        thickness,
        ior: 1.5,
        transparent: true,
        opacity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.45,
        specularIntensity: 1.0,
        emissive: tint.clone().lerp(WHITE, 0.15),
        emissiveIntensity
      });
    }

    const glowPlane = (color: number, opacity: number) =>
      new THREE.Mesh(
        new THREE.PlaneGeometry(10, 6),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false })
      );

    const hero3D = new THREE.Group();
    scene.add(hero3D);
    hero3D.position.set(1.7, 0.0, 0.0);

    const coreGeo = new THREE.IcosahedronGeometry(1.2, 3);
    const coreMat = glassMaterial(GRAY, 0.10, 0.12, 0.9);
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, 0.35, 0);
    hero3D.add(core);

    const energyGeo = new THREE.SphereGeometry(0.62, 48, 48);
    const energyMat = new THREE.MeshStandardMaterial({
      color: WHITE,
      emissive: TEAL.clone().lerp(PINK, 0.38),
      emissiveIntensity: 1.1,
      transparent: true,
      opacity: 0.22
    });
    const energy = new THREE.Mesh(energyGeo, energyMat);
    energy.position.copy(core.position);
    hero3D.add(energy);

    const ringGeo = new THREE.TorusGeometry(1.9, 0.14, 56, 260);

    const ringA = new THREE.Mesh(ringGeo, glassMaterial(TEAL, 0.22, 0.08, 0.6));
    ringA.rotation.set(0.68, 0.25, 0.10);
    ringA.position.copy(core.position);
    hero3D.add(ringA);

    const ringB = new THREE.Mesh(ringGeo, glassMaterial(PINK, 0.18, 0.09, 0.55));
    ringB.scale.setScalar(0.90);
    ringB.rotation.set(-0.38, 0.92, -0.18);
    ringB.position.copy(core.position);
    ringB.position.z -= 0.10;
    hero3D.add(ringB);

    const ringC = new THREE.Mesh(ringGeo, glassMaterial(WHITE, 0.12, 0.10, 0.50));
    ringC.scale.setScalar(1.08);
    ringC.rotation.set(0.18, -0.55, 0.58);
    ringC.position.copy(core.position);
    ringC.position.z -= 0.35;
    hero3D.add(ringC);

    const dots = new THREE.Group();
    hero3D.add(dots);

    const dotGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const dotMats = [
      glassMaterial(TEAL, 0.15, 0.06, 0.25),
      glassMaterial(PINK, 0.12, 0.06, 0.25),
      glassMaterial(GRAY, 0.07, 0.08, 0.25),
    ];

    const DOT_COUNT = 120;
    for (let i = 0; i < DOT_COUNT; i++) {
      const dot = new THREE.Mesh(dotGeo, dotMats[i % dotMats.length]);

      const r = 2.35 + Math.random() * 0.55;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      dot.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi) + 0.35,
        r * Math.sin(phi) * Math.sin(theta)
      );

      dot.userData.phase = Math.random() * Math.PI * 2;
      dot.userData.speed = 0.5 + Math.random() * 1.1;
      dots.add(dot);
    }

    const hazeTeal = glowPlane(0xffffff, 0.05);
    hazeTeal.position.set(0.2, 0.4, -3.0);
    hero3D.add(hazeTeal);

    const hazePink = glowPlane(0xffffff, 0.04);
    hazePink.position.set(-0.1, 0.8, -3.2);
    hero3D.add(hazePink);

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
    io.position.copy(core.position);
    io.position.z += 0.12;
    hero3D.add(io);

    const iMesh = new THREE.Mesh(createItalicHollowI(), glassMaterial(TEAL, 0.30, 0.08, 0.35));
    const oMesh = new THREE.Mesh(createSolidO(), glassMaterial(PINK, 0.26, 0.09, 0.35));

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
      const hit = raycaster.intersectObjects([core, ringA, ringB, ringC, iMesh, oMesh], true);
      const isHover = hit.length > 0;
      if (isHover !== hover) hover = isHover;

      hero3D.rotation.y += ((tx - hero3D.rotation.y) * 0.06);
      hero3D.rotation.x += ((-ty - hero3D.rotation.x) * 0.06);

      hero3D.position.y = Math.sin(t * 0.9) * 0.08;

      core.rotation.y += 0.004;
      core.rotation.x += 0.002;

      ringA.rotation.z += 0.0032;
      ringB.rotation.y += 0.0024;
      ringC.rotation.x += 0.0019;

      const wave = 1.0 + Math.sin(t * 1.6) * 0.035;
      energy.scale.setScalar(wave);
      (energy.material as THREE.MeshStandardMaterial).opacity = 0.18 + (Math.sin(t * 1.8) * 0.05 + 0.05);

      dots.children.forEach((d, idx) => {
        const ph = d.userData.phase + t * 0.6 * d.userData.speed;
        d.position.x += Math.sin(ph + idx) * 0.0006;
        d.position.z += Math.cos(ph + idx) * 0.0006;
        ((d as THREE.Mesh).material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.12 + (Math.sin(ph * 1.7) * 0.05 + 0.05);
      });

      io.rotation.y = Math.sin(t * 0.55) * 0.10;
      io.rotation.x = Math.cos(t * 0.45) * 0.06;

      const targetEm = hover ? 0.40 : 0.20;
      (core.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (targetEm - (core.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ringA.material as THREE.MeshPhysicalMaterial).emissiveIntensity += ((hover ? 0.34 : 0.22) - (ringA.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ringB.material as THREE.MeshPhysicalMaterial).emissiveIntensity += ((hover ? 0.28 : 0.18) - (ringB.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ringC.material as THREE.MeshPhysicalMaterial).emissiveIntensity += ((hover ? 0.20 : 0.12) - (ringC.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;

      const ioTarget = hover ? 0.38 : 0.26;
      (iMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (ioTarget - (iMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (oMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity += (ioTarget - (oMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity) * 0.10;
      (ioGlow.material as THREE.MeshBasicMaterial).opacity += ((hover ? 0.085 : 0.06) - (ioGlow.material as THREE.MeshBasicMaterial).opacity) * 0.12;

      if (pulse > 0.001) {
        const s = 1 + pulse * 0.08;
        core.scale.setScalar(s);
        ringA.scale.setScalar(1.0 * s);
        ringB.scale.setScalar(0.90 * s);
        ringC.scale.setScalar(1.08 * s);
        io.scale.setScalar(1.0 + pulse * 0.10);
        pulse *= 0.88;
      } else {
        core.scale.setScalar(1);
        ringA.scale.setScalar(1);
        ringB.scale.setScalar(0.90);
        ringC.scale.setScalar(1.08);
        io.scale.setScalar(1);
      }

      hazeTeal.position.x = 0.2 + Math.sin(t * 0.35) * 0.08;
      hazePink.position.y = 0.8 + Math.cos(t * 0.28) * 0.06;

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
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.92 }}
      />
    </div>
  );
};

export default HeroBackground3D;
