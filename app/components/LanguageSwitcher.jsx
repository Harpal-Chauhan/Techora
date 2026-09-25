"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const languages = [
  { code: "en", label: "English" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "hi", label: "हिन्दी" },
];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const currentLanguage = languages.find((item) => item.code === language);

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
      >
        <span>{currentLanguage?.label || "English"}</span>

        <span
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          className="
      absolute right-0 z-[100]
      top-full mt-2
      w-36
      max-w-[calc(100vw-2rem)]
      overflow-hidden
      rounded-xl
      border border-white/10
      bg-[#111]
      p-1
      shadow-2xl

      max-md:top-auto
      max-md:bottom-full
      max-md:mt-0
      max-md:mb-2
    "
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleLanguageChange(item.code)}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                language === item.code
                  ? "bg-indigo-500/15 text-indigo-300"
                  : "text-gray-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
