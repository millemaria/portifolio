"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed bottom-20 left-6 md:bottom-24 md:left-8 z-50 p-3 lg:p-4 rounded-full bg-brand-bg/80 backdrop-blur-md border border-brand-border text-brand-text shadow-lg hover:shadow-[0_0_20px_rgba(102,161,178,0.4)] hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-500 font-bold font-mono text-sm leading-none flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14"
      )}
      aria-label="Mudar Idioma"
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  );
}
