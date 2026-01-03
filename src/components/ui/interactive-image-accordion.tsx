import React, { useState } from 'react';
import { GlowButton } from '@/components/ui/glow-button';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Dashboard',
    imageUrl: '/main_dashboard_screen-closio_website.png',
    description: 'Get a complete overview of your agency performance at a glance'
  },
  {
    id: 2,
    title: 'Leaderboard',
    imageUrl: '/image copy copy copy copy copy.png',
    description: 'Motivate your team with live performance rankings'
  },
  {
    id: 3,
    title: 'Book of Business',
    imageUrl: '/bofb-_closio_website.png',
    description: 'Track all your clients, policies, and deals in one place'
  },
  {
    id: 4,
    title: 'Commission',
    imageUrl: '/commission-_closio_website.png',
    description: 'Real-time commission tracking and split calculations'
  },
  {
    id: 5,
    title: 'Estimated Payout',
    imageUrl: '/estimated_payouts-_closio_website.png',
    description: 'View projected earnings and payout calculations for your team'
  },
  {
    id: 6,
    title: 'Team Hierarchy',
    imageUrl: '/team_hierarchy-_closio_website.png',
    description: 'Visualize and manage your entire agency structure'
  },
  {
    id: 7,
    title: 'User Management',
    imageUrl: '/user_management-_closio_website.png',
    description: 'Control access, permissions, and roles for your entire team'
  },
  {
    id: 8,
    title: 'Carrier Management',
    imageUrl: '/carrier_management-_closio_website.png',
    description: 'Organize carriers, products, and contracting levels'
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
        relative h-[500px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[480px]' : 'w-[80px]'}
      `}
      onClick={onClick}
    >
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
      <div className={`absolute inset-0 ${isActive ? 'bg-black/40' : 'bg-black/60'} transition-all duration-500`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div
        className={`
          absolute text-white transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-6 right-6'
              : 'left-1/2 bottom-6 -translate-x-1/2 whitespace-nowrap'
          }
        `}
        style={!isActive ? {
          writingMode: 'vertical-rl',
          transform: 'translateX(-50%) rotate(180deg)'
        } : undefined}
      >
        <h3 className={`font-semibold tracking-tight transition-all duration-500 ${isActive ? 'text-2xl mb-3' : 'text-lg'}`}>
          {item.title}
        </h3>
        <p className={`text-sm text-white/80 leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

// --- Main Component ---
export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="product" className="py-28 lg:py-32 bg-white">
      <div className="max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-6rem)] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left Side: Interactive Image Accordion */}
          <div className="w-full lg:w-[58%] lg:pl-4">
            <div className="flex items-center justify-start gap-3 overflow-x-auto p-4">
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

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-[38%] text-center lg:text-left lg:pr-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2C66FF]/10 mb-6">
              <span className="text-black text-xs font-medium tracking-wide uppercase">ALL IN ONE HUB FOR YOU</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
              Your Command Center
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              One unified platform. Complete control over your agency.
            </p>

            <GlowButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              label="Book a Demo"
              className="px-24 py-5 text-lg bg-black text-white hover:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
}