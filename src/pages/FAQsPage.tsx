import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const TypewriterHeading: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });

  useEffect(() => {
    setDisplayText('');
    setShowCursor(true);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    setDisplayText('');
    setShowCursor(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <h1 ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white/40 tracking-tight">
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </h1>
  );
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Closio?',
    answer: 'Closio is an insurance agency management platform that combines deal tracking, commission automation, and team hierarchy visualization in one system. Built specifically for life and health insurance agencies, it eliminates spreadsheet chaos and provides real-time visibility into your book of business, pipeline, and earnings.'
  },
  {
    category: 'General',
    question: 'Who is Closio designed for?',
    answer: 'Independent insurance agents, agency owners, IMOs, FMOs, and multi-level insurance organizations. Whether you\'re managing a solo operation or overseeing hundreds of downline agents, Closio adapts to your structure with unlimited hierarchy levels and customizable commission splits.'
  },
  {
    category: 'General',
    question: 'Is there a free trial available?',
    answer: 'Yes. We provide a 14-day trial with complete platform access. No credit card required to start, no features locked. Test every tool, import your data, and invite your team to experience how Closio transforms your workflow before making any commitment.'
  },
  {
    category: 'General',
    question: 'How quickly can I get started?',
    answer: 'Most agencies are operational within 24 hours. After signing up, you can immediately add team members, import existing deals via CSV, configure commission structures, and connect carrier integrations. Our guided onboarding walks you through each step with pre-built templates for common agency setups.'
  },
  {
    category: 'Features',
    question: 'How does commission tracking work?',
    answer: 'Set your base commission rates and split percentages once. Closio automatically calculates multi-level splits when deals advance through your pipeline. View pending commissions, override amounts, and estimated payouts in real-time. The system handles complex scenarios like chargebacks, advances, and anniversary commission calculations.'
  },
  {
    category: 'Features',
    question: 'Can I track different product lines separately?',
    answer: 'Absolutely. Configure distinct pipelines for Medicare, ACA, final expense, annuities, life insurance, and any other product line. Each pipeline can have unique stages, commission structures, and carrier assignments. Filter your dashboard by product to analyze performance across your portfolio.'
  },
  {
    category: 'Features',
    question: 'How does the deal pipeline work?',
    answer: 'Create custom stages that match your sales process—from lead to application submitted, underwriting, issued, and paid. Drag deals between stages, set reminders for follow-ups, attach documents, and log client interactions. Automatic notifications keep your team aligned without manual status updates.'
  },
  {
    category: 'Features',
    question: 'Can I import my existing data?',
    answer: 'Yes. Upload spreadsheets with your current clients, deals, and team members via CSV or Excel. Our import wizard maps your columns to Closio fields, validates the data, and flags any issues before finalizing. We also offer white-glove migration assistance for complex datasets or CRM transitions.'
  },
  {
    category: 'Features',
    question: 'Does Closio integrate with carrier systems?',
    answer: 'Yes. Connect with major carriers to automatically sync application status, policy numbers, effective dates, and commission statements. Supported integrations include Sunfire, iPipeline, LEAN, and major carrier portals. We add new integrations monthly based on user requests.'
  },
  {
    category: 'Features',
    question: 'What reports and analytics are available?',
    answer: 'Production reports, commission forecasts, agent leaderboards, conversion rates by stage, average deal size, and time-to-close metrics. Export any report to PDF or Excel. Custom date ranges let you analyze weekly, monthly, quarterly, or year-over-year performance across your entire organization.'
  },
  {
    category: 'Security',
    question: 'How secure is my data?',
    answer: 'Your data is encrypted at rest using AES-256 and in transit via TLS 1.3. Closio is SOC 2 Type II certified, undergoes annual third-party security audits, and stores all data in geo-redundant cloud infrastructure with automated backups every 6 hours. We maintain 99.9% uptime SLA for enterprise accounts.'
  },
  {
    category: 'Security',
    question: 'Who can access my agency\'s data?',
    answer: 'Only users you explicitly invite. Role-based permissions control what each team member can view and edit—agents see their own deals, managers see their team\'s performance, admins control all settings. Enable two-factor authentication for added security. You can audit all user activity and revoke access instantly.'
  },
  {
    category: 'Security',
    question: 'Is Closio HIPAA compliant?',
    answer: 'Yes. Closio meets HIPAA requirements for handling protected health information. We sign Business Associate Agreements (BAAs) with enterprise customers, maintain comprehensive audit logs, and implement administrative, physical, and technical safeguards required by healthcare data protection regulations.'
  },
  {
    category: 'Billing',
    question: 'What payment methods do you accept?',
    answer: 'All major credit cards (Visa, Mastercard, Amex, Discover), ACH direct debit, and wire transfer for annual contracts. International customers can pay via bank transfer with multi-currency support. All transactions are processed through Stripe with PCI-DSS Level 1 compliance.'
  },
  {
    category: 'Billing',
    question: 'What are the pricing plans?',
    answer: 'Pricing scales with your team size. Solo agents start at $49/month. Team plans begin at $149/month for up to 10 users. Enterprise pricing for organizations with 50+ users includes custom integrations, dedicated support, and white-label options. Annual plans receive 20% discount. No hidden fees or per-deal charges.'
  },
  {
    category: 'Billing',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes. Cancel anytime with no penalties or cancellation fees. Your access continues until the end of your current billing period. Export all your data before leaving. We also offer a 30-day money-back guarantee—if Closio doesn\'t meet your needs within the first month, we\'ll refund your payment in full.'
  },
  {
    category: 'Support',
    question: 'What kind of support do you offer?',
    answer: 'In-app live chat during business hours (9 AM - 6 PM ET), email support with 4-hour response time, and phone support for premium plans. Access our knowledge base with 200+ articles, video tutorials, and weekly webinars. Enterprise customers receive a dedicated account manager and priority support with 1-hour response SLA.'
  },
  {
    category: 'Support',
    question: 'Do you provide training for my team?',
    answer: 'All plans include unlimited access to Closio Academy—our library of training videos, certification courses, and best practice guides. Premium and enterprise plans receive live onboarding sessions, screen-share training for your entire team, and custom workflow consulting to optimize your agency\'s specific processes.'
  },
  {
    category: 'Support',
    question: 'How often do you release updates?',
    answer: 'We ship product improvements every two weeks. Major features launch quarterly. All updates are automatic—no manual installations or downtime. We announce new features via in-app notifications and monthly changelog emails. Our public roadmap shows what we\'re building next, and users can vote on feature priorities.'
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
      <div className="max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <TypewriterHeading text="Frequently Asked Questions" />
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Find answers to common questions about Closio
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#6ad4f2] text-black shadow-lg shadow-[#6ad4f2]/20'
                    : 'bg-gradient-to-br from-white/[0.07] to-white/[0.03] text-white/70 hover:text-white border border-white/[0.08] hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.05] backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6ad4f2]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="font-semibold text-lg pr-6 text-white/90 group-hover:text-white transition-colors">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6ad4f2]/20 to-[#6ad4f2]/5 flex items-center justify-center border border-[#6ad4f2]/20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#6ad4f2]">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-7 text-white/60 leading-relaxed border-t border-white/[0.06] pt-6 text-[15px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6ad4f2]/20 via-[#6ad4f2]/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl rounded-3xl p-10 border border-[#6ad4f2]/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6ad4f2]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white">Still have questions?</h3>
                <p className="text-white/60 text-lg mb-8 max-w-2xl">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <Link
                  to="/contact-us"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-3 bg-[#6ad4f2] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#6ad4f2]/90 transition-all duration-300 shadow-lg shadow-[#6ad4f2]/20 hover:shadow-xl hover:shadow-[#6ad4f2]/30 hover:scale-105"
                >
                  Contact Support
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQsPage;
