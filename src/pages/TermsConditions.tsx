import { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Terms & Conditions</h1>

          <div className="text-white/60 mb-12">
            Last updated: January 1, 2026
          </div>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">1. Acceptance of Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By accessing and using Closio, you accept and agree to be bound by these Terms and
                Conditions and our Privacy Policy. If you do not agree to these terms, please do
                not use our services.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">2. Use of Services</h2>
              <p className="text-white/70 leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these
                Terms. You are responsible for maintaining the confidentiality of your account
                credentials and for all activities under your account.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">3. Subscription and Payments</h2>
              <p className="text-white/70 leading-relaxed">
                Certain features of our service require a paid subscription. By subscribing, you
                agree to pay all applicable fees. Subscriptions automatically renew unless cancelled
                before the renewal date.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">4. Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed">
                All content, features, and functionality of Closio are owned by us and are protected
                by international copyright, trademark, and other intellectual property laws. You may
                not reproduce, distribute, or create derivative works without our permission.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">5. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed">
                To the fullest extent permitted by law, Closio shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting from your use of
                or inability to use the service.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">6. Termination</h2>
              <p className="text-white/70 leading-relaxed">
                We may terminate or suspend your account and access to our services immediately,
                without prior notice, for any breach of these Terms. Upon termination, your right
                to use the service will cease immediately.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">7. Changes to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of
                any material changes via email or through the service. Continued use after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">8. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                For questions about these Terms and Conditions, please contact us at
                legal@closio.com or through our contact form on the website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
