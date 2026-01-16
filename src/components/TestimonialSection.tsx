import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  text: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Finally, a tool that understands how we work. Our team productivity doubled in the first month. The visibility into our pipeline changed everything."
  },
  {
    text: "We're not spreadsheet experts, but Closio is so intuitive and powerful — it lets us focus on what matters most: our clients and commissions."
  },
  {
    text: "The automation alone saves us 15+ hours a week. Deal Bot handles the busy work so we can focus on closing deals."
  },
  {
    text: "Real-time insights into our pipeline performance have transformed how we coach our team. The results speak for themselves."
  },
  {
    text: "Onboarding was seamless. Our entire team was up and running in less than a day. Best investment we've made this year."
  },
  {
    text: "We've tried multiple CRMs, but Closio actually fits how insurance agencies operate. It's like it was built by people who get our business."
  }
];

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -15% 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text, hasStarted]);

  return (
    <div ref={elementRef} className="text-center mb-8">
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/40 tracking-tight leading-[1.1]">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = (index: number) => (index - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = (index: number) => (index + 1) % testimonials.length;

  const prevIndex = getPrevIndex(activeIndex);
  const nextIndex = getNextIndex(activeIndex);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <TypewriterText text="Testimonials" />
        
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Left Blurred Card */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] opacity-40 blur-[3px] pointer-events-none hidden lg:block">
            <div className="bg-gradient-to-b from-white/5 via-white/5 to-transparent rounded-3xl p-6 border border-white/10">
              <div className="mb-4">
                <img
                  src="/closio_main_logo.png"
                  alt="Closio"
                  className="h-10 mx-auto opacity-50"
                />
              </div>
              <blockquote>
                <p className="text-base text-slate-400 line-clamp-4">
                  "{testimonials[prevIndex].text}"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Center Main Card */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
            <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-10 text-center border border-white/10 shadow-2xl">
              {/* Fixed Logo - doesn't animate */}
              <div className="mb-6">
                <img
                  src="/closio_main_logo.png"
                  alt="Closio"
                  className="h-14 mx-auto"
                />
              </div>

              {/* Animated Testimonial Content */}
              <div className="relative overflow-hidden">
                <blockquote className="min-h-[180px] flex items-center justify-center">
                  <p
                    key={activeIndex}
                    className="text-xl sm:text-2xl lg:text-3xl leading-[1.5] text-slate-200 animate-[slideIn_0.6s_ease-out]"
                  >
                    "{testimonials[activeIndex].text}"
                  </p>
                </blockquote>
              </div>

              {/* Progress dots - fixed position */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-gradient-to-r from-purple-500 to-white' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Blurred Card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] opacity-40 blur-[3px] pointer-events-none hidden lg:block">
            <div className="bg-gradient-to-b from-white/5 via-white/5 to-transparent rounded-3xl p-6 border border-white/10">
              <div className="mb-4">
                <img
                  src="/closio_main_logo.png"
                  alt="Closio"
                  className="h-10 mx-auto opacity-50"
                />
              </div>
              <blockquote>
                <p className="text-base text-slate-400 line-clamp-4">
                  "{testimonials[nextIndex].text}"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(${direction > 0 ? '30px' : '-30px'});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
