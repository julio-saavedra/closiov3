import { motion } from 'framer-motion';

const benefits = [
  { title: 'Geographic Insights', description: 'Track deals across the country' },
  { title: 'Territory Planning', description: 'Find underserved markets' },
  { title: 'Performance Tracking', description: 'Monitor regional coverage' },
  { title: 'Real-Time Updates', description: 'See deals as they close' },
];

const DesktopMonitor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '100%',
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
        }}
      >
        <div
          className="relative rounded-[20px] p-[8px] md:p-[12px]"
          style={{
            background: 'linear-gradient(180deg, #f5f5f7 0%, #e8e8ed 100%)',
          }}
        >
          <div
            className="absolute top-[10px] md:top-[14px] left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1)'
            }}
          />
          <div
            className="rounded-[12px] overflow-hidden mt-4 md:mt-6"
            style={{
              background: '#000',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
            }}
          >
            {children}
          </div>
        </div>
        <div
          className="mx-auto h-[40px] md:h-[60px] relative"
          style={{
            width: '30%',
            background: 'linear-gradient(180deg, #e8e8ed 0%, #d2d2d7 100%)',
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="mx-auto h-[8px] md:h-[12px] rounded-[4px]"
          style={{
            width: '50%',
            background: 'linear-gradient(180deg, #d2d2d7 0%, #c7c7cc 100%)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[20px] rounded-[50%] blur-xl opacity-20"
        style={{ background: '#000' }}
      />
    </div>
  );
};

export default function DealMap() {
  return (
    <section className="py-24 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-[#1a1a2e]"
          >
            Policy Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4a5a] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-16 lg:gap-12 items-center">
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

          <div className="space-y-8 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a2e]">
                See Your Business<br />
                <span className="text-[#3a7ca5]">Come to Life</span>
              </h3>
            </motion.div>

            <div className="grid gap-5 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 py-4 md:py-3"
                >
                  <div className="w-[3px] h-12 md:h-10 bg-gradient-to-b from-[#3a7ca5] to-[#2d5f7a] rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 md:mb-0.5">{benefit.title}</h4>
                    <p className="text-sm text-[#6a6a7a]">{benefit.description}</p>
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
