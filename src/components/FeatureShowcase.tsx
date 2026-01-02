import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSection {
  title: string;
  description: string;
  imagePlaceholder: string;
  image?: string;
  reversed?: boolean;
}

const features: FeatureSection[] = [
  {
    title: 'Track Every Deal',
    description: 'Manage your pipeline from first contact to policy issue. See exactly where each deal stands and what needs to happen next.',
    imagePlaceholder: 'Dashboard Preview',
    image: '/final_bob_main_art.png',
    reversed: false
  },
  {
    title: 'Commission Clarity',
    description: 'Know your earnings in real-time. Track splits, overrides, and payouts with complete transparency across your entire team.',
    imagePlaceholder: 'Commission Tracking',
    image: '/new_cover.png',
    reversed: true
  },
  {
    title: 'Team Hierarchy',
    description: 'Visualize your agency structure and monitor performance at every level. Empower your team with the insights they need to succeed.',
    imagePlaceholder: 'Team Analytics',
    image: '/image copy copy copy copy copy copy.png',
    reversed: false
  }
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[95%] mx-auto px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-16 md:mb-20"
        >
          No Limits on what you can do
        </motion.h2>
        <div className="space-y-12 md:space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-100/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-gray-200/50"
            >
              <div className={`relative flex flex-col ${
                feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}>
                {/* Text Content */}
                <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Image Area */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
