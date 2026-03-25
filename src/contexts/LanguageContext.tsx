"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === "pt" ? "en" : "pt";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  if (!mounted) {
    // Return children directly or a wrapper to avoid hydration mismatch
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Define a fallback so it doesn't break if used outside provider during SSR/Hydration
    return { language: "pt" as Language, toggleLanguage: () => {} };
  }
  return context;
}
