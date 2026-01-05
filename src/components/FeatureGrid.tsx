import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

const HierarchyIllustration: React.FC = () => {
  return (
    <div className="w-full h-32 relative">
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.line
            x1="100"
            y1="25"
            x2="60"
            y2="60"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />
          <motion.line
            x1="100"
            y1="25"
            x2="140"
            y2="60"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />
          <motion.line
            x1="60"
            y1="60"
            x2="30"
            y2="95"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />
          <motion.line
            x1="60"
            y1="60"
            x2="90"
            y2="95"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />
          <motion.line
            x1="140"
            y1="60"
            x2="110"
            y2="95"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />
          <motion.line
            x1="140"
            y1="60"
            x2="170"
            y2="95"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#6ad4f2]/40"
            whileHover={{ strokeWidth: 2, opacity: 1 }}
          />

          <motion.circle
            cx="100"
            cy="20"
            r="8"
            fill="currentColor"
            className="text-[#6ad4f2]"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="60"
            cy="60"
            r="7"
            fill="currentColor"
            className="text-[#6ad4f2]/80"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="140"
            cy="60"
            r="7"
            fill="currentColor"
            className="text-[#6ad4f2]/80"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="30"
            cy="100"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/60"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="90"
            cy="100"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/60"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="110"
            cy="100"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/60"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="170"
            cy="100"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/60"
            whileHover={{
              scale: 1.3,
              filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  const isHierarchyCard = title === "Team Hierarchy";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-black/40 backdrop-blur-xl" />

      <div className="relative p-8 h-full flex flex-col">
        {icon && (
          <div className={`mb-4 text-[#6ad4f2] opacity-80 group-hover:opacity-100 transition-opacity ${isHierarchyCard ? 'w-full' : ''}`}>
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Commission Tracking",
      description: "Real-time visibility into your commission structure with automated calculations and transparent breakdowns.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Book of Business",
      description: "Manage your entire portfolio of clients and policies in one organized, searchable database.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Team Hierarchy",
      description: "Visualize your agency structure with clear reporting lines and team performance metrics.",
      icon: <HierarchyIllustration />,
    },
    {
      title: "Dashboard Analytics",
      description: "Powerful insights and metrics to track performance, close rates, and revenue at a glance.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Estimated Payouts",
      description: "Forecast your earnings with intelligent payout predictions based on your pipeline and historical data.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Automated Reminders",
      description: "Never miss a follow-up with smart notifications for policy renewals and client touchpoints.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: "Carrier Management",
      description: "Centralize carrier relationships, contracts, and product offerings in one accessible location.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Mobile Access",
      description: "Stay connected on the go with full mobile functionality for agents working in the field.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Leaderboards",
      description: "Motivate your team with real-time rankings and performance competitions across your agency.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
              Everything You Need
            </span>{' '}
            <span className="text-white">
              to Win
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
