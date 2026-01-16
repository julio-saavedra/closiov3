import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  users: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Individual',
    price: '$45',
    description: 'Solo agents',
    users: 'Per User',
    features: [
      'Full CRM access',
      'Mobile app',
      'Basic analytics',
    ],
    cta: 'View Pricing',
  },
  {
    name: 'Growing Agency',
    price: '$749',
    description: 'Small teams',
    users: '25-50 Users',
    features: [
      'Team management',
      'Advanced analytics',
      'Deal Bot',
    ],
    popular: true,
    cta: 'View Pricing',
  },
  {
    name: 'Professional',
    price: '$1,249',
    description: 'Scaling agencies',
    users: '51-100 Users',
    features: [
      'Account manager',
      'API access',
      'White-label',
    ],
    cta: 'View Pricing',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Large organizations',
    users: '200+ Users',
    features: [
      'Custom development',
      'SLA guarantees',
      'Dedicated support',
    ],
    cta: 'View Pricing',
  },
];

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-black overflow-hidden">
      {/* Background effects - Purple theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-400">/ </span>
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
                Flexible pricing that scales with your agency. From solo agents to enterprise teams, we have a plan for everyone.
              </p>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>30-day free trial on all plans</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Cancel anytime, no questions asked</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Upgrade or downgrade as you grow</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Card Showcase */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Left Blurred Card - Agency Suite */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 0.4, x: 0, scale: 0.9 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-0 blur-[2px]"
            >
              <div className="w-[240px] h-[350px] rounded-xl backdrop-blur-xl bg-gradient-to-b from-purple-500/10 via-white/5 to-transparent border border-purple-400/20 p-5">
                <div className="h-full flex flex-col">
                  <h3 className="text-base font-bold text-white mb-1">Agency Suite</h3>
                  <p className="text-[10px] text-gray-500 mb-2">Growing teams</p>
                  <div className="text-lg font-bold text-purple-300 mb-1">$1,500</div>
                  <div className="text-[9px] text-gray-600 mb-3">25-50 Users</div>
                  <div className="flex-1" />
                  <div className="text-[9px] text-gray-600">View details →</div>
                </div>
              </div>
            </motion.div>

            {/* Center Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="w-[280px] sm:w-[320px] h-[380px] rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/20 via-white/10 to-transparent border-2 border-purple-400/60 p-6 shadow-2xl shadow-purple-500/30">
                <div className="h-full flex flex-col text-center">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 mb-4">
                      <span className="text-xs font-semibold text-purple-200">Most Popular</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">Pricing Plans</h3>
                    <div className="text-5xl font-bold text-white mb-2">
                      $45
                    </div>
                    <p className="text-xs text-gray-500 mb-4">per user/month</p>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      Scale from solo agent to enterprise with flexible plans built for insurance agencies
                    </p>
                    <div className="space-y-2 text-xs text-gray-400 text-left mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                        <span>All tiers include 30-day trial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                        <span>No contracts or commitments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                        <span>Custom plans for 200+ users</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => { navigate('/pricing'); window.scrollTo(0, 0); }}
                    className="w-full py-3 px-6 rounded-lg font-semibold text-sm bg-gradient-to-r from-purple-500 to-white text-black hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    View All Plans
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Blurred Card - Enterprise */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 0.4, x: 0, scale: 0.9 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-0 blur-[2px]"
            >
              <div className="w-[240px] h-[350px] rounded-xl backdrop-blur-xl bg-gradient-to-b from-purple-500/10 via-white/5 to-transparent border border-purple-400/20 p-5">
                <div className="h-full flex flex-col">
                  <h3 className="text-base font-bold text-white mb-1">Enterprise</h3>
                  <p className="text-[10px] text-gray-500 mb-2">Large organizations</p>
                  <div className="text-lg font-bold text-purple-300 mb-1">Custom</div>
                  <div className="text-[9px] text-gray-600 mb-3">200+ Users</div>
                  <div className="flex-1" />
                  <div className="text-[9px] text-gray-600">View details →</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
