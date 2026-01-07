import React, { useRef, useEffect, useState } from 'react';
import Robot3D from './Robot3D';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="absolute left-0 top-0 h-full w-[35vw] min-h-[500px]"
      preserveAspectRatio="none"
    >
      <path
        d="M 50 -50
           L 50 160
           Q 50 240, 130 240
           L 340 240
           Q 420 240, 420 320
           L 420 750"
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
    <div className="absolute left-[60px] sm:left-[80px] lg:left-[100px] top-[50%] -translate-y-1/2 w-[280px] sm:w-[320px] lg:w-[360px] h-[400px] sm:h-[450px] lg:h-[500px] pointer-events-none overflow-visible">
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
    <section id="mobile" className="h-[500px] sm:h-[550px] lg:h-[600px] overflow-visible relative">
      <AngularLine />
      <Robot3DContainer />
      <div className="absolute inset-0 flex items-start justify-end pt-0">
        <div className="relative w-full h-full flex items-start justify-end pr-0">
          <video
            ref={videoRef}
            src="https://www.dropbox.com/scl/fi/zsaggxsj4klujoec2wcam/Brand-new-copy-of-mobile-art-video.mp4?rlkey=4983zhcsv1roi1hbudhyum4df&st=ruomps0s&raw=1"
            className="h-[100%] w-auto max-w-none object-contain drop-shadow-2xl"
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
