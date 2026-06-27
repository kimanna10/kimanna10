"use client";

import Heading from "@/components/ui/Heading";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contacts() {
  const t = useTranslations("Contacts");

  return (
    <main className="min-h-dvh  overflow-hidden bg-background">
      <Heading title={t("title")} />

      <div className="flex flex-col justify-center relative z-10 w-full mt-20">
        <div className="flex flex-col">
          <ContactItem
            title={t("email")}
            value="kimannais1711@gmail.com"
            href="mailto:kimannais1711@gmail.com"
          />
          <ContactItem
            title={t("instagram")}
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
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
          {title}
        </span>
        <span className="text-base md:text-lg font-light text-foreground tracking-wide group-hover:text-foreground transition-colors">
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
