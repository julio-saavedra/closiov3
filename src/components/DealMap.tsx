import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  x: number;
  y: number;
  deals: number;
}

const cities: City[] = [
  { name: 'Seattle', x: 115, y: 65, deals: 234 },
  { name: 'San Francisco', x: 85, y: 175, deals: 456 },
  { name: 'Los Angeles', x: 105, y: 225, deals: 678 },
  { name: 'Phoenix', x: 175, y: 245, deals: 189 },
  { name: 'Denver', x: 280, y: 175, deals: 312 },
  { name: 'Dallas', x: 380, y: 275, deals: 523 },
  { name: 'Houston', x: 395, y: 320, deals: 445 },
  { name: 'Chicago', x: 485, y: 135, deals: 687 },
  { name: 'Detroit', x: 535, y: 115, deals: 234 },
  { name: 'Atlanta', x: 545, y: 250, deals: 398 },
  { name: 'Miami', x: 610, y: 345, deals: 567 },
  { name: 'New York', x: 635, y: 130, deals: 892 },
  { name: 'Boston', x: 665, y: 95, deals: 345 },
  { name: 'Minneapolis', x: 400, y: 85, deals: 178 },
  { name: 'Kansas City', x: 385, y: 185, deals: 156 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [4, 7], [7, 8], [7, 9], [9, 10], [8, 11], [11, 12],
  [7, 13], [13, 4], [4, 14], [14, 5], [9, 11],
  [0, 4], [2, 5], [1, 4], [5, 9], [6, 10],
];

const benefits = [
  { title: 'Geographic Insights', description: 'See exactly where your team is closing deals across the country' },
  { title: 'Territory Planning', description: 'Identify underserved markets and expansion opportunities' },
  { title: 'Performance Tracking', description: 'Monitor regional performance and agent coverage' },
  { title: 'Real-Time Updates', description: 'Watch deals appear on the map as they close' },
];

const usMapPath = `M 80 180
  Q 75 150 85 120
  Q 90 100 100 80
  Q 110 60 130 55
  Q 150 50 170 55
  Q 200 45 230 50
  Q 280 40 330 45
  Q 380 40 430 50
  Q 480 45 530 55
  Q 570 50 600 60
  Q 630 55 660 70
  Q 685 80 695 100
  Q 700 130 680 160
  Q 665 180 650 200
  Q 640 220 620 240
  Q 600 270 590 300
  Q 585 330 595 355
  Q 560 365 530 350
  Q 500 340 470 345
  Q 440 355 410 340
  Q 380 350 350 335
  Q 310 340 280 325
  Q 250 330 220 315
  Q 190 325 160 310
  Q 130 320 110 295
  Q 90 270 85 240
  Q 80 210 80 180 Z`;

export default function DealMap() {
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const [pulsingDots, setPulsingDots] = useState<number[]>([]);
  const [animatingLines, setAnimatingLines] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * cities.length)
      );
      setPulsingDots(randomIndices);

      const randomLines = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * connections.length)
      );
      setAnimatingLines(randomLines);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020a15] to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2C66FF]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Live Deal Tracking</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Deal Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A8B3C7] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-[4/3] max-w-[700px] mx-auto w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#050d1a] to-[#0a1628] border border-white/5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,102,255,0.08),transparent_70%)]" />

            <svg
              viewBox="0 0 750 400"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 30px rgba(44, 102, 255, 0.15))' }}
            >
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2C66FF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
                </linearGradient>

                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2C66FF" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#2C66FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2C66FF" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="activeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
                </linearGradient>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={usMapPath}
                fill="url(#mapGradient)"
                stroke="#2C66FF"
                strokeWidth="1"
                strokeOpacity="0.3"
                filter="url(#softGlow)"
              />

              <path
                d={usMapPath}
                fill="none"
                stroke="#2C66FF"
                strokeWidth="0.5"
                strokeOpacity="0.15"
                strokeDasharray="4 4"
              />

              {connections.map(([from, to], index) => {
                const city1 = cities[from];
                const city2 = cities[to];
                const midX = (city1.x + city2.x) / 2;
                const midY = Math.min(city1.y, city2.y) - Math.abs(city1.x - city2.x) * 0.15;
                const isAnimating = animatingLines.includes(index);

                return (
                  <g key={`connection-${index}`}>
                    <path
                      d={`M ${city1.x} ${city1.y} Q ${midX} ${midY} ${city2.x} ${city2.y}`}
                      fill="none"
                      stroke={isAnimating ? "url(#activeLineGradient)" : "url(#lineGradient)"}
                      strokeWidth={isAnimating ? "2" : "1"}
                      className="transition-all duration-500"
                      opacity={isAnimating ? 1 : 0.4}
                    />

                    {isAnimating && (
                      <circle r="4" fill="#10B981" filter="url(#glow)">
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          path={`M ${city1.x} ${city1.y} Q ${midX} ${midY} ${city2.x} ${city2.y}`}
                        />
                      </circle>
                    )}

                    <path
                      d={`M ${city1.x} ${city1.y} Q ${midX} ${midY} ${city2.x} ${city2.y}`}
                      fill="none"
                      stroke="#2C66FF"
                      strokeWidth="0.5"
                      strokeDasharray="4 8"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;12"
                        dur={`${2 + index * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                );
              })}

              {cities.map((city, index) => {
                const isPulsing = pulsingDots.includes(index);
                const isActive = activeCity?.name === city.name;

                return (
                  <g
                    key={city.name}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveCity(city)}
                    onMouseLeave={() => setActiveCity(null)}
                  >
                    {(isPulsing || isActive) && (
                      <>
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="20"
                          fill="none"
                          stroke={isPulsing ? "#10B981" : "#2C66FF"}
                          strokeWidth="1"
                          opacity="0"
                        >
                          <animate
                            attributeName="r"
                            values="8;25;8"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.6;0;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="12"
                          fill="none"
                          stroke={isPulsing ? "#10B981" : "#2C66FF"}
                          strokeWidth="0.5"
                          opacity="0"
                        >
                          <animate
                            attributeName="r"
                            values="6;18;6"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.4;0;0.4"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </circle>
                      </>
                    )}

                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={isPulsing || isActive ? 8 : 6}
                      fill={isPulsing ? "#10B981" : "#2C66FF"}
                      opacity="0.2"
                      className="transition-all duration-300"
                    />

                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={isPulsing || isActive ? 5 : 4}
                      fill={isPulsing ? "#10B981" : "#2C66FF"}
                      filter="url(#glow)"
                      className="transition-all duration-300"
                    />

                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="2"
                      fill="#ffffff"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
            </svg>

            {activeCity && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 px-4 py-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10"
              >
                <div className="text-sm font-semibold text-white">{activeCity.name}</div>
                <div className="text-xs text-emerald-400">{activeCity.deals} Active Policies</div>
              </motion.div>
            )}

            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/80">Live</span>
            </div>

            <div className="absolute bottom-6 right-6 text-right px-4 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-2xl font-bold text-white">4,894</div>
              <div className="text-xs text-white/50">Total Policies</div>
            </div>

            <div className="absolute top-6 left-6 px-3 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/5">
              <div className="text-xs text-white/50">15 Cities</div>
              <div className="text-sm font-semibold text-white">Nationwide Coverage</div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                See Your Business<br />
                <span className="text-[#2C66FF]">Come to Life</span>
              </h3>
              <p className="text-[#A8B3C7] leading-relaxed">
                The Deal Map gives agency owners, managers, and agents complete visibility into where policies are being sold.
                Track your team's geographic reach, identify growth opportunities, and celebrate wins as they happen.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2C66FF]/10 border border-[#2C66FF]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#A8B3C7]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
