"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ onLinkClick }) {
  const t = useTranslations("Nav");

  const pathname = usePathname();

  const segments = pathname.split("/");

  const cleanPathname =
    segments.length > 2 ? `/${segments.slice(2).join("/")}` : "/";

  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contacts"), href: "/contacts" },
  ];

  return (
    <nav className="flex flex-col gap-6 uppercase font-extrabold tracking-tighter ">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? false : cleanPathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={clsx(
              "group relative text-3xl md:text-4xl lg:text-5xl  transition-all duration-500 ease-out isolate",
              isActive ? "pl-8" : "hover:pl-8",
            )}
          >
            <span
              className={clsx(
                "relative z-10 block transition-colors duration-300 px-6",
                isActive ? "text-background" : "group-hover:text-background",
              )}
            >
              {link.name}
            </span>

            <span
              className={clsx(
                "absolute left-0 top-1/2 z-0 h-full w-0 bg-foreground/90 transition-all duration-500 group-hover:w-full -translate-y-1/2",
                isActive ? "w-full " : "w-0 group-hover:w-full",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
