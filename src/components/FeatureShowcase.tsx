import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

interface StackingCardProps {
  feature: FeatureSection;
  index: number;
  totalCards: number;
}

const StackingCard: React.FC<StackingCardProps> = ({ feature, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9]
  );

  const topOffset = 80 + index * 20;

  return (
    <div
      ref={cardRef}
      className="h-screen sticky"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-[calc(100vh-120px)] flex items-center justify-center px-4 md:px-8"
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
    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  return (
    <section className="relative bg-black">
      <div className="sticky top-0 z-30 pt-8 md:pt-12 pb-4 bg-gradient-to-b from-black via-black to-transparent">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          No Limits on what you can do
        </h2>
      </div>

      <div className="relative">
        {features.map((feature, index) => (
          <StackingCard
            key={index}
            feature={feature}
            index={index}
            totalCards={features.length}
          />
        ))}
      </div>

      <div className="h-[50vh]" />
    </section>
  );
};

export default FeatureShowcase;
