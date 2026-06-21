"use client";
import Heading from "@/components/ui/Heading";
import MobileGrid from "@/components/ui/MobileGrid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectPage({ initialProjects }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const t = useTranslations("Projects");

  const slides = initialProjects.map((p) => ({
    type: "video",
    url: p.video, // Передаем ссылку напрямую
  }));

  return (
    <main className="min-h-dvh bg-background">
      <Heading title={t("title")} />

      <div className="pt-5">
        <MobileGrid
          projects={initialProjects}
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
        render={{
          slide: ({ slide }) => {
            return (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <iframe
                  src={slide.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full max-w-4xl aspect-video rounded-lg"
                />
              </div>
            );
          },
        }}
      />
    </main>
  );
}
