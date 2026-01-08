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

        <div className="relative mx-auto mt-2 flex h-[480px] w-full max-w-3xl items-start justify-center">
          <div className="pointer-events-none absolute top-[200px] h-32 w-80 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="relative mt-8">
            {/* Panel 1 - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-[#1a1a2e]/40 via-white/[0.02] to-transparent shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_60px_rgba(26,26,46,0.4)] backdrop-blur-[2px]"
            />

            {/* Panel 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-8 h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#16213e]/50 via-white/[0.03] to-white/[0.01] shadow-[0_8px_45px_rgba(0,0,0,0.35),0_0_70px_rgba(22,33,62,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[3px]"
            />

            {/* Panel 3 - Middle */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-16 h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-[#0f3460]/60 via-white/[0.05] to-white/[0.02] shadow-[0_8px_50px_rgba(0,0,0,0.4),0_0_80px_rgba(15,52,96,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[4px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent rounded-[32px]" />
            </motion.div>

            {/* Panel 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-24 h-32 w-64 -translate-x-1/2 rounded-[32px] border border-white/[0.16] bg-gradient-to-b from-[#16213e]/70 via-white/[0.08] to-white/[0.04] shadow-[0_8px_55px_rgba(0,0,0,0.45),0_0_90px_rgba(22,33,62,0.7),inset_0_2px_0_rgba(255,255,255,0.2)] backdrop-blur-[6px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.05] to-transparent rounded-[32px]" />
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/[0.1] to-transparent rounded-t-[32px]" />
            </motion.div>

            {/* Panel 5 - Top */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-32 h-32 w-64 -translate-x-1/2 rounded-[32px] border-2 border-white/[0.2] bg-gradient-to-b from-[#1a1a2e]/80 via-white/[0.12] to-white/[0.06] shadow-[0_8px_60px_rgba(0,0,0,0.5),0_0_100px_rgba(26,26,46,0.8),inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-2px_20px_rgba(0,0,0,0.2)] backdrop-blur-[8px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/[0.15] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/[0.2] to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-[190px] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.12] blur-3xl"
            />
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute inset-0"
            viewBox="0 0 900 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <motion.path
                d="M450 235 C450 260, 450 280, 450 305"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 330, 330 340, 245 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 332, 400 340, 365 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 332, 500 340, 535 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 330, 570 340, 655 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
              />
            </g>

            <g opacity="0.55" filter="url(#blurGlow)">
              <motion.path
                d="M450 235 C450 260, 450 280, 450 305"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 330, 330 340, 245 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 332, 400 340, 365 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 332, 500 340, 535 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M450 305 C450 330, 570 340, 655 360"
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

          <div className="absolute bottom-0 left-1/2 flex w-full max-w-4xl -translate-x-1/2 justify-between gap-3 px-2">
            {features.map(({ title, href, Icon }, index) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex w-full max-w-[220px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-black/40 shadow-[0_0_30px_rgba(255,255,255,0.06)]">
                  <Icon className="h-6 w-6 text-white/80 transition group-hover:text-white" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium text-white/85">{title}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
