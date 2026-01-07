import React, { useRef, useEffect, useState } from 'react';
import Robot3D from './Robot3D';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 800"
      className="absolute left-0 w-[35vw] pointer-events-none"
      style={{ top: '-20px', height: 'calc(100% + 40px)' }}
      preserveAspectRatio="none"
    >
      <path
        d="M 50 -50
           L 50 200
           Q 50 280, 130 280
           L 340 280
           Q 420 280, 420 360
           L 420 850"
        fill="none"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-[2%] sm:left-[3%] lg:left-[4%] top-[55%] -translate-y-1/2 w-[280px] sm:w-[340px] lg:w-[400px] xl:w-[450px] h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none">
      <Robot3D />
    </div>
  );
};

const MobileSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            video.play().catch((error) => {
              console.log('Video autoplay failed:', error);
            });
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasPlayed]);

  return (
    <section id="mobile" className="min-h-[600px] h-[600px] sm:h-[650px] lg:h-[700px] xl:h-[750px] overflow-visible relative">
      <AngularLine />
      <Robot3DContainer />
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="relative w-full h-full flex items-end justify-end pr-0 pb-0">
          <video
            ref={videoRef}
            src="https://www.dropbox.com/scl/fi/zsaggxsj4klujoec2wcam/Brand-new-copy-of-mobile-art-video.mp4?rlkey=4983zhcsv1roi1hbudhyum4df&st=ruomps0s&raw=1"
            className="h-[70%] w-auto max-w-none object-contain drop-shadow-2xl"
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
