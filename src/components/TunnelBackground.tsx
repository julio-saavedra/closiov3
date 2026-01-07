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
    scene.fog = new THREE.Fog(0x000000, 8, 35);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 0.5);
    camera.lookAt(0, 0, -30);

    // Lighting for realistic depth
    const ambientLight = new THREE.AmbientLight(0x202020, 0.5);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.6);
    frontLight.position.set(0, 3, 2);
    frontLight.castShadow = true;
    scene.add(frontLight);

    // Back light from the opening
    const backLight = new THREE.PointLight(0xffffff, 1.5, 50);
    backLight.position.set(0, 0, -30);
    scene.add(backLight);

    // ===== STATIC GRID TUNNEL =====
    const TUNNEL = {
      slices: 40,
      spacing: 0.8,
      size: 8,
      divisions: 8,
    };

    function makeGridSlice(size: number, divisions: number, depth: number) {
      // Gray grid lines with distance-based coloring
      const centerColor = depth < 30 ? 0x888888 : 0x666666;
      const lineColor = depth < 30 ? 0x555555 : 0x444444;

      const grid = new THREE.GridHelper(size, divisions, centerColor, lineColor);
      grid.material.transparent = true;

      // Opacity fades with depth for realistic perspective
      const opacity = Math.max(0.2, 0.75 - depth * 0.015);
      grid.material.opacity = opacity;
      grid.material.depthWrite = true;
      grid.rotation.x = Math.PI / 2;

      return grid;
    }

    // Group for tunnel
    const tunnel = new THREE.Group();
    scene.add(tunnel);

    for (let i = 0; i < TUNNEL.slices; i++) {
      const depth = i;
      const g = makeGridSlice(TUNNEL.size, TUNNEL.divisions, depth);

      // Position slices going back into the distance
      g.position.z = -i * TUNNEL.spacing;

      tunnel.add(g);
    }

    // Add four tunnel walls with subtle grid texture
    const wallSegments = 8;
    const wallMat = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: true,
    });

    const wallHeight = TUNNEL.slices * TUNNEL.spacing;
    const wallGeo = new THREE.PlaneGeometry(wallHeight, TUNNEL.size, wallSegments, 1);

    // Left wall
    const leftWall = new THREE.Mesh(wallGeo, wallMat.clone());
    leftWall.position.set(-TUNNEL.size / 2, 0, -wallHeight / 2);
    leftWall.rotation.y = Math.PI / 2;
    tunnel.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(wallGeo, wallMat.clone());
    rightWall.position.set(TUNNEL.size / 2, 0, -wallHeight / 2);
    rightWall.rotation.y = -Math.PI / 2;
    tunnel.add(rightWall);

    // Top wall
    const topWall = new THREE.Mesh(wallGeo, wallMat.clone());
    topWall.position.set(0, TUNNEL.size / 2, -wallHeight / 2);
    topWall.rotation.x = Math.PI / 2;
    tunnel.add(topWall);

    // Bottom wall
    const bottomWall = new THREE.Mesh(wallGeo, wallMat.clone());
    bottomWall.position.set(0, -TUNNEL.size / 2, -wallHeight / 2);
    bottomWall.rotation.x = -Math.PI / 2;
    tunnel.add(bottomWall);

    // Add edge lines for the square tunnel structure
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x999999,
      transparent: true,
      opacity: 0.5
    });

    const edgePoints = [
      new THREE.Vector3(-TUNNEL.size / 2, -TUNNEL.size / 2, 0),
      new THREE.Vector3(-TUNNEL.size / 2, -TUNNEL.size / 2, -wallHeight),
    ];

    const edgeGeometry = new THREE.BufferGeometry().setFromPoints(edgePoints);

    // Four corner edges
    const edges = [
      [-TUNNEL.size / 2, -TUNNEL.size / 2],
      [-TUNNEL.size / 2, TUNNEL.size / 2],
      [TUNNEL.size / 2, TUNNEL.size / 2],
      [TUNNEL.size / 2, -TUNNEL.size / 2],
    ];

    edges.forEach(([x, y]) => {
      const points = [
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x, y, -wallHeight),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, edgeMaterial);
      tunnel.add(line);
    });

    // LARGE SQUARE OPENING AT THE END - frames content area
    const openingSize = TUNNEL.size * 3.5; // Much larger to frame content
    const openingGeo = new THREE.PlaneGeometry(openingSize, openingSize);
    const openingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const opening = new THREE.Mesh(openingGeo, openingMat);
    const endPosition = -(TUNNEL.slices * TUNNEL.spacing + 0.5);
    opening.position.set(0, 0, endPosition);
    tunnel.add(opening);

    // Subtle glow around the opening
    const glowSize1 = openingSize * 1.05;
    const glowGeo1 = new THREE.PlaneGeometry(glowSize1, glowSize1);
    const glowMat1 = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow1 = new THREE.Mesh(glowGeo1, glowMat1);
    glow1.position.set(0, 0, endPosition + 0.2);
    tunnel.add(glow1);

    // Add square frame outline for the opening (more visible)
    const framePoints = [
      new THREE.Vector3(-openingSize / 2, -openingSize / 2, endPosition - 0.1),
      new THREE.Vector3(openingSize / 2, -openingSize / 2, endPosition - 0.1),
      new THREE.Vector3(openingSize / 2, openingSize / 2, endPosition - 0.1),
      new THREE.Vector3(-openingSize / 2, openingSize / 2, endPosition - 0.1),
      new THREE.Vector3(-openingSize / 2, -openingSize / 2, endPosition - 0.1),
    ];

    const frameGeometry = new THREE.BufferGeometry().setFromPoints(framePoints);
    const frameMaterial = new THREE.LineBasicMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.3,
      linewidth: 2
    });
    const frame = new THREE.Line(frameGeometry, frameMaterial);
    tunnel.add(frame);

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
            radial-gradient(65% 60% at 50% 50%,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0.6) 100%)
          `,
        }}
      />
    </>
  );
};

export default TunnelBackground;
