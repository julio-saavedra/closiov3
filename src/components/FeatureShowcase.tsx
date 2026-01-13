import React, { useMemo, useState } from "react";

type TabKey = "owner" | "manager" | "agent";

const tabs: { key: TabKey; label: string }[] = [
  { key: "owner", label: "Agency owner" },
  { key: "manager", label: "Manager" },
  { key: "agent", label: "Agent" },
];

const ICONS: Record<TabKey, React.ReactNode> = {
  owner: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M12 4.5v4.2M12 12.2v.2M6.5 19.2h11M7.2 10.2h9.6M8.3 10.2v3.2c0 .8.7 1.4 1.5 1.4h4.4c.8 0 1.5-.6 1.5-1.4v-3.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.8 19.2v-2.4c0-1 .9-1.8 2-1.8h6.4c1.1 0 2 .8 2 1.8v2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  manager: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M12 3.5l3 7-3 2-3-2 3-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 20.5l6.5-6 6.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20.5v-3.3c0-.7.6-1.2 1.3-1.2h5.4c.7 0 1.3.5 1.3 1.2v3.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  agent: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M12 12.2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 20.3c1.3-3.2 3.7-5 6.5-5s5.2 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.8 5.8l.7.7M19.5 9.2l.7-.7M19.5 6.5h1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const CONTENT: Record<
  TabKey,
  {
    eyebrow: string;
    title: string;
    bullets: string[];
    why: string;
  }
> = {
  owner: {
    eyebrow: "Full visibility",
    title: "Agency Owner Account",
    bullets: [
      "See your entire hierarchy in one place (owners → managers → agents).",
      "Track production, commissions, and growth in real time.",
      "Standardize reporting without chasing spreadsheets.",
    ],
    why: "Best for leaders who need clarity at scale — clean oversight, fast decisions, and complete organizational visibility.",
  },
  manager: {
    eyebrow: "Team performance",
    title: "Manager Account",
    bullets: [
      "Visibility into assigned agents and sub-teams.",
      "Activity and performance insights that are easy to coach from.",
      "Keep everyone aligned with fewer tools and less friction.",
    ],
    why: "Best for managers who want to drive results — coaching becomes simple when you can see what's happening instantly.",
  },
  agent: {
    eyebrow: "Stay focused",
    title: "Agent Account",
    bullets: [
      "Simple lead workflow and follow-up visibility.",
      "Clear view of personal production and commissions.",
      "Zero clutter — only what matters day to day.",
    ],
    why: "Best for producers who want to sell more — fast, clean, and built around daily execution.",
  },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ClosioAccountTypesSection() {
  const [active, setActive] = useState<TabKey>("owner");

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
    <section className="relative w-full bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(60% 60% at 50% 25%, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 50% 25%, black 35%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-white/60">
            Account types
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for every role in your organization
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            From agency owners overseeing hundreds of agents to producers focused
            on daily sales, Closio gives each role exactly what they need —
            nothing more, nothing less.
          </p>

          <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active === t.key
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-3">
          {cards.map((card, idx) => (
            <button
              key={card.key}
              onClick={() => setActive(card.key)}
              className={cn(
                "group relative w-full p-8 text-left transition",
                "hover:bg-white/[0.03]",
                active === card.key && "bg-white/[0.04]",
                idx !== 0 &&
                  "md:border-l md:border-white/10 md:[border-image:linear-gradient(to_bottom,transparent,rgba(255,255,255,.25),transparent)_1]",
                idx !== 0 && "border-t border-white/10 md:border-t-0"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="text-white/70">{card.icon}</div>

                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition",
                    active === card.key
                      ? "bg-white/90"
                      : "bg-white/20 group-hover:bg-white/40"
                  )}
                />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-wider text-white/40">
                {card.industry}
              </p>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                {card.headline}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Click to see what this role gets inside Closio.
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 text-white/70">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                <span className="text-white/80">{ICONS[active]}</span>
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {c.eyebrow}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  {c.title}
                </h4>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {c.why}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-medium text-white">What they get</p>
              <ul className="mt-4 space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-white/70">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Explore account types
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.04] hover:text-white"
                >
                  See how it scales →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
