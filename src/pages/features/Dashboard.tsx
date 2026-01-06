import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
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
            Dashboard
          </h1>

          <p className="text-xl text-white/70 mb-16 max-w-3xl">
            Your command center for all deal activity. Get a real-time overview of your pipeline,
            track performance metrics, and make data-driven decisions with powerful analytics.
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
                  src="/main_dashboard-_closio_website.png"
                  alt="Dashboard Overview"
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
                <h3 className="text-2xl font-semibold mb-3 text-white">Real-Time Updates</h3>
                <p className="text-white/70 leading-relaxed">
                  See your deals update in real-time as they progress through your pipeline.
                  Never miss a critical status change or milestone.
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Performance Metrics</h3>
                <p className="text-white/70 leading-relaxed">
                  Track key performance indicators with customizable widgets. Monitor conversion rates,
                  deal velocity, and revenue forecasts at a glance.
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Customizable Views</h3>
                <p className="text-white/70 leading-relaxed">
                  Arrange your dashboard exactly how you want it. Create custom views for different
                  roles, teams, or reporting periods.
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
                    <path d="M18 20V10"></path>
                    <path d="M12 20V4"></path>
                    <path d="M6 20v-6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Quick Actions</h3>
                <p className="text-white/70 leading-relaxed">
                  Access frequently used features directly from your dashboard. Create deals,
                  update statuses, and communicate with your team without navigating away.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your workflow?</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Experience the power of a truly intelligent dashboard that adapts to your needs.
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

export default Dashboard;
