import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeatureGrid from './components/FeatureGrid';
import MobileSection from './components/MobileSection';
import DealBotAutomation from './components/DealBotAutomation';
import AdditionalFeatures from './components/AdditionalFeatures';
import DealMap from './components/DealMap';
import FeatureShowcase from './components/FeatureShowcase';
import ContactSplit from './components/ContactSplit';
import HoverFooter from './components/ui/hover-footer-demo';
import { SectionWrapper } from './components/ui/section-wrapper';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQsPage from './pages/FAQsPage';
import ContactUs from './pages/ContactUs';
import Schedule from './pages/Schedule';
import Pricing from './pages/Pricing';
import TestimonialSection from './components/TestimonialSection';
import GlassRingsSection from './components/GlassRingsSection';
import SplashScreen from './components/SplashScreen';
import OverlappingBanner from './components/OverlappingBanner';
import ScrollToTop from './components/ScrollToTop';
import IntegratedFeaturesFlow from './components/IntegratedFeaturesFlow';
import CookieBanner from './components/CookieBanner';
import PricingSection from './components/PricingSection';

function HomePage() {
  return (
    <>
      <div id="top" />

      <div>
        <SectionWrapper className="!bg-black !bg-none !overflow-visible">
          <Hero />
        </SectionWrapper>

        <OverlappingBanner />

        <SectionWrapper className="!bg-black !bg-none pt-32 rounded-b-none">
          <ValueProps />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none rounded-none">
          <FeatureGrid />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !from-black !via-black !to-black">
          <MobileSection />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none">
          <DealBotAutomation />
        </SectionWrapper>

        <AdditionalFeatures />

        <SectionWrapper>
          <DealMap />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !overflow-visible">
          <IntegratedFeaturesFlow />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !overflow-visible">
          <GlassRingsSection />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none">
          <TestimonialSection />
        </SectionWrapper>

        <PricingSection />

        <FeatureShowcase />

        <SectionWrapper className="!overflow-visible !bg-black !bg-none">
          <ContactSplit />
        </SectionWrapper>

        <HoverFooter />
      </div>
    </>
  );
}

function App() {
  // Only show splash screen on very first load, not on navigation
  const [showSplash, setShowSplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return !hasSeenSplash;
  });
  
  useSmoothScroll();

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
  }, [showSplash]);

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
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <CookieBanner />
      </div>
    </>
  );
}

export default App;
