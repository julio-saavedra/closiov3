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
      <section id="contact" className="py-24 md:py-32 relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: '#6ad4f2',
              boxShadow: '0 25px 50px -12px rgba(106, 212, 242, 0.3), 0 0 80px rgba(106, 212, 242, 0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)',
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
              }}
            />
            <div
              className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[340px] md:min-h-[380px]">
              <div
                className="absolute inset-y-0 left-0 w-[55%] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)',
                }}
              />
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-left text-white drop-shadow-sm">
                  Stay in the Loop with{' '}
                  <span className="text-white/90">
                    Closio
                  </span>
                </h2>
                <p className="text-sm lg:text-base text-white/80 max-w-md mb-6 leading-relaxed text-left">
                  Be the first to hear about updates, early access offers, and exclusive insights.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-start py-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 border border-white/30 backdrop-blur-sm">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <p className="text-lg font-semibold text-white">You're in!</p>
                    <p className="text-white/80 mt-1 text-sm">We'll be in touch.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-sm">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1">
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
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:border-white/60 focus:ring-2 focus:ring-white/30 outline-none transition-all text-white placeholder:text-white/60 text-sm backdrop-blur-sm"
                          disabled={status === 'loading'}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-5 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 hover:shadow-lg hover:shadow-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
                      <p className="mt-2 text-red-200 text-xs font-medium">{errorMessage}</p>
                    )}
                  </form>
                )}
              </div>

              <div className="hidden md:block flex-1 relative overflow-hidden">
                {backgroundCards.map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: card.opacity, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: card.delay }}
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
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <span className="text-white/60">{card.icon}</span>
                      <span className="text-white/60 text-sm font-medium">{card.label}</span>
                    </div>
                  </motion.div>
                ))}

                {floatingCards.map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: card.opacity, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: card.delay }}
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
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <span className="text-white">{card.icon}</span>
                      <span className="text-white text-sm font-medium drop-shadow-sm">{card.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-black overflow-visible z-10">
        <div className="relative h-[500px] w-full pointer-events-none select-none flex items-center justify-center -mb-[200px]" style={{ transform: 'translateY(-80px)' }}>
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%' }}>
            <div
              className="w-[700px] h-[480px] rounded-full blur-[90px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(106, 212, 242, 0.7) 0%, rgba(106, 212, 242, 0.4) 30%, rgba(106, 212, 242, 0.15) 60%, transparent 80%)',
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%' }}>
            <div
              className="w-[380px] h-[300px] rounded-full blur-[50px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(106, 212, 242, 0.5) 0%, transparent 70%)',
              }}
            />
          </div>
          <div className="absolute inset-0 scale-[0.85]">
            <StaticIO3D />
          </div>
        </div>
      </section>
    </>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
