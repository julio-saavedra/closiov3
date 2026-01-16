import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from '../components/TypewriterHeading';

const PrivacyPolicy = () => {
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
          <TypewriterHeading text="Privacy Policy" />

          <div className="text-white/60 mb-4">
            Last Updated: January 5, 2026
          </div>

          <p className="text-white/70 leading-relaxed mb-12">
            Closio ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you access or use the Closio software platform (the "Service").
            <br /><br />
            Closio is operated from New York, New York.
          </p>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect only the information necessary to operate and provide the Service.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Account credentials</li>
                    <li>Business-related data you voluntarily upload into the platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Log and usage data</li>
                  </ul>
                </div>
                <p className="text-white/70 leading-relaxed">
                  We do not collect sensitive personal data unless voluntarily provided by the user within the CRM.
                </p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">2. How We Use Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use collected information solely to:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>Provide, operate, and maintain the Service</li>
                <li>Authenticate users</li>
                <li>Improve performance and reliability</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                We do not use your data for marketing, advertising, or analytics unrelated to the operation of the Service.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">3. Data Storage & Security</h2>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-2 mb-4">
                <li>All data is securely stored using Amazon Web Services (AWS)</li>
                <li>Industry-standard security measures are used, including access controls and encryption where applicable</li>
                <li>Access to customer data is strictly limited to authorized personnel</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                While no system is 100% secure, we take reasonable and appropriate steps to protect your data.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">4. Data Sharing & Disclosure</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Closio does not:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>Sell user data</li>
                <li>Rent user data</li>
                <li>Trade user data</li>
                <li>Share data with third parties for marketing purposes</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-2">
                We may share information only:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                <li>With trusted infrastructure providers (e.g., AWS) solely to operate the Service</li>
                <li>When required by law, court order, or legal process</li>
                <li>To protect our rights, users, or platform security</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">5. Data Ownership</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                All data uploaded into Closio remains the property of the customer.
              </p>
              <p className="text-white/70 leading-relaxed">
                Closio acts only as a software provider and does not claim ownership over user data.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">6. Data Retention</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We retain user data only for as long as:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>The account remains active, or</li>
                <li>Required to comply with legal obligations</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                Users may request account deletion, after which data will be removed within a reasonable timeframe unless legally required to retain it.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">7. Cookies & Tracking</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Closio uses minimal cookies necessary for:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>Authentication</li>
                <li>Platform functionality</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                We do not use advertising cookies or behavioral tracking.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">8. Children's Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Closio is not intended for individuals under the age of 18. We do not knowingly collect data from minors.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">9. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last Updated" date.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">10. Contact Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="text-white/70 leading-relaxed space-y-1">
                <p className="font-semibold text-white">Closio</p>
                <p>New York, New York</p>
                <p>support@closio.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
