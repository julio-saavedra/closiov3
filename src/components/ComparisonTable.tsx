import React from 'react';

const ComparisonTable: React.FC = () => {
  const closioFeatures = [
    {
      title: 'INDUSTRY-SPECIFIC WORKFLOWS',
      description: 'Built exclusively for life insurance agencies with terminology and processes you already know.'
    },
    {
      title: 'AUTOMATED COMMISSION TRACKING',
      description: 'Calculate and split commissions automatically across your entire agent hierarchy.'
    },
    {
      title: 'CARRIER INTEGRATION READY',
      description: 'Pre-built connections to major life insurance carriers for seamless data flow.'
    },
    {
      title: 'TEAM HIERARCHY VISUALIZATION',
      description: 'Visual org chart with agent and manager tracking built right into your dashboard.'
    },
    {
      title: 'BOOK OF BUSINESS MANAGEMENT',
      description: 'Manage your entire book of business directly from your account with full visibility.'
    }
  ];

  const genericFeatures = [
    {
      title: 'GENERIC SALES TOOLS',
      description: 'One-size-fits-all approach requiring extensive customization for insurance needs.'
    },
    {
      title: 'MANUAL COMMISSION WORK',
      description: 'Spreadsheet-based calculations that are error-prone and time-consuming.'
    },
    {
      title: 'COMPLEX CUSTOM INTEGRATIONS',
      description: 'Expensive and time-consuming custom development required for carrier connections.'
    },
    {
      title: 'BASIC CONTACT LISTS',
      description: 'Simple contact management without insurance-specific hierarchies or relationships.'
    },
    {
      title: 'SCATTERED CLIENT DATA',
      description: 'Policy information stored across multiple systems requiring constant switching.'
    }
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-black">
            Quick Plan Recap
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            A quick recap of what each solution does best
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#6ad4f2] to-[#4fb8d8] rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#6ad4f2] to-[#4fb8d8] px-6 py-5 text-center">
                <h3 className="text-2xl font-bold text-black">Closio</h3>
              </div>

              <div className="p-6 space-y-6">
                {closioFeatures.map((feature, index) => (
                  <div key={index} className="space-y-2 relative">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <h4 className="text-xs font-bold text-white/90 tracking-wider pt-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="hidden md:block absolute -right-[2.75rem] top-1/2 -translate-y-1/2 z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6ad4f2] to-[#d593c0] flex items-center justify-center border-2 border-black shadow-lg">
                        <span className="text-black font-bold text-xs">VS.</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#d593c0] to-[#b87aa8] rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#d593c0] to-[#b87aa8] px-6 py-5 text-center">
                <h3 className="text-2xl font-bold text-black">Generic CRMs</h3>
              </div>

              <div className="p-6 space-y-6">
                {genericFeatures.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <h4 className="text-xs font-bold text-white/90 tracking-wider pt-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-black p-8 sm:p-10">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">The Bottom Line</h3>
              <p className="text-base sm:text-lg mb-6 text-slate-300 max-w-2xl mx-auto">
                Stop wrestling with generic tools. Get a CRM that actually understands life insurance.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#6ad4f2] to-[#d593c0] text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6ad4f2]/20 transition-all text-base">
                See Closio in Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;