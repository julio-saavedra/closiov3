import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "User Management",
    headline: "Full visibility across your team.",
    description: "Monitor performance, activity, and key metrics—all in one place."
  },
  {
    title: "Quick Links",
    headline: "Everything you use, instantly accessible.",
    description: "Save and launch your most-used tools without breaking flow."
  },
  {
    title: "Estimated Payout",
    headline: "Know what you'll earn before it hits your account.",
    description: "Clear, real-time earnings estimates based on your production."
  },
  {
    title: "Reminders",
    headline: "Never miss what matters.",
    description: "Schedule, track, and stay ahead of follow-ups, deadlines, and priorities."
  },
];

export default function IntegratedFeaturesFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-32 pb-48">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 65%)',
          }}
        />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto mt-2 flex h-[720px] w-full max-w-[900px] items-center justify-center">

          <div className="absolute left-[calc(50%-210px)] top-[30px] -translate-x-1/2" style={{ perspective: '1200px' }}>
            {/* Panel 1 - Bottom (most faded) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 1,
                rotateZ: [0, -2.5, 2.5, -1, 1, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 4, delay: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-90px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.04] bg-gradient-to-b from-white/[0.02] via-white/[0.01] to-transparent backdrop-blur-[2px]"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.6), 0 0 40px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.06)',
                transformStyle: 'preserve-3d'
              }}
            />

            {/* Panel 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 1,
                rotateZ: [0, 2.5, -2.5, 1, -1, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 4.2, delay: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-68px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-white/[0.02] to-white/[0.01] backdrop-blur-[3px]"
              style={{
                boxShadow: '0 10px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.65), 0 0 50px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transformStyle: 'preserve-3d'
              }}
            />

            {/* Panel 3 - Middle */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 1.5 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0.8,
                rotateZ: [0, -2.5, 2.5, -1, 1, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1.5 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 4.4, delay: 1.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-45px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-white/[0.01] backdrop-blur-[4px]"
              style={{
                boxShadow: '0 12px 56px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.7), 0 0 60px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.35)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.02] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-[32px]" />
            </motion.div>

            {/* Panel 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0.5,
                rotateZ: [0, 2.5, -2.5, 1, -1, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 4.6, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-23px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-white/[0.04] to-white/[0.02] backdrop-blur-[6px]"
              style={{
                boxShadow: '0 14px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.75), 0 0 70px rgba(255,255,255,0.05), inset 0 2px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.4)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />
            </motion.div>

            {/* Panel 5 - Top (most visible) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                rotateZ: [0, -2.5, 2.5, -1, 1, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 4.8, delay: 1.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[0px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.18] bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-white/[0.03] backdrop-blur-[8px] overflow-hidden"
              style={{
                boxShadow: '0 16px 72px rgba(0,0,0,0.6), 0 10px 28px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.06), inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -2px 20px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.15)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/[0.12] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/[0.25] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.3] to-transparent" />
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/[0.1]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-white/95 whitespace-nowrap tracking-tight">Core Dashboard</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-[90px] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl"
            />
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute inset-0"
            viewBox="0 0 900 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <motion.path
                d="M435 238 L435 420"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 460, 280 480, 108 520"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 455, 390 475, 336 520"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 455, 510 475, 564 520"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 460, 620 480, 792 520"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
              />
            </g>

            <g opacity="0.55" filter="url(#blurGlow)">
              <motion.path
                d="M435 238 L435 420"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 460, 280 480, 108 520"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 455, 390 475, 336 520"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 455, 510 475, 564 520"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M435 420 C435 460, 620 480, 792 520"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
              />
            </g>

            <defs>
              <filter id="blurGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
          </motion.svg>

          <div className="absolute bottom-[120px] left-1/2 flex w-full max-w-[900px] -translate-x-1/2 justify-between gap-3 px-2" style={{ perspective: '1000px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -5 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex w-full max-w-[200px] flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-white/[0.01] px-4 py-6 backdrop-blur-md"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.2)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />

                <div className="text-center">
                  <div className="text-sm font-medium text-white/85">{feature.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 flex w-full max-w-[900px] -translate-x-1/2 justify-between gap-3 px-2">
            {features.map((feature, index) => (
              <motion.div
                key={`desc-${feature.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full max-w-[200px] flex-col items-center text-center"
              >
                <div className="relative mb-2 h-8 w-px">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
                <p className="text-sm font-medium text-white/70 leading-relaxed mb-1">{feature.headline}</p>
                <p className="text-xs text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
