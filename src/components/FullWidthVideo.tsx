import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FullWidthVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-80px 0px -80px 0px',
    triggerOnce: true
  });

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
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 1, y: 20, scale: 0.99 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 20, scale: 0.99 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }}
      className="relative w-full bg-black px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        <video
          ref={videoRef}
          src="https://www.dropbox.com/scl/fi/tba2zwhrh4gc6n77c4nat/New-Videos.mp4?rlkey=6m363kxzdljpw8g0zi8ti5hxa&st=wgoieyc1&raw=1"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none rounded-2xl" />
      </div>
    </motion.section>
  );
};

export default FullWidthVideo;
