"use client";
import { Link } from "react-router-dom";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";

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
      title: "Features",
      links: [
        { label: "Dashboard", href: "/features/dashboard" },
        { label: "Leaderboard", href: "/features/leaderboard" },
        { label: "Book of Business", href: "/features/book-of-business" },
        { label: "Commission", href: "/features/commission" },
        { label: "Estimated Payouts", href: "/features/estimated-payouts" },
        { label: "Team Hierarchy", href: "/features/team-hierarchy" },
        { label: "User Management", href: "/features/user-management" },
        { label: "Reminders & More", href: "/features/reminders" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <TwitterIcon size={18} className="text-[#3ca2fa]" />,
      text: "Twitter",
      href: "https://twitter.com/closio",
    },
    {
      icon: <InstagramIcon size={18} className="text-[#3ca2fa]" />,
      text: "Instagram",
      href: "https://www.instagram.com/closio.app",
    },
    {
      icon: <FacebookIcon size={18} className="text-[#3ca2fa]" />,
      text: "Facebook",
      href: "https://facebook.com/closio",
    },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-xl relative h-fit overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12 sm:py-14 md:py-16 z-40 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-5 lg:gap-6">
          {/* Company Info */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/67ff5f5f-fc49-493f-8cb5-0467588c2623.png"
                alt="Closio"
                className="h-24 w-auto select-none"
                draggable={false}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 pr-4">
              The CRM built for life insurance agencies.
            </p>
          </div>

          {/* Features */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-5 tracking-tight">
              /Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#6ad4f2] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-5 tracking-tight">
              /Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#6ad4f2] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-400 text-base font-semibold mb-5 tracking-tight">
              /Follow Us
            </h4>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((item, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  {item.icon}
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#6ad4f2] transition-colors"
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Closio. All rights reserved.
          </p>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
