"use client";

import { useRef } from "react";
import type { SVGProps, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

type Accent = "teal" | "crimson" | "gold" | "orange";
type IconName = "shield" | "building" | "search" | "truck" | "accessibility" | "graduation" | "database" | "cpu";

interface Project {
  id: number;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  image: string;
  link: string;
  category: string;
  categoryEn: string;
  icon: IconName;
  accent: Accent;
  span: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portal da Transparência",
    titleEn: "Transparency Portal",
    desc: "Desenvolvimento de uma plataforma de alta performance com Next.js, focada em acessibilidade e transparência pública. Um projeto que não apenas serve ao cidadão, mas define padrões: em 2025 foi coroado com o Selo Diamante de Transparência.",
    descEn: "Development of a high-performance platform using Next.js, focused on accessibility and public transparency. A project that doesn't just serve citizens, but sets standards: in 2025, it was awarded the Diamond Seal of Transparency.",
    image: "/projetos/portaldatrasnparencia.png",
    link: "https://portaldatransparencia.jaboatao.pe.gov.br/",
    category: "Governo Digital",
    categoryEn: "Digital Government",
    icon: "shield",
    accent: "teal",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    id: 2,
    title: "Jaboatão Oficial",
    titleEn: "Official Jaboatão",
    desc: "Unindo Next.js e Express, liderei o desenvolvimento do novo Site Oficial de Jaboatão. Foco total em performance e experiência do usuário (UX), servindo como o hub principal de informações para uma das maiores cidades de Pernambuco.",
    descEn: "Uniting Next.js and Express, I led the development of Jaboatão's new Official Website. Complete focus on performance and UX, serving as the main information hub for one of Pernambuco's largest cities.",
    image: "/projetos/oficial.png",
    link: "https://jaboatao.pe.gov.br/",
    category: "Portal Institucional",
    categoryEn: "Institutional Portal",
    icon: "building",
    accent: "crimson",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    title: "Diário Oficial do Jaboatão",
    titleEn: "Official Gazette of Jaboatão",
    desc: "Desenvolvimento do novo ecossistema do Diário Oficial. Um projeto focado em UX moderno e um motor de busca de alta precisão, garantindo acessibilidade e rapidez na entrega de informações governamentais.",
    descEn: "Development of the new Official Gazette ecosystem. A project focused on modern UX and a high-precision search engine, ensuring accessibility and speed in delivering government information.",
    image: "/projetos/diario.png",
    link: "https://diariooficial.jaboatao.pe.gov.br/",
    category: "Busca & Dados",
    categoryEn: "Search & Data",
    icon: "search",
    accent: "gold",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 4,
    title: "Libera Via",
    titleEn: "Libera Via",
    desc: "Modernização da logística urbana através da tecnologia. Sistema inteligente focado na agilidade para processos de liberação e uso do trânsito, conectando a administração pública às necessidades imediatas.",
    descEn: "Modernization of urban logistics through technology. An intelligent system focused on agility for transit release processes, connecting public administration to immediate infrastructure needs.",
    image: "/projetos/liberavia.png",
    link: "#",
    category: "Logística Urbana",
    categoryEn: "Urban Logistics",
    icon: "truck",
    accent: "orange",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Carteira PCD",
    titleEn: "PCD Card",
    desc: "Sistema para solicitação e gestão de carteiras para pessoas com deficiência. Transforma um processo físico burocrático em uma experiência digital fluida, garantindo prioridade e direitos com segurança e agilidade.",
    descEn: "System for requesting and managing identification cards for people with disabilities. Transforms a bureaucratic physical process into a fluid digital experience, ensuring priority and rights with security and agility.",
    image: "/projetos/pcd.png",
    link: "#",
    category: "Acessibilidade",
    categoryEn: "Accessibility",
    icon: "accessibility",
    accent: "teal",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Road Tech",
    titleEn: "Road Tech",
    desc: "Um ecossistema de aprendizado focado em segurança cibernética e carreira. O Road Tech simplifica a complexidade do mundo tech, oferecendo as ferramentas para construir o próprio futuro na programação.",
    descEn: "A learning ecosystem focused on cybersecurity and careers. Road Tech simplifies the complexity of the tech world, offering the tools to build your own future in programming.",
    image: "/projetos/Roadtech.png",
    link: "https://karoiynarolim.github.io/RoadTech/",
    category: "Educação Tech",
    categoryEn: "Tech Education",
    icon: "graduation",
    accent: "crimson",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    id: 7,
    title: "Data Lake ENEM",
    titleEn: "ENEM Data Lake",
    desc: "Este projeto implementa uma arquitetura robusta de Data Lake local utilizando contêineres Docker para orquestrar a extração, processamento e análise dos microdados do ENEM. O ambiente é 100% isolado, idempotente e reproduzível, trazendo o poder do Apache Spark (PySpark) para lidar com volumetria de Big Data.",
    descEn: "This project implements a robust local Data Lake architecture using Docker containers to orchestrate the extraction, processing, and analysis of ENEM microdata. The environment is 100% isolated, idempotent, and reproducible, leveraging Apache Spark (PySpark) to handle Big Data volumes.",
    image: "/projetos/datalake.jpeg",
    link: "https://github.com/millemaria/ProjetoDataLakeEnem",
    category: "Big Data",
    categoryEn: "Big Data",
    icon: "database",
    accent: "gold",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 8,
    title: "Multimodal AI Agent",
    titleEn: "Multimodal AI Agent",
    desc: "Agente de Inteligência Artificial multimodal capaz de analisar imagens combinando Visão Computacional local (OpenCV + PyTorch) com LLM de última geração (Google Gemini), servido via API REST com FastAPI e containerizado com Docker.",
    descEn: "A multimodal Artificial Intelligence agent capable of analyzing images by combining local Computer Vision (OpenCV + PyTorch) with state-of-the-art LLMs (Google Gemini), served via a REST API with FastAPI and containerized with Docker.",
    image: "/projetos/agente.png",
    link: "https://github.com/millemaria/AgenteImagens",
    category: "Inteligência Artificial",
    categoryEn: "Artificial Intelligence",
    icon: "cpu",
    accent: "orange",
    span: "md:col-span-3 md:row-span-1",
  },
];

const ACCENTS: Record<Accent, { text: string; bg: string; border: string; glow: string }> = {
  teal: { text: "text-[#66A1B2]", bg: "bg-[#66A1B2]", border: "border-[#66A1B2]/50", glow: "rgba(102,161,178,0.45)" },
  crimson: { text: "text-brand-crimson", bg: "bg-brand-crimson", border: "border-brand-crimson/50", glow: "rgba(188,21,78,0.45)" },
  gold: { text: "text-[#F9D57A]", bg: "bg-[#F9D57A]", border: "border-[#F9D57A]/50", glow: "rgba(249,213,122,0.45)" },
  orange: { text: "text-[#D87E33]", bg: "bg-[#D87E33]", border: "border-[#D87E33]/50", glow: "rgba(216,126,51,0.45)" },
};

function ProjectIcon({ name, className }: { name: IconName; className?: string }) {
  const common: SVGProps<SVGSVGElement> = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-5-5" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <rect x="2" y="7" width="12" height="9" rx="1" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="6.5" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        </svg>
      );
    case "accessibility":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="1.6" />
          <path d="M12 8v5M8 10.5h8M9 20l3-6.5 3 6.5M8 20h8" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...common}>
          <path d="M2 8l10-4 10 4-10 4-10-4z" />
          <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
          <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
          <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <rect x="10" y="10" width="4" height="4" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    default:
      return null;
  }
}

interface ProjectCardProps {
  proj: Project;
  language: string;
  index: number;
}

function ProjectCard({ proj, language, index }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springCfg = { stiffness: 200, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-120, 120], [5, -5]), springCfg);
  const rotateY = useSpring(useTransform(x, [-120, 120], [-5, 5]), springCfg);
  const glowX = useSpring(useTransform(x, [-120, 120], [20, 80]), springCfg);
  const glowY = useSpring(useTransform(y, [-120, 120], [20, 80]), springCfg);

  const accent = ACCENTS[proj.accent];

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: (index % 4) * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl min-h-[380px] md:min-h-0 flex flex-col justify-end cursor-pointer outline-none",
        "border border-brand-border shadow-lg bg-brand-bg",
        proj.span
      )}
    >
      {/* Radial glow that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${accent.glow}, transparent 45%)`,
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-surface">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-110 md:group-hover:blur-md opacity-40 md:opacity-80 md:group-hover:opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-brand-bg/80 to-transparent transition-opacity duration-700 md:from-brand-bg/10 md:via-brand-bg/90 md:group-hover:from-brand-bg/95 md:group-hover:via-brand-bg/80" />
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8 transform transition-all duration-500 translate-y-0 md:translate-y-6 md:group-hover:translate-y-0">
        <div className="flex justify-between items-center mb-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0">
          <span
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md bg-black/30 border shadow-lg",
              accent.border,
              accent.text
            )}
          >
            <ProjectIcon name={proj.icon} className="w-3.5 h-3.5" />
            {language === "pt" ? proj.category : proj.categoryEn}
          </span>

          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={cn(
              "w-10 h-10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transition-colors duration-300",
              "bg-white/10 md:group-hover:border-transparent",
              accent.bg
            )}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>

        <h4
          className={cn(
            "font-outfit font-bold tracking-tight mb-2 drop-shadow-lg transition-all",
            "text-2xl md:text-3xl",
            proj.span.includes("row-span-2") && "lg:text-4xl",
            accent.text,
            "md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-[#F9D57A] md:group-hover:to-[#D87E33]"
          )}
        >
          {language === "pt" ? proj.title : proj.titleEn}
        </h4>

        <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className={cn("text-sm md:text-base font-medium leading-relaxed mt-3 drop-shadow-md", accent.text)}>
              {language === "pt" ? proj.desc : proj.descEn}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-brand-bg text-brand-text py-32 px-6 md:px-12 z-20 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-neutral)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-neutral)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none opacity-60 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h3 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            {language === "pt" ? "Projetos " : "Developed "}
            <span className="text-brand-crimson drop-shadow-md">
              {language === "pt" ? "Desenvolvidos" : "Projects"}
            </span>
          </h3>
          <p className="mt-4 text-base md:text-xl text-brand-muted max-w-xl font-light mx-auto md:mx-0">
            {language === "pt"
              ? "Uma coleção selecionada de projetos que destacam desempenho, estética e arquiteturas web modernas."
              : "A curated collection of projects highlighting performance, aesthetics, and modern web architectures."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 md:auto-rows-[210px]">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.id} proj={proj} language={language} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}