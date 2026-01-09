import React from 'react';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="pt-40 pb-28 sm:pt-44 sm:pb-32 md:pt-48 md:pb-36 lg:pt-56 lg:pb-40 bg-black">
      <div className="flex justify-center px-6">
        <div
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible',
          }}
        >
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              top: -1px;
              bottom: -1px;
              left: -20px;
              right: -20px;
              border-radius: inherit;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.08) 20%,
                rgba(255, 255, 255, 0.02) 40%,
                rgba(255, 255, 255, 0.00) 60%
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
              The platform starts here but doesnt stop
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
