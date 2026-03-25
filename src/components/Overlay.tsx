"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { language } = useLanguage();
  // Section 1: Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.18, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.18], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.18], [1, 0.95]);

  // Section 2: Middle (Previously Left)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [50, 0, 0, -50]);

  // Section 3: Right
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [100, 0, 0, 100]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">

      {/* 0% -> "My Name. Creative Developer." */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 w-full will-change-transform"
      >
        <h1 className="text-[14vw] sm:text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[1.1] text-white drop-shadow-xl">
          Jamille<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-crimson">Barbosa</span>
        </h1>
        <p className="mt-4 md:mt-6 text-[4.5vw] sm:text-xl md:text-3xl lg:text-4xl text-white font-medium tracking-widest uppercase drop-shadow-md px-4">
          {language === "pt" ? "Desenvolvedora Full Stack" : "Full Stack Developer"}
        </p>
      </motion.div>

      {/* 30% -> "I build digital experiences." */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 px-6 md:px-12 flex flex-col items-center md:items-start justify-center text-center md:text-left will-change-transform"
      >
        <h2 className="font-outfit text-[11vw] sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white md:max-w-3xl drop-shadow-xl leading-[1.1] md:leading-[1.2]">
          {language === "pt" ? (
            <>
              Criando o visível <br />
              Sustentando o <br />
              <span className="italic text-brand-crimson font-serif">invisível</span>
            </>
          ) : (
            <>
              Crafting the visible <br />
              Sustaining the <br />
              <span className="italic text-brand-crimson font-serif">invisible</span>
            </>
          )}
        </h2>
      </motion.div>

      {/* 60% -> "Bridging design and engineering." */}
      {/* <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-y-0 right-6 md:right-12 flex flex-col justify-center items-end text-right will-change-transform"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white max-w-3xl drop-shadow-xl leading-[1.1]">
          Bridging <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-emerald-400">
            design
          </span> <br/>
          and{" "}
          <span className="font-mono text-4xl md:text-7xl text-neutral-300 bg-neutral-900/50 px-4 py-2 rounded-lg backdrop-blur-md">
            engineering_
          </span>
        </h2>
      </motion.div> */}

    </div>
  );
}
