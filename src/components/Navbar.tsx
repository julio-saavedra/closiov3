import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' }
];

const FEATURES_ITEMS = [
  { path: '/features/dashboard', label: 'Dashboard', description: 'Real-time insights at a glance' },
  { path: '/features/leaderboard', label: 'Leaderboard', description: 'Track top performers' },
  { path: '/features/book-of-business', label: 'Book of Business', description: 'Manage your portfolio' },
  { path: '/features/commission', label: 'Commission', description: 'Calculate earnings instantly' },
  { path: '/features/estimated-payouts', label: 'Estimated Payouts', description: 'Forecast your income' },
  { path: '/features/team-hierarchy', label: 'Team Hierarchy', description: 'Visualize team structure' },
  { path: '/features/user-management', label: 'User Management', description: 'Control access & roles' },
  { path: '/features/reminders', label: 'Reminders & More', description: 'Never miss important dates' }
];

const DOCS_ITEMS = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-conditions', label: 'Terms & Conditions' },
  { path: '/faqs', label: 'FAQs' },
  { path: '/contact', label: 'Contact Us' }
];

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const featuresDropdownRef = useRef<HTMLDivElement>(null);
  const docsDropdownRef = useRef<HTMLDivElement>(null);
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

          // Track scroll direction
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

    handleScroll(); // Initial call
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
      if (featuresDropdownRef.current && !featuresDropdownRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false);
      }
      if (docsDropdownRef.current && !docsDropdownRef.current.contains(event.target as Node)) {
        setDocsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'home') {
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
              ? 'linear-gradient(135deg, rgba(15, 15, 20, 0.9) 0%, rgba(8, 8, 12, 0.95) 100%)'
              : 'transparent',
            boxShadow: isScrolled
              ? '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : 'none',
            transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 flex-shrink-0"
              onClick={() => {
                if (isHomePage) {
                  document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Closio - Back to top"
            >
              <img
                src="/closio_main_logo.png"
                alt="Closio"
                className="w-auto select-none"
                style={{
                  height: isScrolled ? '48px' : '80px',
                  transition: 'height 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                draggable={false}
              />
            </Link>

            {/* Desktop Nav Links - Center */}
            <div
              className="hidden lg:flex items-center justify-center"
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
                    href={`#${item.id}`}
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

              {/* Features Dropdown */}
              <div
                className="relative flex items-center h-8"
                ref={featuresDropdownRef}
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <button
                  onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                  className={`nav-underline-glow font-medium inline-flex items-center gap-1 h-8 ${
                    FEATURES_ITEMS.some(item => item.path === location.pathname)
                      ? 'text-[#6ad4f2] is-active'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{
                    fontSize: isScrolled ? '14px' : '15px',
                    transition: 'font-size 700ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms ease'
                  }}
                >
                  Features
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${featuresDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {featuresDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="w-[720px] p-4 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                      <div className="grid grid-cols-3 gap-3">
                        {FEATURES_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setFeaturesDropdownOpen(false)}
                            className={`group flex flex-col px-3 py-2.5 rounded-md transition-all duration-200 ${
                              location.pathname === item.path
                                ? 'bg-[#6ad4f2]/10 border border-[#6ad4f2]/30'
                                : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20'
                            }`}
                          >
                            <span className={`text-sm font-semibold mb-1 transition-colors ${
                              location.pathname === item.path
                                ? 'text-[#6ad4f2]'
                                : 'text-white group-hover:text-[#6ad4f2]'
                            }`}>
                              {item.label}
                            </span>
                            <span className="text-xs text-white/50 leading-snug">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Docs & FAQs Dropdown */}
              <div
                className="relative flex items-center h-8"
                ref={docsDropdownRef}
                onMouseEnter={() => setDocsDropdownOpen(true)}
                onMouseLeave={() => setDocsDropdownOpen(false)}
              >
                <button
                  onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                  className={`nav-underline-glow font-medium inline-flex items-center gap-1 h-8 ${
                    DOCS_ITEMS.some(item => item.path === location.pathname)
                      ? 'text-[#6ad4f2] is-active'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{
                    fontSize: isScrolled ? '14px' : '15px',
                    transition: 'font-size 700ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms ease'
                  }}
                >
                  Docs & FAQs
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${docsDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {docsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="w-48 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                      {DOCS_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDocsDropdownOpen(false)}
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

            {/* CTA Buttons - Right */}
            <div
              className="hidden lg:flex items-center flex-shrink-0"
              style={{
                gap: isScrolled ? '8px' : '12px',
                transition: 'gap 700ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <button
                onClick={handleNavClick('contact')}
                className="demo-btn bg-white text-black font-medium whitespace-nowrap rounded-xl hover:bg-white/90"
                style={{
                  padding: isScrolled ? '6px 16px' : '8px 20px',
                  fontSize: isScrolled ? '12px' : '14px',
                  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                  perspective: '600px'
                }}
              >
                <span className="demo-btn-text">Book a Demo</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://closio.com/login'}
                className="bg-transparent text-white font-medium whitespace-nowrap rounded-xl hover:bg-white/10"
                style={{
                  padding: isScrolled ? '6px 16px' : '8px 20px',
                  fontSize: isScrolled ? '12px' : '14px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  opacity: isScrollingDown && !isScrolled ? 0 : 1,
                  pointerEvents: isScrollingDown && !isScrolled ? 'none' : 'auto',
                  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
                      ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Features Section */}
              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Features
                </div>
                {FEATURES_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full flex flex-col text-left px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-white/40 mt-0.5">{item.description}</span>
                  </Link>
                ))}
              </div>

              {/* Docs & FAQs Section */}
              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Docs & FAQs
                </div>
                {DOCS_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
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
                <button
                  onClick={handleNavClick('contact')}
                  className="demo-btn bg-white text-black font-medium w-full px-5 py-2.5 text-sm rounded-xl hover:bg-white/90 transition-colors"
                  style={{ perspective: '600px' }}
                >
                  <span className="demo-btn-text">Book a Demo</span>
                </button>
                <button
                  onClick={() => window.location.href = 'https://closio.com/login'}
                  className={`bg-white text-black font-medium w-full px-5 py-2.5 text-sm rounded-xl hover:bg-white/90 transition-all duration-300 ${
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
