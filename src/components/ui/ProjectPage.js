"use client";
import Heading from "@/components/ui/Heading";
import InstagramEmbed from "@/components/ui/InstagramEmbed";
import LoadableContent from "@/components/ui/LoadableContent";
import MobileGrid from "@/components/ui/MobileGrid";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectPage({ initialProjects }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const t = useTranslations("Projects");

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

  const slides = initialProjects.map((p) => ({
    title: p.title,
    type: p.type,
    url: p.video,
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
              <LoadableContent>
                {(setReady) => (
                  <>
                    {slide.type === "youtube" ? (
                      <iframe
                        src={slide.url}
                        onLoad={() => setReady(true)}
                        className="w-full max-w-4xl aspect-video rounded-lg"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full max-w-4xl">
                        <InstagramWrapper
                          url={slide.url}
                          onReady={() => setReady(true)}
                        />
                      </div>
                    )}
                  </>
                )}
              </LoadableContent>
            );
          },
        }}
      />
    </main>
  );
}
