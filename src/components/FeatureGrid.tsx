import React from 'react';
import { motion } from 'framer-motion';

const BookIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ad4f2" />
        <stop offset="100%" stopColor="#4a9db8" />
      </linearGradient>
    </defs>
    <path d="M60 50 L60 150 L140 150 L140 50 Z" fill="url(#bookGradient)" opacity="0.9" />
    <path d="M60 50 L140 50 L150 40 L70 40 Z" fill="url(#bookGradient)" opacity="0.7" />
    <path d="M140 50 L140 150 L150 140 L150 40 Z" fill="#3a7d98" opacity="0.8" />
    <rect x="70" y="65" width="60" height="4" fill="#fff" opacity="0.4" rx="2" />
    <rect x="70" y="80" width="50" height="4" fill="#fff" opacity="0.4" rx="2" />
    <rect x="70" y="95" width="55" height="4" fill="#fff" opacity="0.4" rx="2" />
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hierarchyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8bb4d9" />
        <stop offset="100%" stopColor="#6a94b9" />
      </linearGradient>
    </defs>
    <rect x="75" y="40" width="50" height="35" rx="4" fill="url(#hierarchyGradient)" opacity="0.9" />
    <rect x="85" y="35" width="50" height="35" rx="4" fill="#6a94b9" opacity="0.7" />
    <line x1="100" y1="75" x2="100" y2="95" stroke="#6ad4f2" strokeWidth="3" opacity="0.6" />
    <line x1="100" y1="95" x2="60" y2="95" stroke="#6ad4f2" strokeWidth="3" opacity="0.6" />
    <line x1="100" y1="95" x2="140" y2="95" stroke="#6ad4f2" strokeWidth="3" opacity="0.6" />
    <rect x="35" y="105" width="40" height="30" rx="4" fill="url(#hierarchyGradient)" opacity="0.9" />
    <rect x="45" y="100" width="40" height="30" rx="4" fill="#6a94b9" opacity="0.7" />
    <rect x="115" y="105" width="40" height="30" rx="4" fill="url(#hierarchyGradient)" opacity="0.9" />
    <rect x="125" y="100" width="40" height="30" rx="4" fill="#6a94b9" opacity="0.7" />
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ad4f2" />
        <stop offset="100%" stopColor="#4a9db8" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="70" rx="45" ry="40" fill="url(#coinGradient)" opacity="0.9" />
    <ellipse cx="105" cy="65" rx="45" ry="40" fill="#4a9db8" opacity="0.7" />
    <path d="M 60 65 L 60 105 Q 60 125, 105 130 Q 150 125, 150 105 L 150 65" fill="#3a7d98" opacity="0.8" />
    <ellipse cx="105" cy="65" rx="45" ry="40" fill="url(#coinGradient)" opacity="0.95" />
    <text x="105" y="75" fontSize="40" fontWeight="bold" fill="#fff" textAnchor="middle" opacity="0.5">$</text>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8bb4d9" />
        <stop offset="100%" stopColor="#6a94b9" />
      </linearGradient>
    </defs>
    <rect x="45" y="90" width="15" height="50" rx="3" fill="url(#dashGradient)" opacity="0.9" />
    <rect x="50" y="85" width="15" height="50" rx="3" fill="#6a94b9" opacity="0.7" />
    <rect x="75" y="70" width="15" height="70" rx="3" fill="url(#dashGradient)" opacity="0.9" />
    <rect x="80" y="65" width="15" height="70" rx="3" fill="#6a94b9" opacity="0.7" />
    <rect x="105" y="55" width="15" height="85" rx="3" fill="url(#dashGradient)" opacity="0.9" />
    <rect x="110" y="50" width="15" height="85" rx="3" fill="#6a94b9" opacity="0.7" />
    <rect x="135" y="75" width="15" height="65" rx="3" fill="url(#dashGradient)" opacity="0.9" />
    <rect x="140" y="70" width="15" height="65" rx="3" fill="#6a94b9" opacity="0.7" />
  </svg>
);

const TrophyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ad4f2" />
        <stop offset="100%" stopColor="#4a9db8" />
      </linearGradient>
    </defs>
    <path d="M 70 50 L 65 80 Q 65 95, 80 95 L 80 50 Z" fill="url(#trophyGradient)" opacity="0.8" />
    <path d="M 130 50 L 135 80 Q 135 95, 120 95 L 120 50 Z" fill="url(#trophyGradient)" opacity="0.8" />
    <ellipse cx="100" cy="50" rx="30" ry="8" fill="#4a9db8" opacity="0.6" />
    <path d="M 70 50 L 70 85 Q 70 110, 100 115 Q 130 110, 130 85 L 130 50 Z" fill="url(#trophyGradient)" opacity="0.9" />
    <path d="M 75 50 L 75 85 Q 75 110, 105 115 Q 135 110, 135 85 L 135 50 Z" fill="#4a9db8" opacity="0.7" />
    <rect x="90" y="115" width="20" height="25" rx="2" fill="url(#trophyGradient)" opacity="0.9" />
    <rect x="95" y="110" width="20" height="25" rx="2" fill="#4a9db8" opacity="0.7" />
    <rect x="75" y="140" width="50" height="8" rx="3" fill="url(#trophyGradient)" opacity="0.9" />
    <rect x="80" y="135" width="50" height="8" rx="3" fill="#4a9db8" opacity="0.7" />
  </svg>
);

const VerticalLine: React.FC = () => {
  return (
    <div
      className="absolute left-[3vw] pointer-events-none"
      style={{ top: '-100px', bottom: '-100px' }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{
          width: '19px',
          transform: 'translateX(-50%)',
          boxShadow: 'none'
        }}
      />
    </div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Book of Business',
      description: 'Manage your entire portfolio of clients and policies in one organized, searchable database.',
      icon: BookIcon,
    },
    {
      title: 'Team Hierarchy',
      description: 'Visualize your agency structure with clear reporting lines and team performance metrics.',
      icon: HierarchyIcon,
    },
    {
      title: 'Commission Tracking',
      description: 'Real-time visibility into your commission structure with automated calculations and transparent breakdowns.',
      icon: CommissionIcon,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Powerful insights and metrics to track performance, close rates, and revenue at a glance.',
      icon: DashboardIcon,
    },
    {
      title: 'Leaderboard',
      description: 'Track top performers and motivate your team with real-time rankings and achievements.',
      icon: TrophyIcon,
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
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold md:max-w-md">
            <span className="text-white">
              / CORE FEATURES
            </span>
          </h2>
          <p className="text-white/50 text-lg md:max-w-xl md:text-right">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isTopRow = index < 2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative rounded-3xl overflow-hidden bg-[#1a1f2e] border border-white/[0.06] backdrop-blur-xl ${
                  isTopRow ? 'col-span-1 lg:col-span-3' : 'col-span-1 lg:col-span-2'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6ad4f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 flex flex-col h-full min-h-[340px]">
                  <div className="w-24 h-24 mb-8">
                    <Icon />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6ad4f2] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
