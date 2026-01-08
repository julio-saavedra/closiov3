import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  "User Management",
  "Quick Links",
  "Estimated Payout",
  "Reminders",
];

export default function IntegratedFeaturesFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-20">
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

        <div className="relative mx-auto mt-2 flex h-[620px] w-full max-w-[900px] items-center justify-center">

          <div className="absolute left-[calc(50%-210px)] top-[30px] -translate-x-1/2" style={{ perspective: '1200px' }}>
            {/* Panel 1 - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 1,
                rotateZ: [0, -0.5, 0.5, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 3, delay: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
              }}
              className="absolute left-1/2 top-[-90px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-[#1a1a2e]/40 via-white/[0.02] to-transparent backdrop-blur-[2px]"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.6), 0 0 60px rgba(26,26,46,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
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
                rotateZ: [0, -0.5, 0.5, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 3, delay: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
              }}
              className="absolute left-1/2 top-[-68px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#16213e]/50 via-white/[0.03] to-white/[0.01] backdrop-blur-[3px]"
              style={{
                boxShadow: '0 10px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.65), 0 0 70px rgba(22,33,62,0.5), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.3)',
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
                rotateZ: [0, -0.5, 0.5, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1.5 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 3, delay: 1.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
              }}
              className="absolute left-1/2 top-[-45px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-[#0f3460]/60 via-white/[0.05] to-white/[0.02] backdrop-blur-[4px]"
              style={{
                boxShadow: '0 12px 56px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.7), 0 0 80px rgba(15,52,96,0.6), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.35)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[32px]" />
            </motion.div>

            {/* Panel 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0.5,
                rotateZ: [0, -0.5, 0.5, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 3, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
              }}
              className="absolute left-1/2 top-[-23px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border border-white/[0.16] bg-gradient-to-b from-[#16213e]/70 via-white/[0.08] to-white/[0.04] backdrop-blur-[6px]"
              style={{
                boxShadow: '0 14px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.75), 0 0 90px rgba(22,33,62,0.7), inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.4)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.05] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.25] to-transparent" />
            </motion.div>

            {/* Panel 5 - Top */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                rotateZ: [0, -0.5, 0.5, 0]
              } : { opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotateX: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 3, delay: 1.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
              }}
              className="absolute left-1/2 top-[0px] h-52 w-[420px] -translate-x-1/2 rounded-[32px] border-2 border-white/[0.22] bg-gradient-to-b from-[#1a1a2e]/80 via-white/[0.12] to-white/[0.06] backdrop-blur-[8px] overflow-hidden"
              style={{
                boxShadow: '0 16px 72px rgba(0,0,0,0.6), 0 10px 28px rgba(0,0,0,0.8), 0 0 100px rgba(26,26,46,0.8), inset 0 2px 0 rgba(255,255,255,0.28), inset 0 -2px 20px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/[0.18] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/[0.25] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.35] to-transparent" />
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/[0.15]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium text-white/90 whitespace-nowrap">Core Dashboard</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-[90px] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.12] blur-3xl"
            />
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute inset-0"
            viewBox="0 0 900 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <motion.path
                d="M450 244 L450 420"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 280 465, 108 515"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 390 465, 336 515"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 510 465, 564 515"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 620 465, 792 515"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
              />
            </g>

            <g opacity="0.55" filter="url(#blurGlow)">
              <motion.path
                d="M450 244 L450 420"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 280 465, 108 515"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 390 465, 336 515"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 510 465, 564 515"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 420 C450 455, 620 465, 792 515"
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

          <div className="absolute bottom-0 left-1/2 flex w-full max-w-[900px] -translate-x-1/2 justify-between gap-3 px-2" style={{ perspective: '1000px' }}>
            {features.map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -5 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex w-full max-w-[200px] flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-4 py-6 backdrop-blur-md"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none" />

                <div className="text-center">
                  <div className="text-sm font-medium text-white/85">{title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
