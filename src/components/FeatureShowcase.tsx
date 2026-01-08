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
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
    rootMargin: '-100px 0px -100px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isVisible
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 80, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="w-full flex items-center justify-center px-4 md:px-8"
    >
      <div className="w-full max-w-[90%] lg:max-w-[85%] mx-auto">
        <div
          className="bg-[#f5f5f7] backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)'
          }}
        >
          <div className={`relative flex flex-col ${
            feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}>
            <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-14 flex items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1419] leading-tight">
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Replaces
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {feature.replaces.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] p-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6ad4f2] via-[#8bb4d9] to-[#d593c0] flex items-center justify-center">
                    <div className="text-center text-white/90">
                      <div className="text-2xl font-semibold mb-2">{feature.imagePlaceholder}</div>
                      <div className="text-sm opacity-70">Image placeholder</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureShowcase: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-50px 0px -50px 0px'
  });

  return (
    <section className="relative bg-black overflow-hidden py-16 md:py-24">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerVisible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 40 }
        }
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="pt-8 md:pt-12 pb-12 md:pb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          <TypewriterText text="/No Limits on what you can do" />
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
