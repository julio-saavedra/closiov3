"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
  disableAnimation?: boolean;
}

export function SectionWrapper({
  children,
  className,
  animationDelay = 0,
  disableAnimation = false
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  if (disableAnimation) {
    return (
      <div
        className={cn(
          "rounded-3xl overflow-hidden",
          "bg-black",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        transform: 'translateZ(0)',
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
      className={cn(
        "rounded-3xl overflow-hidden",
        "bg-black",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
