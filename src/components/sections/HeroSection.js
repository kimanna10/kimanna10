"use client";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <h1 className="text-white font-light tracking-wide">
          <span className="block text-3xl font-semibold uppercase md:text-5xl lg:text-7xl">
            Kim Anna
          </span>
          <span className="mt-4 block text-sm md:text-lg lg:text-xl uppercase tracking-[0.2em] text-white/90">
            Director | Choreographer | Dancer
          </span>
        </h1>
      </div>
    </section>
  );
}
