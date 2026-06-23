"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function HeroSection() {
  const tHero = useTranslations("Hero");
  // Состояние: видео загружено?
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const profile = {
    name: tHero("title"),
    choreo: tHero("choreo"),
    dir: tHero("dir"),
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-background">
      {/* Background video */}
      <video
        className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1200 ease-in-out ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={() => setIsVideoLoaded(true)}
      />

      <div
        className={`absolute inset-0 bg-background/40 transition-opacity duration-900 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} // Чуть меньше
        animate={{ opacity: 1, scale: 1 }} // Полный размер
        transition={{ duration: 0.5, ease: "easeOut" }} // Плавное появление
        className="relative z-10 flex h-full items-center justify-center text-center"
      >
        <h1 className="text-foreground font-light tracking-wide">
          <span className="block text-3xl font-semibold uppercase md:text-4xl lg:text-6xl">
            {profile.name}
          </span>
          <span className="mt-4 block text-sm md:text-md lg:text-lg uppercase tracking-[0.17em] text-foreground/80">
            {profile.choreo} | {profile.dir}
          </span>
        </h1>
      </motion.div>
    </section>
  );
}
