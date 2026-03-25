"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.18, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.18], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.18], [1, 0.95]);

  // Section 2: Left
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [-100, 0, 0, -100]);

  // Section 3: Right
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [100, 0, 0, 100]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">

      {/* 0% -> "My Name. Creative Developer." */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
      >
        <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white drop-shadow-xl">
          Jamille<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-crimson">Barbosa</span>
        </h1>
        <p className="mt-6 text-2xl md:text-4xl text-white font-medium tracking-widest uppercase drop-shadow-md">
          Desenvolvedora Full Stack
        </p>
      </motion.div>

      {/* 30% -> "I build digital experiences." */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-y-0 left-6 md:left-12 flex flex-col justify-center will-change-transform"
      >
        <h2 className="font-outfit text-5xl md:text-8xl font-bold tracking-tight text-white max-w-3xl drop-shadow-xl leading-[1.1]">
          Criando o visível <br />
          Sustentando o <br />
          <span className="italic text-brand-crimson font-serif">invisível</span>
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
