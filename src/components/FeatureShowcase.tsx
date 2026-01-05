import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

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

const FeatureShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const segmentSize = 1 / features.length;
    const newIndex = Math.min(
      features.length - 1,
      Math.floor(latest / segmentSize)
    );
    setActiveIndex(newIndex);
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f18] to-black" />

        <div className="absolute top-8 md:top-12 left-0 right-0 z-20 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            No Limits on what you can do
          </h2>
        </div>

        <div className="relative h-full flex items-center justify-center pt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center px-4 md:px-8 pt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : activeIndex > index ? -50 : 50,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                pointerEvents: activeIndex === index ? 'auto' : 'none',
                zIndex: activeIndex === index ? 10 : 0,
              }}
            >
              <div className="w-full max-w-[95%] mx-auto px-4 md:px-16">
                <div className="bg-[#1a2332]/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className={`relative flex flex-col ${
                    feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}>
                    <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex items-center">
                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                          {feature.title}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="pt-4 border-t border-white/10">
                          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Replaces
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {feature.replaces.map((item, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-[55%] overflow-hidden rounded-2xl m-4">
                      <div className="relative aspect-[4/3]">
                        {feature.image ? (
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#6ad4f2] via-[#8bb4d9] to-[#d593c0] flex items-center justify-center rounded-2xl">
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
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
