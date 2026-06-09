"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { code: "en", label: "EN" },
    { code: "kz", label: "KZ" },
    { code: "ru", label: "RU" },
    { code: "kr", label: "KR" },
  ];

  // Определяем текущий язык
  const currentLang = pathname.split("/")[1] || "en";

  const switchLang = (newLocale) => {
    const newPath = pathname.replace(/^\/(ru|en|kr|kz)/, "");
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <div className="fixed top-5 right-20 z-50 flex items-center gap-1 bg-foreground/10 p-1 rounded-lg">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => switchLang(locale.code)}
          className={`px-2 py-1 rounded-md text-sm transition-all duration-200 uppercase ${
            currentLang === locale.code
              ? "bg-background text-foreground shadow-sm font-bold" // Активное состояние
              : "text-foreground/60 hover:text-foreground hover:bg-foreground/5 font-medium" // Неактивное
          }`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
