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

interface FeatureCardProps {
  feature: FeatureSection;
  index: number;
  progress: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, progress }) => {
  const cardStart = index / features.length;
  const cardEnd = (index + 1) / features.length;
  const cardMid = (cardStart + cardEnd) / 2;

  const isActive = progress >= cardStart && progress < cardEnd;
  const isLast = index === features.length - 1;
  const shouldShow = isActive || (isLast && progress >= cardStart);

  const fadeIn = Math.min(1, Math.max(0, (progress - cardStart) / 0.1));
  const fadeOut = isLast ? 1 : Math.min(1, Math.max(0, (cardEnd - progress) / 0.1));
  const opacity = shouldShow ? Math.min(fadeIn, fadeOut) : 0;

  const yOffset = shouldShow
    ? (1 - fadeIn) * 60
    : 60;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 md:px-8"
      style={{
        opacity,
        transform: `translateY(${yOffset}px)`,
        pointerEvents: shouldShow ? 'auto' : 'none',
        zIndex: shouldShow ? 10 : 0,
      }}
    >
      <div className="w-full max-w-[95%] mx-auto">
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
  );
};

const FeatureShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    return scrollYProgress.on('change', (v) => setProgress(v));
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${(features.length + 0.5) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f18] to-black" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 md:top-12 left-0 right-0 z-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            No Limits on what you can do
          </h2>
        </motion.div>

        <div className="absolute inset-0 pt-24 md:pt-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              progress={progress}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {features.map((_, index) => {
            const cardStart = index / features.length;
            const cardEnd = (index + 1) / features.length;
            const isActive = progress >= cardStart && progress < cardEnd;
            const isLast = index === features.length - 1;
            const shouldHighlight = isActive || (isLast && progress >= cardStart);

            return (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  shouldHighlight
                    ? 'bg-white scale-125'
                    : 'bg-white/30'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
