// "use client";

// import { useTranslations } from "next-intl";
// import Image from "next/image";

// export default function About() {
//   const t = useTranslations("About");

//   return (
//     <main className="min-h-dvh bg-background text-foreground">
//       {/* Заголовок-подложка: теперь он живет в общем потоке или фиксирован, но не ограничен контейнером */}
//       <h1 className="absolute top-5 left-5 text-[14vw] md:text-[10vw] font-bold text-foreground/40 uppercase leading-none select-none pointer-events-none">
//         {t("title")}
//       </h1>

//       <div className="relative z-10 pt-40">
//         {/* Секция с фото и текстом: растянута на всю ширину */}
//         <section className="grid md:grid-cols-2">
//           {/* Фото: прижимается к краю */}
//           <div className="aspect-[4/5] md:aspect-auto md:min-h-screen relative bg-foreground/5">
//             <Image
//               src="/img/main.JPG"
//               alt="Anna"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Текст: свободный поток */}
//           <div className="p-8 md:p-20 flex flex-col justify-center border-l border-foreground/10">
//             <div className="max-w-lg space-y-12">
//               <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
//                 {t("name")}
//                 <span className="block text-foreground/40 mt-4 text-2xl">
//                   {t("role")}
//                 </span>
//               </h2>

//               <p className="text-lg md:text-xl leading-relaxed text-foreground/70 font-light">
//                 {t("bio")}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Галерея: растянута на всю ширину без отступов */}
//         <div className="grid grid-cols-2 md:grid-cols-4 border-t border-foreground/10">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="aspect-square relative border-r border-foreground/10 last:border-r-0"
//             >
//               <Image
//                 src={`/img/main.JPG`}
//                 alt="Work"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

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
