import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  { 
    id: 1, 
    title: "Portal da Transparência", 
    titleEn: "Transparency Portal",
    desc: "Desenvolvimento de uma plataforma de alta performance com Next.js, focada em acessibilidade e transparência pública. Um projeto que não apenas serve ao cidadão, mas define padrões: em 2025 foi coroado com o Selo Diamante de Transparência.", 
    descEn: "Development of a high-performance platform using Next.js, focused on accessibility and public transparency. A project that doesn't just serve citizens, but sets standards: in 2025, it was awarded the Diamond Seal of Transparency.",
    image: "/projetos/portaldatrasnparencia.png",
    link: "https://portaldatransparencia.jaboatao.pe.gov.br/"
  },
  { 
    id: 2, 
    title: "Jaboatão Oficial", 
    titleEn: "Official Jaboatão",
    desc: "Unindo Next.js e Express, liderei o desenvolvimento do novo Site Oficial de Jaboatão. Foco total em performance e experiência do usuário (UX), servindo como o hub principal de informações para uma das maiores cidades de Pernambuco.", 
    descEn: "Uniting Next.js and Express, I led the development of Jaboatão's new Official Website. Complete focus on performance and UX, serving as the main information hub for one of Pernambuco's largest cities.",
    image: "/projetos/oficial.png",
    link: "https://jaboatao.pe.gov.br/"
  },
  { 
    id: 3, 
    title: "Diário Oficial do Jaboatão", 
    titleEn: "Official Gazette of Jaboatão",
    desc: "Desenvolvimento do novo ecossistema do Diário Oficial. Um projeto focado em UX moderno e um motor de busca de alta precisão, garantindo acessibilidade e rapidez na entrega de informações governamentais.", 
    descEn: "Development of the new Official Gazette ecosystem. A project focused on modern UX and a high-precision search engine, ensuring accessibility and speed in delivering government information.",
    image: "/projetos/diario.png",
    link: "https://diariooficial.jaboatao.pe.gov.br/"
  },
  { 
    id: 4, 
    title: "Libera Via", 
    titleEn: "Libera Via",
    desc: "Modernização da logística urbana através da tecnologia. Sistema inteligente focado na agilidade para processos de liberação e uso do trânsito, conectando a administração pública às necessidades imediatas.", 
    descEn: "Modernization of urban logistics through technology. An intelligent system focused on agility for transit release processes, connecting public administration to immediate infrastructure needs.",
    image: "/projetos/liberavia.png",
    link: "#"
  },
  { 
    id: 5, 
    title: "Carteira PCD", 
    titleEn: "PCD Card",
    desc: "Sistema para solicitação e gestão de carteiras para pessoas com deficiência. Transforma um processo físico burocrático em uma experiência digital fluida, garantindo prioridade e direitos com segurança e agilidade.", 
    descEn: "System for requesting and managing identification cards for people with disabilities. Transforms a bureaucratic physical process into a fluid digital experience, ensuring priority and rights with security and agility.",
    image: "/projetos/pcd.png",
    link: "#"
  },
  { 
    id: 6, 
    title: "Road Tech", 
    titleEn: "Road Tech",
    desc: "Um ecossistema de aprendizado focado em segurança cibernética e carreira. O Road Tech simplifica a complexidade do mundo tech, oferecendo as ferramentas para construir o próprio futuro na programação.", 
    descEn: "A learning ecosystem focused on cybersecurity and careers. Road Tech simplifies the complexity of the tech world, offering the tools to build your own future in programming.",
    image: "/projetos/Roadtech.png",
    link: "https://karoiynarolim.github.io/RoadTech/"
  },
    { 
    id: 7, 
    title: "Data Lake ENEM", 
    titleEn: "ENEM Data Lake",
    desc: "Este projeto implementa uma arquitetura robusta de Data Lake local utilizando contêineres Docker para orquestrar a extração, processamento e análise dos microdados do ENEM (Exame Nacional do Ensino Médio).O ambiente é 100% isolado, idempotente e reproduzível, trazendo o poder do Apache Spark (PySpark) para lidar com volumetria de Big Data (arquivos CSVs de múltiplos gigabytes) convertendo-os em formatos colunares altamente otimizados.", 
    descEn: "This project implements a robust local Data Lake architecture using Docker containers to orchestrate the extraction, processing, and analysis of ENEM (National High School Exam) microdata. The environment is 100% isolated, idempotent, and reproducible, leveraging the power of Apache Spark (PySpark) to handle Big Data volumes (multi-gigabyte CSVs) by converting them into highly optimized columnar formats.",
    image: "/projetos/datalake.jpeg",
    link: "https://github.com/millemaria/ProjetoDataLakeEnem"
  },
   { 
    id: 8, 
    title: "Multimodal AI Agent", 
    titleEn: "Multimodal AI Agent",
    desc: "Agente de Inteligência Artificial multimodal capaz de analisar imagens combinando Visão Computacional local (OpenCV + PyTorch) com LLM de última geração (Google Gemini), servido via API REST com FastAPI e containerizado com Docker.", 
    descEn: "A multimodal Artificial Intelligence agent capable of analyzing images by combining local Computer Vision (OpenCV + PyTorch) with state-of-the-art LLMs (Google Gemini), served via a REST API with FastAPI and containerized with Docker.",
    image: "/projetos/agente.png",
    link: "https://github.com/millemaria/AgenteImagens"
  },
];

export default function Projects() {
  const { language } = useLanguage();
  return (
    <section className="relative min-h-screen bg-brand-bg text-brand-text py-32 px-6 md:px-12 z-20 transition-colors duration-300 overflow-hidden">
      {/* Tech Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-neutral)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-neutral)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none opacity-60 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h3 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            {language === 'pt' ? 'Projetos ' : 'Developed '} <span className="text-brand-crimson drop-shadow-md">{language === 'pt' ? 'Desenvolvidos' : 'Projects'}</span>
          </h3>
          <p className="mt-4 text-base md:text-xl text-brand-muted max-w-xl font-light mx-auto md:mx-0">
           {language === 'pt' ? 'Uma coleção selecionada de projetos que destacam desempenho, estética e arquiteturas web modernas.' : 'A curated collection of projects highlighting performance, aesthetics, and modern web architectures.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            return (
              <a
                key={proj.id}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative overflow-hidden rounded-3xl min-h-[450px] flex flex-col justify-end transition-all duration-700 ease-out cursor-pointer outline-none block",
                  "border border-brand-border shadow-lg",
                  "hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(188,21,78,0.4)] bg-brand-bg"
                )}
              >
                {/* Imagem de Fundo (com imagens estáticas do Unsplash via img para evitar erro de domínio no Next config) */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-brand-surface">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-110 md:group-hover:blur-md opacity-40 md:opacity-80 md:group-hover:opacity-40"
                  />
                  {/* Overlay gradiente para garantir contraste das letras */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-brand-bg/80 to-transparent transition-opacity duration-700 md:from-brand-bg/10 md:via-brand-bg/90 md:group-hover:from-brand-bg/95 md:group-hover:via-brand-bg/80" />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="relative z-10 p-6 md:p-12 transform transition-all duration-500 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0">
                  <div className="flex justify-between items-center mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                    <span className="px-4 py-1.5 bg-brand-orange/90 text-[#66A1B2] text-xs font-bold tracking-wider uppercase rounded-full shadow-lg">
                      {language === 'pt' ? 'Projetos' : 'Projects'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-crimson md:bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white md:group-hover:bg-brand-crimson md:group-hover:border-transparent transition-colors duration-300 shadow-xl">
                      <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-sm uppercase tracking-widest text-[#F9D57A] drop-shadow-md mb-2 font-bold opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity">
                    {String(proj.id).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </p>
                  
                  <h4 className="font-outfit text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-brand-crimson md:text-[#BC154E] mb-2 drop-shadow-lg md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-[#F9D57A] md:group-hover:to-[#D87E33] transition-all">
                    {language === 'pt' ? proj.title : proj.titleEn}
                  </h4>
                  
                  {/* Descrição que aparece inteira apenas no Hover no desktop, mas nativa no mobile */}
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-[#BC154E] dark:text-[#F9D57A] text-sm md:text-base font-medium leading-relaxed mt-4 drop-shadow-md">
                        {language === 'pt' ? proj.desc : proj.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
