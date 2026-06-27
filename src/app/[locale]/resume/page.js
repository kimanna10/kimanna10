"use client";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  const t = useTranslations("Resume");

  const jobs = t.raw("experience.jobs");
  const locale = useLocale();

  // Объединенный массив (теперь 3 элемента)
  const gridItems = [
    {
      label: t("personal.title"),
      // Добавили location в контент личной информации
      content: [
        t("personal.birth"),
        t("personal.mbti"),
        t("personal.location"),
      ],
    },
    {
      label: t("languages.title"),
      content: [t("languages.languages_value")],
    },
    {
      label: t("portfolio.title"),
      content: [t("portfolio.desc")],
      isLink: true,
      link: "projects",
    },
    {
      label: t("contacts.title"),
      content: [t("contacts.desc")],
      isLink: true,
      link: "contacts",
    },
  ];

  return (
    <main className="min-h-dvh w-full bg-background text-foreground space-y-5">
      {/* 1. Обложка */}
      <header className="relative h-[60vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/img/main1.jpg"
          alt="Header"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter mb-2">
            {t("personal.name")}
          </h1>
          <p className="text-lg md:text-xl font-light ">{t("personal.role")}</p>
        </div>
      </header>

      <div className="max-w-full space-y-10">
        {/* 2. Сетка */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  border-t border-l border-foreground/10">
          {gridItems.map((item, i) => (
            <div
              key={i}
              className="p-8 md:p-12 min-h-[10vh] flex flex-col justify-start border-b border-r border-foreground/10"
            >
              <div className="flex flex-col">
                <h2 className="text-base font-black uppercase tracking-[0.2em] opacity-80 mb-4">
                  {item.label}
                </h2>
                {item.isLink ? (
                  <Link
                    href={`/${locale}/${item.link}`}
                    className="text-base font-light hover:font-medium flex items-center"
                  >
                    <span>{item.content[0]}</span>
                    <ChevronRight size={24} strokeWidth={1} />
                  </Link>
                ) : (
                  item.content.map((c, idx) => (
                    <p
                      key={idx}
                      className="text-base font-light whitespace-pre-line"
                    >
                      {c}
                    </p>
                  ))
                )}
              </div>
            </div>
          ))}
        </section>

        {/* 3. Опыт работы */}
        <section className="p-8 md:p-12">
          <h2 className="text-base font-black uppercase tracking-[0.3em] mb-12 opacity-80">
            {t("experience.title")}
          </h2>
          <div className="space-y-16 tracking-tight leading-normal">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-12 border-l border-foreground/20 space-y-10"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-foreground rounded-full" />
                <h3 className="text-xl font-medium uppercase ">{job.title}</h3>

                <div className="space-y-6">
                  {job.place.map((p, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-[160px,1fr] gap-2"
                    >
                      <span className="text-base font-bold uppercase opacity-40 pt-1">
                        {p.date}
                      </span>
                      <span className="text-sm md:text-base font-light">
                        {p.title}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm md:text-base opacity-70 leading-normal max-w-4xl">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Образование */}
        <section className="p-8 md:p-12">
          <h2 className="text-base font-black uppercase tracking-[0.3em] mb-12 opacity-80">
            {t("education.title")}
          </h2>
          <div className="space-y-16 tracking-tight leading-normal">
            <div className="relative pl-8 md:pl-12 border-l border-foreground/20 space-y-4">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-foreground rounded-full" />

              {/* Университет */}
              <h3 className="text-xl font-medium uppercase">
                {t("education.university")}
              </h3>

              {/* Информация о степени и годах */}
              <div className="grid md:grid-cols-[160px,1fr] gap-2 pt-2">
                <span className="text-base font-bold uppercase opacity-40">
                  {t("education.years")}
                </span>
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-medium">
                    {t("education.degree")}
                  </p>
                  <p className="text-sm md:text-base font-light opacity-80">
                    {t("education.major")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
