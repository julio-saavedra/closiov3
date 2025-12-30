import React, { useState } from 'react';

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
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tailored to Your Role
          </h2>
          <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
            Every user gets exactly what they need to be successful
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`
                  relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeRole === role.id
                    ? 'text-white'
                    : 'text-[#A8B3C7] hover:text-white'
                  }
                `}
              >
                {activeRole === role.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C66FF] to-[#1E4FD9] rounded-full" />
                )}
                <span className="relative z-10">{role.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2C66FF]/30 to-[#1E4FD9]/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0F1A]">
              <div className="aspect-[4/3] relative">
                <img
                  src={currentRole.image}
                  alt={currentRole.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2C66FF] to-[#1E4FD9] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {currentRole.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{currentRole.title}</h4>
                    <p className="text-[#A8B3C7] text-sm">{currentRole.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Built for {currentRole.title}s
            </h3>

            <div className="space-y-5">
              {currentRole.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C66FF] to-[#1E4FD9] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-[#E8EEF5] leading-relaxed pt-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
