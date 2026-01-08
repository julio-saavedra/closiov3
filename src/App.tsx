import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeatureGrid from './components/FeatureGrid';
import MobileSection from './components/MobileSection';
import DealMap from './components/DealMap';
import FullWidthVideo from './components/FullWidthVideo';
import FeatureShowcase from './components/FeatureShowcase';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import FAQAccordion from './components/FAQAccordion';
import ContactSplit from './components/ContactSplit';
import HoverFooter from './components/ui/hover-footer-demo';
import { SectionWrapper } from './components/ui/section-wrapper';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQsPage from './pages/FAQsPage';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/features/Dashboard';
import Leaderboard from './pages/features/Leaderboard';
import BookOfBusiness from './pages/features/BookOfBusiness';
import Commission from './pages/features/Commission';
import EstimatedPayouts from './pages/features/EstimatedPayouts';
import TeamHierarchy from './pages/features/TeamHierarchy';
import UserManagement from './pages/features/UserManagement';
import Reminders from './pages/features/Reminders';
import Schedule from './pages/Schedule';
import TestimonialSection from './components/TestimonialSection';
import GlassRingsSection from './components/GlassRingsSection';
import SplashScreen from './components/SplashScreen';
import OverlappingBanner from './components/OverlappingBanner';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <div id="top" />

      <div>
        <SectionWrapper className="!bg-black !bg-none">
          <Hero />
        </SectionWrapper>

        <OverlappingBanner />

        <SectionWrapper className="!bg-black !bg-none pt-32">
          <ValueProps />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none">
          <FeatureGrid />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !from-black !via-black !to-black">
          <MobileSection />
        </SectionWrapper>

        <SectionWrapper>
          <DealMap />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !overflow-visible">
          <GlassRingsSection />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none">
          <TestimonialSection />
        </SectionWrapper>

        <FullWidthVideo />

        <FeatureShowcase />

        <SectionWrapper>
          <ContactSplit />
        </SectionWrapper>

        <HoverFooter />
      </div>
    </>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useSmoothScroll();

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="bg-black text-[#E8EEF5] overflow-x-hidden w-full min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/features/dashboard" element={<Dashboard />} />
          <Route path="/features/leaderboard" element={<Leaderboard />} />
          <Route path="/features/book-of-business" element={<BookOfBusiness />} />
          <Route path="/features/commission" element={<Commission />} />
          <Route path="/features/estimated-payouts" element={<EstimatedPayouts />} />
          <Route path="/features/team-hierarchy" element={<TeamHierarchy />} />
          <Route path="/features/user-management" element={<UserManagement />} />
          <Route path="/features/reminders" element={<Reminders />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
}

export default App;