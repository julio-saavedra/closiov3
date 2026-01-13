import React, { useEffect, useMemo, useRef, useState } from "react";

type Anchor = "top" | "bottom" | "left" | "right";
type Target = {
  id: string;
  ref: React.RefObject<HTMLElement>;
  anchor?: Anchor;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function getAnchorPoint(rect: DOMRect, anchor: Anchor) {
  switch (anchor) {
    case "top":
      return { x: rect.left + rect.width / 2, y: rect.top };
    case "bottom":
      return { x: rect.left + rect.width / 2, y: rect.bottom };
    case "left":
      return { x: rect.left, y: rect.top + rect.height / 2 };
    case "right":
      return { x: rect.right, y: rect.top + rect.height / 2 };
  }
}

function pathOrthogonal(from: { x: number; y: number }, to: { x: number; y: number }) {
  const midY = from.y + (to.y - from.y) * 0.55;
  const bend1 = { x: from.x, y: midY };
  const bend2 = { x: to.x, y: midY };

  const r = 16;

  const b1y = bend1.y;
  const b2y = bend2.y;

  return `
    M ${from.x} ${from.y}
    L ${from.x} ${b1y - r}
    Q ${from.x} ${b1y} ${from.x + Math.sign(to.x - from.x) * r} ${b1y}
    L ${to.x - Math.sign(to.x - from.x) * r} ${b2y}
    Q ${to.x} ${b2y} ${to.x} ${b2y + r}
    L ${to.x} ${to.y}
  `;
}

function useRafResize(callback: () => void) {
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(callback);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, [callback]);
}

export function PoweredByWiring({
  title = "Powered by Closio",
  targets,
  className = "",
}: {
  title?: string;
  targets: Target[];
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<
    { id: string; d: string; from: { x: number; y: number }; to: { x: number; y: number } }[]
  >([]);

  const recalc = () => {
    const wrap = wrapperRef.current;
    const chip = chipRef.current;
    if (!wrap || !chip) return;

    const wrapRect = wrap.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();

    const fromAbs = { x: chipRect.left + chipRect.width / 2, y: chipRect.bottom + 8 };

    const next = targets
      .map((t) => {
        const el = t.ref.current;
        if (!el) return null;
        const rect = el.getBoundingClientRect();

        const anchor: Anchor = t.anchor ?? "top";
        const toAbs = getAnchorPoint(rect, anchor);

        const from = { x: fromAbs.x - wrapRect.left, y: fromAbs.y - wrapRect.top };
        const to = { x: toAbs.x - wrapRect.left, y: toAbs.y - wrapRect.top };

        const pad = 6;
        const toPadded =
          anchor === "top"
            ? { x: to.x, y: to.y - pad }
            : anchor === "bottom"
            ? { x: to.x, y: to.y + pad }
            : anchor === "left"
            ? { x: to.x - pad, y: to.y }
            : { x: to.x + pad, y: to.y };

        return {
          id: t.id,
          from,
          to: toPadded,
          d: pathOrthogonal(from, toPadded),
        };
      })
      .filter(Boolean) as { id: string; d: string; from: any; to: any }[];

    setPaths(next);
  };

  useRafResize(recalc);

  useEffect(() => {
    const t = setTimeout(recalc, 50);
    return () => clearTimeout(t);
  }, []);

  const viewBox = useMemo(() => {
    return { x: 0, y: 0, w: 1, h: 1 };
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <div className="relative flex justify-center pt-2 pb-12">
        <div
          ref={chipRef}
          className="relative rounded-2xl px-8 py-4 text-[26px] font-semibold tracking-tight
                     bg-[#1b1b1b] text-[#cfcfcf]
                     shadow-[0_18px_50px_rgba(0,0,0,0.65)]
                     border border-white/10"
        >
          <span className="relative z-10">{title}</span>

          <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-white/5 blur-2xl opacity-30" />
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wireBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.10)" />
          </linearGradient>

          <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((p, idx) => (
          <g key={p.id}>
            <path
              d={p.d}
              fill="none"
              stroke="url(#wireBase)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />

            <path
              d={p.d}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#softGlow)"
              opacity="0.65"
            />

            <path
              d={p.d}
              fill="none"
              stroke="url(#beamGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="120 900"
              style={{
                animation: `beamMove 2.6s ${idx * 0.28}s linear infinite`,
              }}
              opacity="0.9"
              filter="url(#softGlow)"
            />

            <circle
              cx={p.to.x}
              cy={p.to.y}
              r="3"
              fill="rgba(255,255,255,0.35)"
            />
            <circle
              cx={p.to.x}
              cy={p.to.y}
              r="10"
              fill="rgba(255,255,255,0.08)"
            />
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes beamMove {
          0%   { stroke-dashoffset: 900; opacity: 0.25; }
          15%  { opacity: 0.95; }
          100% { stroke-dashoffset: 0;   opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}

export function WiredCard({
  children,
  className = "",
  innerClassName = "",
  cardRef,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  cardRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={cardRef}
      className={`closio-wired-card relative rounded-2xl bg-[#121212] border border-white/10 ${className}`}
    >
      <div className={`relative z-10 ${innerClassName}`}>{children}</div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl closio-border-beam" />
      <style>{`
        .closio-wired-card {
          box-shadow: 0 22px 70px rgba(0,0,0,0.55);
        }
        .closio-border-beam {
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }

        .closio-wired-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 18px;
          background: conic-gradient(
            from 180deg,
            rgba(255,255,255,0) 0deg,
            rgba(255,255,255,0) 270deg,
            rgba(255,255,255,0.25) 305deg,
            rgba(255,255,255,0) 345deg,
            rgba(255,255,255,0) 360deg
          );
          opacity: 0.55;
          filter: blur(6px);
          animation: closioSweep 3.2s linear infinite;
          pointer-events: none;
        }

        @keyframes closioSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const PoweredBySection: React.FC = () => {
  return null;
};

export default PoweredBySection;
