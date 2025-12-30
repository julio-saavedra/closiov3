"use client";
import {
  Mail,
  Phone,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

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
      title: "About Us",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Leadership Team", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "support@closio.com",
      href: "mailto:support@closio.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
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
    <footer className="bg-black relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 lg:p-14 z-40 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 pb-8 sm:pb-10 md:pb-12">
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-[#3ca2fa] text-2xl sm:text-3xl font-bold">Closio</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              The CRM built for life insurance agencies.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center sm:text-left">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center justify-center sm:justify-start space-x-3">
                  {item.icon}
                  <a
                    href={item.href}
                    className="hover:text-[#3ca2fa] transition-colors text-sm sm:text-base"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Follow Us
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              {socialLinks.map((item, i) => (
                <li key={i} className="flex items-center justify-center sm:justify-start space-x-3">
                  {item.icon}
                  <a
                    href={item.href}
                    className="hover:text-[#3ca2fa] transition-colors text-sm sm:text-base"
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

        <hr className="border-t border-gray-700 my-6 sm:my-8" />
      </div>

      <div className="flex justify-center items-center text-xs sm:text-sm text-gray-400 pt-4 relative z-50">
        <p>&copy; {new Date().getFullYear()} Closio. All rights reserved.</p>
      </div>

      <div className="hidden lg:flex h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="CLOSIO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
