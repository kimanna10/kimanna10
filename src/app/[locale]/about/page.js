"use client";
import Gallery from "@/components/ui/Gallery";
import Heading from "@/components/ui/Heading";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function About() {
  const t = useTranslations("About");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "/img/main.JPG",
    "/img/main.JPG",
    "/img/main.JPG",
    "/img/main.JPG",
    "/img/main.JPG",
    "/img/main.JPG",
  ];
  const slides = images.map((src) => ({ src }));

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Твой заголовок */}
      <Heading title={t("title")} />

      <div className="pt-5">
        <section className="flex flex-col md:flex-row w-full ">
          <div className="flex-1 p-5 md:p-20 flex flex-col justify-start">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-8 uppercase">
              {t("name")}
              <span className="block text-foreground/40 mt-2 text-lg md:text-xl  uppercase tracking-[0.2em]">
                {t("role")}
              </span>
            </h2>
            <p className="text-base md:text-lg leading-snug text-foreground/70 font-light whitespace-pre-line">
              {t("bio.0")}
            </p>
            <p className="text-base md:text-lg leading-snug text-foreground/70 font-light whitespace-pre-line sm:block hidden">
              {t("bio.1")}
            </p>
          </div>

          <div className="w-full md:w-1/2 aspect-3/4  relative">
            <Image
              src="/img/main.JPG"
              alt="Anna"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <div className="p-5 sm:hidden">
          <p className="text-base md:text-lg leading-snug text-foreground/70 font-light whitespace-pre-line">
            {t("bio.1")}
          </p>
        </div>

        {/* Галерея */}
        <Gallery
          images={images}
          onOpen={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </main>
  );
}
