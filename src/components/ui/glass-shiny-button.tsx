import type React from "react"

interface GlassShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function GlassShinyButton({ children, onClick, className = "", style }: GlassShinyButtonProps) {
  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .glass-shiny-btn {
          --btn-highlight: rgba(106, 212, 242, 0.6);
          --btn-highlight-subtle: rgba(132, 132, 255, 0.4);
          --animation: gradient-angle-glass linear infinite;
          --duration: 3s;
          --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

          isolation: isolate;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          font-weight: 500;
          border: 1px solid transparent;
          border-radius: 0.75rem;
          color: white;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.04) 100%
            ) padding-box,
            conic-gradient(
              from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
              transparent,
              var(--btn-highlight) var(--gradient-percent),
              var(--gradient-shine) calc(var(--gradient-percent) * 2),
              var(--btn-highlight) calc(var(--gradient-percent) * 3),
              transparent calc(var(--gradient-percent) * 4)
            ) border-box;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.1),
            0 4px 20px rgba(0, 0, 0, 0.2);
          transition: var(--transition);
          transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine, box-shadow;
        }

        .glass-shiny-btn::before,
        .glass-shiny-btn::after {
          content: "";
          pointer-events: none;
          position: absolute;
          inset-inline-start: 50%;
          inset-block-start: 50%;
          translate: -50% -50%;
          z-index: -1;
        }

        .glass-shiny-btn:active {
          translate: 0 1px;
        }

        .glass-shiny-btn::before {
          --size: calc(100% - 4px);
          --position: 2px;
          --space: calc(var(--position) * 2);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(
            circle at var(--position) var(--position),
            white calc(var(--position) / 4),
            transparent 0
          ) padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(
            from calc(var(--gradient-angle) + 45deg),
            black,
            transparent 10% 90%,
            black
          );
          border-radius: inherit;
          opacity: 0.3;
          z-index: -1;
        }

        .glass-shiny-btn::after {
          --animation: shimmer-glass linear infinite;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            -50deg,
            transparent,
            var(--btn-highlight),
            transparent
          );
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.4;
        }

        .glass-shiny-btn,
        .glass-shiny-btn::before,
        .glass-shiny-btn::after {
          animation: var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .glass-shiny-btn:is(:hover, :focus-visible) {
          --gradient-percent: 20%;
          --gradient-angle-offset: 95deg;
          --gradient-shine: var(--btn-highlight-subtle);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.15),
            0 4px 30px rgba(106, 212, 242, 0.3),
            0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .glass-shiny-btn:is(:hover, :focus-visible),
        .glass-shiny-btn:is(:hover, :focus-visible)::before,
        .glass-shiny-btn:is(:hover, :focus-visible)::after {
          animation-play-state: running;
        }

        @keyframes gradient-angle-glass {
          to {
            --gradient-angle: 360deg;
          }
        }

        @keyframes shimmer-glass {
          to {
            rotate: 360deg;
          }
        }
      `}</style>

      <button
        className={`glass-shiny-btn ${className}`}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
    </>
  )
}
