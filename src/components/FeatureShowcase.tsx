import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px', amount: 0.1 });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted]);

  return (
    <span ref={ref} className="inline-block min-w-[1px] min-h-[1em]">
      {displayText}
      {isTyping && (
        <span className="inline-block w-[3px] h-[0.9em] bg-[#6ad4f2] ml-1 animate-pulse" />
      )}
    </span>
  );
};

interface FeatureSection {
  title: string;
  description: string;
  imagePlaceholder: string;
  image?: string;
  reversed?: boolean;
  replaces: string[];
}

const features: FeatureSection[] = [
  {
    title: 'Track Every Deal',
    description: 'Manage your pipeline from first contact to policy issue. See exactly where each deal stands and what needs to happen next.',
    imagePlaceholder: 'Dashboard Preview',
    image: '/final_bob_main_art.png',
    reversed: false,
    replaces: ['Google Sheets tracking', 'Manual pipeline spreadsheets', 'Email deal tracking']
  },
  {
    title: 'Commission Clarity',
    description: 'Know your earnings in real-time. Track splits, overrides, and payouts with complete transparency across your entire team.',
    imagePlaceholder: 'Commission Tracking',
    image: '/new_cover.png',
    reversed: true,
    replaces: ['Commission calculators', 'Excel spreadsheets', 'Manual payout tracking']
  },
  {
    title: 'Team Hierarchy',
    description: 'Visualize your agency structure and monitor performance at every level. Empower your team with the insights they need to succeed.',
    imagePlaceholder: 'Team Analytics',
    image: '/image copy copy copy copy copy copy.png',
    reversed: false,
    replaces: ['Org chart tools', 'Performance spreadsheets', 'Manual reporting systems']
  }
];

interface FeatureCardProps {
  feature: FeatureSection;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <div className="min-w-full snap-center snap-always flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto">
        <div
          className="bg-[#dfe8f0] backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-[#c5d4e0]"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)'
          }}
        >
          <div className={`relative flex flex-col ${
            feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}>
            <div className="w-full lg:w-[45%] p-5 sm:p-6 md:p-10 lg:p-14 flex items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1419] leading-tight">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-3 sm:pt-4 border-t border-[#c5d4e0]">
                  <h3 className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    Replaces
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {feature.replaces.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/80 text-gray-600 border border-[#c5d4e0]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] p-3 sm:p-4">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6ad4f2] via-[#8bb4d9] to-[#d593c0] flex items-center justify-center">
                    <div className="text-center text-white/90">
                      <div className="text-xl sm:text-2xl font-semibold mb-2">{feature.imagePlaceholder}</div>
                      <div className="text-xs sm:text-sm opacity-70">Image placeholder</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-50px 0px -50px 0px',
    triggerOnce: true
  });

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll hijacking effect with complete scroll lock
  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    let isAnimating = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    const LOCK_POSITION = 150; // Consistent lock position from top of viewport

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Check if section is in viewport
      const isInViewport = sectionTop < viewportHeight && sectionBottom > 0;

      if (!isInViewport) {
        return;
      }

      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const currentCard = Math.round(scrollLeft / cardWidth);

      // Define if section should be locked based on position and card index
      const isNearLockPosition = Math.abs(sectionTop - LOCK_POSITION) < 50;
      const isAboveLockPosition = sectionTop > LOCK_POSITION;
      const isBelowLockPosition = sectionTop < LOCK_POSITION;

      // Scrolling down
      if (e.deltaY > 0) {
        // If section is above lock position, snap it to lock position
        if (isAboveLockPosition && sectionTop < viewportHeight * 0.8) {
          e.preventDefault();
          e.stopPropagation();
          const targetScroll = window.scrollY + (sectionTop - LOCK_POSITION);
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          return;
        }

        // Section is locked at position
        if (isNearLockPosition || isBelowLockPosition) {
          // Allow exit only after reaching 3rd card (index 2)
          if (currentCard >= 2) {
            return;
          }

          // Block vertical scroll and navigate horizontally
          e.preventDefault();
          e.stopPropagation();

          // Navigate to next card if not animating
          if (!isAnimating && now - lastScrollTime > 50) {
            isAnimating = true;
            lastScrollTime = now;

            const nextCard = Math.min(currentCard + 1, features.length - 1);
            container.scrollTo({
              left: nextCard * cardWidth,
              behavior: 'smooth'
            });
            setCurrentIndex(nextCard);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              isAnimating = false;
            }, 500);
          }
        }
      }
      // Scrolling up
      else if (e.deltaY < 0) {
        // If section is below lock position, snap it to lock position
        if (isBelowLockPosition && !isNearLockPosition && sectionBottom > viewportHeight * 0.3) {
          e.preventDefault();
          e.stopPropagation();
          const targetScroll = window.scrollY + (sectionTop - LOCK_POSITION);
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          return;
        }

        // Section is locked at position
        if (isNearLockPosition || isAboveLockPosition) {
          // Allow exit only when at first card
          if (currentCard === 0) {
            return;
          }

          // Block vertical scroll and navigate horizontally
          e.preventDefault();
          e.stopPropagation();

          // Navigate to previous card if not animating
          if (!isAnimating && now - lastScrollTime > 50) {
            isAnimating = true;
            lastScrollTime = now;

            const prevCard = Math.max(currentCard - 1, 0);
            container.scrollTo({
              left: prevCard * cardWidth,
              behavior: 'smooth'
            });
            setCurrentIndex(prevCard);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              isAnimating = false;
            }, 500);
          }
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden py-12 sm:py-16 md:py-24">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.22, 0.61, 0.36, 1]
        }}
        className="pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
          <TypewriterText text="/No Limits on what you can do" />
        </h2>
      </motion.div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
