"use client";
import { Link } from "react-router-dom";

const TwitterIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

function HoverFooter() {
  const footerLinks = [
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact Us", href: "/contact" },
        { label: "Schedule a Demo", href: "/schedule" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <TwitterIcon size={18} className="text-white" />,
      text: "Twitter",
      href: "https://twitter.com/closio",
    },
    {
      icon: <InstagramIcon size={18} className="text-white" />,
      text: "Instagram",
      href: "https://www.instagram.com/closio.app",
    },
    {
      icon: <FacebookIcon size={18} className="text-white" />,
      text: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61572677682460",
    },
  ];

  return (
    <footer className="bg-black relative h-fit border-t border-white/5">
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24 z-40 relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-3 flex flex-col space-y-5 lg:items-start">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center -mt-1">
              <img
                src="/closio_main_logo.png"
                alt="Closio"
                className="h-20 sm:h-24 w-auto select-none object-contain"
                draggable={false}
                style={{ maxWidth: '100%' }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Built by insurance professionals, for insurance professionals. Track every deal, commission, and win—automatically.
            </p>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-6 tracking-tight">
              /Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-6 tracking-tight">
              /Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-6 tracking-tight">
              /Follow Us
            </h4>
            <ul className="space-y-3.5 text-sm">
              {socialLinks.map((item, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  {item.icon}
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Closio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
