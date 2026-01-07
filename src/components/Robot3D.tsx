import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const Robot3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
    camera.position.set(0.0, 1.15, 7.0);

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

    const whiteGloss = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      metalness: 0.0,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      transmission: 0.0,
      thickness: 0.3,
      ior: 1.5,
      envMapIntensity: 1.6,
      emissive: new THREE.Color('#FFFFFF'),
      emissiveIntensity: 0.15,
    });

    const eyeGlowL = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#35E7E0'),
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
    robot.position.set(0, 0.0, 0);
    robot.rotation.y = -0.2;

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
      const width = 0.38;
      const height = 1.05;
      const stroke = 0.11;
      const slant = 0.3;
      const depth = 0.14;

      const outer = new THREE.Shape();
      outer.moveTo(-width / 2, -height / 2);
      outer.lineTo(width / 2, -height / 2);
      outer.lineTo(width / 2 + slant, height / 2);
      outer.lineTo(-width / 2 + slant, height / 2);
      outer.lineTo(-width / 2, -height / 2);

      const iw = Math.max(0.02, width - stroke * 2);
      const ih = Math.max(0.02, height - stroke * 2);
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
        bevelThickness: 0.04,
        bevelSize: 0.04,
        bevelSegments: 3,
      });
      g.center();
      return g;
    };

    const createSolidO = () => {
      const radius = 0.4;
      const depth = 0.14;

      const shape = new THREE.Shape();
      shape.absellipse(0, 0, radius, radius, 0, Math.PI * 2, false, 0);

      const g = new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.04,
        bevelSegments: 3,
      });
      g.center();
      return g;
    };

    const iMesh = new THREE.Mesh(createItalicHollowI(), whiteGloss);
    const oMesh = new THREE.Mesh(createSolidO(), whiteGloss);

    iMesh.position.set(-0.38, 0.0, 0.0);
    oMesh.position.set(0.4, 0.0, 0.0);

    emblem.add(iMesh, oMesh);

    const backPlate = new THREE.Mesh(
      new THREE.PlaneGeometry(1.65, 1.15),
      new THREE.MeshBasicMaterial({
        color: 0x35E7E0,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      })
    );
    backPlate.position.set(0, 0, -0.12);
    emblem.add(backPlate);

    const glowRing = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.52, 64),
      new THREE.MeshBasicMaterial({
        color: 0x35E7E0,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    glowRing.position.set(0.4, 0, -0.1);
    emblem.add(glowRing);

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

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(0, 0);
    let hover = false;
    let pulse = 0;

    const updatePointer = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointer.x = x * 2 - 1;
      pointer.y = -(y * 2 - 1);
    };

    window.addEventListener('mousemove', updatePointer, { passive: true });
    window.addEventListener('click', () => { pulse = 1.0; }, { passive: true });

    let tx = 0;
    let ty = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      const inside = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      if (!inside) return;

      const x = (cx - rect.left) / rect.width - 0.5;
      const y = (cy - rect.top) / rect.height - 0.5;
      tx = x * 0.55;
      ty = y * 0.42;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;
    let animationId: number;

    const animate = () => {
      t += 0.01;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects([iMesh, oMesh, head, visor], true);
      const isHover = hits.length > 0;
      if (isHover !== hover) hover = isHover;

      robot.position.y = Math.sin(t * 0.9) * 0.06;
      head.rotation.y = Math.sin(t * 0.6) * 0.1;

      robot.rotation.y += (-0.2 + tx - robot.rotation.y) * 0.08;
      robot.rotation.x += (-ty - robot.rotation.x) * 0.08;

      const targetEm = hover ? 0.2 : 0.1;
      iMesh.material.emissiveIntensity += (targetEm - iMesh.material.emissiveIntensity) * 0.12;
      oMesh.material.emissiveIntensity += (targetEm - oMesh.material.emissiveIntensity) * 0.12;

      eyeL.material.opacity += ((hover ? 0.38 : 0.28) - eyeL.material.opacity) * 0.12;
      eyeR.material.opacity += ((hover ? 0.38 : 0.28) - eyeR.material.opacity) * 0.12;

      if (pulse > 0.001) {
        const s = 1 + pulse * 0.06;
        emblem.scale.set(s, s, 1);
        pulse *= 0.88;
      } else {
        emblem.scale.set(1, 1, 1);
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block', background: '#000' }}
    />
  );
};

export default Robot3D;
