"use client";
import Heading from "@/components/ui/Heading";

import InstagramEmbed from "@/components/ui/InstagramEmbed";
import LoadableContent from "@/components/ui/LoadableContent";
import MobileGrid from "@/components/ui/MobileGrid";
import VideoFrame from "@/components/ui/VideoFrame";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectPage({ initialProjects }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const t = useTranslations("Projects");

  const [isClient, setIsClient] = useState(false); // Флаг для предотвращения гидратации
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [open]);

  const sortedProjects = [
    ...initialProjects.filter((p) => p.priority === "top"),
    ...initialProjects.filter((p) => p.priority === "base"),
  ];

  // 2. Создаем слайды для Lightbox из уже отсортированного списка
  const slides = sortedProjects.map((p) => ({
    title: p.title,
    type: p.type,
    video: p.video,
    priority: p.priority,
  }));

  const InstagramWrapper = ({ url, onReady }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onReady();
      }, 1500);
      return () => clearTimeout(timer);
    }, [onReady]);

    return <InstagramEmbed url={url} />;
  };

  if (!isClient) return null;

  return (
    <main className="min-h-dvh bg-background">
      <Heading title={t("title")} />

      <div className="pt-5">
        <MobileGrid
          sortedProjects={sortedProjects}
          onOpen={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[slides[index]]}
        // index теперь всегда 0, так как слайд один
        index={0}
        render={{
          slide: ({ slide }) => {
            return (
              <LoadableContent key={slide.video}>
                {(setReady) => (
                  <div className="w-full max-w-4xl aspect-video flex items-center justify-center">
                    {slide.type === "youtube" ? (
                      <iframe
                        src={slide.video}
                        onLoad={() => setReady(true)}
                        className="w-full max-w-4xl aspect-video rounded-lg"
                        allowFullScreen
                      />
                    ) : slide.type === "tiktok" ? (
                      <VideoFrame
                        url={slide.video}
                        onReady={() => setReady(true)}
                      />
                    ) : (
                      <InstagramWrapper
                        url={slide.url}
                        onReady={() => setReady(true)}
                      />
                    )}
                  </div>
                )}
              </LoadableContent>
            );
          },
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        // Дополнительно отключаем свайпы для полной уверенности
        carousel={{ finite: true }}
        controller={{ touch: false }}
      />
    </main>
  );
}
