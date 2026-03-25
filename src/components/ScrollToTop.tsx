"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página para exibir o botão apenas quando necessário
  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 p-3 lg:p-4 rounded-full bg-brand-bg/80 backdrop-blur-md border border-brand-border text-brand-text shadow-lg hover:shadow-[0_0_20px_rgba(102,161,178,0.4)] hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
