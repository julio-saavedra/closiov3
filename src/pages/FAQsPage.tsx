import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Closio?',
    answer: 'Closio is a comprehensive agency management platform designed specifically for insurance agencies. It helps you track deals, manage commissions, visualize team hierarchies, and streamline your entire sales process from first contact to policy issue.'
  },
  {
    category: 'General',
    question: 'Who is Closio designed for?',
    answer: 'Closio is built for insurance agencies of all sizes - from individual agents to large multi-level organizations. Whether you\'re a solo agent, agency owner, or part of a larger IMO/FMO, Closio scales to meet your needs.'
  },
  {
    category: 'General',
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore the platform and see how it fits your workflow before committing.'
  },
  {
    category: 'Features',
    question: 'How does commission tracking work?',
    answer: 'Closio automatically calculates commissions based on your configured split structures. You can set up complex multi-level hierarchies, track overrides, and see real-time payouts. The system handles split calculations across unlimited levels.'
  },
  {
    category: 'Features',
    question: 'Can I import my existing data?',
    answer: 'Absolutely. Closio supports importing data from spreadsheets (CSV, Excel) and can integrate with many popular CRM systems. Our onboarding team can assist with data migration to ensure a smooth transition.'
  },
  {
    category: 'Features',
    question: 'Does Closio integrate with carrier systems?',
    answer: 'Yes, Closio integrates with major insurance carriers to pull policy data, application status, and commission statements automatically. We\'re continuously adding new carrier integrations.'
  },
  {
    category: 'Security',
    question: 'How secure is my data?',
    answer: 'Security is our top priority. Closio uses bank-level encryption (AES-256), is SOC 2 Type II compliant, and all data is stored in secure, redundant data centers. We perform regular security audits and penetration testing.'
  },
  {
    category: 'Security',
    question: 'Who can access my agency\'s data?',
    answer: 'Only users you authorize can access your data. Closio uses role-based access controls, allowing you to define exactly what each team member can see and do. You maintain complete control over your data.'
  },
  {
    category: 'Billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), ACH bank transfers, and wire transfers for annual plans. All payments are processed securely through Stripe.'
  },
  {
    category: 'Billing',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll retain access until the end of your current billing period. We also offer a 30-day money-back guarantee for new subscribers.'
  },
  {
    category: 'Support',
    question: 'What kind of support do you offer?',
    answer: 'We offer multiple support channels including live chat, email support, and phone support for premium plans. Our help center includes extensive documentation, video tutorials, and best practice guides.'
  },
  {
    category: 'Support',
    question: 'Do you provide training for my team?',
    answer: 'Yes! All plans include access to our self-paced training academy. Premium plans include live onboarding sessions, dedicated account managers, and custom training tailored to your agency\'s workflows.'
  }
];

const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>

          <p className="text-white/60 text-lg mb-12">
            Find answers to common questions about Closio
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#6ad4f2] text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6ad4f2]">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-white/70 leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#6ad4f2]/20 to-transparent rounded-2xl p-8 border border-[#6ad4f2]/30">
            <h3 className="text-2xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-white/70 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#6ad4f2] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#6ad4f2]/90 transition-colors"
            >
              Contact Support
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQsPage;
