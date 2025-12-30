import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Role {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  benefits: string[];
}

const roles: Role[] = [
  {
    id: 'owner',
    title: 'Agency Owner',
    subtitle: 'Full visibility and control over your entire operation',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Complete visibility across all agents and pipelines',
      'Commission split management and automated payouts',
      'Performance analytics and team productivity metrics',
      'Revenue forecasting and business intelligence'
    ]
  },
  {
    id: 'manager',
    title: 'Manager',
    subtitle: 'Lead your team with data-driven insights',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Agent coaching tools and performance tracking',
      'Pipeline forecasting and conversion analytics',
      'Team goal setting and progress monitoring',
      'Activity reports and leaderboard rankings'
    ]
  },
  {
    id: 'agent',
    title: 'Agent',
    subtitle: 'Everything you need to close more deals',
    image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Personal pipeline and activity management',
      'Commission tracking and earning projections',
      'Client communication and follow-up automation',
      'Mobile-ready access to your entire book of business'
    ]
  }
];

const RoleTabs: React.FC = () => {
  const [activeRole, setActiveRole] = useState('owner');
  const currentRole = roles.find(r => r.id === activeRole) || roles[0];

  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-[#2C66FF]/10 text-[#2C66FF] rounded-full border border-[#2C66FF]/20">
              Role-Based Experience
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
          >
            Tailored to Your Role
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#A8B3C7] max-w-xl mx-auto"
          >
            Every user gets exactly what they need to be successful
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0A1628]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/50">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`
                  relative px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300
                  ${activeRole === role.id
                    ? 'text-white'
                    : 'text-[#6B7A94] hover:text-white'
                  }
                `}
              >
                {activeRole === role.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#2C66FF] to-[#1E4FD9] rounded-xl shadow-lg shadow-[#2C66FF]/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{role.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2C66FF] to-[#1E4FD9] flex items-center justify-center shadow-lg shadow-[#2C66FF]/30">
                    <span className="text-white text-xl font-bold">
                      {currentRole.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {currentRole.title}
                    </h3>
                    <p className="text-[#6B7A94] text-sm mt-0.5">{currentRole.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentRole.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#2C66FF]/30 hover:from-[#2C66FF]/[0.08] hover:to-[#2C66FF]/[0.02] transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#2C66FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#2C66FF]/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                      </div>
                      <p className="text-[#C4CCD9] leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2C66FF]/20 via-[#1E4FD9]/10 to-[#2C66FF]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#2C66FF]/50 via-transparent to-[#1E4FD9]/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A1628]">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={currentRole.image}
                      alt={currentRole.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/50 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2">
                      {roles.map((role) => (
                        <div
                          key={role.id}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            role.id === activeRole
                              ? 'w-8 bg-[#2C66FF]'
                              : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
