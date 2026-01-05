import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  delay?: number;
  className?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'background';
  size?: 'small' | 'medium' | 'large';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  delay = 0,
  className = '',
  imagePosition = 'top',
  size = 'medium',
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageHeight = size === 'large' ? 'h-64' : size === 'medium' ? 'h-48' : 'h-36';

  if (imagePosition === 'left' || imagePosition === 'right') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/[0.08] backdrop-blur-xl ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6ad4f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`flex ${imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'} h-full`}>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#6ad4f2] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
              {description}
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (imagePosition === 'background') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`group relative rounded-2xl overflow-hidden ${className}`}
      >
        <div className="absolute inset-0">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a1f2e] to-[#0d1117]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6ad4f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative h-full flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#6ad4f2] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/[0.08] backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6ad4f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative ${imageHeight} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20 group-hover:bg-[#6ad4f2]/15 group-hover:border-[#6ad4f2]/30 transition-all duration-300" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6ad4f2] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Commission Tracking',
      description: 'Real-time visibility into your commission structure with automated calculations and transparent breakdowns.',
      image: '/commission-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'large' as const,
      className: 'md:col-span-2 lg:col-span-1 lg:row-span-2',
    },
    {
      title: 'Book of Business',
      description: 'Manage your entire portfolio of clients and policies in one organized, searchable database.',
      image: '/bofb-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'small' as const,
      className: '',
    },
    {
      title: 'Team Hierarchy',
      description: 'Visualize your agency structure with clear reporting lines and team performance metrics.',
      image: '/team_hierarchy-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'small' as const,
      className: '',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Powerful insights and metrics to track performance, close rates, and revenue at a glance.',
      image: '/main_dashboard-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'medium' as const,
      className: 'lg:col-span-2',
    },
    {
      title: 'Estimated Payouts',
      description: 'Forecast your earnings with intelligent payout predictions based on your pipeline.',
      image: '/estimated_payouts-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'large' as const,
      className: 'lg:row-span-2',
    },
    {
      title: 'Leaderboard',
      description: 'Track top performers and motivate your team with real-time rankings and achievements.',
      image: '/leaderboard-_closio_website.png',
      imagePosition: 'top' as const,
      size: 'large' as const,
      className: 'lg:row-span-2',
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
              Everything You Need
            </span>{' '}
            <span className="text-white">to Win</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imagePosition={feature.imagePosition}
              size={feature.size}
              delay={index * 0.1}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
