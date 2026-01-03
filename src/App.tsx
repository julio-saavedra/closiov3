import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import MobileSection from './components/MobileSection';
import { InteractiveImageAccordion } from './components/ui/interactive-image-accordion';
import DealMap from './components/DealMap';
import FullWidthVideo from './components/FullWidthVideo';
import FeatureShowcase from './components/FeatureShowcase';
import ComparisonTable from './components/ComparisonTable';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import FAQAccordion from './components/FAQAccordion';
import ContactSplit from './components/ContactSplit';
import HoverFooter from './components/ui/hover-footer-demo';
import { SectionWrapper } from './components/ui/section-wrapper';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQsPage from './pages/FAQsPage';
import Dashboard from './pages/features/Dashboard';
import Leaderboard from './pages/features/Leaderboard';
import BookOfBusiness from './pages/features/BookOfBusiness';
import Commission from './pages/features/Commission';
import EstimatedPayouts from './pages/features/EstimatedPayouts';
import TeamHierarchy from './pages/features/TeamHierarchy';
import UserManagement from './pages/features/UserManagement';
import Reminders from './pages/features/Reminders';

function HomePage() {
  return (
    <>
      <div id="top" />

      <div>
        <SectionWrapper className="!bg-black !bg-none">
          <Hero />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none">
          <ValueProps />
        </SectionWrapper>

        <SectionWrapper className="!bg-black !bg-none !from-black !via-black !to-black">
          <MobileSection />
        </SectionWrapper>

        <SectionWrapper className="!bg-[#0F1214] !bg-none">
          <InteractiveImageAccordion />
        </SectionWrapper>

        <SectionWrapper>
          <DealMap />
        </SectionWrapper>

        <FullWidthVideo />

        <FeatureShowcase />

        <SectionWrapper>
          <ComparisonTable />
        </SectionWrapper>

        <SectionWrapper>
          <TestimonialsCarousel />
        </SectionWrapper>

        <SectionWrapper>
          <ContactSplit />
        </SectionWrapper>

        <HoverFooter />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="bg-black text-[#E8EEF5] overflow-x-hidden w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/features/dashboard" element={<Dashboard />} />
        <Route path="/features/leaderboard" element={<Leaderboard />} />
        <Route path="/features/book-of-business" element={<BookOfBusiness />} />
        <Route path="/features/commission" element={<Commission />} />
        <Route path="/features/estimated-payouts" element={<EstimatedPayouts />} />
        <Route path="/features/team-hierarchy" element={<TeamHierarchy />} />
        <Route path="/features/user-management" element={<UserManagement />} />
        <Route path="/features/reminders" element={<Reminders />} />
      </Routes>
    </div>
  );
}

export default App;