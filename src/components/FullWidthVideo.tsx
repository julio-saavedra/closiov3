import { useEffect, useRef, useState } from 'react';

const FullWidthVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            videoElement.play().catch(() => {});
          } else {
            setIsInView(false);
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <video
          ref={videoRef}
          src="https://www.dropbox.com/scl/fi/gwibdbcluxfef5k8da25e/New-modern-video-for-home-page.mp4?rlkey=ry2rmgsr32c8qf4xb6vdshrwo&st=7dv9a7uo&raw=1"
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      </div>
    </section>
  );
};

export default FullWidthVideo;
