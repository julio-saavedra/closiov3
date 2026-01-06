const FullWidthVideo = () => {
  return (
    <section className="relative w-full bg-black px-4 sm:px-6 lg:px-8 pt-4">
      <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl">
        <img
          src="/main_desktop_photo_dashboard.png"
          alt="Closio Dashboard"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none rounded-2xl" />
      </div>
    </section>
  );
};

export default FullWidthVideo;
