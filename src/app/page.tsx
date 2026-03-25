"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-bg selection:text-brand-yellow">
      {/* 500vh scrollable scrollytelling area */}
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Subsequent content */}
      <About />
      <Projects />
      <Contact />

      <ThemeToggle />
    </main>
  );
}
