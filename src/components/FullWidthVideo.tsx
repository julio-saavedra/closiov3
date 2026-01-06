import { useEffect, useRef, useState } from 'react';

const FullWidthVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            videoElement.play().catch(() => {});
          }
        });
      },
      { threshold: 0.3 }
    );

    const handleEnded = () => {
      setHasPlayed(true);
    };

    videoElement.addEventListener('ended', handleEnded);
    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [hasPlayed]);

  return (
    <section className="relative w-full bg-black px-4 sm:px-6 lg:px-8 pt-4">
      <div className="relative w-full h-[65vh] overflow-hidden rounded-2xl">
        <video
          ref={videoRef}
          src="https://www.dropbox.com/scl/fi/tba2zwhrh4gc6n77c4nat/New-Videos.mp4?rlkey=6m363kxzdljpw8g0zi8ti5hxa&st=wgoieyc1&raw=1"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none rounded-2xl" />
      </div>
    </section>
  );
};

export default FullWidthVideo;
