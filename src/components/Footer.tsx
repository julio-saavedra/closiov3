import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/', isRoute: true }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Contact Us', href: '/contact', isRoute: true },
        { label: 'Schedule a Demo', href: '/schedule', isRoute: true }
      ]
    },
    {
      title: 'Docs & More',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
        { label: 'Terms & Conditions', href: '/terms-conditions', isRoute: true },
        { label: 'FAQs', href: '/faqs', isRoute: true }
      ]
    }
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61572677682460' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Email', href: 'mailto:hello@closio.io' }
  ];

  return (
    <footer
      className="relative overflow-visible"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 15%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.85) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[2px]" />
      <div className="absolute top-[-15px] left-0 right-0 h-[35px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl" />
      <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[50%] h-[60px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40 lg:pt-[160px] pb-12 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="flex items-center mb-6"
              onClick={scrollToTop}
            >
              <img
                src="/closio_main_logo.png"
                alt="Closio"
                className="h-16 sm:h-20 md:h-24 w-auto select-none"
                draggable={false}
              />
            </Link>

            <p className="text-[#A8B3C7] mb-6 leading-[1.6]">
              The proprietary CRM built exclusively for life insurance professionals.
              Close more deals, track commissions clearly, and grow your agency with confidence.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-400">/Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 sm:py-2 bg-white/10 border border-white/20 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:border-[#2C66FF] focus:ring-2 focus:ring-[#2C66FF]/20 outline-none transition-all text-sm min-h-[44px]"
                />
                <button className="px-4 py-3 sm:py-2 bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:scale-105 transition-all text-sm min-h-[44px]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-3 py-2 bg-white/10 rounded-xl hover:bg-[#2C66FF] transition-all hover:scale-110 text-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-gray-400">/{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-[#A8B3C7] hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[#A8B3C7] hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/12 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
          <div className="text-[#A8B3C7] text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Closio. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-[#A8B3C7] text-xs sm:text-sm hidden sm:block">
              Made for life insurance professionals
            </div>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 bg-white/10 hover:bg-[#2C66FF] rounded-xl flex items-center justify-center transition-all hover:scale-110 text-xl min-w-[44px] min-h-[44px]"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;