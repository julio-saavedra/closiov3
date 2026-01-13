import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' }
];

const RESOURCES_ITEMS = [
  { path: '/contact', label: 'Contact Us' },
  { path: '/schedule', label: 'Schedule a Demo' }
];

const LEGAL_ITEMS = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-conditions', label: 'Terms & Conditions' },
  { path: '/faqs', label: 'FAQs' }
];

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const legalDropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 300;
          const progress = Math.min(scrollY / maxScroll, 1);
          setScrollProgress(progress);

          if (scrollY > lastScrollY.current && scrollY > 100) {
            setIsScrollingDown(true);
          } else {
            setIsScrollingDown(false);
          }
          lastScrollY.current = scrollY;

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
      if (legalDropdownRef.current && !legalDropdownRef.current.contains(event.target as Node)) {
        setLegalDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (!isHomePage) {
        navigate('/');
      }
    } else {
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  const isScrolled = scrollProgress > 0.15;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          padding: isScrolled ? '12px 16px' : '16px',
          transition: 'padding 700ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: isScrolled ? '900px' : '1280px',
            padding: isScrolled ? '8px 24px' : '0 24px',
            borderRadius: isScrolled ? '9999px' : '0px',
            backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
            background: isScrolled
              ? 'linear-gradient(135deg, rgba(40, 40, 45, 0.25) 0%, rgba(30, 30, 35, 0.3) 100%)'
              : 'transparent',
            boxShadow: isScrolled
              ? '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.08)'
              : 'none',
            transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="flex items-center justify-between h-14 relative">
            <Link
              to="/"
              className="flex items-center gap-2 flex-shrink-0 relative z-10"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              aria-label="Closio - Back to top"
            >
              <img
                src="/closio_main_logo.png"
                alt="Closio"
                className="w-auto select-none"
                style={{
                  height: isScrolled ? '48px' : '80px',
                  opacity: isScrolled ? 0 : 1,
                  transition: 'height 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                draggable={false}
              />
              <img
                src="/favicon_and_logo_for_closio.png"
                alt="Closio"
                className="w-auto select-none absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                  height: isScrolled ? '48px' : '80px',
                  opacity: isScrolled ? 1 : 0,
                  transition: 'height 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: isScrolled ? 'auto' : 'none'
                }}
                draggable={false}
              />
            </Link>

            <div
              className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                gap: isScrolled ? '20px' : '32px',
                transition: 'gap 700ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.id === 'home' ? '/' : `#${item.id}`}
                    onClick={handleNavClick(item.id)}
                    className={`nav-underline-glow font-medium inline-flex items-center h-8 ${
                      !isActive ? 'text-white/80 hover:text-white' : 'text-[#6ad4f2]'
                    } ${isActive ? 'is-active' : ''}`}
                    style={{
                      fontSize: isScrolled ? '14px' : '15px',
                      transition: 'font-size 700ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms ease'
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div
                className="relative flex items-center h-8"
                ref={resourcesDropdownRef}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  className={`nav-underline-glow font-medium inline-flex items-center gap-1 h-8 ${
                    RESOURCES_ITEMS.some(item => item.path === location.pathname)
                      ? 'text-[#6ad4f2] is-active'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{
                    fontSize: isScrolled ? '14px' : '15px',
                    transition: 'font-size 700ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms ease'
                  }}
                >
                  Resources
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="w-48 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                      {RESOURCES_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => { setResourcesDropdownOpen(false); window.scrollTo(0, 0); }}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-[#6ad4f2] bg-[#6ad4f2]/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative flex items-center h-8"
                ref={legalDropdownRef}
                onMouseEnter={() => setLegalDropdownOpen(true)}
                onMouseLeave={() => setLegalDropdownOpen(false)}
              >
                <button
                  onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                  className={`nav-underline-glow font-medium inline-flex items-center gap-1 h-8 ${
                    LEGAL_ITEMS.some(item => item.path === location.pathname)
                      ? 'text-[#6ad4f2] is-active'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{
                    fontSize: isScrolled ? '14px' : '15px',
                    transition: 'font-size 700ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms ease'
                  }}
                >
                  Docs & More
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${legalDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {legalDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="w-48 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                      {LEGAL_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => { setLegalDropdownOpen(false); window.scrollTo(0, 0); }}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-[#6ad4f2] bg-[#6ad4f2]/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="hidden lg:flex items-center flex-shrink-0 relative z-10"
              style={{
                gap: isScrolled ? '8px' : '12px',
                transition: 'gap 700ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Link
                to="/schedule"
                className="demo-btn bg-white text-black font-medium whitespace-nowrap rounded-xl hover:bg-white/90"
                style={{
                  padding: isScrolled ? '8px 20px' : '10px 24px',
                  fontSize: isScrolled ? '14px' : '15px',
                  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                  perspective: '600px'
                }}
              >
                <span className="demo-btn-text">Get in touch</span>
              </Link>
              <button
                onClick={() => window.location.href = 'https://closio.com/login'}
                className="bg-white text-black font-medium whitespace-nowrap rounded-xl hover:bg-white/90"
                style={{
                  padding: isScrolled ? '8px 20px' : '10px 24px',
                  fontSize: isScrolled ? '14px' : '15px',
                  opacity: isScrollingDown && !isScrolled ? 0 : 1,
                  pointerEvents: isScrollingDown && !isScrolled ? 'none' : 'auto',
                  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                Log In
              </button>
            </div>

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
                      ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Resources
                </div>
                {RESOURCES_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                    className={`w-full block text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Docs & More
                </div>
                {LEGAL_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                    className={`w-full block text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 px-4 space-y-3 border-t border-white/10 mt-4">
                <Link
                  to="/schedule"
                  onClick={() => setMobileMenuOpen(false)}
                  className="demo-btn bg-white text-black font-medium w-full px-5 py-3 text-base rounded-xl hover:bg-white/90 transition-colors block text-center"
                  style={{ perspective: '600px' }}
                >
                  <span className="demo-btn-text">Get in touch</span>
                </Link>
                <button
                  onClick={() => window.location.href = 'https://closio.com/login'}
                  className={`bg-white text-black font-medium w-full px-5 py-3 text-base rounded-xl hover:bg-white/90 transition-all duration-300 ${
                    isScrollingDown ? 'opacity-50' : 'opacity-100'
                  }`}
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
