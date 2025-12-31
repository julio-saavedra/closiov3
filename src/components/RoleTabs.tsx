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
    image: '/image copy copy.png',
    benefits: [
      'Full agent and pipeline visibility',
      'Automated commission splits',
      'Team performance analytics',
      'Revenue forecasting'
    ]
  },
  {
    id: 'manager',
    title: 'Manager',
    subtitle: 'Lead your team with data-driven insights',
    image: '/image copy copy copy.png',
    benefits: [
      'Agent coaching and tracking',
      'Pipeline conversion analytics',
      'Goal setting and monitoring',
      'Activity reports and rankings'
    ]
  },
  {
    id: 'agent',
    title: 'Agent',
    subtitle: 'Everything you need to close more deals',
    image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Personal pipeline management',
      'Commission tracking',
      'Automated client follow-ups',
      'Mobile access to your book'
    ]
  }
];

const RoleTabs: React.FC = () => {
  const [activeRole, setActiveRole] = useState('owner');
  const currentRole = roles.find(r => r.id === activeRole) || roles[0];

  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
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
                    className="absolute inset-0 bg-gradient-to-b from-[#6ad4f2] to-[#d593c0] rounded-xl shadow-lg shadow-[#d593c0]/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{role.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {currentRole.title}
                  </h3>
                  <p className="text-[#6B7A94] text-sm mt-1">{currentRole.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {currentRole.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-white/30 hover:from-white/[0.08] hover:to-white/[0.02] transition-all duration-300"
                    >
                      <div className="w-5 h-[2px] bg-white flex-shrink-0 group-hover:bg-white transition-colors" />
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

                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117]">
                  <img
                    src={currentRole.image}
                    alt={currentRole.title}
                    className="w-full h-auto block"
                  />
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
