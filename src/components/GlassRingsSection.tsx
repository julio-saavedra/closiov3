import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const GlassRingsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
    camera.position.set(0, 0, 7.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    scene.environment = env;

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(3, 4, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 1.1);
    fill.position.set(-4, -1, 4);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.4, 20);
    rim.position.set(-2, 2, -2);
    scene.add(rim);

    const C_TEAL = new THREE.Color("#37E6E0");
    const C_PINK = new THREE.Color("#FF63D8");
    const C_WHITE = new THREE.Color("#FFFFFF");
    const C_GRAY = new THREE.Color("#B8BCC7");

    const makeGlass = (tint: THREE.Color, emissiveStrength = 0.35) => new THREE.MeshPhysicalMaterial({
      color: tint.clone().lerp(C_WHITE, 0.55),
      metalness: 0.0,
      roughness: 0.12,
      transmission: 1.0,
      thickness: 0.65,
      ior: 1.5,
      transparent: true,
      opacity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.25,
      specularIntensity: 1.0,
      emissive: tint.clone().lerp(C_WHITE, 0.2),
      emissiveIntensity: emissiveStrength
    });

    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.TorusGeometry(1, 0.16, 48, 220);

    const ring1 = new THREE.Mesh(geo, makeGlass(C_TEAL, 0.32));
    ring1.scale.set(1.2, 1.2, 1.2);
    ring1.rotation.set(0.55, 0.25, 0.1);
    ring1.position.set(0.8, 0.3, 0);
    group.add(ring1);

    const ring2 = new THREE.Mesh(geo, makeGlass(C_PINK, 0.28));
    ring2.scale.set(0.9, 0.9, 0.9);
    ring2.rotation.set(-0.35, 0.9, -0.2);
    ring2.position.set(1.2, -0.5, -0.2);
    group.add(ring2);

    const ring3 = new THREE.Mesh(geo, makeGlass(C_GRAY, 0.18));
    ring3.scale.set(1.5, 1.5, 1.5);
    ring3.rotation.set(0.15, -0.55, 0.55);
    ring3.position.set(0.2, 0.8, -0.35);
    group.add(ring3);

    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 });
    const glow1 = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), glowMat.clone());
    glow1.position.set(0.5, 0.1, -2.2);
    group.add(glow1);

    const fit = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const isMobile = w < 900;
      group.position.x = isMobile ? 0 : 0;
      group.scale.setScalar(isMobile ? 0.7 : 0.85);
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;

    const animate = () => {
      t += 0.008;

      ring1.rotation.z += 0.003;
      ring2.rotation.y += 0.0022;
      ring3.rotation.x += 0.0018;

      group.position.y = Math.sin(t) * 0.08;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    let targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetX = x * 0.22;
      targetY = y * 0.18;
    };

    const parallax = () => {
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += ((-targetY) - group.rotation.x) * 0.05;
      requestAnimationFrame(parallax);
    };
    parallax();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
      geo.dispose();
    };
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative z-10 space-y-6">
            <div className="inline-block">
              <span className="text-[#37E6E0] text-sm font-semibold tracking-wider uppercase bg-[#37E6E0]/10 px-4 py-2 rounded-full border border-[#37E6E0]/20">
                Crystal Clear Transparency
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-white">Complete Visibility</span>
              <span className="block bg-gradient-to-r from-[#37E6E0] to-[#FF63D8] bg-clip-text text-transparent">
                Into Every Deal
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              No more guessing games with your commissions. Closio provides crystal-clear insight into
              every transaction, giving you complete confidence in your earnings and pipeline.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#37E6E0]/20 to-[#37E6E0]/5 flex items-center justify-center border border-[#37E6E0]/20 group-hover:border-[#37E6E0]/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#37E6E0]"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Real-Time Commission Tracking</h3>
                  <p className="text-slate-400">See exactly what you've earned and what's pending, updated instantly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63D8]/20 to-[#FF63D8]/5 flex items-center justify-center border border-[#FF63D8]/20 group-hover:border-[#FF63D8]/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#FF63D8]"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Transparent Pipeline Management</h3>
                  <p className="text-slate-400">Every deal stage visible at a glance. No hidden surprises.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-200/20 to-slate-200/5 flex items-center justify-center border border-slate-200/20 group-hover:border-slate-200/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Trust Through Clarity</h3>
                  <p className="text-slate-400">Build stronger relationships with complete visibility for your entire team.</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={containerRef} className="relative h-[500px] lg:h-[600px] order-first lg:order-last">
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
              style={{
                opacity: 0.85,
                filter: 'saturate(1.08)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(55,230,224,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,99,216,0.05),transparent_50%)] pointer-events-none" />
    </section>
  );
};

export default GlassRingsSection;
