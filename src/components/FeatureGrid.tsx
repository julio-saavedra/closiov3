import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  isLarge?: boolean;
  isHighlighted?: boolean;
}

const CommissionIllustration: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  if (!isDark) {
    return (
      <div className="w-full h-32 relative flex items-end justify-center gap-2">
        <motion.div
          className="w-12 h-12 rounded-full bg-[#0A0F1A]/20 border-2 border-[#0A0F1A]/40 shadow-[0_0_20px_rgba(10,15,26,0.3)]"
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(10, 15, 26, 0.3)",
            boxShadow: "0 0 30px rgba(10, 15, 26, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-[#0A0F1A] font-bold text-lg">$</div>
        </motion.div>
        <motion.div
          className="w-16 h-16 rounded-full bg-[#0A0F1A]/30 border-2 border-[#0A0F1A]/50 shadow-[0_0_25px_rgba(10,15,26,0.4)]"
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(10, 15, 26, 0.4)",
            boxShadow: "0 0 35px rgba(10, 15, 26, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-[#0A0F1A] font-bold text-2xl">$</div>
        </motion.div>
        <motion.div
          className="w-20 h-20 rounded-full bg-[#0A0F1A]/40 border-2 border-[#0A0F1A]/60 shadow-[0_0_30px_rgba(10,15,26,0.5)]"
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(10, 15, 26, 0.5)",
            boxShadow: "0 0 40px rgba(10, 15, 26, 0.7)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-[#0A0F1A] font-bold text-3xl">$</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-32 relative flex items-end justify-center gap-2">
      <motion.div
        className="w-12 h-12 rounded-full bg-[#6ad4f2]/40 border-2 border-[#6ad4f2]/60 shadow-[0_0_20px_rgba(106,212,242,0.4)]"
        whileHover={{
          scale: 1.15,
          backgroundColor: "rgba(106, 212, 242, 0.6)",
          boxShadow: "0 0 30px rgba(106, 212, 242, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-lg drop-shadow-[0_0_8px_rgba(106,212,242,0.8)]">$</div>
      </motion.div>
      <motion.div
        className="w-16 h-16 rounded-full bg-[#6ad4f2]/50 border-2 border-[#6ad4f2]/70 shadow-[0_0_25px_rgba(106,212,242,0.5)]"
        whileHover={{
          scale: 1.15,
          backgroundColor: "rgba(106, 212, 242, 0.7)",
          boxShadow: "0 0 35px rgba(106, 212, 242, 0.9)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-2xl drop-shadow-[0_0_8px_rgba(106,212,242,0.8)]">$</div>
      </motion.div>
      <motion.div
        className="w-20 h-20 rounded-full bg-[#6ad4f2]/60 border-2 border-[#6ad4f2]/80 shadow-[0_0_30px_rgba(106,212,242,0.6)]"
        whileHover={{
          scale: 1.15,
          backgroundColor: "rgba(106, 212, 242, 0.8)",
          boxShadow: "0 0 40px rgba(106, 212, 242, 1)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-3xl drop-shadow-[0_0_8px_rgba(106,212,242,0.8)]">$</div>
      </motion.div>
    </div>
  );
};

const BookOfBusinessIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-32 h-32" style={{ filter: 'drop-shadow(0 0 20px rgba(106, 212, 242, 0.4))' }}>
        <motion.rect
          x="20"
          y="20"
          width="80"
          height="65"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 15px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="60"
          y1="20"
          x2="60"
          y2="85"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/50"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="30"
          y1="38"
          x2="52"
          y2="38"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="30"
          y1="52"
          x2="52"
          y2="52"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="30"
          y1="66"
          x2="52"
          y2="66"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="68"
          y1="38"
          x2="90"
          y2="38"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="68"
          y1="52"
          x2="90"
          y2="52"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
        <motion.line
          x1="68"
          y1="66"
          x2="90"
          y2="66"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
        />
      </svg>
    </div>
  );
};

const DashboardIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-32 h-32">
        <motion.rect
          x="20"
          y="55"
          width="20"
          height="35"
          rx="3"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          style={{ filter: 'drop-shadow(0 0 15px rgba(106, 212, 242, 0.4))' }}
          whileHover={{
            height: 48,
            y: 42,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 25px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="50"
          y="35"
          width="20"
          height="55"
          rx="3"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          style={{ filter: 'drop-shadow(0 0 18px rgba(106, 212, 242, 0.5))' }}
          whileHover={{
            height: 68,
            y: 22,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 28px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="80"
          y="15"
          width="20"
          height="75"
          rx="3"
          fill="currentColor"
          className="text-[#6ad4f2]/80"
          style={{ filter: 'drop-shadow(0 0 20px rgba(106, 212, 242, 0.6))' }}
          whileHover={{
            height: 88,
            y: 2,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 30px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    </div>
  );
};

const PayoutsIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-32 h-32" style={{ filter: 'drop-shadow(0 0 20px rgba(106, 212, 242, 0.4))' }}>
        <motion.polyline
          points="15,75 35,55 60,40 90,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 4, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))" }}
        />
        <motion.circle
          cx="15"
          cy="75"
          r="6"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          style={{ filter: 'drop-shadow(0 0 8px rgba(106, 212, 242, 0.6))' }}
          whileHover={{
            scale: 1.4,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="35"
          cy="55"
          r="6"
          fill="currentColor"
          className="text-[#6ad4f2]/75"
          style={{ filter: 'drop-shadow(0 0 10px rgba(106, 212, 242, 0.7))' }}
          whileHover={{
            scale: 1.4,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="60"
          cy="40"
          r="6"
          fill="currentColor"
          className="text-[#6ad4f2]/80"
          style={{ filter: 'drop-shadow(0 0 12px rgba(106, 212, 242, 0.8))' }}
          whileHover={{
            scale: 1.4,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="90"
          cy="20"
          r="6"
          fill="currentColor"
          className="text-[#6ad4f2]"
          style={{ filter: 'drop-shadow(0 0 15px rgba(106, 212, 242, 0.9))' }}
          whileHover={{
            scale: 1.4,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 20px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.polyline
          points="82,20 90,12 90,28"
          fill="currentColor"
          className="text-[#6ad4f2]"
          whileHover={{
            scale: 1.3,
            filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
          }}
        />
      </svg>
    </div>
  );
};

const RemindersIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-32 h-32" style={{ filter: 'drop-shadow(0 0 20px rgba(106, 212, 242, 0.4))' }}>
        <motion.path
          d="M 45 30 Q 45 15 60 15 Q 75 15 75 30 L 75 50 Q 75 63 60 70 Q 45 63 45 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-[#6ad4f2]/70"
          whileHover={{ strokeWidth: 4, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 15px rgba(106, 212, 242, 1))" }}
        />
        <motion.rect
          x="38"
          y="70"
          width="44"
          height="12"
          rx="3"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          style={{ filter: 'drop-shadow(0 0 10px rgba(106, 212, 242, 0.6))' }}
          whileHover={{ fill: "rgb(106, 212, 242)", filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))" }}
        />
        <motion.circle
          cx="60"
          cy="10"
          r="3"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          whileHover={{
            scale: 1.8,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="30"
          cy="35"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="90"
          cy="35"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
      </svg>
    </div>
  );
};

const CarrierIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="30"
          width="25"
          height="35"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))" }}
        />
        <motion.rect
          x="60"
          y="30"
          width="25"
          height="35"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))" }}
        />
        <motion.line
          x1="40"
          y1="47"
          x2="60"
          y2="47"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/50"
          strokeDasharray="3,3"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.rect x="20" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="28" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="20" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="28" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="65" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="73" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="65" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="73" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
      </svg>
    </div>
  );
};

const MobileIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 60 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="5"
          width="30"
          height="70"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.rect
          x="20"
          y="15"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="32"
          y="15"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="20"
          y="27"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="32"
          y="27"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="30"
          cy="67"
          r="3"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          whileHover={{ scale: 1.3, fill: "rgb(106, 212, 242)" }}
        />
      </svg>
    </div>
  );
};

const LeaderboardIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="45"
          width="20"
          height="25"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="40"
          y="30"
          width="20"
          height="40"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="65"
          y="52"
          width="20"
          height="18"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/40"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.text
          x="25"
          y="62"
          textAnchor="middle"
          fill="black"
          fontSize="12"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          2
        </motion.text>
        <motion.text
          x="50"
          y="52"
          textAnchor="middle"
          fill="black"
          fontSize="14"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          1
        </motion.text>
        <motion.text
          x="75"
          y="65"
          textAnchor="middle"
          fill="black"
          fontSize="12"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          3
        </motion.text>
      </svg>
    </div>
  );
};

const HierarchyIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 240 140" className="w-48 h-32" style={{ filter: 'drop-shadow(0 0 20px rgba(106, 212, 242, 0.4))' }}>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.line
            x1="120"
            y1="28"
            x2="120"
            y2="45"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-[#6ad4f2]/60"
            whileHover={{ strokeWidth: 3.5, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))" }}
          />

          <motion.line
            x1="40"
            y1="45"
            x2="200"
            y2="45"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="40"
            y1="45"
            x2="40"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="120"
            y1="45"
            x2="120"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="200"
            y1="45"
            x2="200"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="40"
            y1="88"
            x2="40"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="20"
            y1="105"
            x2="60"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="20"
            y1="105"
            x2="20"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="60"
            y1="105"
            x2="60"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="120"
            y1="88"
            x2="120"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="100"
            y1="105"
            x2="140"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="100"
            y1="105"
            x2="100"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="140"
            y1="105"
            x2="140"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="200"
            y1="88"
            x2="200"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="180"
            y1="105"
            x2="220"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="180"
            y1="105"
            x2="180"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="220"
            y1="105"
            x2="220"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.circle
            cx="120"
            cy="20"
            r="10"
            fill="currentColor"
            className="text-[#6ad4f2]"
            style={{ filter: 'drop-shadow(0 0 12px rgba(106, 212, 242, 0.8))' }}
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 20px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="40"
            cy="79"
            r="9"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            style={{ filter: 'drop-shadow(0 0 10px rgba(106, 212, 242, 0.7))' }}
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="120"
            cy="79"
            r="9"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            style={{ filter: 'drop-shadow(0 0 10px rgba(106, 212, 242, 0.7))' }}
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="200"
            cy="79"
            r="9"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            style={{ filter: 'drop-shadow(0 0 10px rgba(106, 212, 242, 0.7))' }}
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 18px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="20"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="60"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="100"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="140"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="180"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="220"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0, isLarge = false, isHighlighted = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`group relative rounded-3xl overflow-hidden h-full ${isLarge ? 'row-span-2' : ''}`}
    >
      {isHighlighted ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90" />
          <div className="absolute inset-0 shadow-[0_0_80px_rgba(255,255,255,0.6),inset_0_0_60px_rgba(106,212,242,0.2)]" />
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white to-[#f0f9ff]" />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/10 via-white/95 to-white/90" />
            <div className="absolute inset-0 shadow-[0_0_100px_rgba(255,255,255,0.9),inset_0_0_80px_rgba(106,212,242,0.3)] rounded-3xl" />
          </div>

          <div className={`relative ${isLarge ? 'p-12' : 'p-10'} h-full flex flex-col backdrop-blur-sm border border-white/40 rounded-3xl`}>
            {icon && (
              <div className={`${isLarge ? 'mb-10' : 'mb-8'} text-[#0A0F1A] opacity-100 transition-all duration-300 w-full flex items-center justify-center group-hover:scale-105`}>
                {icon}
              </div>
            )}
            <h3 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-bold text-black mb-4 group-hover:text-[#0A0F1A] transition-colors duration-300`}>{title}</h3>
            <p className={`text-black/70 ${isLarge ? 'text-lg' : 'text-base'} leading-relaxed group-hover:text-black/90 transition-colors duration-300`}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1A]/80 to-[#000000]/90 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/5 via-transparent to-transparent" />

          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#6ad4f2]/30 to-transparent opacity-50" />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/20 via-[#6ad4f2]/10 to-transparent" />
            <div className="absolute inset-0 shadow-[0_0_50px_rgba(106,212,242,0.3)] rounded-3xl" />
          </div>

          <div className={`relative ${isLarge ? 'p-12' : 'p-8'} h-full flex flex-col backdrop-blur-sm border border-[#6ad4f2]/10 rounded-3xl`}>
            {icon && (
              <div className={`${isLarge ? 'mb-10' : 'mb-6'} text-[#6ad4f2] opacity-90 group-hover:opacity-100 transition-all duration-300 w-full flex items-center justify-center group-hover:scale-105`}>
                {icon}
              </div>
            )}
            <h3 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-bold text-white mb-4 group-hover:text-[#6ad4f2] transition-colors duration-300`}>{title}</h3>
            <p className={`text-white/60 ${isLarge ? 'text-lg' : 'text-sm'} leading-relaxed group-hover:text-white/80 transition-colors duration-300`}>{description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Commission Tracking",
      description: "Real-time visibility into your commission structure with automated calculations and transparent breakdowns.",
      icon: <CommissionIllustration isDark={false} />,
      isLarge: true,
      isHighlighted: true,
    },
    {
      title: "Book of Business",
      description: "Manage your entire portfolio of clients and policies in one organized, searchable database.",
      icon: <BookOfBusinessIllustration />,
      isLarge: false,
      isHighlighted: false,
    },
    {
      title: "Team Hierarchy",
      description: "Visualize your agency structure with clear reporting lines and team performance metrics.",
      icon: <HierarchyIllustration />,
      isLarge: false,
      isHighlighted: false,
    },
    {
      title: "Dashboard Analytics",
      description: "Powerful insights and metrics to track performance, close rates, and revenue at a glance.",
      icon: <DashboardIllustration />,
      isLarge: false,
      isHighlighted: false,
    },
    {
      title: "Estimated Payouts",
      description: "Forecast your earnings with intelligent payout predictions based on your pipeline and historical data.",
      icon: <PayoutsIllustration />,
      isLarge: false,
      isHighlighted: false,
    },
    {
      title: "Automated Reminders",
      description: "Never miss a follow-up with smart notifications for policy renewals and client touchpoints.",
      icon: <RemindersIllustration />,
      isLarge: true,
      isHighlighted: false,
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
              Everything You Need
            </span>{' '}
            <span className="text-white">
              to Win
            </span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-[repeat(4,minmax(250px,1fr))]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
              isLarge={feature.isLarge}
              isHighlighted={feature.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
