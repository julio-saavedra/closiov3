import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#product' },
        { label: 'Automations', href: '#automations' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'Security', href: '#security' },
        { label: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press Kit', href: '#' },
        { label: 'Partners', href: '#agencies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Help Center', href: '#faq' },
        { label: 'Tutorials', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Roadmap', href: '#roadmap' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR', href: '#' },
        { label: 'Compliance', href: '#security' }
      ]
    }
  ];

  const socialLinks = [
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
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6 pt-[220px] pb-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img
              src="/main_closio_logo.png"
              alt="Closio"
              className="h-32 w-auto select-none mb-4"
              draggable={false}
            />
            <p className="text-[#A8B3C7] mb-6 leading-relaxed">
              The proprietary CRM built exclusively for life insurance professionals. 
              Close more deals, track commissions clearly, and grow your agency with confidence.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-400">/Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-xl focus:border-[#2C66FF] focus:ring-2 focus:ring-[#2C66FF]/20 outline-none transition-all text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] rounded-r-xl hover:scale-105 transition-all text-sm">
                  →
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="px-3 py-2 bg-white/10 rounded-xl hover:bg-[#2C66FF] transition-all hover:scale-110 text-xs"
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
                    <a
                      href={link.href}
                      className="text-[#A8B3C7] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#A8B3C7] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Closio. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-[#A8B3C7] text-sm">
              Made for life insurance professionals
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-[#2C66FF] rounded-xl flex items-center justify-center transition-all hover:scale-110 text-xl"
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