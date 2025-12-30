import React, { useState } from 'react';
import { GlowButton } from '@/components/ui/glow-button';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Dashboard',
    imageUrl: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Get a complete overview of your agency performance at a glance'
  },
  {
    id: 2,
    title: 'Book of Business',
    imageUrl: '/book-of-business.png',
    description: 'Track all your clients, policies, and deals in one place'
  },
  {
    id: 3,
    title: 'Commission',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Real-time commission tracking and split calculations'
  },
  {
    id: 4,
    title: 'Leaderboard',
    imageUrl: 'https://images.pexels.com/photos/7413891/pexels-photo-7413891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Motivate your team with live performance rankings'
  },
  {
    id: 5,
    title: 'Team Hierarchy',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Visualize and manage your entire agency structure'
  },
  {
    id: 6,
    title: 'User Management',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Control access, permissions, and roles for your entire team'
  },
  {
    id: 7,
    title: 'Carrier Management',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[420px]' : 'w-[80px]'}
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
        <h3 className={`font-semibold tracking-tight transition-all duration-500 ${isActive ? 'text-2xl mb-3' : 'text-sm'}`}>
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
    <section id="product" className="py-20">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C66FF]/10 border border-[#2C66FF]/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2C66FF] animate-pulse" />
              <span className="text-[#2C66FF] text-xs font-medium tracking-wide uppercase">All in one HUB for you</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Your Command Center
            </h2>
            <p className="text-lg text-[#A8B3C7] mb-8">
              One unified platform. Complete control over your agency.
            </p>

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