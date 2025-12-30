import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import { InteractiveImageAccordion } from './components/ui/interactive-image-accordion';
import DealMap from './components/DealMap';
import RoleTabs from './components/RoleTabs';
import SecurityTiles from './components/SecurityTiles';
import ComparisonTable from './components/ComparisonTable';
import AuroraPricing from './components/ui/aurora-pricing';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import RoadmapTimeline from './components/RoadmapTimeline';
import FAQAccordion from './components/FAQAccordion';
import ContactSplit from './components/ContactSplit';
import HoverFooter from './components/ui/hover-footer-demo';
import { SectionWrapper } from './components/ui/section-wrapper';

function App() {
  return (
    <div className="bg-black text-[#E8EEF5] overflow-x-hidden w-full min-h-screen">
      <div id="top" />
      <Navbar />

      <div className="pt-20">
        <SectionWrapper className="!bg-[#1A2428] !bg-none">
          <Hero />
        </SectionWrapper>

      <SectionWrapper className="!bg-black !bg-none">
        <ValueProps />
      </SectionWrapper>

      <SectionWrapper>
        <InteractiveImageAccordion />
      </SectionWrapper>

      <SectionWrapper>
        <DealMap />
      </SectionWrapper>

      <SectionWrapper>
        <RoleTabs />
      </SectionWrapper>

      <SectionWrapper>
        <SecurityTiles />
      </SectionWrapper>

      <SectionWrapper>
        <ComparisonTable />
      </SectionWrapper>

      <SectionWrapper>
        <AuroraPricing />
      </SectionWrapper>

      <SectionWrapper>
        <TestimonialsCarousel />
      </SectionWrapper>

      <SectionWrapper>
        <RoadmapTimeline />
      </SectionWrapper>

      <SectionWrapper>
        <FAQAccordion />
      </SectionWrapper>

      <SectionWrapper>
        <ContactSplit />
      </SectionWrapper>

      <HoverFooter />
      </div>
    </div>
  );
}

export default App;