import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Commission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#6ad4f2] to-white bg-clip-text text-transparent">
            Commission Tracking
          </h1>

          <p className="text-xl text-white/70 mb-16 max-w-3xl">
            Crystal-clear commission visibility. Track earnings in real-time, understand splits,
            and eliminate confusion with transparent commission calculations.
          </p>

          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(24px)',
              }}
            >
              <div className="p-8">
                <img
                  src="/commission-_closio_website.png"
                  alt="Commission Tracking Overview"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl p-8 border border-white/10"
                style={{
                  background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ad4f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Real-Time Calculations</h3>
                <p className="text-white/70 leading-relaxed">
                  Watch your commissions update instantly as deals progress. No more waiting
                  until month-end to see what you have earned.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl p-8 border border-white/10"
                style={{
                  background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ad4f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Transparent Splits</h3>
                <p className="text-white/70 leading-relaxed">
                  Clear breakdown of commission splits across team members, managers, and
                  agencies. Everyone knows exactly what they are earning.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl p-8 border border-white/10"
                style={{
                  background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ad4f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Historical Records</h3>
                <p className="text-white/70 leading-relaxed">
                  Complete history of all commission payments with detailed breakdowns.
                  Perfect for tax preparation and performance analysis.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl p-8 border border-white/10"
                style={{
                  background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6ad4f2]/10 border border-[#6ad4f2]/20 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ad4f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Export & Reports</h3>
                <p className="text-white/70 leading-relaxed">
                  Generate detailed commission reports for any time period. Export to Excel
                  or PDF for easy sharing and record keeping.
                </p>
              </motion.div>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-12 border border-white/10 text-center"
              style={{
                background: 'linear-gradient(160deg, rgba(106, 212, 242, 0.08) 0%, rgba(106, 212, 242, 0.02) 100%)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">End commission confusion forever</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Give your team complete transparency into their earnings with accurate, real-time commission tracking.
              </p>
              <Link
                to="/#contact"
                className="inline-block bg-[#6ad4f2] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#6ad4f2]/90 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Commission;
