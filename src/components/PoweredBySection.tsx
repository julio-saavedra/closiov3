import { motion } from 'framer-motion';

const PoweredBySection: React.FC = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-visible">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: '280px',
            height: '120px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(128, 128, 128, 0.3)',
            boxShadow: `
              0 0 30px rgba(128, 128, 128, 0.15),
              0 0 60px rgba(128, 128, 128, 0.1),
              inset 0 2px 4px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          <div className="absolute inset-0 rounded-[14px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 19px,
                    rgba(128, 128, 128, 0.05) 20px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 19px,
                    rgba(128, 128, 128, 0.05) 20px
                  )
                `,
              }}
            />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-sm font-medium tracking-[0.2em] text-gray-400 mb-1">
                POWERED BY
              </div>
              <div className="text-2xl font-bold tracking-tight text-gray-300">
                CLOSIO
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-gray-500/30 shadow-[0_0_8px_rgba(128,128,128,0.2)]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-gray-500/30 shadow-[0_0_8px_rgba(128,128,128,0.2)]"
              />
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-0 rounded-[16px]"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PoweredBySection;
