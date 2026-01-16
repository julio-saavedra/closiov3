import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

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
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 90);
    camera.position.set(0.0, 0.2, 7.5);

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

    const accentLight1 = new THREE.PointLight(0x8b45d6, 1.5, 15);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x8b45d6, 1.2, 15);
    accentLight2.position.set(-3, -1, 2);
    scene.add(accentLight2);

    const TEAL = new THREE.Color("#6ad4f2");
    const PURPLE = new THREE.Color("#8b45d6");
    const WHITE = new THREE.Color("#F5F5F5");

    function solidMaterial(baseColor: THREE.Color, emissiveIntensity = 0.2, rough = 0.35) {
      return new THREE.MeshPhysicalMaterial({
        color: baseColor,
        metalness: 0.02,
        roughness: rough,
        transmission: 0,
        transparent: false,
        clearcoat: 0.15,
        clearcoatRoughness: 0.4,
        envMapIntensity: 0.6,
        specularIntensity: 0.3,
        emissive: baseColor,
        emissiveIntensity
      });
    }

    const hero3D = new THREE.Group();
    scene.add(hero3D);
    hero3D.position.set(2.2, 0.0, 0.0);

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
        bevelThickness: 0.06,
        bevelSize: 0.06,
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
        bevelThickness: 0.06,
        bevelSize: 0.06,
        bevelSegments: 4,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    function createInnerShadowRing({ outerRadius = 0.65, ringThickness = 0.06, depth = 0.10, segments = 128 } = {}) {
      const innerRadius = outerRadius - ringThickness;
      const shadowThickness = ringThickness * 0.55;

      const outer = new THREE.Shape();
      outer.absellipse(0, 0, innerRadius + shadowThickness, innerRadius + shadowThickness, 0, Math.PI * 2, false, 0);

      const inner = new THREE.Path();
      inner.absellipse(0, 0, innerRadius - 0.02, innerRadius - 0.02, 0, Math.PI * 2, true, 0);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth: depth * 0.8,
        bevelEnabled: false,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    function createOuterShadowRing({ outerRadius = 0.65, ringThickness = 0.06, depth = 0.10, segments = 128 } = {}) {
      const shadowThickness = ringThickness * 0.45;

      const outer = new THREE.Shape();
      outer.absellipse(0, 0, outerRadius + 0.03, outerRadius + 0.03, 0, Math.PI * 2, false, 0);

      const inner = new THREE.Path();
      inner.absellipse(0, 0, outerRadius - shadowThickness, outerRadius - shadowThickness, 0, Math.PI * 2, true, 0);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth: depth * 0.7,
        bevelEnabled: false,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    function createBackShadowDisc({ outerRadius = 0.65, ringThickness = 0.06, segments = 128 } = {}) {
      const innerRadius = outerRadius - ringThickness;

      const outer = new THREE.Shape();
      outer.absellipse(0, 0, outerRadius + 0.08, outerRadius + 0.08, 0, Math.PI * 2, false, 0);

      const inner = new THREE.Path();
      inner.absellipse(0, 0, innerRadius - 0.05, innerRadius - 0.05, 0, Math.PI * 2, true, 0);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth: 0.02,
        bevelEnabled: false,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    function createEdgeShadowRing({ outerRadius = 0.65, ringThickness = 0.06, depth = 0.10, segments = 128 } = {}) {
      const outer = new THREE.Shape();
      outer.absellipse(0, 0, outerRadius + 0.02, outerRadius + 0.02, 0, Math.PI * 2, false, 0);

      const inner = new THREE.Path();
      inner.absellipse(0, 0, outerRadius - 0.01, outerRadius - 0.01, 0, Math.PI * 2, true, 0);

      outer.holes.push(inner);

      const g = new THREE.ExtrudeGeometry(outer, {
        depth: depth + 0.08,
        bevelEnabled: false,
        curveSegments: segments
      });
      g.center();
      return g;
    }

    const io = new THREE.Group();
    io.position.set(0, 0.0, 0.0);
    hero3D.add(io);

    const iMesh = new THREE.Mesh(createItalicHollowI({ width: 0.6, height: 1.5, stroke: 0.16, depth: 0.25 }), solidMaterial(PURPLE, 0.18, 0.55));
    const oMesh = new THREE.Mesh(createHollowO({ outerRadius: 0.75, ringThickness: 0.30, depth: 0.25, segments: 256 }), solidMaterial(WHITE, 0.12, 0.45));

    const shadowMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#000000"),
      metalness: 0.0,
      roughness: 1.0,
      transparent: true,
      opacity: 0.95,
      envMapIntensity: 0.0,
    });

    const innerShadowMesh = new THREE.Mesh(
      createInnerShadowRing({ outerRadius: 0.75, ringThickness: 0.30, depth: 0.25, segments: 256 }),
      shadowMaterial
    );

    const outerShadowMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#000000"),
      metalness: 0.0,
      roughness: 1.0,
      transparent: true,
      opacity: 0.92,
      envMapIntensity: 0.0,
    });

    const outerShadowMesh = new THREE.Mesh(
      createOuterShadowRing({ outerRadius: 0.75, ringThickness: 0.30, depth: 0.25, segments: 256 }),
      outerShadowMaterial
    );

    const backShadowMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#000000"),
      metalness: 0.0,
      roughness: 1.0,
      transparent: true,
      opacity: 0.82,
      envMapIntensity: 0.0,
    });

    const backShadowMesh = new THREE.Mesh(
      createBackShadowDisc({ outerRadius: 0.75, ringThickness: 0.30, segments: 256 }),
      backShadowMaterial
    );

    const edgeShadowMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#000000"),
      metalness: 0.0,
      roughness: 1.0,
      transparent: true,
      opacity: 0.78,
      envMapIntensity: 0.0,
    });

    const edgeShadowMesh = new THREE.Mesh(
      createEdgeShadowRing({ outerRadius: 0.75, ringThickness: 0.30, depth: 0.25, segments: 256 }),
      edgeShadowMaterial
    );

    iMesh.position.set(-0.60, 0.0, 0.0);
    oMesh.position.set(0.62, 0.0, 0.0);
    innerShadowMesh.position.set(0.62, 0.0, 0.04);
    outerShadowMesh.position.set(0.62, 0.0, -0.02);
    backShadowMesh.position.set(0.62, 0.0, -0.14);
    edgeShadowMesh.position.set(0.62, 0.0, -0.04);

    io.add(iMesh, oMesh, innerShadowMesh, outerShadowMesh, backShadowMesh, edgeShadowMesh);

    io.rotation.x = 0.15;

    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(0, 0);

    let hover = false;

    function updatePointerNDC(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointerNDC.x = x * 2 - 1;
      pointerNDC.y = -(y * 2 - 1);
    }

    let tx = 0, ty = 0;
    let targetIORotationY = -0.18;
    let targetIORotationX = 0.15;
    const handleMouseMove = (e: MouseEvent) => {
      updatePointerNDC(e);
      if (window.innerWidth < 900) return;
      tx = (e.clientX / window.innerWidth - 0.5) * 0.2;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.15;
      targetIORotationY = -0.18 - (e.clientX / window.innerWidth - 0.5) * 0.5;
      targetIORotationX = 0.15 + (e.clientY / window.innerHeight - 0.5) * 0.35;
    };

    const handleClick = () => {
      gsap.to(io.scale, {
        x: 1.15,
        y: 1.15,
        z: 1.15,
        duration: 0.5,
        ease: "back.out(3)",
        yoyo: true,
        repeat: 1
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      hero3D.position.x = mobile ? 0 : 2.2;
      hero3D.scale.setScalar(mobile ? 0.9 : 1.65);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    gsap.fromTo(io.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.2,
        ease: "elastic.out(1, 0.7)",
        delay: 0.5
      }
    );

    gsap.fromTo(io.rotation,
      { y: Math.PI * 0.5 },
      {
        y: -0.18,
        duration: 2,
        ease: "power3.out",
        delay: 0.5
      }
    );

    gsap.fromTo(camera.position,
      { z: 10 },
      {
        z: 7.5,
        duration: 2.2,
        ease: "power2.out",
        delay: 0.3
      }
    );

    gsap.to(accentLight1.position, {
      x: -3,
      y: -1,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

    gsap.to(accentLight2.position, {
      x: 3,
      y: 1,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

    let t = 0;
    let animationId: number;

    function animate() {
      t += 0.010;

      raycaster.setFromCamera(pointerNDC, camera);
      const hit = raycaster.intersectObjects([iMesh, oMesh], true);
      const isHover = hit.length > 0;

      if (isHover !== hover) {
        hover = isHover;

        gsap.to(iMesh.material, {
          emissiveIntensity: hover ? 0.28 : 0.18,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(oMesh.material, {
          emissiveIntensity: hover ? 0.18 : 0.12,
          duration: 0.4,
          ease: "power2.out"
        });
      }

      const targetRotY = tx * 0.4;
      const targetRotX = -ty * 0.25;
      hero3D.rotation.y += (targetRotY - hero3D.rotation.y) * 0.06;
      hero3D.rotation.x += (targetRotX - hero3D.rotation.x) * 0.06;

      io.rotation.y += (targetIORotationY - io.rotation.y) * 0.08;
      io.rotation.x += (targetIORotationX - io.rotation.x) * 0.08;

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
    <div className="absolute inset-0 z-[2]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-auto"
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default HeroBackground3D;
