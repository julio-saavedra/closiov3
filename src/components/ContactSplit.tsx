import React, { useState } from 'react';
import { subscribeToNewsletter } from '@/lib/supabase';

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
    <section id="contact" className="pt-32 pb-0 relative bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(106, 212, 242, 0.4) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] w-full max-w-4xl pointer-events-none z-0">
        <img
          src="/new_laptop_.png"
          alt=""
          className="w-full h-auto opacity-70"
          style={{
            filter: 'drop-shadow(0 -20px 60px rgba(106, 212, 242, 0.15))'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-72">
        <div className="flex items-center justify-center min-h-[400px]">
          <div
            className="relative max-w-2xl w-full mx-auto rounded-3xl p-10 sm:p-14"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(106, 212, 242, 0.5) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Stay in the Loop with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
                  Closio
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
                Be the first to hear about updates, early access offers, and exclusive insights.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 bg-[#6ad4f2]/10 rounded-full flex items-center justify-center mb-4 border border-[#6ad4f2]/30">
                    <svg className="w-8 h-8 text-[#6ad4f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-[#6ad4f2]">You're in!</p>
                  <p className="text-white/60 mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                        className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl focus:border-[#6ad4f2]/50 focus:ring-2 focus:ring-[#6ad4f2]/20 outline-none transition-all text-white placeholder:text-white/40"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-6 py-3.5 bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6ad4f2]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
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
                        'Subscribe'
                      )}
                    </button>
                  </div>

                  {status === 'error' && errorMessage && (
                    <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
                  )}

                  <p className="mt-6 text-xs text-white/30">
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
