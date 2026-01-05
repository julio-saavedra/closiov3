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
    <section id="contact" className="py-20 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative min-h-[500px]">
          <div className="absolute -bottom-64 left-0 pointer-events-none select-none z-0 opacity-90">
            <div className="text-[200px] sm:text-[280px] md:text-[350px] lg:text-[420px] xl:text-[500px] font-bold tracking-tight flex items-center leading-none gap-6 md:gap-12 lg:gap-16">
              <span
                className="italic"
                style={{
                  WebkitTextStroke: '4px rgba(106, 212, 242, 0.9)',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 80px rgba(106, 212, 242, 0.9)) drop-shadow(0 0 120px rgba(106, 212, 242, 0.6))',
                }}
              >
                I
              </span>
              <span
                className="text-white"
                style={{
                  filter: 'drop-shadow(0 0 80px rgba(106, 212, 242, 0.9)) drop-shadow(0 0 120px rgba(106, 212, 242, 0.6))',
                }}
              >
                O
              </span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center min-h-[500px]">
            <div className="max-w-3xl mx-auto text-center px-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Stay in the Loop with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
                  Closio
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Be the first to hear about updates, early access offers, and exclusive insights.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <span className="text-green-400 text-3xl">✓</span>
                  </div>
                  <p className="text-xl font-semibold text-green-400">You're in!</p>
                  <p className="text-white/70 mt-2">We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
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
                        className="w-full px-5 py-4 bg-black/40 border border-white/20 rounded-xl focus:border-[#6ad4f2] focus:ring-2 focus:ring-[#6ad4f2]/30 outline-none transition-all text-white placeholder:text-white/50"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-8 py-4 bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6ad4f2]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
                        'Join the Closio Newsletter'
                      )}
                    </button>
                  </div>

                  {status === 'error' && errorMessage && (
                    <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
                  )}
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
