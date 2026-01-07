const MacBookPro3D: React.FC = () => {
  return (
    <div className="mbp-wrap">
      <div className="mbp-scene">
        <div className="mbp" style={{ '--screen': "url('/image copy copy copy copy copy copy copy copy copy copy copy.png')" } as React.CSSProperties}>
          <div className="lid">
            <div className="bezel">
              <div className="camera"></div>
              <div className="screen"></div>
            </div>
          </div>

          <div className="base">
            <div className="deck">
              <div className="keyboard"></div>
              <div className="trackpad"></div>
            </div>
            <div className="lip"></div>
          </div>

          <div className="shadow"></div>
        </div>
      </div>

      <style>{`
        .mbp-wrap {
          width: min(900px, 92vw);
          margin: 0 auto;
          padding: 20px 0;
        }

        .mbp-scene {
          position: relative;
          aspect-ratio: 16 / 9;
          display: grid;
          place-items: center;
          perspective: 1400px;
        }

        .mbp {
          position: relative;
          width: min(820px, 92vw);
          height: auto;
          transform-style: preserve-3d;
          transform: rotateY(18deg) rotateX(6deg) rotateZ(-1deg) translateZ(0);
          animation: mbp-float 8s ease-in-out infinite;
        }

        @keyframes mbp-float {
          0%, 100% { transform: rotateY(18deg) rotateX(6deg) rotateZ(-1deg) translateY(0); }
          50% { transform: rotateY(18deg) rotateX(6deg) rotateZ(-1deg) translateY(-8px); }
        }

        .mbp .shadow {
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: -22px;
          height: 60px;
          background: radial-gradient(closest-side, rgba(0, 0, 0, 0.55), transparent 70%);
          filter: blur(10px);
          transform: translateZ(-60px);
          opacity: 0.75;
        }

        .lid {
          position: absolute;
          left: 50%;
          top: 10%;
          width: 86%;
          aspect-ratio: 16 / 10;
          transform-style: preserve-3d;
          transform-origin: 50% 100%;
          transform: translateX(-50%) rotateX(-92deg);
          animation: mbp-open 1.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes mbp-open {
          0% { transform: translateX(-50%) rotateX(-92deg); }
          100% { transform: translateX(-50%) rotateX(-18deg); }
        }

        .bezel {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.18)), #0a0b0f;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .camera {
          position: absolute;
          top: 10px;
          left: 50%;
          width: 10px;
          height: 10px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(120, 140, 255, 0.7), rgba(0, 0, 0, 0.9));
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.03);
          opacity: 0.9;
          z-index: 3;
        }

        .screen {
          position: absolute;
          inset: 14px 14px 18px 14px;
          border-radius: 16px;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.12), transparent 35%),
            var(--screen) center/cover no-repeat;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
          filter: saturate(1.02) contrast(1.03);
        }

        .lid::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.10), rgba(0, 0, 0, 0.35)), #2a2f38;
          transform: translateZ(-2px);
          z-index: -1;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .base {
          position: relative;
          width: 90%;
          aspect-ratio: 16 / 5.8;
          margin: 0 auto;
          transform-style: preserve-3d;
          transform: translateY(46%) translateZ(0);
        }

        .deck {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(0, 0, 0, 0.2)), #2b303a;
          box-shadow: 0 45px 90px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 -14px 30px rgba(0, 0, 0, 0.35);
          overflow: hidden;
        }

        .lip {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 18px;
          border-radius: 0 0 22px 22px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(0, 0, 0, 0.45)), #252a33;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10);
          transform: translateZ(-10px);
        }

        .keyboard {
          position: absolute;
          left: 10%;
          right: 10%;
          top: 14%;
          height: 44%;
          border-radius: 12px;
          background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.06), transparent 55%), #0b0d12;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .keyboard::before {
          content: "";
          position: absolute;
          inset: 10px;
          background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 22px),
            repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 18px);
          opacity: 0.35;
          border-radius: 10px;
          filter: blur(0.1px);
        }

        .trackpad {
          position: absolute;
          left: 36%;
          right: 36%;
          top: 62%;
          height: 26%;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.18)), #1f2430;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.07);
        }

        .base::before {
          content: "";
          position: absolute;
          left: 6%;
          right: 6%;
          top: 6%;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.55), transparent);
          opacity: 0.55;
        }

        @media (max-width: 640px) {
          .mbp-wrap { width: 96vw; }
          .mbp { transform: rotateY(14deg) rotateX(7deg) rotateZ(-1deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mbp { animation: none; }
          .lid { animation: none; transform: translateX(-50%) rotateX(-18deg); }
        }
      `}</style>
    </div>
  );
};

export default MacBookPro3D;
