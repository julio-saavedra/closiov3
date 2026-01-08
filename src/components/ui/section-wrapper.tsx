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
    threshold: 0.1,
    rootMargin: '-80px 0px -80px 0px'
  });

  if (disableAnimation) {
    return (
      <div
        className={cn(
          "rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-black via-[#0A0F1A] to-[#1A2428]",
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
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={isVisible
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 20, scale: 0.99 }
      }
      transition={{
        duration: 0.8,
        delay: animationDelay,
        ease: [0.22, 0.61, 0.36, 1]
      }}
      className={cn(
        "rounded-3xl overflow-hidden",
        "bg-gradient-to-br from-black via-[#0A0F1A] to-[#1A2428]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
