import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EstimatedPayouts = () => {
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
            Estimated Payouts
          </h1>

          <p className="text-xl text-white/70 mb-16 max-w-3xl">
            Plan your finances with confidence. Get accurate payout forecasts based on your
            pipeline and historical performance data.
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
                  src="/estimated_payouts-_closio_website.png"
                  alt="Estimated Payouts Overview"
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Smart Forecasting</h3>
                <p className="text-white/70 leading-relaxed">
                  AI-powered predictions based on your pipeline stages, historical close rates,
                  and deal velocity. Know what to expect before it happens.
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Monthly Breakdown</h3>
                <p className="text-white/70 leading-relaxed">
                  See projected earnings month by month. Plan your budget with accurate
                  forecasts of when commission payments will arrive.
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Confidence Scores</h3>
                <p className="text-white/70 leading-relaxed">
                  Each estimate includes a confidence score based on deal stage and probability.
                  Understand the reliability of each forecast.
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Scenario Planning</h3>
                <p className="text-white/70 leading-relaxed">
                  Run what-if scenarios to see how different outcomes affect your earnings.
                  Make informed decisions about which deals to prioritize.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan your future with clarity</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Stop guessing about your earnings. Get accurate forecasts that help you make better financial decisions.
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

export default EstimatedPayouts;
