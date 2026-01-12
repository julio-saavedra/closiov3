import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('closio-cookie-consent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('closio-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative p-5">
              <button
                onClick={handleAccept}
                className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>

              <div className="pr-8">
                <p className="text-sm text-white/80 leading-relaxed">
                  We use cookies for secure login, analytics, and performance.
                  By continuing, you agree to our use of cookies.
                </p>
              </div>

              <button
                onClick={handleAccept}
                className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#6ad4f2]/20 to-[#6ad4f2]/10
                  border border-[#6ad4f2]/30 text-[#6ad4f2] text-sm font-medium
                  hover:from-[#6ad4f2]/30 hover:to-[#6ad4f2]/20 hover:border-[#6ad4f2]/40
                  transition-all duration-200"
              >
                Accept
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6ad4f2]/20 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
