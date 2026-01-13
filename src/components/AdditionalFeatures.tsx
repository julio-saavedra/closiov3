import React from 'react';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="pt-40 pb-28 sm:pt-44 sm:pb-32 md:pt-48 md:pb-36 lg:pt-56 lg:pb-40 bg-[#0D0D0D] relative overflow-visible">
      <div className="flex justify-center px-6">
        <div
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px 80px 0 0',
            textAlign: 'center',
            overflow: 'visible',
            background: 'rgba(20, 20, 20, 0.6)',
          }}
        >
          {/* Left Decorative Rectangle */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '180px',
              background: 'linear-gradient(180deg, #6ad4f2 0%, rgba(106, 212, 242, 0.4) 100%)',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(106, 212, 242, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
              zIndex: 10,
            }}
          />
          <div
            className="absolute hidden md:block"
            style={{
              left: '-24px',
              top: '50%',
              transform: 'translateY(calc(-50% - 200px))',
              width: '12px',
              height: '120px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)',
              borderRadius: '6px',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
              zIndex: 10,
            }}
          />

          {/* Right Decorative Rectangle */}
          <div
            className="absolute hidden md:block"
            style={{
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '180px',
              background: 'linear-gradient(180deg, #6ad4f2 0%, rgba(106, 212, 242, 0.4) 100%)',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(106, 212, 242, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
              zIndex: 10,
            }}
          />
          <div
            className="absolute hidden md:block"
            style={{
              right: '-24px',
              top: '50%',
              transform: 'translateY(calc(-50% + 200px))',
              width: '12px',
              height: '120px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)',
              borderRadius: '6px',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
              zIndex: 10,
            }}
          />
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              top: -1px;
              bottom: -80px;
              left: -20px;
              right: -20px;
              border-radius: 80px;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.08) 15%,
                rgba(255, 255, 255, 0.03) 30%,
                rgba(255, 255, 255, 0.01) 50%,
                rgba(255, 255, 255, 0.00) 70%
              );
              filter: blur(4px);
              opacity: 0.65;
              z-index: 0;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              The platform starts here but doesn't stop
            </h2>
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              More advanced features below
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
