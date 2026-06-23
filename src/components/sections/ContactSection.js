import { Instagram, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactSection() {
  const t = useTranslations("Contacts");
  const contacts = [
    {
      label: t("instagram"),
      value: "@kimanna10",
      href: "https://instagram.com/kimanna10",
      icon: <Instagram size={18} />,
    },
    {
      label: t("email"),
      value: "kimannais1711@gmail.com",
      href: "mailto:kimannais1711@gmail.com",
      icon: <Mail size={18} />,
    },
    // {
    //   label: "Phone",
    //   value: "+7 (999) 000-00-00",
    //   href: "tel:+79990000000",
    //   icon: <Phone size={18} />,
    // },
  ];

  return (
    <div className=" md:px-6 px-4">
      <div className="flex flex-col md:gap-6 gap-4">
        {contacts.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start  gap-2 group text-foreground/60 hover:text-foreground transition-all duration-300 "
          >
            <div className="block md:p-2 rounded-lg md:border border-foreground/10 group-hover:bg-foreground/5 transition-colors">
              {c.icon}
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[clamp(0.625rem,1.5vw,0.875rem)] uppercase tracking-widest">
                {c.label}
              </span>
              <span className="font-semibold text-foreground text-[clamp(0.75rem,2vw,1rem)]">
                {c.value}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
