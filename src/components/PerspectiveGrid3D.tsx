import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PerspectiveGrid3D: React.FC = () => {
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

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 3.5, 8);
    camera.lookAt(0, 0, -10);

    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const gridColor = new THREE.Color('#a5b4fc');
    const horizonGlowColor = new THREE.Color('#8b5cf6');

    const gridWidth = 40;
    const gridDepth = 60;
    const gridSpacing = 1.5;
    const linesX = Math.floor(gridWidth / gridSpacing);
    const linesZ = Math.floor(gridDepth / gridSpacing);

    function createGridLine(
      start: THREE.Vector3,
      end: THREE.Vector3,
      opacity: number
    ): THREE.Line {
      const points = [];
      const segments = 20;

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = start.x + (end.x - start.x) * t;
        const y = start.y + (end.y - start.y) * t;
        const z = start.z + (end.z - start.z) * t;

        const depth = Math.abs(z + 5) / gridDepth;
        const curve = Math.sin(t * Math.PI) * 0.15 * depth;

        points.push(new THREE.Vector3(x + curve, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: gridColor,
        transparent: true,
        opacity: opacity * 0.25,
      });

      return new THREE.Line(geometry, material);
    }

    for (let i = -linesX / 2; i <= linesX / 2; i++) {
      const x = i * gridSpacing;
      const vanishX = x * 0.3;

      const startZ = 5;
      const endZ = -gridDepth + 5;

      const distFromCenter = Math.abs(i) / (linesX / 2);
      const fadeTop = 1 - distFromCenter * 0.7;
      const opacity = fadeTop;

      if (opacity > 0.05) {
        const line = createGridLine(
          new THREE.Vector3(x, 0, startZ),
          new THREE.Vector3(vanishX, 0, endZ),
          opacity
        );
        gridGroup.add(line);
      }
    }

    for (let i = 0; i <= linesZ; i++) {
      const z = -i * gridSpacing + 5;
      const depth = i / linesZ;
      const vanishScale = 1 - depth * 0.7;

      const fadeDepth = 1 - depth * 0.85;
      const fadeTop = depth < 0.3 ? depth / 0.3 : 1;
      const opacity = fadeDepth * fadeTop;

      if (opacity > 0.05) {
        const halfWidth = (gridWidth / 2) * vanishScale;
        const line = createGridLine(
          new THREE.Vector3(-halfWidth, 0, z),
          new THREE.Vector3(halfWidth, 0, z),
          opacity
        );
        gridGroup.add(line);
      }
    }

    const horizonGeometry = new THREE.PlaneGeometry(gridWidth * 2, 15);
    const horizonMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        color: { value: horizonGlowColor },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec2 vUv;

        void main() {
          float centerDist = length(vUv - vec2(0.5, 0.5));
          float glow = 1.0 - smoothstep(0.0, 0.6, centerDist);
          float verticalFade = smoothstep(0.0, 0.4, vUv.y);
          float finalGlow = glow * verticalFade * 0.12;

          gl_FragColor = vec4(color, finalGlow);
        }
      `
    });

    const horizonGlow = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizonGlow.position.set(0, -0.5, -15);
    horizonGlow.rotation.x = Math.PI / 2;
    scene.add(horizonGlow);

    const gradientGeometry = new THREE.PlaneGeometry(100, 100);
    const gradientMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color('#000000') },
        bottomColor: { value: new THREE.Color('#1e1b4b') }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec2 vUv;

        void main() {
          vec3 color = mix(topColor, bottomColor, smoothstep(0.0, 1.0, vUv.y));
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const gradientPlane = new THREE.Mesh(gradientGeometry, gradientMaterial);
    gradientPlane.position.set(0, 0, -40);
    gradientPlane.renderOrder = -1;
    scene.add(gradientPlane);

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const isMobile = w < 768;
      if (isMobile) {
        camera.position.set(0, 3.5, 10);
        gridGroup.scale.setScalar(0.7);
      } else {
        camera.position.set(0, 3.5, 8);
        gridGroup.scale.setScalar(1);
      }
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let animationId: number;
    let time = 0;

    function animate() {
      time += 0.003;

      gridGroup.position.z = Math.sin(time * 0.5) * 0.08;
      gridGroup.rotation.y = Math.sin(time * 0.3) * 0.01;

      horizonMaterial.uniforms.time.value = time;

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
    <div className="absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/30 to-black" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default PerspectiveGrid3D;
