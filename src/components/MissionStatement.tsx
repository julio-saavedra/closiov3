import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MissionStatement = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleBookDemo = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <section ref={ref} className="relative w-full bg-black py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <img
            src="/image copy copy.png"
            alt="Closio - Building the future of insurance"
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-8 text-gray-500 text-xl sm:text-2xl md:text-3xl tracking-wide text-center"
        >
          "Building to better the Insurance Space"
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          onClick={handleBookDemo}
          className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
        >
          Book a Demo
        </motion.button>
      </div>
    </section>
  );
};

export default MissionStatement;
