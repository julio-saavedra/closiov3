import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const PoweredBySection: React.FC = () => {
  const chipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  useEffect(() => {
    const calculateLines = () => {
      if (!chipRef.current || !containerRef.current) return;

      const chipRect = chipRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const chipCenterX = chipRect.width / 2;
      const chipBottom = chipRect.height;

      const lineDistance = 160;

      const newLines = [
        { x1: chipCenterX - 80, y1: chipBottom, x2: chipCenterX - 80, y2: chipBottom + lineDistance },
        { x1: chipCenterX, y1: chipBottom, x2: chipCenterX, y2: chipBottom + lineDistance },
        { x1: chipCenterX + 80, y1: chipBottom, x2: chipCenterX + 80, y2: chipBottom + lineDistance },
      ];

      setLines(newLines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    const timeout = setTimeout(calculateLines, 100);

    return () => {
      window.removeEventListener('resize', calculateLines);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-20 flex flex-col items-center justify-center overflow-visible">
      <div className="relative">
        <motion.div
          ref={chipRef}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: '280px',
            height: '120px',
            background: '#0D0D0D',
            borderRadius: '16px',
            border: '2px solid rgba(128, 128, 128, 0.3)',
            boxShadow: `
              0 0 30px rgba(128, 128, 128, 0.15),
              0 0 60px rgba(128, 128, 128, 0.1),
              inset 0 2px 4px rgba(255, 255, 255, 0.1)
            `,
          }}
        >

          <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-sm font-medium tracking-[0.2em] text-gray-400 mb-1">
                POWERED BY
              </div>
              <div className="text-2xl font-bold tracking-tight text-gray-300">
                CLOSIO
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-gray-500/30 shadow-[0_0_8px_rgba(128,128,128,0.2)]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 rounded-full bg-gray-500/30 shadow-[0_0_8px_rgba(128,128,128,0.2)]"
              />
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-0 rounded-[16px]"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
            }}
          />
        </motion.div>

        <svg
          className="absolute pointer-events-none"
          style={{
            left: 0,
            top: 0,
            width: '280px',
            height: '280px',
            overflow: 'visible',
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(128, 128, 128, 0.5)" />
              <stop offset="100%" stopColor="rgba(128, 128, 128, 0.1)" />
            </linearGradient>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {lines.map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#lineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 + index * 0.15, ease: "easeOut" }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default PoweredBySection;
