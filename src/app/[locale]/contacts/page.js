// import Link from "next/link";

// export default function Contacts() {
//   return (
//     <main className="min-h-dvh flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 py-20">
//       {/* Масштабный заголовок */}
//       <h1 className="text-[15vw] md:text-[10vw] font-bold leading-none tracking-tighter text-foreground/15 select-none">
//         CONTACT
//       </h1>

//       <div className="mt-[-5vw] w-full grid md:grid-cols-2 gap-16 md:gap-32">
//         {/* Левая часть */}
//         <div className="space-y-8">
//           <h2 className="text-2xl md:text-4xl font-light tracking-wide">
//             Let's create something <br /> meaningful together.
//           </h2>
//           <p className="max-w-md text-foreground/60 leading-relaxed">
//             I am currently available for new projects, creative direction, and
//             choreography inquiries. Please reach out via email or social
//             channels.
//           </p>
//         </div>

//         {/* Правая часть с кликабельными ссылками */}
//         <div className="flex flex-col gap-10">
//           <ContactItem
//             title="Inquiries"
//             value="hello@kimanna.com"
//             href="mailto:hello@kimanna.com"
//           />
//           <ContactItem
//             title="Social"
//             value="@kimanna_dir"
//             href="https://instagram.com"
//           />
//           <ContactItem title="Based in" value="Seoul, South Korea" />
//         </div>
//       </div>
//     </main>
//   );
// }

// function ContactItem({ title, value, href }) {
//   // Если есть ссылка, оборачиваем в Link, если нет — просто выводим текст
//   const content = (
//     <div className="group space-y-1">
//       <span className="block text-[10px] uppercase tracking-[0.3em] text-foreground/40 group-hover:text-foreground/80 transition-colors hover:cursor-pointer">
//         {title}
//       </span>
//       <span className="block text-xl md:text-2xl font-light tracking-wide  hover:cursor-pointer">
//         {value}
//       </span>
//     </div>
//   );

//   return href ? (
//     <Link
//       href={href}
//       className="block w-fit"
//       target={href.startsWith("http") ? "_blank" : undefined}
//     >
//       {content}
//     </Link>
//   ) : (
//     <div>{content}</div>
//   );
// }

// "use client";

// import { Instagram, Mail, MapPin } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function Contacts() {
//   const t = useTranslations("Contacts");

//   return (
//     <main className="min-h-dvh flex items-center justify-center px-8 py-20 relative overflow-hidden bg-background">
//       {/* Масштабный заголовок с эффектом «отсечения» */}
//       <h1 className="absolute top-10 left-10 md:top-20 md:left-20 text-[15vw] font-bold text-foreground/5 uppercase leading-none select-none pointer-events-none">
//         {t("title")}
//       </h1>

//       {/* Основной блок */}
//       <div className="relative z-10 w-full max-w-xl">
//         <div className="flex flex-col gap-10">
//           <ContactItem
//             icon={<Mail size={16} strokeWidth={1.5} />}
//             label="01"
//             value="hello@kimanna.com"
//             href="mailto:hello@kimanna.com"
//           />
//           <ContactItem
//             icon={<Instagram size={16} strokeWidth={1.5} />}
//             label="02"
//             value="@kimanna_dir"
//             href="https://instagram.com"
//           />
//           <ContactItem
//             icon={<MapPin size={16} strokeWidth={1.5} />}
//             label="03"
//             value="Seoul, South Korea"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// function ContactItem({ icon, label, value, href }) {
//   const content = (
//     <div className="group flex items-center gap-8 w-full border-b border-foreground/5 py-8 transition-all hover:border-foreground/20">
//       {/* Номер индекса (архитектурный прием) */}
//       <span className="font-mono text-[10px] text-foreground/30">{label}</span>

//       {/* Иконка */}
//       <div className="text-foreground/40 transition-transform duration-500 group-hover:-rotate-12 group-hover:text-foreground">
//         {icon}
//       </div>

//       {/* Значение с эффектом искажения при наведении */}
//       <span className="relative text-xl md:text-3xl font-light tracking-tight transition-all duration-300 group-hover:tracking-widest">
//         {value}
//         <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-foreground transition-all duration-500 group-hover:w-full" />
//       </span>
//     </div>
//   );

//   return href ? (
//     <Link
//       href={href}
//       className="block w-full"
//       target={href.startsWith("http") ? "_blank" : undefined}
//     >
//       {content}
//     </Link>
//   ) : (
//     <div className="cursor-default w-full">{content}</div>
//   );
// }

// "use client";

// import { Instagram, Mail, MapPin } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function Contacts() {
//   const t = useTranslations("Contacts");

//   return (
//     <main className="min-h-dvh flex flex-col justify-center py-20 relative overflow-hidden bg-background">
//       <h1 className="absolute top-10 left-6 md:left-20 text-[12vw] md:text-[8vw] font-bold text-foreground/20 uppercase leading-none select-none pointer-events-none">
//         {t("title")}
//       </h1>

//       <div className="relative z-10 w-full">
//         <div className="flex flex-col">
//           <ContactItem
//             icon={<Mail size={20} strokeWidth={1} />}
//             label="01"
//             value="hello@kimanna.com"
//             href="mailto:hello@kimanna.com"
//           />
//           <ContactItem
//             icon={<Instagram size={20} strokeWidth={1} />}
//             label="02"
//             value="@kimanna_dir"
//             href="https://instagram.com"
//           />
//           <ContactItem
//             icon={<MapPin size={20} strokeWidth={1} />}
//             label="03"
//             value="Seoul, South Korea"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// function ContactItem({ icon, label, value, href }) {
//   const content = (
//     <div className="group flex items-center gap-6 w-full border-b border-foreground/10 py-10 px-6 md:px-20 transition-all hover:bg-foreground/[0.02]">
//       {/* Индекс — добавляет технической эстетики */}
//       <span className="font-mono text-[10px] text-foreground/20 w-8">
//         {label}
//       </span>

//       {/* Иконка */}
//       <div className="text-foreground/30 transition-transform duration-500 group-hover:scale-110 group-hover:text-foreground">
//         {icon}
//       </div>

//       {/* Текст */}
//       <span className="text-xl md:text-4xl font-light tracking-tight transition-all duration-300">
//         {value}
//       </span>
//     </div>
//   );

//   return href ? (
//     <Link
//       href={href}
//       className="block w-full"
//       target={href.startsWith("http") ? "_blank" : undefined}
//     >
//       {content}
//     </Link>
//   ) : (
//     <div className="cursor-default w-full">{content}</div>
//   );
// }

// "use client";

// import { Instagram, Mail, MapPin } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function Contacts() {
//   const t = useTranslations("Contacts");

//   return (
//     <main className="min-h-dvh flex flex-col justify-center py-20 relative overflow-hidden bg-background">
//       <h1 className="absolute top-10 left-6 md:left-20 text-5xl md:text-[10vw] font-bold text-foreground/40 uppercase leading-none select-none pointer-events-none">
//         {t("title")}
//       </h1>

//       <div className="relative z-10 w-full">
//         <div className="flex flex-col">
//           <ContactItem
//             icon={<Mail size={18} strokeWidth={1} />}
//             label="01"
//             value="hello@kimanna.com"
//             href="mailto:hello@kimanna.com"
//           />
//           <ContactItem
//             icon={<Instagram size={18} strokeWidth={1} />}
//             label="02"
//             value="@kimanna_dir"
//             href="https://instagram.com"
//           />
//           <ContactItem
//             icon={<MapPin size={18} strokeWidth={1} />}
//             label="03"
//             value="Seoul, South Korea"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// function ContactItem({ icon, label, value, href }) {
//   const content = (
//     <div className="group flex items-center gap-8 w-full border-b border-foreground/10 py-8 px-6 md:px-20 transition-all hover:bg-foreground/5">
//       <span className="text-base text-foreground/60 w-8">{label}</span>
//       <div className="text-foreground/60 transition-transform duration-500 group-hover:scale-110 group-hover:text-foreground">
//         {icon}
//       </div>

//       <span className="text-lg md:text-xl transition-all duration-300">
//         {value}
//       </span>
//     </div>
//   );

//   return href ? (
//     <Link
//       href={href}
//       className="block w-full"
//       target={href.startsWith("http") ? "_blank" : undefined}
//     >
//       {content}
//     </Link>
//   ) : (
//     <div className="cursor-default w-full">{content}</div>
//   );
// }

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contacts() {
  const t = useTranslations("Contacts");

  return (
    <main className="min-h-dvh flex flex-col justify-center relative overflow-hidden bg-background">
      <h1 className="absolute top-5 left-5 text-[14vw] md:text-[10vw] font-bold text-foreground/40 uppercase leading-none select-none pointer-events-none">
        {t("title")}
      </h1>

      <div className="relative z-10 w-full mt-20">
        <div className="flex flex-col">
          <ContactItem
            title="Email"
            value="kimannais1711@gmail.com"
            href="mailto:kimannais1711@gmail.com"
          />
          <ContactItem
            title="Instagram"
            value="@kimanna10"
            href="https://instagram.com/kimanna10"
          />
          {/* <ContactItem label="03" title="Location" value="Seoul, South Korea" /> */}
        </div>
      </div>
    </main>
  );
}

function ContactItem({ title, value, href }) {
  const content = (
    <div className="group flex items-start gap-5 w-full border-b border-foreground/10 p-5 md:px-20 transition-all hover:bg-foreground/5">
      {/* Блок с надписью и значением */}
      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          {title}
        </span>
        <span className="text-lg md:text-xl font-light text-foreground tracking-wide group-hover:text-foreground transition-colors">
          {value}
        </span>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="block w-full"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {content}
    </Link>
  ) : (
    <div className="cursor-default w-full">{content}</div>
  );
}
