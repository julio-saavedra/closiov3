import { motion } from 'framer-motion';

const benefits = [
  { title: 'Geographic Insights', description: 'See exactly where your team is closing deals across the country' },
  { title: 'Territory Planning', description: 'Identify underserved markets and expansion opportunities' },
  { title: 'Performance Tracking', description: 'Monitor regional performance and agent coverage' },
  { title: 'Real-Time Updates', description: 'Watch deals appear on the map as they close' },
];

export default function DealMap() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020a15] to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2C66FF]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Live Deal Tracking</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Deal Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A8B3C7] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-[700px] mx-auto w-full rounded-2xl overflow-hidden"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d1117] to-[#161b22]">
              <img
                src="/deal-map.png"
                alt="Deal Map - Policies Submitted Per State"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80">Live</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                See Your Business<br />
                <span className="text-[#2C66FF]">Come to Life</span>
              </h3>
              <p className="text-[#A8B3C7] leading-relaxed">
                The Deal Map gives agency owners, managers, and agents complete visibility into where policies are being sold.
                Track your team's geographic reach, identify growth opportunities, and celebrate wins as they happen.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2C66FF]/10 border border-[#2C66FF]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#A8B3C7]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
