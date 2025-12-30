import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GlowButton } from '@/components/ui/glow-button';

interface NavbarProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: 'product', label: 'Product' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
  { id: 'coming-soon', label: 'Coming Soon' }
];

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 500;
          const progress = Math.min(scrollY / maxScroll, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -55% 0px',
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          scrollProgress > 0.1 ? 'py-3' : 'py-4'
        }`}
        style={{
          background: '#000000',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Closio - Back to top"
            >
              <img
                src="/67ff5f5f-fc49-493f-8cb5-0467588c2623.png"
                alt="Closio"
                className="h-24 w-auto select-none"
                draggable={false}
              />
            </a>

            {/* Desktop Nav Links - Center */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleNavClick(item.id)}
                    className={[
                      'nav-underline-glow',
                      'text-sm font-medium transition-colors',
                      !isActive ? 'text-white/80 hover:text-white' : 'text-[#2C66FF]',
                      isActive ? 'is-active' : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons - Right */}
            <div className="hidden lg:flex items-center space-x-3">
              <GlowButton
                onClick={handleNavClick('contact')}
                label="Book a Demo"
                className="px-5 py-2 text-sm whitespace-nowrap"
              />
              <button
                onClick={() => window.location.href = 'https://closio.com/login'}
                className="glass-btn-lite glass-btn-lite--default px-5 py-2 text-sm whitespace-nowrap"
              >
                Log In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-glass fixed top-[72px] left-0 right-0 mx-4 rounded-2xl shadow-2xl overflow-hidden">
            <div className="py-4 px-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#2C66FF]/20 text-[#2C66FF]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4 space-y-3 border-t border-white/10 mt-4">
                <GlowButton
                  onClick={handleNavClick('contact')}
                  label="Book a Demo"
                  className="w-full px-5 py-2.5 text-sm"
                />
                <button
                  onClick={() => window.location.href = 'https://closio.com/login'}
                  className="glass-btn-lite glass-btn-lite--default w-full px-5 py-2.5 text-sm"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
