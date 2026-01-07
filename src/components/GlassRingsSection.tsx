import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const GlassRingsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 0, 9);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    scene.environment = env;

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(5, 6, 8);
    key.castShadow = true;
    key.shadow.mapSize.width = 2048;
    key.shadow.mapSize.height = 2048;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 50;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x6699ff, 0.8);
    fill.position.set(-5, -2, 3);
    scene.add(fill);

    const rim = new THREE.PointLight(0x00d4ff, 2.0, 25);
    rim.position.set(-3, 3, -3);
    scene.add(rim);

    const accent = new THREE.PointLight(0xffffff, 1.5, 15);
    accent.position.set(2, -2, 4);
    scene.add(accent);

    const metalMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#E8EEF5"),
      metalness: 1.0,
      roughness: 0.12,
      envMapIntensity: 2.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      ior: 2.5,
      thickness: 0.5,
      transmission: 0,
    });

    const group = new THREE.Group();
    scene.add(group);

    const linkGeo = new THREE.TorusGeometry(0.55, 0.14, 48, 72);

    const chainLinks: THREE.Mesh[] = [];

    for (let i = 0; i < 11; i++) {
      const link = new THREE.Mesh(linkGeo, metalMaterial.clone());
      link.position.y = 2.8 - (i * 0.6);
      link.castShadow = true;
      link.receiveShadow = true;

      if (i % 2 === 0) {
        link.rotation.y = Math.PI / 2;
      }

      chainLinks.push(link);
      group.add(link);
    }

    const fit = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const isMobile = w < 900;
      group.scale.setScalar(isMobile ? 0.7 : 1.0);
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;
    let isHovering = false;

    const handleCanvasMouseEnter = () => {
      isHovering = true;
    };

    const handleCanvasMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener('mouseenter', handleCanvasMouseEnter);
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave);

    const animate = () => {
      t += 0.012;

      const mainSwing = Math.sin(t * 0.8) * 0.28;
      const secondarySwing = Math.sin(t * 1.3) * 0.12;

      const hoverSway = isHovering ? Math.sin(t * 2.8) * 0.35 : 0;
      const hoverIntensity = isHovering ? 1.8 : 1.0;

      chainLinks.forEach((link, i) => {
        const factor = 1 - (i / chainLinks.length);
        const delay = i * 0.2;
        const waveFactor = Math.sin(t * 0.6 + delay);

        const swingX = (mainSwing + secondarySwing * 0.5) * hoverIntensity;
        const swingZ = (Math.sin(t * 0.5) * 0.15 + Math.sin(t * 1.1) * 0.08) * hoverIntensity;

        if (i % 2 === 0) {
          link.rotation.x = swingX * factor + waveFactor * 0.12 * factor + hoverSway * factor * 0.5;
          link.rotation.z = swingZ * factor * 0.7;
          link.position.x = (Math.sin(t * 0.7 + delay) * 0.12 + hoverSway * 0.15) * factor;
        } else {
          link.rotation.z = swingX * factor + waveFactor * 0.12 * factor + hoverSway * factor * 0.5;
          link.rotation.x = swingZ * factor * 0.7;
          link.position.x = (Math.sin(t * 0.7 + delay) * 0.12 + hoverSway * 0.15) * factor;
        }

        link.position.z = Math.sin(t * 0.4 + delay) * 0.03 * factor;
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    let targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900 || !isHovering) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetX = x * 0.12;
      targetY = y * 0.10;
    };

    const parallax = () => {
      if (!isHovering) {
        targetX *= 0.92;
        targetY *= 0.92;
      }

      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += ((-targetY) - group.rotation.x) * 0.05;
      requestAnimationFrame(parallax);
    };
    parallax();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener('mouseenter', handleCanvasMouseEnter);
      canvas.removeEventListener('mouseleave', handleCanvasMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
      linkGeo.dispose();
      metalMaterial.dispose();
    };
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative z-10 space-y-6">
            <div className="inline-block">
              <span className="text-slate-300 text-sm font-semibold tracking-wider uppercase bg-slate-200/10 px-4 py-2 rounded-full border border-slate-200/20">
                Secure & Reliable Platform
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-white">Built by Experts</span>
              <span className="block text-slate-200">
                Built for You
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              CLOSIO is powered by a dedicated team of industry professionals committed to delivering
              enterprise-grade security and continuous innovation. Your data and success are our top priorities.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-200/10 flex items-center justify-center border border-slate-200/20 group-hover:border-slate-200/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Bank-Level Security</h3>
                  <p className="text-slate-400">Enterprise-grade encryption and security protocols protect your data 24/7.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-200/10 flex items-center justify-center border border-slate-200/20 group-hover:border-slate-200/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Expert Team Support</h3>
                  <p className="text-slate-400">Our experienced team is dedicated to your success, every step of the way.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-200/10 flex items-center justify-center border border-slate-200/20 group-hover:border-slate-200/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Continuous Innovation</h3>
                  <p className="text-slate-400">Regular updates and new features keep our CRM ahead of the curve.</p>
                </div>
              </div>
            </div>
          </div>

          <canvas
            ref={canvasRef}
            className="w-full h-[500px] lg:h-[600px] order-first lg:order-last block bg-black"
            style={{
              opacity: 1.0,
              filter: 'saturate(1.08)'
            }}
          />

        </div>
      </div>
    </section>
  );
};

export default GlassRingsSection;
