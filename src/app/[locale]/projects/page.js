// "use client";
// import Heading from "@/components/ui/Heading";
// import MobileGrid from "@/components/ui/MobileGrid";
// import { useTranslations } from "next-intl";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import Video from "yet-another-react-lightbox/plugins/video";
// import "yet-another-react-lightbox/styles.css";

// export default function ProjectsPage() {
//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   const projects = [
//     { id: 1, title: "Work 1", video: "/video/1.mp4", thumb: "/img/1.jpg" },
//     { id: 2, title: "Work 2", video: "/video/2.mp4", thumb: "/img/2.jpg" },
//     { id: 3, title: "Work 3", video: "/video/3.mp4", thumb: "/img/3.jpg" },
//     { id: 4, title: "Work 4", video: "/video/4.mp4", thumb: "/img/4.jpg" },
//     { id: 5, title: "Work 5", video: "/video/5.mp4", thumb: "/img/5.jpg" },
//     { id: 6, title: "Work 6", video: "/video/6.mp4", thumb: "/img/6.jpg" },
//   ];

//   const slides = projects.map((p) => ({
//     type: "video",
//     sources: [{ src: p.video, type: "video/mp4" }],
//   }));
//   const t = useTranslations("Projects");

//   return (
//     <main className="min-h-dvh bg-background">
//       <Heading title={t("title")} />

//       <div className="border-t border-foreground/10 pt-40">
//         <MobileGrid
//           projects={projects}
//           onOpen={(i) => {
//             setIndex(i);
//             setOpen(true);
//           }}
//         />
//       </div>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         index={index}
//         slides={slides}
//         plugins={[Video]}
//       />
//     </main>
//   );
// }

"use client";
import Heading from "@/components/ui/Heading";
import MobileGrid from "@/components/ui/MobileGrid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const t = useTranslations("Projects");

  const projects = [
    {
      id: 1,
      title: "Work 1",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 2,
      title: "Work 2",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 3,
      title: "Work 3",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 4,
      title: "Work 4",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 5,
      title: "Work 5",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 6,
      title: "Work 6",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 7,
      title: "Work 7",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 8,
      title: "Work 8",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 9,
      title: "Work 9",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 10,
      title: "Work 10",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 11,
      title: "Work 11",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 12,
      title: "Work 12",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 13,
      title: "Work 13",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 14,
      title: "Work 14",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
    {
      id: 15,
      title: "Work 15",
      video: "https://www.youtube.com/embed/bzMbpRQIzGo",
      thumb: "/img/covers/cover1.png",
    },
  ];

  // Превращаем ссылки в слайды для лайтбокса
  const slides = projects.map((p) => ({
    type: "video",
    url: p.video, // Передаем ссылку напрямую
  }));

  return (
    <main className="min-h-dvh bg-background">
      <Heading title={t("title")} />

      <div className="pt-5">
        <MobileGrid
          projects={projects}
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
