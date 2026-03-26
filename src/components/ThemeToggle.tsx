"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved === "light" || (!saved && !prefersDark)) {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-surface border border-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md opacity-0 pointer-events-none" />
    );
  }

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-surface border border-brand-border text-brand-text shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-brand-yellow/50 hover:bg-brand-hover overflow-hidden"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Theme"
    >
      {/* Moon Icon (Dark Mode) */}
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </motion.div>

      {/* Sun Icon (Light Mode) */}
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </motion.div>
    </motion.button>
  );
}
