"use client";
import {
  Mail,
  Phone,
  Instagram,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Our Story", href: "#", pulse: false },
        { label: "Leadership Team", href: "#", pulse: false },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#", pulse: false },
        { label: "Support", href: "#", pulse: false },
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
    {
      icon: <Instagram size={18} className="text-[#3ca2fa]" />,
      text: "Instagram",
      href: "https://www.instagram.com/closio.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      external: true,
    },
  ];

  return (
    <footer className="bg-black relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 lg:p-14 z-40 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16 pb-8 sm:pb-10 md:pb-12">
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-[#3ca2fa] text-2xl sm:text-3xl font-bold">Closio</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Closio is a purpose-built CRM for life-insurance agencies and
              producers, designed to bring clarity to leads, policies,
              commissions, and performance.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
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
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors text-sm sm:text-base"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors text-sm sm:text-base">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-6 sm:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm space-y-4 md:space-y-0 text-gray-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Closio. All rights reserved.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="CLOSIO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
