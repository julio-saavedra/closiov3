import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from '../components/TypewriterHeading';

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
          <TypewriterHeading text="Terms & Conditions" />

          <div className="text-white/60 mb-4">
            Last Updated: January 5, 2026
          </div>

          <p className="text-white/70 leading-relaxed mb-12">
            These Terms & Conditions ("Terms") govern your access to and use of the Closio software platform (the "Service"). By accessing or using Closio, you agree to these Terms.
          </p>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">1. Acceptance of Terms</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>By creating an account or using the Service, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have read and understood these Terms</li>
                  <li>You are legally authorized to enter into this agreement</li>
                  <li>You agree to be bound by these Terms</li>
                </ul>
                <p>If you do not agree, do not use the Service.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">2. Description of Service</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio provides a cloud-based CRM software platform.</p>
                <p>Closio does not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sell leads</li>
                  <li>Provide SMS or email messaging services</li>
                  <li>Act as an insurance carrier, agency, or broker</li>
                </ul>
                <p>Closio is a software provider only.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">3. Account Responsibilities</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activity that occurs under your account</li>
                  <li>Ensuring data uploaded into the platform is lawful and authorized</li>
                </ul>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upload illegal or unauthorized data</li>
                  <li>Attempt to access systems you are not authorized to use</li>
                  <li>Reverse engineer or misuse the platform</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">4. Data & Content</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>You retain full ownership of your data</li>
                  <li>You grant Closio a limited license to host and process data solely to operate the Service</li>
                  <li>Closio does not monitor or verify user-submitted data for accuracy or legality</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">5. Fees & Billing (If Applicable)</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>If subscription fees apply:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fees are billed according to the selected plan</li>
                  <li>Fees are non-refundable unless otherwise stated</li>
                  <li>Closio may modify pricing with reasonable notice</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">6. Service Availability</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio strives for reliable uptime but does not guarantee uninterrupted access.</p>
                <p>We may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perform maintenance</li>
                  <li>Update features</li>
                  <li>Modify or discontinue portions of the Service</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">7. Termination</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio may suspend or terminate access if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>These Terms are violated</li>
                  <li>The Service is misused</li>
                  <li>Required by law</li>
                </ul>
                <p>Users may cancel accounts at any time.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">8. Disclaimers</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>The Service is provided "as is" and "as available."</p>
                <p>Closio disclaims all warranties, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">9. Limitation of Liability</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Closio is not liable for indirect, incidental, or consequential damages</li>
                  <li>Total liability shall not exceed the amount paid to Closio in the previous 12 months</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">10. Indemnification</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>You agree to indemnify and hold harmless Closio from any claims arising from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Service</li>
                  <li>Data you upload</li>
                  <li>Violation of laws or third-party rights</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">11. Governing Law</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms are governed by the laws of the State of New York, without regard to conflict of law principles.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">12. Changes to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                Closio may update these Terms from time to time. Continued use of the Service constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">13. Contact Information</h2>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p className="font-medium">Closio</p>
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

export default TermsConditions;
