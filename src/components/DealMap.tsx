import { motion } from 'framer-motion';

const benefits = [
  { title: 'Geographic Insights', description: 'Track deals across the country' },
  { title: 'Territory Planning', description: 'Find underserved markets' },
  { title: 'Performance Tracking', description: 'Monitor regional coverage' },
  { title: 'Real-Time Updates', description: 'See deals as they close' },
];

export default function DealMap() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#d593c0]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-black"
          >
            Policy Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full rounded-2xl overflow-hidden"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d1117] to-[#161b22]">
              <img
                src="/cover_(1).png"
                alt="Deal Map - Policies Submitted Per State"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-black">
                See Your Business<br />
                <span className="text-black">Come to Life</span>
              </h3>
            </motion.div>

            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 py-3"
                >
                  <div className="w-[3px] h-10 bg-black rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-0.5">{benefit.title}</h4>
                    <p className="text-sm text-black">{benefit.description}</p>
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
