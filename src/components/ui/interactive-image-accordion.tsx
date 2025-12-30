import React, { useState } from 'react';
import { GlowButton } from '@/components/ui/glow-button';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Unified Pipeline Management',
    imageUrl: '/book-of-business.png',
    description: 'Complete visibility from lead generation to issue paid'
  },
  {
    id: 2,
    title: 'Commission Tracking',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    description: 'Transparent commission calculations and splits management'
  },
  {
    id: 3,
    title: 'Agent Performance Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'Real-time performance metrics and coaching insights'
  },
  {
    id: 4,
    title: 'Client Communication Hub',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
    description: 'Centralized client interactions and follow-ups'
  },
  {
    id: 5,
    title: 'Compliance & Security',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    description: 'Enterprise-grade security and regulatory compliance'
  },
  {
    id: 6,
    title: 'Policy Document Management',
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Organize and access all policy documents instantly'
  },
  {
    id: 7,
    title: 'Automated Workflows',
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Streamline repetitive tasks with intelligent automation'
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem = React.memo(({ item, isActive, onClick }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[380px]' : 'w-[70px]'}
      `}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-left"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Caption Text */}
      <div
        className={`
          absolute text-white transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-6 right-6 rotate-0' // Active state: horizontal, bottom
              : 'bottom-12 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap' // Inactive: vertical
          }
        `}
      >
        <h3 className={`font-bold ${isActive ? 'text-xl mb-2' : 'text-lg'}`}>
          {item.title}
        </h3>
        {isActive && (
          <p className="text-sm text-gray-200 opacity-90">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

// --- Main Component ---
export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="product" className="py-20">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C66FF]/10 border border-[#2C66FF]/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2C66FF] animate-pulse" />
              <span className="text-[#2C66FF] text-xs font-medium tracking-wide uppercase">All-in-One Platform</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Your Command Center
            </h2>
            <p className="text-lg text-[#A8B3C7] mb-8">
              One unified platform. Complete control over your agency.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Dashboard',
                'Leaderboard',
                'Book of Business',
                'Commission',
                'Admin Payout',
                'Agent Payout',
                'Team Hierarchy',
                'User Management',
                'Reminders',
                'Carrier Management',
                'Quick Links'
              ].map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.03] border border-white/10 text-[#A8B3C7] hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all duration-200 cursor-default"
                >
                  {feature}
                </span>
              ))}
            </div>

            <GlowButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              label="Book a Demo"
              className="px-8 py-4"
            />
          </div>

          {/* Right Side: Interactive Image Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}