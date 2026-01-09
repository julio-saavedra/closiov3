import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const DealBotRobot3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
    camera.position.set(0.0, 0.65, 8.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.06).texture;

    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(4, 6, 7);
    key.castShadow = true;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 1.2);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.5, 25);
    rim.position.set(-2.4, 2.3, -2.6);
    scene.add(rim);

    const topLight = new THREE.DirectionalLight(0xffffff, 0.9);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    const whiteMetal = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F5F5F7'),
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.8,
      reflectivity: 0.9,
    });

    const whiteMetalBright = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FAFAFA'),
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      envMapIntensity: 2.0,
      reflectivity: 0.95,
    });

    const accentDark = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1A2232'),
      metalness: 0.95,
      roughness: 0.25,
      envMapIntensity: 1.4,
    });

    const tealMetal = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1A9B9B'),
      metalness: 0.88,
      roughness: 0.2,
      clearcoat: 0.85,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.6,
      reflectivity: 0.88,
    });

    const eyeGlowL = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#6ad4f2'),
      emissiveIntensity: 1.25,
      transparent: true,
      opacity: 0.28,
    });

    const eyeGlowR = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#FF64D8'),
      emissiveIntensity: 1.25,
      transparent: true,
      opacity: 0.28,
    });

    const robot = new THREE.Group();
    scene.add(robot);
    robot.position.set(-6, 0.0, 0);
    robot.rotation.y = 0.3;

    const bodyGeo = new THREE.BoxGeometry(2.2, 2.6, 1.25);
    const body = new THREE.Mesh(bodyGeo, whiteMetalBright);
    body.position.set(0, 0.85, 0);
    robot.add(body);

    const panelGeo = new THREE.BoxGeometry(1.8, 2.15, 1.05);
    const panel = new THREE.Mesh(panelGeo, accentDark);
    panel.position.copy(body.position);
    panel.position.z += 0.08;
    robot.add(panel);

    const headGeo = new THREE.SphereGeometry(0.78, 48, 48);
    const head = new THREE.Mesh(headGeo, whiteMetalBright);
    head.position.set(0, 2.55, 0.06);
    robot.add(head);

    const visorGeo = new THREE.SphereGeometry(0.64, 48, 48, 0, Math.PI * 2, 0.12, Math.PI * 0.75);
    const visor = new THREE.Mesh(
      visorGeo,
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#0B0E14'),
        metalness: 0.2,
        roughness: 0.18,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.3,
        transparent: true,
        opacity: 0.95,
      })
    );
    visor.position.copy(head.position);
    visor.position.z += 0.13;
    robot.add(visor);

    const eyeGeo = new THREE.SphereGeometry(0.085, 24, 24);
    const eyeL = new THREE.Mesh(eyeGeo, eyeGlowL);
    const eyeR = new THREE.Mesh(eyeGeo, eyeGlowR);
    eyeL.position.set(-0.23, 2.6, 0.68);
    eyeR.position.set(0.23, 2.6, 0.68);
    robot.add(eyeL, eyeR);

    const shoulderGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const shoulderL = new THREE.Mesh(shoulderGeo, whiteMetalBright);
    const shoulderR = new THREE.Mesh(shoulderGeo, whiteMetalBright);
    shoulderL.position.set(-1.1, 1.55, 0.02);
    shoulderR.position.set(1.1, 1.55, 0.02);
    robot.add(shoulderL, shoulderR);

    const armGeo = new THREE.CylinderGeometry(0.18, 0.22, 1.7, 32);
    const armL = new THREE.Mesh(armGeo, whiteMetal);
    const armR = new THREE.Mesh(armGeo, whiteMetal);
    armL.position.set(-1.38, 1.05, 0.02);
    armR.position.set(1.38, 1.05, 0.02);
    armL.rotation.z = 0.26;
    armR.rotation.z = -0.26;
    robot.add(armL, armR);

    const handGeo = new THREE.SphereGeometry(0.29, 32, 32);
    const handL = new THREE.Mesh(handGeo, whiteMetal);
    const handR = new THREE.Mesh(handGeo, whiteMetal);
    handL.position.set(-1.7, 0.35, 0.12);
    handR.position.set(1.7, 0.35, 0.12);
    robot.add(handL, handR);

    const kneeGeo = new THREE.SphereGeometry(0.28, 32, 32);
    const kneeL = new THREE.Mesh(kneeGeo, whiteMetalBright);
    const kneeR = new THREE.Mesh(kneeGeo, whiteMetalBright);
    kneeL.position.set(-0.55, -0.15, 0.02);
    kneeR.position.set(0.55, -0.15, 0.02);
    robot.add(kneeL, kneeR);

    const legGeo = new THREE.CylinderGeometry(0.25, 0.3, 1.35, 32);
    const legL = new THREE.Mesh(legGeo, whiteMetal);
    const legR = new THREE.Mesh(legGeo, whiteMetal);
    legL.position.set(-0.55, -0.65, 0.02);
    legR.position.set(0.55, -0.65, 0.02);
    robot.add(legL, legR);

    const footGeo = new THREE.BoxGeometry(0.78, 0.25, 1.0);
    const footL = new THREE.Mesh(footGeo, whiteMetal);
    const footR = new THREE.Mesh(footGeo, whiteMetal);
    footL.position.set(-0.55, -1.38, 0.28);
    footR.position.set(0.55, -1.38, 0.28);
    robot.add(footL, footR);

    const emblem = new THREE.Group();
    emblem.position.set(0.0, 0.9, 0.73);
    robot.add(emblem);

    const createItalicHollowI = () => {
      const width = 0.56;
      const height = 0.9;
      const stroke = 0.13;
      const slant = 0.25;
      const depth = 0.16;

      const outer = new THREE.Shape();
      outer.moveTo(-width / 2, -height / 2);
      outer.lineTo(width / 2, -height / 2);
      outer.lineTo(width / 2 + slant, height / 2);
      outer.lineTo(-width / 2 + slant, height / 2);
      outer.lineTo(-width / 2, -height / 2);

      const iw = width - stroke * 2;
      const ih = height - stroke * 2;
      const innerSlantOffset = slant * 0.9;

      const inner = new THREE.Path();
      inner.moveTo(-iw / 2, -ih / 2);
      inner.lineTo(iw / 2, -ih / 2);
      inner.lineTo(iw / 2 + innerSlantOffset, ih / 2);
      inner.lineTo(-iw / 2 + innerSlantOffset, ih / 2);
      inner.lineTo(-iw / 2, -ih / 2);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 4,
      });
      g.center();
      return g;
    };

    const createHollowO = () => {
      const outerRadius = 0.45;
      const innerRadius = 0.30;
      const depth = 0.16;

      const outerShape = new THREE.Shape();
      const segments = 128;

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * outerRadius;
        const y = Math.sin(angle) * outerRadius;
        if (i === 0) {
          outerShape.moveTo(x, y);
        } else {
          outerShape.lineTo(x, y);
        }
      }
      outerShape.closePath();

      const innerHole = new THREE.Path();
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * innerRadius;
        const y = Math.sin(angle) * innerRadius;
        if (i === 0) {
          innerHole.moveTo(x, y);
        } else {
          innerHole.lineTo(x, y);
        }
      }
      innerHole.closePath();
      outerShape.holes.push(innerHole);

      const g = new THREE.ExtrudeGeometry(outerShape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 4,
      });
      g.center();
      return g;
    };

    const iMesh = new THREE.Mesh(createItalicHollowI(), tealMetal);
    const oMesh = new THREE.Mesh(createHollowO(), whiteMetalBright);

    iMesh.position.set(-0.5, 0.0, 0.0);
    oMesh.position.set(0.5, 0.0, 0.0);

    emblem.add(iMesh, oMesh);

    const fit = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const s = Math.min(w, h);
      robot.scale.setScalar(s < 340 ? 0.88 : 1.0);
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let animationId: number;
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let hasAnimatedIn = false;

    const updateScrollProgress = () => {
      const dealBotSection = document.getElementById('deal-bot');
      if (!dealBotSection) return;

      const rect = dealBotSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const isInView = sectionTop < viewportHeight * 0.8 && sectionTop + sectionHeight > 0;

      if (isInView && !hasAnimatedIn) {
        targetScrollProgress = 1;
        hasAnimatedIn = true;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    const animate = () => {
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;

      const slideInX = -6 + scrollProgress * 6;
      robot.position.x = slideInX;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block', background: 'transparent' }}
    />
  );
};

export default DealBotRobot3D;
