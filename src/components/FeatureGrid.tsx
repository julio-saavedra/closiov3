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

const VerticalLine: React.FC = () => {
  return (
    <div
      className="absolute left-[3vw] pointer-events-none"
      style={{ top: '-100px', bottom: '-100px' }}
    >
      <div
        className="absolute inset-0 bg-white/10 blur-xl"
        style={{ width: '20px', transform: 'translateX(-50%)' }}
      />
      <div
        className="absolute inset-0 bg-white"
        style={{
          width: '5px',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 12px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.2)'
        }}
      />
    </div>
  );
};

const FeaturedCard: React.FC<{ title: string; description: string; image?: string; delay?: number }> = ({
  title,
  description,
  image,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group h-full"
    >
      <div
        className="absolute -inset-[1px] bg-gradient-to-r from-[#6ad4f2]/40 via-[#8bb4d9]/40 to-[#d593c0]/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          filter: 'blur(20px)',
        }}
      />
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d1117]/90 via-[#0d1117]/80 to-[#0d1117]/90 backdrop-blur-2xl border border-white/20 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6ad4f2]/50 to-transparent" />

        <div className="relative flex-1 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center">
              <div className="w-32 h-32 rounded-2xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative p-8">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6ad4f2] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const featuredFeature = {
    title: 'Commission Tracking',
    description: 'Real-time visibility into your commission structure with automated calculations and transparent breakdowns.',
    image: '/commission-_closio_website.png',
  };

  const features = [
    {
      title: 'Book of Business',
      description: 'Manage your entire portfolio of clients and policies in one organized, searchable database.',
      image: '/bofb-_closio_website.png',
    },
    {
      title: 'Team Hierarchy',
      description: 'Visualize your agency structure with clear reporting lines and team performance metrics.',
      image: '/team_hierarchy-_closio_website.png',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Powerful insights and metrics to track performance, close rates, and revenue at a glance.',
      image: '/main_dashboard-_closio_website.png',
    },
    {
      title: 'Leaderboard',
      description: 'Track top performers and motivate your team with real-time rankings and achievements.',
      image: '/leaderboard-_closio_website.png',
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <VerticalLine />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
              Core Features
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:grid-rows-[1fr]">
          <div className="lg:col-span-1 h-full">
            <FeaturedCard
              title={featuredFeature.title}
              description={featuredFeature.description}
              image={featuredFeature.image}
              delay={0}
            />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                imagePosition="top"
                size="medium"
                delay={(index + 1) * 0.1}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
