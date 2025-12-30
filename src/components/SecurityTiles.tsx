import React from 'react';

const SecurityTiles: React.FC = () => {
  return (
    <section
      id="security"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-black"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* LEFT COLUMN: VIDEO CARD */}
        <div className="w-full lg:w-[55%]">
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black bg-black
                       shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
          >
            {/* VIDEO - inner frame */}
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-black">
              <div className="relative flex h-[90%] w-[90%] items-center justify-center overflow-hidden rounded-xl border border-black bg-black">
                <video
                  src="https://www.dropbox.com/scl/fi/g5umukhp9y6s8zloj9330/Theme-Closio.mp4?rlkey=2vd4dj8ja6yptwy111cde6lzn&raw=1"
                  className="h-full w-auto object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="w-full lg:w-[45%] space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Customize Everything, Your Way
            </h2>
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-slate-300">
              Closio lets you tailor your dashboard, theme, and workflows so every part of your CRM
              feels natural, efficient, and uniquely yours.
            </p>
          </div>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Drag-and-drop layout to rearrange insights, charts, and tools.</p>
            </li>
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Multiple themes so your workspace matches your style.</p>
            </li>
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Personalized views that adapt to your daily workflow.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecurityTiles;