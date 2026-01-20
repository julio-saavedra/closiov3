import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '@/lib/supabase';
import StaticIO3D from './StaticIO3D';

interface FloatingCard {
  label: string;
  x: string;
  y: string;
  opacity: number;
  scale: number;
  delay: number;
  icon: React.ReactNode;
}

const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="12" y1="6" x2="12" y2="10" />
    <line x1="10" y1="8" x2="14" y2="8" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const CommissionsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const HierarchyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="6" y2="16" />
    <line x1="18" y1="12" x2="18" y2="16" />
    <circle cx="6" cy="19" r="3" />
    <circle cx="18" cy="19" r="3" />
  </svg>
);

const ReminderIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const QuickLinksIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const ReportsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const NotificationsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const PoliciesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CarriersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const floatingCards: FloatingCard[] = [
  { label: 'Book of Business', x: '8%', y: '8%', opacity: 1, scale: 1, delay: 0, icon: <BookIcon /> },
  { label: 'Dashboard', x: '55%', y: '5%', opacity: 0.85, scale: 0.95, delay: 0.15, icon: <DashboardIcon /> },
  { label: 'Commissions', x: '30%', y: '35%', opacity: 0.95, scale: 0.98, delay: 0.1, icon: <CommissionsIcon /> },
  { label: 'Team Hierarchy', x: '5%', y: '55%', opacity: 1, scale: 1, delay: 0.2, icon: <HierarchyIcon /> },
  { label: 'Reminders', x: '48%', y: '50%', opacity: 0.9, scale: 0.95, delay: 0.3, icon: <ReminderIcon /> },
  { label: 'Quick Links', x: '18%', y: '82%', opacity: 0.95, scale: 0.98, delay: 0.4, icon: <QuickLinksIcon /> },
];

const backgroundCards: FloatingCard[] = [
  { label: 'Analytics', x: '75%', y: '15%', opacity: 0.45, scale: 0.88, delay: 0.5, icon: <AnalyticsIcon /> },
  { label: 'Reports', x: '70%', y: '70%', opacity: 0.35, scale: 0.85, delay: 0.55, icon: <ReportsIcon /> },
  { label: 'Settings', x: '88%', y: '40%', opacity: 0.3, scale: 0.82, delay: 0.6, icon: <SettingsIcon /> },
  { label: 'Notifications', x: '60%', y: '88%', opacity: 0.4, scale: 0.88, delay: 0.65, icon: <NotificationsIcon /> },
  { label: 'Policies', x: '92%', y: '75%', opacity: 0.25, scale: 0.8, delay: 0.7, icon: <PoliciesIcon /> },
  { label: 'Carriers', x: '85%', y: '8%', opacity: 0.32, scale: 0.83, delay: 0.45, icon: <CarriersIcon /> },
];

const ContactSplit = React.memo(() => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  return (
    <>
      <section id="contact" className="py-16 md:py-20 relative bg-black overflow-hidden">
        <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
            style={{
              background: '#000000',
            }}
          >
            {/* Background Image on Right Side */}
            <div className="absolute inset-0 flex">
              <div className="hidden md:block w-1/2" />
              <div 
                className="w-full md:w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop)',
                  opacity: 0.55,
                }}
              />
            </div>

            {/* Purple Gradient Overlay - Reversed */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to left, rgba(80, 0, 120, 0.75) 0%, rgba(0, 0, 0, 0.90) 50%, rgba(30, 30, 35, 0.90) 100%)',
              }}
            />

            {/* Purple Accent Glow on Right */}
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at right center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
              }}
            />

            {/* Lighter overlay on left side */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(to right, rgba(40, 40, 45, 0.6) 0%, transparent 100%)',
              }}
            />

            {/* Top Border Accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.6) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(168, 85, 247, 0.6) 80%, transparent 100%)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
              {/* Left Side - Newsletter Form */}
              <div className="flex-1 md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 text-white leading-tight drop-shadow-md">
                    Stay in the Loop with{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                      Closio
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg mb-6 sm:mb-8 leading-relaxed drop-shadow-sm">
                    Be the first to hear about updates, early access offers, and exclusive insights.
                  </p>

                  {status === 'success' ? (
                    <div className="flex flex-col items-start py-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-white rounded-full flex items-center justify-center mb-4 shadow-xl">
                        <span className="text-black text-2xl font-bold">✓</span>
                      </div>
                      <p className="text-xl font-semibold text-white drop-shadow-md">You're in!</p>
                      <p className="text-white/90 mt-2 text-base drop-shadow-sm">We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="w-full max-w-md sm:mr-12 sm:-ml-2">
                      <div className="flex flex-col sm:flex-row sm:items-center bg-white/10 backdrop-blur-md border-2 border-purple-500/40 rounded-xl shadow-lg focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/30 transition-all">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') {
                              setStatus('idle');
                              setErrorMessage('');
                            }
                          }}
                          placeholder="Enter your email"
                          className="flex-1 px-5 py-3 sm:px-6 sm:py-4 bg-transparent border-0 outline-none text-white placeholder:text-white/60 text-sm sm:text-base min-h-[48px] sm:min-h-[56px]"
                          disabled={status === 'loading'}
                        />
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-500 to-white text-black font-semibold hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-xs sm:text-sm min-h-[48px] sm:min-h-[56px] sm:rounded-r-lg sm:rounded-l-none rounded-b-lg sm:rounded-b-none flex-shrink-0"
                        >
                          {status === 'loading' ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Joining...</span>
                            </span>
                          ) : (
                            'Join Newsletter'
                          )}
                        </button>
                      </div>

                      {status === 'error' && errorMessage && (
                        <p className="mt-3 text-red-200 text-sm font-medium drop-shadow-sm">{errorMessage}</p>
                      )}
                    </form>
                  )}
                </motion.div>
              </div>

              {/* Right Side - Navigation Cards */}
              <div className="hidden md:block flex-1 relative overflow-hidden">
                {backgroundCards.map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: card.opacity, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: card.delay }}
                    className="absolute"
                    style={{
                      left: card.x,
                      top: card.y,
                      transform: `scale(${card.scale})`,
                    }}
                  >
                    <div
                      className="px-4 py-2.5 rounded-xl whitespace-nowrap flex items-center gap-2.5"
                      style={{
                        background: 'rgba(168, 85, 247, 0.08)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <span className="text-purple-300/80">{card.icon}</span>
                      <span className="text-white/80 text-sm font-medium">{card.label}</span>
                    </div>
                  </motion.div>
                ))}

                {floatingCards.map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: card.opacity, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: card.delay }}
                    className="absolute"
                    style={{
                      left: card.x,
                      top: card.y,
                      transform: `scale(${card.scale})`,
                    }}
                  >
                    <div
                      className="px-5 py-3 rounded-xl whitespace-nowrap flex items-center gap-3"
                      style={{
                        background: 'rgba(168, 85, 247, 0.15)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <span className="text-purple-200">{card.icon}</span>
                      <span className="text-white text-sm font-medium drop-shadow-sm">{card.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-black z-10 overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full pointer-events-none select-none flex items-center justify-center -mb-20 sm:-mb-24 md:-mb-32" style={{ transform: 'translateY(-20px)' }}>
          
          {/* Purple Swooping Light - Left Side */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none"
            initial={{ opacity: 0, x: -200, rotate: -15 }}
            whileInView={{ opacity: 1, x: -100, rotate: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 blur-[100px]"
              style={{
                background: 'radial-gradient(ellipse 50% 80% at 80% 30%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.25) 30%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Purple Swooping Light - Right Side */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none"
            initial={{ opacity: 0, x: 200, rotate: 15 }}
            whileInView={{ opacity: 1, x: -100, rotate: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 blur-[100px]"
              style={{
                background: 'radial-gradient(ellipse 50% 80% at 20% 30%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.25) 30%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Fast-Moving Light Trail - Left Swoop */}
          <motion.div
            className="absolute left-[-10%] top-[20%] w-[500px] h-[600px] pointer-events-none"
            initial={{ opacity: 0, y: -100, x: -100 }}
            whileInView={{ opacity: [0, 0.8, 0], y: 400, x: -150 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div
              className="absolute inset-0 blur-[80px]"
              style={{
                background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* Fast-Moving Light Trail - Right Swoop */}
          <motion.div
            className="absolute right-[-10%] top-[20%] w-[500px] h-[600px] pointer-events-none"
            initial={{ opacity: 0, y: -100, x: 100 }}
            whileInView={{ opacity: [0, 0.8, 0], y: 400, x: 150 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div
              className="absolute inset-0 blur-[80px]"
              style={{
                background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* Center Purple Glow Around IO */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 blur-[90px]"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.15) 40%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* IO on top */}
          <div className="absolute inset-0 z-50 flex items-center justify-center scale-[1.1] sm:scale-100">
            <StaticIO3D />
          </div>
        </div>
      </section>
    </>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
