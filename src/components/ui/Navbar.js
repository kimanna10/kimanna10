"use client";

import ContactSection from "@/components/sections/ContactSection";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavLinks from "./Navlinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="text-foreground">
      {/* Кнопка открытия */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 z-50 p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition backdrop-blur-sm"
      >
        <Menu size={32} />
      </button>

      {/* Оверлей (фон с блюром) */}
      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 bg-background/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out hover:cursor-pointer",
          isOpen
            ? "opacity-100  pointer-events-auto"
            : "opacity-0  pointer-events-none",
        )}
      />

      {/* Выпадающее меню */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-3/4 sm:w-1/2 xl:w-1/3 bg-background shadow-2xl z-50 py-6 transform transition-transform duration-500 ease-in-out flex justify-between flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="space-y-10">
          <div className="flex justify-start items-center flex-row-reverse md:px-6 px-4 gap-4">
            <button onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>

            <LanguageSwitcher />
          </div>

          <NavLinks onLinkClick={() => setIsOpen(false)} />
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
