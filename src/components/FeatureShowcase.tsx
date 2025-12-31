import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSection {
  title: string;
  description: string;
  imagePlaceholder: string;
  reversed?: boolean;
}

const features: FeatureSection[] = [
  {
    title: 'Track Every Deal',
    description: 'Manage your pipeline from first contact to policy issue. See exactly where each deal stands and what needs to happen next.',
    imagePlaceholder: 'Dashboard Preview',
    reversed: false
  },
  {
    title: 'Commission Clarity',
    description: 'Know your earnings in real-time. Track splits, overrides, and payouts with complete transparency across your entire team.',
    imagePlaceholder: 'Commission Tracking',
    reversed: true
  },
  {
    title: 'Team Performance',
    description: 'Visualize your agency structure and monitor performance at every level. Empower your team with the insights they need to succeed.',
    imagePlaceholder: 'Team Analytics',
    reversed: false
  }
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`flex flex-col gap-8 items-center ${
                feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text Content */}
              <div className={`w-full lg:w-1/2 space-y-6 ${
                feature.reversed ? 'lg:pl-12' : 'lg:pr-12'
              }`}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image Area with Gradient */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#6ad4f2] via-[#8bb4d9] to-[#d593c0] shadow-2xl">
                  {/* Placeholder for image - user will add images later */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/90">
                      <div className="text-2xl font-semibold mb-2">{feature.imagePlaceholder}</div>
                      <div className="text-sm opacity-70">Image placeholder</div>
                    </div>
                  </div>

                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
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
