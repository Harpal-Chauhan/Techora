"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { languages, defaultLanguage } from "../lib/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (code) => {
    if (!languages[code]) {
      return;
    }

    setLanguage(code);
    localStorage.setItem("language", code);
  };

  const t = languages[language].translations;

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
