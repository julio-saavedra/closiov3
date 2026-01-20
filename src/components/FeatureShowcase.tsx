import React, { useMemo, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type TabKey = "owner" | "manager" | "agent";

const tabs: { key: TabKey; label: string }[] = [
  { key: "owner", label: "Agency owner" },
  { key: "manager", label: "Manager" },
  { key: "agent", label: "Agent" },
];

const ICONS: Record<TabKey, React.ReactNode> = {
  owner: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ownerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="ownerAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Executive Briefcase */}
      {/* Main briefcase body */}
      <rect x="8" y="18" width="32" height="20" rx="2" fill="url(#ownerGradient)" opacity="0.25" />
      <rect x="8" y="18" width="32" height="20" rx="2" stroke="url(#ownerGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Top handle */}
      <path d="M18 18 L18 14 C18 12.3 19.3 11 21 11 L27 11 C28.7 11 30 12.3 30 14 L30 18" 
        stroke="url(#ownerGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Center clasp/lock detail */}
      <rect x="22" y="24" width="4" height="6" rx="1" fill="url(#ownerGradient)" opacity="0.8" />
      <circle cx="24" cy="27" r="1.5" fill="#ffffff" opacity="0.9" />
      
      {/* Professional accent lines */}
      <line x1="8" y1="23" x2="40" y2="23" stroke="url(#ownerAccent)" strokeWidth="1.5" />
      <line x1="8" y1="33" x2="40" y2="33" stroke="url(#ownerAccent)" strokeWidth="1.5" />
      
      {/* Corner accents */}
      <circle cx="13" cy="28" r="1.5" fill="#a855f7" opacity="0.6" />
      <circle cx="35" cy="28" r="1.5" fill="#ffffff" opacity="0.6" />
    </svg>
  ),
  manager: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="managerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Top person */}
      <circle cx="24" cy="12" r="4.5" fill="url(#managerGradient)" />
      <path
        d="M16 20C16 17 19.6 15 24 15C28.4 15 32 17 32 20"
        stroke="url(#managerGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="url(#managerGradient)"
        fillOpacity="0.2"
      />
      {/* Connection lines */}
      <line x1="24" y1="20" x2="16" y2="28" stroke="url(#managerGradient)" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="24" y1="20" x2="32" y2="28" stroke="url(#managerGradient)" strokeWidth="2" strokeDasharray="2 2" />
      {/* Bottom left person */}
      <circle cx="16" cy="32" r="3.5" fill="url(#managerGradient)" opacity="0.7" />
      <path
        d="M10 38C10 36 12.7 34.5 16 34.5C19.3 34.5 22 36 22 38"
        stroke="url(#managerGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Bottom right person */}
      <circle cx="32" cy="32" r="3.5" fill="url(#managerGradient)" opacity="0.7" />
      <path
        d="M26 38C26 36 28.7 34.5 32 34.5C35.3 34.5 38 36 38 38"
        stroke="url(#managerGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  ),
  agent: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Person */}
      <circle cx="24" cy="14" r="6" fill="url(#agentGradient)" />
      <path
        d="M12 38C12 31 17 26 24 26C31 26 36 31 36 38"
        stroke="url(#agentGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="url(#agentGradient)"
        fillOpacity="0.2"
      />
      {/* Target/focus icon */}
      <circle cx="36" cy="12" r="6" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
      <circle cx="36" cy="12" r="3.5" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.8" />
      <circle cx="36" cy="12" r="1.5" fill="#a855f7" />
    </svg>
  ),
};

const CONTENT: Record<
  TabKey,
  {
    eyebrow: string;
    title: string;
    bullets: string[];
    bulletsShort?: string[];
    why: string;
    whyShort?: string;
    stats: { label: string; value: string }[];
    keyFeatures: string[];
  }
> = {
  owner: {
    eyebrow: "Full visibility",
    title: "Agency Owner Account",
    bullets: [
      "Complete organizational hierarchy view — see every owner, manager, and agent relationship instantly",
      "Real-time production dashboards tracking sales velocity, conversion rates, and revenue growth across all teams",
      "Automated commission calculations with full audit trails — no more manual reconciliation or disputes",
      "Custom reporting exports to share with investors, partners, or executives without reformatting data",
      "Multi-location management with consolidated metrics and branch-level performance comparisons",
    ],
    bulletsShort: [
      "Instant org-wide visibility",
      "Live production metrics",
      "Automated commissions",
    ],
    why: "Built for leaders managing 50+ agents who need complete visibility without the chaos. Make strategic decisions based on real-time data, identify top performers instantly, and scale your agency with confidence.",
    whyShort: "Built for leaders who need clear visibility and fast, confident decisions.",
    stats: [
      { label: "Time saved weekly", value: "12+ hrs" },
      { label: "Reporting accuracy", value: "100%" },
    ],
    keyFeatures: ["Hierarchy visualization", "Executive dashboards", "Commission automation"],
  },
  manager: {
    eyebrow: "Team performance",
    title: "Manager Account",
    bullets: [
      "Direct view of all assigned agents with individual performance metrics and activity tracking",
      "Pipeline visibility showing exactly where deals are stuck and who needs coaching support",
      "Team leaderboards with customizable metrics to drive healthy competition and celebrate wins",
      "One-click coaching insights highlighting which agents need attention and specific action items",
      "Goal tracking with progress indicators to keep your team aligned and motivated on targets",
    ],
    bulletsShort: [
      "Clear agent performance",
      "Pipeline coaching signals",
      "Team goals on track",
    ],
    why: "Perfect for managers overseeing 5-30 agents who need to coach effectively and drive results. Spend less time hunting for data and more time developing your team to hit quota.",
    whyShort: "Coach faster with clear visibility and team progress at a glance.",
    stats: [
      { label: "Coaching efficiency", value: "+40%" },
      { label: "Team visibility", value: "Real-time" },
    ],
    keyFeatures: ["Agent oversight", "Performance coaching", "Team analytics"],
  },
  agent: {
    eyebrow: "Stay focused",
    title: "Agent Account",
    bullets: [
      "Clean pipeline view showing your active deals, next steps, and follow-up priorities in one glance",
      "Personal commission tracker with detailed breakdowns by policy, carrier, and payout date",
      "Quick-add contacts and policies without switching between multiple tools or spreadsheets",
      "Daily task list auto-generated from your pipeline so nothing falls through the cracks",
      "Mobile-optimized interface to update deals, check commissions, and manage clients on the go",
    ],
    bulletsShort: [
      "Pipeline at a glance",
      "Clear commissions",
      "Fast mobile updates",
    ],
    why: "Designed for producers who want to focus on selling, not software. Everything you need to track your book of business and commissions without the clutter of enterprise tools.",
    whyShort: "Everything you need to sell and track commissions—without the clutter.",
    stats: [
      { label: "Daily time saved", value: "45+ min" },
      { label: "Deal tracking", value: "100%" },
    ],
    keyFeatures: ["Personal pipeline", "Commission clarity", "Mobile access"],
  },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ClosioAccountTypesSection() {
  const [active, setActive] = useState<TabKey>("owner");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = useMemo(
    () => [
      {
        key: "owner" as const,
        icon: ICONS.owner,
        industry: "Operations",
        headline: "Complete visibility across your full hierarchy",
      },
      {
        key: "manager" as const,
        icon: ICONS.manager,
        industry: "Leadership",
        headline: "Lead teams with clean performance insights",
      },
      {
        key: "agent" as const,
        icon: ICONS.agent,
        industry: "Sales",
        headline: "Stay focused on selling, not software",
      },
    ],
    []
  );

  const c = CONTENT[active];

  return (
    <section ref={sectionRef} className="relative w-full bg-black pt-16 pb-16 sm:pt-28 sm:pb-28">
      {/* Top gradient with purple accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-purple-900/5 to-transparent" />

      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(70% 50% at 50% 20%, black 25%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(70% 50% at 50% 20%, black 25%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/50"
          >
            / Account Types
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white"
          >
            Built for every role
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-white/40 max-w-[20rem] sm:max-w-xl mx-auto"
          >
            Tailored experiences for owners, managers, and agents—each with the tools they need to succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm p-1 sm:p-1.5"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300",
                  active === t.key
                    ? "bg-gradient-to-r from-purple-500 to-white text-black shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden sm:grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3"
        >
          {cards.map((card, idx) => (
            <motion.button
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(card.key)}
              className={cn(
                "group relative w-full p-4 sm:p-6 text-left transition-all duration-300 ease-out rounded-xl overflow-hidden",
                "hover:scale-[1.01]",
                active === card.key 
                  ? "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent border border-white/20 shadow-[0_10px_40px_rgba(168,85,247,0.15)]" 
                  : "bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 hover:border-white/15"
              )}
            >
              {/* Subtle gradient overlay for active state */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active === card.key ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-white/5 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-start mb-5">
                  {/* Icon without container */}
                  <div className={cn(
                    "transition-all duration-300",
                    active === card.key 
                      ? "text-white scale-110" 
                      : "text-white/60 group-hover:text-white/80"
                  )}>
                    {card.icon}
                  </div>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                  {card.industry}
                </p>

                <h3 className={cn(
                  "text-lg font-medium leading-tight transition-all duration-300 mb-3",
                  active === card.key 
                    ? "text-white" 
                    : "text-white/70 group-hover:text-white/90"
                )}>
                  {card.headline}
                </h3>

                <p className="text-xs leading-relaxed text-white/40">
                  {active === card.key ? "View details below" : "Click to explore"}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-white/5" />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Streamlined details panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {/* Main content - single consolidated panel */}
            <div className="rounded-xl border border-white/10 ring-1 ring-white/10 bg-[#141418] sm:shadow-none sm:ring-0 sm:bg-gradient-to-br sm:from-white/[0.03] sm:via-black/40 sm:to-transparent p-6 backdrop-blur-0 sm:backdrop-blur-sm">
              {/* Header with icon (no container) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10"
              >
                <div className="text-white/80 flex-shrink-0 mt-1 hidden sm:block">
                  {ICONS[active]}
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">
                    {c.eyebrow}
                  </p>
                  <h4 className="text-xl font-medium text-white leading-tight mb-2">
                    {c.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                    <span className="sm:hidden">{c.whyShort ?? c.why}</span>
                    <span className="hidden sm:inline">{c.why}</span>
                  </p>
                </div>
              </motion.div>

              {/* Features list */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-medium text-white/70">
                    Key Features
                  </p>
                  <span className="hidden sm:inline-flex text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/60">
                    {c.bullets.length}
                  </span>
                </div>
                <ul className="space-y-2 sm:space-y-3 sm:hidden">
                  {(c.bulletsShort ?? c.bullets).map((b, idx) => (
                    <motion.li
                      key={`short-${b}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.15 + idx * 0.03 }}
                      className="flex gap-2 text-xs text-white/70 group/item hover:text-white/90 transition-colors"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500/20 to-white/10 flex-shrink-0 text-white/80 [&>svg]:h-4 [&>svg]:w-4">
                        {cards[idx]?.icon ?? ICONS[active]}
                      </span>
                      <span className="leading-relaxed flex-1">{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <ul className="hidden sm:block space-y-3">
                  {c.bullets.map((b, idx) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.15 + idx * 0.03 }}
                      className="flex gap-3 text-sm text-white/70 group/item hover:text-white/90 transition-colors"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-purple-500/20 to-white/10 flex-shrink-0">
                        <svg className="w-3 h-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed flex-1">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Key features tags */}
              <div className="hidden sm:flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                {c.keyFeatures.map((feature, idx) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 + idx * 0.05 }}
                    className="px-4 py-2 text-sm font-semibold rounded-full bg-white/20 text-white border border-white/30 shadow-lg backdrop-blur-sm"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent hidden sm:block" />
      </div>
    </section>
  );
}
