"use client";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const tHero = useTranslations("Hero");

  const profile = {
    name: tHero("title"),
    choreo: tHero("choreo"),
    dir: tHero("dir"),
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <h1 className="text-foreground font-light tracking-wide">
          <span className="block text-3xl font-semibold uppercase md:text-4xl lg:text-6xl">
            {profile.name}
          </span>
          <span className="mt-4 block text-sm md:text-md lg:text-lg uppercase tracking-[0.17em] text-foreground/80">
            {profile.choreo} | {profile.dir}
          </span>
        </h1>
      </div>
    </section>
  );
}
