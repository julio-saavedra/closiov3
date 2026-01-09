import { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Schedule = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(106,212,242,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5">
              Schedule a Demo
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See CLOSIO in Action
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Book a personalized demo with our team. We'll walk you through the platform
            and show you how CLOSIO can transform your insurance agency operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/10 via-transparent to-transparent rounded-3xl blur-3xl" />

          <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-4 md:p-6">
              <div
                className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
                data-url="https://calendly.com/closio/closio-onboarding?hide_gdpr_banner=1&background_color=0a0a0a&text_color=e8eef5&primary_color=6ad4f2"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <h3 className="text-white font-semibold mb-2">30-Minute Demo</h3>
            <p className="text-white/40 text-sm">
              Get a comprehensive overview of all features tailored to your needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
            <p className="text-white/40 text-sm">
              Our team will answer all your questions and address specific use cases.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <h3 className="text-white font-semibold mb-2">No Commitment</h3>
            <p className="text-white/40 text-sm">
              Explore the platform with zero pressure. See if CLOSIO is right for you.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            Have questions before scheduling?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#6ad4f2] hover:text-[#6ad4f2]/80 transition-colors text-sm font-medium"
          >
            Contact our team
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
