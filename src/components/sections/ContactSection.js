import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const contacts = [
    {
      label: "Instagram",
      value: "@kimanna10",
      href: "https://instagram.com/kimanna10",
      icon: <Instagram size={18} />,
    },
    {
      label: "Email",
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
    <div className="mt-auto px-6">
      <div className="flex flex-col gap-6">
        {contacts.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group text-foreground/60 hover:text-foreground transition-all duration-300"
          >
            <span className="p-2 rounded-lg border border-foreground/10 group-hover:bg-foreground/5 transition-colors">
              {c.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest">
                {c.label}
              </span>
              <span className="font-semibold text-foreground text-sm">
                {c.value}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
