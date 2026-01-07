import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TunnelBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 30);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 0.5);
    camera.lookAt(0, 0, -30);

    // Lighting for realistic depth with dramatic shadows
    const ambientLight = new THREE.AmbientLight(0x202020, 0.5);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.6);
    frontLight.position.set(0, 3, 2);
    frontLight.castShadow = true;
    scene.add(frontLight);

    // Back light from the opening - brightened for visibility
    const backLight = new THREE.PointLight(0xffffff, 1.5, 50);
    backLight.position.set(0, 0, -30);
    scene.add(backLight);

    // ===== INTERLOCKING CHAIN RINGS =====
    const chainGroup = new THREE.Group();
    scene.add(chainGroup);

    // Ring specifications
    const largeRadius = 8;
    const smallRadius = 5;
    const tubeThickness = 0.4;
    const segments = 64;

    // Create ring material function
    function createRingMaterial(color: number, opacity = 0.9) {
      return new THREE.MeshStandardMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        metalness: 0.7,
        roughness: 0.3,
        emissive: color,
        emissiveIntensity: 0.2,
        side: THREE.DoubleSide,
      });
    }

    // TOP RING - Large, White (rotated horizontally)
    const topRingGeo = new THREE.TorusGeometry(largeRadius, tubeThickness, 32, segments);
    const topRingMat = createRingMaterial(0xffffff, 1.0);
    const topRing = new THREE.Mesh(topRingGeo, topRingMat);
    topRing.position.set(0, 8, -15);
    topRing.rotation.x = Math.PI / 2;
    chainGroup.add(topRing);

    // MIDDLE RING - Smaller, Gray (rotated vertically to interlock)
    const middleRingGeo = new THREE.TorusGeometry(smallRadius, tubeThickness * 0.8, 32, segments);
    const middleRingMat = createRingMaterial(0x999999, 0.95);
    const middleRing = new THREE.Mesh(middleRingGeo, middleRingMat);
    middleRing.position.set(0, 0, -15);
    middleRing.rotation.y = Math.PI / 2;
    chainGroup.add(middleRing);

    // BOTTOM RING - Large, Light Gray (rotated horizontally)
    const bottomRingGeo = new THREE.TorusGeometry(largeRadius, tubeThickness, 32, segments);
    const bottomRingMat = createRingMaterial(0xcccccc, 0.95);
    const bottomRing = new THREE.Mesh(bottomRingGeo, bottomRingMat);
    bottomRing.position.set(0, -8, -15);
    bottomRing.rotation.x = Math.PI / 2;
    chainGroup.add(bottomRing);

    function resize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    // Render once (static, no animation)
    renderer.render(scene, camera);

    // Re-render on window resize to maintain quality
    window.addEventListener('resize', () => {
      renderer.render(scene, camera);
    });

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(60% 55% at 50% 50%,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0.5) 80%,
              rgba(0,0,0,0.85) 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.9) 6%,
              rgba(0,0,0,0.4) 15%,
              rgba(0,0,0,0) 25%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg,
              rgba(0,0,0,0.6) 0%,
              rgba(0,0,0,0.2) 15%,
              rgba(0,0,0,0) 30%,
              rgba(0,0,0,0) 70%,
              rgba(0,0,0,0.2) 85%,
              rgba(0,0,0,0.6) 100%)
          `,
        }}
      />
    </>
  );
};

export default TunnelBackground;
