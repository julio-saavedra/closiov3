import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Trophy,
  BookOpen,
} from "lucide-react";

type Feature = {
  title: string;
  href: string;
  Icon: React.ComponentType<any>;
};

const features: Feature[] = [
  { title: "Dashboard", href: "/features/dashboard", Icon: BarChart3 },
  { title: "Commission", href: "/features/commission", Icon: DollarSign },
  { title: "Leaderboard", href: "/features/leaderboard", Icon: Trophy },
  { title: "Book of Business", href: "/features/book-of-business", Icon: BookOpen },
];

export default function IntegratedFeaturesFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-20">
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto mt-2 flex h-[480px] w-full max-w-3xl items-center justify-center">
          <div className="pointer-events-none absolute top-[120px] left-1/2 -translate-x-1/2 h-32 w-80 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="absolute left-1/2 top-[80px] -translate-x-1/2" style={{ perspective: '1200px' }}>
            {/* Panel 1 - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 1 } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[-40px] h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-[#1a1a2e]/40 via-white/[0.02] to-transparent backdrop-blur-[2px]"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.6), 0 0 60px rgba(26,26,46,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                transformStyle: 'preserve-3d'
              }}
            />

            {/* Panel 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 1 } : { opacity: 0, y: 20, scale: 0.9, rotateX: 2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[-32px] h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#16213e]/50 via-white/[0.03] to-white/[0.01] backdrop-blur-[3px]"
              style={{
                boxShadow: '0 10px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.65), 0 0 70px rgba(22,33,62,0.5), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transformStyle: 'preserve-3d'
              }}
            />

            {/* Panel 3 - Middle */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 1.5 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0.8 } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1.5 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[-24px] h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-[#0f3460]/60 via-white/[0.05] to-white/[0.02] backdrop-blur-[4px]"
              style={{
                boxShadow: '0 12px 56px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.7), 0 0 80px rgba(15,52,96,0.6), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.35)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[32px]" />
            </motion.div>

            {/* Panel 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0.5 } : { opacity: 0, y: 20, scale: 0.9, rotateX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[-16px] h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.16] bg-gradient-to-b from-[#16213e]/70 via-white/[0.08] to-white/[0.04] backdrop-blur-[6px]"
              style={{
                boxShadow: '0 14px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.75), 0 0 90px rgba(22,33,62,0.7), inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.4)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.05] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.25] to-transparent" />
            </motion.div>

            {/* Panel 5 - Top */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 20, scale: 0.9, rotateX: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[-8px] h-32 w-64 -translate-x-1/2 rounded-[32px] border-2 border-white/[0.22] bg-gradient-to-b from-[#1a1a2e]/80 via-white/[0.12] to-white/[0.06] backdrop-blur-[8px] overflow-hidden"
              style={{
                boxShadow: '0 16px 72px rgba(0,0,0,0.6), 0 10px 28px rgba(0,0,0,0.8), 0 0 100px rgba(26,26,46,0.8), inset 0 2px 0 rgba(255,255,255,0.28), inset 0 -2px 20px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/[0.18] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/[0.25] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.35] to-transparent" />
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/[0.15]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-[120px] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.12] blur-3xl"
            />
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute inset-0"
            viewBox="0 0 900 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <motion.path
                d="M450 168 C450 220, 450 280, 450 350"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 375, 320 385, 220 400"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 378, 390 385, 340 400"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 378, 510 385, 560 400"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 375, 580 385, 680 400"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
              />
            </g>

            <g opacity="0.55" filter="url(#blurGlow)">
              <motion.path
                d="M450 168 C450 220, 450 280, 450 350"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 375, 320 385, 220 400"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 378, 390 385, 340 400"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 378, 510 385, 560 400"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 350 C450 375, 580 385, 680 400"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
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

          <div className="absolute bottom-0 left-1/2 flex w-full max-w-4xl -translate-x-1/2 justify-between gap-3 px-2" style={{ perspective: '1000px' }}>
            {features.map(({ title, href, Icon }, index) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -5 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.03, rotateX: -2 }}
                className="group relative flex w-full max-w-[220px] flex-col items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-4 py-4 backdrop-blur-md transition-colors hover:border-white/[0.25] hover:bg-white/[0.06]"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Top edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none" />

                <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-white/[0.15] bg-black/50 transition-all group-hover:border-white/[0.25]"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.12)'
                  }}
                >
                  <Icon className="h-6 w-6 text-white/80 transition group-hover:text-white group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                  {/* Icon container edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-xl" />
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium text-white/85 transition group-hover:text-white">{title}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
