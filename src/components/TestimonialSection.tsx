import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  quoteBefore: string;
  highlight: string;
  quoteAfter: string;
  author: string;
  initials: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quoteBefore: "We're not spreadsheet experts, but",
    highlight: "Closio is so intuitive and powerful",
    quoteAfter: "— it lets us focus on what matters most: our clients and commissions.",
    author: "Michael Johnson",
    initials: "MJ",
    role: "Agency Director, Premier Life Insurance"
  },
  {
    quoteBefore: "Finally, a tool that understands how we work.",
    highlight: "Our team productivity doubled",
    quoteAfter: "in the first month. The visibility into our pipeline changed everything.",
    author: "Sarah Chen",
    initials: "SC",
    role: "Regional Manager, Pacific Insurance Group"
  },
  {
    quoteBefore: "The commission tracking alone saves us hours.",
    highlight: "Complete visibility into our earnings",
    quoteAfter: "means no more surprises. We know exactly what's coming and when.",
    author: "David Martinez",
    initials: "DM",
    role: "Agency Owner, Martinez & Associates"
  }
];

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + sectionHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const newIndex = Math.min(
        testimonials.length - 1,
        Math.floor(clampedProgress * testimonials.length)
      );

      if (newIndex !== activeIndex) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex(newIndex);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const current = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-14 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-10 text-center">
          <div className="mb-6">
            <img
              src="/closio_main_logo.png"
              alt="Closio"
              className="h-14 mx-auto"
            />
          </div>

          <blockquote className="mb-8 min-h-[120px] sm:min-h-[100px] flex items-center justify-center">
            <p
              className={`text-xl sm:text-2xl lg:text-3xl leading-relaxed text-slate-400 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              "{current.quoteBefore} <span className="text-white font-semibold">{current.highlight}</span> {current.quoteAfter}"
            </p>
          </blockquote>

          <div
            className={`flex flex-col items-center transition-all duration-300 ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ad4f2] to-[#d593c0] flex items-center justify-center mb-3">
              <span className="text-black font-bold text-base">{current.initials}</span>
            </div>
            <div>
              <p className="text-white font-semibold text-base">{current.author}</p>
              <p className="text-slate-400 text-sm">{current.role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-gradient-to-r from-[#6ad4f2] to-[#d593c0]'
                    : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
