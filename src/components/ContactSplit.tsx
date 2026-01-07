import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '@/lib/supabase';

interface FloatingCard {
  label: string;
  x: string;
  y: string;
  opacity: number;
  scale: number;
  delay: number;
}

const floatingCards: FloatingCard[] = [
  { label: 'Book of Business', x: '55%', y: '15%', opacity: 1, scale: 1, delay: 0 },
  { label: 'Commissions', x: '75%', y: '35%', opacity: 0.9, scale: 0.95, delay: 0.1 },
  { label: 'Team Hierarchy', x: '50%', y: '55%', opacity: 1, scale: 1, delay: 0.2 },
  { label: 'Reminders', x: '80%', y: '60%', opacity: 0.6, scale: 0.9, delay: 0.3 },
  { label: 'Quick Links', x: '58%', y: '78%', opacity: 0.8, scale: 0.95, delay: 0.4 },
  { label: 'Dashboard', x: '85%', y: '20%', opacity: 0.5, scale: 0.85, delay: 0.15 },
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
    <section id="contact" className="py-20 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[450px]"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 116, 144, 0.4) 0%, rgba(6, 78, 99, 0.6) 50%, rgba(8, 51, 68, 0.7) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(103, 232, 249, 0.15)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-900/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[400px] md:min-h-[450px]">
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left">
                Stay in the Loop with{' '}
                <span className="text-[#67e8f9]">
                  Closio
                </span>
              </h2>
              <p className="text-base lg:text-lg text-white/70 max-w-lg mb-8 leading-relaxed text-left">
                Be the first to hear about updates, early access offers, and exclusive insights.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-start py-4">
                  <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <span className="text-green-400 text-2xl">✓</span>
                  </div>
                  <p className="text-xl font-semibold text-green-400">You're in!</p>
                  <p className="text-white/70 mt-2">We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
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
                        className="w-full px-5 py-3.5 bg-black/50 border border-white/20 rounded-xl focus:border-[#67e8f9] focus:ring-2 focus:ring-[#67e8f9]/30 outline-none transition-all text-white placeholder:text-white/50"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-6 py-3.5 bg-[#67e8f9] text-black font-semibold rounded-xl hover:bg-[#a5f3fc] hover:shadow-lg hover:shadow-[#67e8f9]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
                    <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>

            <div className="hidden md:block flex-1 relative overflow-hidden">
              {floatingCards.map((card, index) => (
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
                    className="px-5 py-3 rounded-xl whitespace-nowrap"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <span className="text-white/90 text-sm font-medium">{card.label}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 0.3, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute"
                style={{ left: '95%', top: '45%', transform: 'translateX(-50%)' }}
              >
                <div
                  className="px-5 py-3 rounded-xl whitespace-nowrap"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <span className="text-white/60 text-sm font-medium">Analytics</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 0.25, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute"
                style={{ left: '92%', top: '85%' }}
              >
                <div
                  className="px-5 py-3 rounded-xl whitespace-nowrap"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <span className="text-white/50 text-sm font-medium">Reports</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
