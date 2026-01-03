import { motion } from 'framer-motion';

const benefits = [
  { title: 'Geographic Insights', description: 'Track deals across the country' },
  { title: 'Territory Planning', description: 'Find underserved markets' },
  { title: 'Performance Tracking', description: 'Monitor regional coverage' },
  { title: 'Real-Time Updates', description: 'See deals as they close' },
];

const DesktopMonitor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative pb-6">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '100%',
          filter: 'drop-shadow(0 40px 80px rgba(0, 0, 0, 0.25)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))'
        }}
      >
        <div
          className="relative rounded-[12px] md:rounded-[16px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #3d4249 0%, #2e3238 40%, #252930 100%)',
            padding: '4px 4px 16px 4px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)',
            }}
          />
          <div
            className="absolute top-[6px] md:top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #1a1a1a 0%, #0a0a0a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.5), inset 0 0 4px rgba(0,0,0,0.8)'
            }}
          />
          <div
            className="rounded-[6px] md:rounded-[8px] overflow-hidden mt-3 md:mt-4"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)'
            }}
          >
            {children}
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div
            className="relative"
            style={{
              width: '10px',
              height: '45px',
              background: 'linear-gradient(90deg, #1e2126 0%, #2e3238 25%, #3a3f46 50%, #2e3238 75%, #1e2126 100%)',
              boxShadow: '-3px 0 6px rgba(0,0,0,0.2), 3px 0 6px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.05)',
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '14px',
              height: '45px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: '160px',
            height: '12px',
            background: 'linear-gradient(180deg, #3a3f46 0%, #2e3238 40%, #252930 100%)',
            borderRadius: '0 0 6px 6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.08) 50%, transparent 95%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </div>
      </div>

      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2"
        style={{
          width: '180px',
          height: '12px',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />
    </div>
  );
};

export default function DealMap() {
  return (
    <section className="py-16 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-3 text-[#1a1a2e]"
          >
            Policy Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#4a4a5a] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <DesktopMonitor>
              <img
                src="/image copy copy copy copy copy copy copy.png"
                alt="Deal Map - Policies Submitted Per State"
                className="w-full h-auto block"
              />
            </DesktopMonitor>
          </motion.div>

          <div className="space-y-5 md:space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#1a1a2e]">
                See Your Business<br />
                <span className="text-[#3a7ca5]">Come to Life</span>
              </h3>
            </motion.div>

            <div className="grid gap-3 md:gap-2.5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 py-2.5 md:py-2"
                >
                  <div className="w-[3px] h-10 md:h-8 bg-gradient-to-b from-[#3a7ca5] to-[#2d5f7a] rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] text-sm mb-0.5">{benefit.title}</h4>
                    <p className="text-xs text-[#6a6a7a]">{benefit.description}</p>
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
