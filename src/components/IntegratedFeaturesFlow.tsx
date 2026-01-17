import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "User Management",
    headline: "Complete team visibility.",
  },
  {
    title: "Quick Links",
    headline: "Instant tool access.",
  },
  {
    title: "Activity Feed",
    headline: "Real-time updates.",
  },
  {
    title: "Analytics",
    headline: "Performance insights.",
  },
  {
    title: "Estimated Payout",
    headline: "Know your earnings.",
  },
  {
    title: "Reminders",
    headline: "Never miss a follow-up.",
  },
];

export default function IntegratedFeaturesFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <section ref={sectionRef} className="relative w-full bg-black pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-48 lg:pb-48">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 0%, transparent 70%)',
          }}
        />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto mt-2 flex min-h-[500px] sm:min-h-[600px] lg:h-[720px] w-full max-w-full lg:max-w-[900px] items-center justify-center">

          <div className="absolute left-1/2 top-[10px] sm:top-[20px] lg:top-[30px] lg:left-[calc(50%-210px)] -translate-x-1/2 scale-[0.65] sm:scale-[0.8] lg:scale-100" style={{ perspective: '1200px' }}>
            {/* Panel 2 - with unfold animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scaleY: 1,
                rotateX: 1,
                rotateZ: [0, 2.5, -2.5, 1, -1, 0]
              } : { opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                scaleY: { duration: 0.8, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                rotateX: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 8.4, delay: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-68px] h-40 sm:h-48 lg:h-52 w-[300px] sm:w-[380px] lg:w-[420px] -translate-x-1/2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-white/[0.02] to-white/[0.01] backdrop-blur-[3px]"
              style={{
                boxShadow: '0 10px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.65), 0 0 50px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            />

            {/* Panel 3 - Middle - with unfold animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scaleY: 1,
                rotateX: 0.8,
                rotateZ: [0, -2.5, 2.5, -1, 1, 0]
              } : { opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                scaleY: { duration: 0.8, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] },
                rotateX: { duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 8.8, delay: 1.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-45px] h-40 sm:h-48 lg:h-52 w-[300px] sm:w-[380px] lg:w-[420px] -translate-x-1/2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-white/[0.01] backdrop-blur-[4px]"
              style={{
                boxShadow: '0 12px 56px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.7), 0 0 60px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.35)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.02] to-transparent rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 lg:h-10 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-[24px] sm:rounded-t-[28px] lg:rounded-t-[32px]" />
            </motion.div>

            {/* Panel 4 - with unfold animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scaleY: 1,
                rotateX: 0.5,
                rotateZ: [0, 2.5, -2.5, 1, -1, 0]
              } : { opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                scaleY: { duration: 0.8, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] },
                rotateX: { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 9.2, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[-23px] h-40 sm:h-48 lg:h-52 w-[300px] sm:w-[380px] lg:w-[420px] -translate-x-1/2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-white/[0.04] to-white/[0.02] backdrop-blur-[6px]"
              style={{
                boxShadow: '0 14px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.75), 0 0 70px rgba(255,255,255,0.05), inset 0 2px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.4)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[24px] sm:rounded-t-[28px] lg:rounded-t-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />
            </motion.div>

            {/* Panel 5 - Top (most visible) - with unfold animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scaleY: 1,
                rotateX: 0,
                rotateZ: [0, -2.5, 2.5, -1, 1, 0]
              } : { opacity: 0, y: 20, scaleY: 0, rotateX: -90 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                scaleY: { duration: 0.8, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] },
                rotateX: { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                rotateZ: { duration: 9.6, delay: 1.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }
              }}
              className="absolute left-1/2 top-[0px] h-40 sm:h-48 lg:h-52 w-[300px] sm:w-[380px] lg:w-[420px] -translate-x-1/2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/[0.18] bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-white/[0.03] backdrop-blur-[8px] overflow-hidden"
              style={{
                boxShadow: '0 16px 72px rgba(0,0,0,0.6), 0 10px 28px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.06), inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -2px 20px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.15)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-14 sm:h-16 lg:h-20 bg-gradient-to-b from-white/[0.12] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 lg:h-20 bg-gradient-to-t from-black/[0.25] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.3] to-transparent" />
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] ring-1 ring-inset ring-white/[0.1]" />
              <div className="absolute inset-0 flex flex-col p-3 sm:p-4 lg:p-5">
                {/* Dashboard Header with IO Logo */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* IO Logo */}
                    <img
                      src="/favicon_and_logo_for_closio.png"
                      alt="Closio"
                      className="w-auto h-4 sm:h-5 lg:h-6"
                      draggable={false}
                    />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 mb-2 sm:mb-3">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 border border-white/10">
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-white/60 mb-0.5 sm:mb-1">Active Deals</div>
                    <div className="text-xs sm:text-sm lg:text-lg font-bold text-white/95">247</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 border border-white/10">
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-white/60 mb-0.5 sm:mb-1">Revenue</div>
                    <div className="text-xs sm:text-sm lg:text-lg font-bold text-white/95">$1.2M</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 border border-white/10">
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-white/60 mb-0.5 sm:mb-1">Team</div>
                    <div className="text-xs sm:text-sm lg:text-lg font-bold text-white/95">42</div>
                  </div>
                </div>

                {/* Chart Representation */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 border border-white/10 flex items-end gap-0.5 sm:gap-1">
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '40%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '65%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '85%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '70%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '95%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '75%' }} />
                  <div className="flex-1 bg-gradient-to-t from-purple-500/80 to-purple-400/40 rounded-sm" style={{ height: '60%' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-[90px] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl"
            />
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
            className="pointer-events-none absolute inset-0 hidden lg:block"
            viewBox="0 0 900 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.7)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
              </linearGradient>
              <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="1.5" />
                </feComponentTransfer>
              </filter>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* Main lines with gradient - smooth curves from Core Dashboard to containers */}
            <g opacity="1">
              <motion.path
                d="M435 238 L435 420"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 465, 240 485, 75 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 460, 370 480, 225 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 455, 410 475, 375 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 455, 490 475, 525 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 460, 530 480, 675 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 465, 660 485, 825 520"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>

            {/* Glow effect layer */}
            <g opacity="0.5" filter="url(#blurGlow)">
              <motion.path
                d="M435 238 L435 420"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 465, 240 485, 75 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 460, 370 480, 225 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 455, 410 475, 375 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 455, 490 475, 525 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 460, 530 480, 675 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M435 420 C435 465, 660 485, 825 520"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="5"
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.3, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>

          </motion.svg>

          {/* Feature cards - Grid on mobile, row on desktop */}
          <div className="absolute bottom-[20px] sm:bottom-[25px] lg:bottom-[30px] left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 lg:px-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between gap-2.5 sm:gap-3 lg:gap-3.5 max-w-full lg:max-w-[920px] mx-auto" style={{ perspective: '1200px' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40, scaleY: 0, rotateX: -90 }}
                  animate={isInView ? { opacity: 1, y: 0, scaleY: 1, rotateX: 0 } : { opacity: 0, y: 40, scaleY: 0, rotateX: -90 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.8 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 0.8, delay: 0.8 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
                    scaleY: { duration: 0.6, delay: 0.85 + index * 0.08, ease: [0.34, 1.56, 0.64, 1] },
                    rotateX: { duration: 0.8, delay: 0.8 + index * 0.08, ease: [0.22, 1, 0.36, 1] }
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative flex w-full flex-col items-center justify-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] px-2 py-4 sm:px-3 sm:py-5 lg:px-4 lg:py-7 backdrop-blur-xl cursor-pointer group overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.6), 0 0 40px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25)',
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center bottom',
                    minHeight: '90px'
                  }}
                >
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    style={{ width: '50%' }}
                  />

                  {/* Enhanced top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-xl sm:rounded-t-2xl pointer-events-none" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/[0.08] to-transparent rounded-tr-xl sm:rounded-tr-2xl rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Pulsing status indicator */}
                  <motion.div
                    className="absolute top-2 right-2 sm:top-3 sm:right-3"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" style={{
                      boxShadow: '0 0 8px rgba(168, 85, 247, 0.6), 0 0 16px rgba(168, 85, 247, 0.3)'
                    }} />
                  </motion.div>

                  {/* Animated border gradient on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(255, 255, 255, 0.2), rgba(168, 85, 247, 0.3))',
                      backgroundSize: '200% 200%',
                      opacity: 0,
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    whileHover={{ opacity: 0.15 }}
                  />

                  <div className="text-center relative z-10 space-y-1.5 sm:space-y-2">
                    <div className="text-xs sm:text-sm lg:text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-tight sm:leading-relaxed">{feature.title}</div>
                    <p className="text-[10px] sm:text-xs lg:text-xs text-white/70 group-hover:text-white/85 transition-colors duration-300 leading-tight sm:leading-relaxed">{feature.headline}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
