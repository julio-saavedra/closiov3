import React from 'react';
import { motion } from 'framer-motion';

const BookIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <path d="M60 50 L60 150 L140 150 L140 50 Z" fill="#ffffff" opacity="0.9" />
    <path d="M60 50 L140 50 L150 40 L70 40 Z" fill="#ffffff" opacity="0.7" />
    <path d="M140 50 L140 150 L150 140 L150 40 Z" fill="#cccccc" opacity="0.8" />
    <rect x="70" y="65" width="60" height="4" fill="#000" opacity="0.3" rx="2" />
    <rect x="70" y="80" width="50" height="4" fill="#000" opacity="0.3" rx="2" />
    <rect x="70" y="95" width="55" height="4" fill="#000" opacity="0.3" rx="2" />
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="75" y="40" width="50" height="35" rx="4" fill="#ffffff" opacity="0.9" />
    <rect x="85" y="35" width="50" height="35" rx="4" fill="#cccccc" opacity="0.7" />
    <line x1="100" y1="75" x2="100" y2="95" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
    <line x1="100" y1="95" x2="60" y2="95" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
    <line x1="100" y1="95" x2="140" y2="95" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
    <rect x="35" y="105" width="40" height="30" rx="4" fill="#ffffff" opacity="0.9" />
    <rect x="45" y="100" width="40" height="30" rx="4" fill="#cccccc" opacity="0.7" />
    <rect x="115" y="105" width="40" height="30" rx="4" fill="#ffffff" opacity="0.9" />
    <rect x="125" y="100" width="40" height="30" rx="4" fill="#cccccc" opacity="0.7" />
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <g opacity="0.5">
      <ellipse cx="65" cy="145" rx="28" ry="12" fill="#888888" />
      <ellipse cx="65" cy="140" rx="28" ry="12" fill="#aaaaaa" />
      <ellipse cx="65" cy="135" rx="28" ry="12" fill="#cccccc" />
      <ellipse cx="65" cy="130" rx="28" ry="12" fill="#ffffff" />
      <text x="65" y="135" fontSize="16" fontWeight="bold" fill="#000" textAnchor="middle" opacity="0.4">$</text>
    </g>

    <g opacity="0.7">
      <ellipse cx="135" cy="155" rx="28" ry="12" fill="#888888" />
      <ellipse cx="135" cy="150" rx="28" ry="12" fill="#999999" />
      <ellipse cx="135" cy="145" rx="28" ry="12" fill="#aaaaaa" />
      <ellipse cx="135" cy="140" rx="28" ry="12" fill="#bbbbbb" />
      <ellipse cx="135" cy="135" rx="28" ry="12" fill="#cccccc" />
      <ellipse cx="135" cy="130" rx="28" ry="12" fill="#dddddd" />
      <ellipse cx="135" cy="125" rx="28" ry="12" fill="#ffffff" />
      <text x="135" y="130" fontSize="16" fontWeight="bold" fill="#000" textAnchor="middle" opacity="0.4">$</text>
    </g>

    <g>
      <ellipse cx="100" cy="115" rx="35" ry="15" fill="#777777" />
      <ellipse cx="100" cy="108" rx="35" ry="15" fill="#888888" />
      <ellipse cx="100" cy="101" rx="35" ry="15" fill="#999999" />
      <ellipse cx="100" cy="94" rx="35" ry="15" fill="#aaaaaa" />
      <ellipse cx="100" cy="87" rx="35" ry="15" fill="#bbbbbb" />
      <ellipse cx="100" cy="80" rx="35" ry="15" fill="#cccccc" />
      <ellipse cx="100" cy="73" rx="35" ry="15" fill="#dddddd" />
      <ellipse cx="100" cy="66" rx="35" ry="15" fill="#eeeeee" />
      <ellipse cx="100" cy="59" rx="35" ry="15" fill="#ffffff" />
      <text x="100" y="65" fontSize="22" fontWeight="bold" fill="#000" textAnchor="middle" opacity="0.35">$</text>
    </g>

    <g opacity="0.6">
      <path d="M155 75 L155 45 L148 52 M155 45 L162 52" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M165 85 L165 55 L158 62 M165 55 L172 62" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </g>

    <g opacity="0.4">
      <text x="40" y="55" fontSize="18" fontWeight="bold" fill="#ffffff">$</text>
      <text x="55" y="45" fontSize="14" fontWeight="bold" fill="#ffffff">$</text>
      <text x="30" y="70" fontSize="12" fontWeight="bold" fill="#ffffff">$</text>
    </g>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <line x1="30" y1="50" x2="30" y2="155" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
    <line x1="30" y1="155" x2="175" y2="155" stroke="#ffffff" strokeWidth="2" opacity="0.3" />

    <line x1="30" y1="70" x2="175" y2="70" stroke="#ffffff" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
    <line x1="30" y1="95" x2="175" y2="95" stroke="#ffffff" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
    <line x1="30" y1="120" x2="175" y2="120" stroke="#ffffff" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />

    <g>
      <rect x="40" y="115" width="16" height="40" rx="2" fill="#ffffff" opacity="0.85" />
      <rect x="44" y="112" width="16" height="40" rx="2" fill="#aaaaaa" opacity="0.5" />
    </g>

    <g>
      <rect x="65" y="85" width="16" height="70" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="69" y="82" width="16" height="70" rx="2" fill="#aaaaaa" opacity="0.5" />
    </g>

    <g>
      <rect x="90" y="55" width="16" height="100" rx="2" fill="#ffffff" opacity="0.95" />
      <rect x="94" y="52" width="16" height="100" rx="2" fill="#aaaaaa" opacity="0.5" />
    </g>

    <g>
      <rect x="115" y="95" width="16" height="60" rx="2" fill="#ffffff" opacity="0.85" />
      <rect x="119" y="92" width="16" height="60" rx="2" fill="#aaaaaa" opacity="0.5" />
    </g>

    <g>
      <rect x="140" y="70" width="16" height="85" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="144" y="67" width="16" height="85" rx="2" fill="#aaaaaa" opacity="0.5" />
    </g>

    <polyline
      points="48,110 73,82 98,52 123,90 148,65"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      opacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="48" cy="110" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="73" cy="82" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="98" cy="52" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="123" cy="90" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="148" cy="65" r="3" fill="#ffffff" opacity="0.6" />
  </svg>
);

const MedalsIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <line x1="55" y1="30" x2="55" y2="75" stroke="#888888" strokeWidth="3" opacity="0.6" />
    <circle cx="55" cy="100" r="30" fill="#9ca3af" opacity="0.9" />
    <circle cx="55" cy="100" r="24" fill="#d1d5db" opacity="0.95" />
    <circle cx="55" cy="100" r="18" fill="#9ca3af" opacity="0.7" />
    <text x="55" y="106" fontSize="18" fontWeight="bold" fill="#ffffff" textAnchor="middle" opacity="0.9">3</text>

    <line x1="145" y1="30" x2="145" y2="75" stroke="#a87c4f" strokeWidth="3" opacity="0.6" />
    <circle cx="145" cy="100" r="30" fill="#a87c4f" opacity="0.9" />
    <circle cx="145" cy="100" r="24" fill="#cd9b6a" opacity="0.95" />
    <circle cx="145" cy="100" r="18" fill="#a87c4f" opacity="0.7" />
    <text x="145" y="106" fontSize="18" fontWeight="bold" fill="#ffffff" textAnchor="middle" opacity="0.9">2</text>

    <line x1="100" y1="20" x2="100" y2="55" stroke="#d4af37" strokeWidth="3" opacity="0.7" />
    <circle cx="100" cy="80" r="35" fill="#d4af37" opacity="0.95" />
    <circle cx="100" cy="80" r="28" fill="#f5d77a" opacity="0.95" />
    <circle cx="100" cy="80" r="20" fill="#d4af37" opacity="0.8" />
    <text x="100" y="87" fontSize="22" fontWeight="bold" fill="#ffffff" textAnchor="middle" opacity="0.95">1</text>
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
      icon: MedalsIcon,
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
              <div
                key={index}
                className={`group relative overflow-hidden border border-white/10 rounded-2xl ${
                  isTopRow ? 'col-span-1 lg:col-span-3' : 'col-span-1 lg:col-span-2'
                }`}
                style={{
                  background: '#000000',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative p-8 flex flex-col h-full min-h-[340px]">
                  <div
                    className="w-28 h-28 mb-8"
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <Icon />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
