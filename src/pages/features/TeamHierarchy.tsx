import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeamHierarchy = () => {
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
            Team Hierarchy
          </h1>

          <p className="text-xl text-white/70 mb-16 max-w-3xl">
            Visualize your organization structure and manage reporting relationships with ease.
            Perfect for agencies with complex team structures.
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
                  src="/team_hierarchy-_closio_website.png"
                  alt="Team Hierarchy Overview"
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Visual Org Chart</h3>
                <p className="text-white/70 leading-relaxed">
                  Interactive org chart that shows reporting relationships at a glance.
                  Understand team structure and navigate your organization with ease.
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Easy Management</h3>
                <p className="text-white/70 leading-relaxed">
                  Add, remove, or reassign team members with simple drag-and-drop.
                  Organizational changes are reflected instantly across the platform.
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="22" y1="11" x2="16" y2="11"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Role-Based Access</h3>
                <p className="text-white/70 leading-relaxed">
                  Permissions automatically adjust based on position in the hierarchy.
                  Managers see their team's data, executives see everything.
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Performance Rollup</h3>
                <p className="text-white/70 leading-relaxed">
                  Aggregate metrics roll up through the hierarchy automatically.
                  Managers can track their team's collective performance effortlessly.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Organize your team for success</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Build a clear organizational structure that scales with your agency and empowers your team.
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

export default TeamHierarchy;
