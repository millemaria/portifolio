import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <section className="bg-brand-bg text-brand-text py-32 md:py-48 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-brand-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h3 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 md:mb-10 text-center lg:text-left">
              {language === 'pt' ? 'Sobre ' : 'About '} <span className="text-brand-orange drop-shadow-md">{language === 'pt' ? 'Mim' : 'Me'}</span>
            </h3>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-brand-muted font-light leading-relaxed text-center lg:text-left">
              {language === 'pt' ? (
                <>
                  <p>
                    Sou uma <strong className="text-brand-text text-brand-yellow font-medium">Desenvolvedora Full Stack</strong> com foco em entregar experiências digitais extraordinárias. Acredito que o código não deve apenas funcionar, mas deve ser elegante, performático e acessível.
                  </p>
                  <p>
                    Minha especialidade é atuar em todas as frentes da aplicação, unindo o desenvolvimento de <strong className="text-brand-yellow font-medium drop-shadow-sm">interfaces dinâmicas e fluidas no front-end</strong> à construção de <strong className="text-brand-blue font-medium drop-shadow-sm">arquiteturas robustas e escaláveis no back-end</strong>.
                  </p>
                  <p>
                    Com experiência liderando projetos de impacto, busco constantemente inovação em cada linha de código, transformando desafios complexos em produtos digitais inovadores, seguros e focados na melhor experiência de uso possível para as pessoas.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am a <strong className="text-brand-text text-white font-medium">Full Stack Developer</strong> focused on delivering extraordinary digital experiences. I believe code shouldn&apos;t just work—it should be elegant, performant, and accessible.
                  </p>
                  <p>
                    My specialty lies in working across the entire application stack, bridging the development of <strong className="text-brand-yellow font-medium drop-shadow-sm">dynamic and fluid front-end interfaces</strong> with the construction of <strong className="text-brand-blue font-medium drop-shadow-sm">robust and scalable back-end architectures</strong>.
                  </p>
                  <p>
                    With experience leading impactful projects, I constantly seek innovation in every line of code, transforming complex challenges into secure, innovative digital products focused on providing the best possible user experience.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-surface border border-brand-border relative transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-[0_0_40px_rgba(102,161,178,0.1)] group-hover:shadow-[0_0_60px_rgba(102,161,178,0.2)]">
              <Image 
                src="/images/photo.png"
                alt="Jamille Barbosa"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Subtle glass overlay to blend with theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/40 to-transparent pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
            </div>

            {/* Download CV Button */}
            <div className="mt-8 flex justify-center w-full">
              <a 
                href="/pdf/Curriculo_Jamille_Maria_PT.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-crimson/50 hover:bg-brand-hover text-brand-text font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(188,21,78,0.25)] group"
              >
                <span>{language === 'pt' ? 'Baixar Currículo' : 'Download Resume'}</span>
                <svg className="w-5 h-5 text-brand-crimson group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

    {/* Technical Stack Section */}
        <div className="mt-40 relative">
 
          {/* ── Tech background canvas ── */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-3xl">
            {/* dot grid */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.07]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern id="stack-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" className="text-brand-text" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stack-dots)" />
            </svg>
 
            {/* circuit traces */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* blue traces */}
              <g stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-blue" opacity="0.08">
                <line x1="0"   y1="120" x2="100%" y2="120" />
                <line x1="0"   y1="300" x2="100%" y2="300" />
                <line x1="160" y1="0"   x2="160"  y2="120" />
                <line x1="260" y1="60"  x2="260"  y2="120" />
                <line x1="480" y1="0"   x2="480"  y2="120" />
                <line x1="580" y1="40"  x2="580"  y2="120" />
                <line x1="820" y1="0"   x2="820"  y2="120" />
                <line x1="960" y1="60"  x2="960"  y2="120" />
                <line x1="240" y1="300" x2="240"  y2="100%" />
                <line x1="240" y1="380" x2="340"  y2="380" />
                <line x1="640" y1="300" x2="640"  y2="100%" />
                <line x1="780" y1="300" x2="780"  y2="420" />
                <line x1="640" y1="420" x2="780"  y2="420" />
                {/* junction dots */}
                <circle cx="160" cy="120" r="3" fill="currentColor" />
                <circle cx="260" cy="120" r="3" fill="currentColor" />
                <circle cx="480" cy="120" r="3" fill="currentColor" />
                <circle cx="580" cy="120" r="3" fill="currentColor" />
                <circle cx="820" cy="120" r="3" fill="currentColor" />
                <circle cx="960" cy="120" r="3" fill="currentColor" />
                <circle cx="240" cy="300" r="3" fill="currentColor" />
                <circle cx="240" cy="380" r="3" fill="currentColor" />
                <circle cx="640" cy="300" r="3" fill="currentColor" />
                <circle cx="640" cy="420" r="3" fill="currentColor" />
                <circle cx="780" cy="420" r="3" fill="currentColor" />
              </g>
              {/* crimson accent traces */}
              <g stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-crimson" opacity="0.06">
                <line x1="0"   y1="200" x2="100%" y2="200" />
                <line x1="360" y1="0"   x2="360"  y2="200" />
                <line x1="360" y1="160" x2="440"  y2="160" />
                <line x1="700" y1="200" x2="700"  y2="100%" />
                <line x1="700" y1="260" x2="800"  y2="260" />
                <circle cx="360" cy="200" r="3" fill="currentColor" />
                <circle cx="440" cy="160" r="3" fill="currentColor" />
                <circle cx="700" cy="200" r="3" fill="currentColor" />
              </g>
            </svg>
 
            {/* atmospheric glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/3 w-[350px] h-[250px] bg-brand-crimson/5 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-brand-orange/[0.04] rounded-full blur-[100px]" />
          </div>
 
          {/* Section header */}
          <div className="mb-20 relative pt-12 px-1">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <span className="block w-10 h-[2px] bg-brand-blue opacity-60" />
              <span className="text-brand-blue text-xs uppercase tracking-[0.3em] font-medium opacity-80">
                {language === 'pt' ? 'Ferramentas' : 'Tools'}
              </span>
            </div>
            <h4 className="font-outfit text-3xl md:text-5xl font-semibold tracking-tight text-brand-text mb-4 text-center md:text-left">
              {language === 'pt' ? 'O que uso para ' : 'What I use to '}
              <span className="relative inline-block">
                <span className="text-brand-blue drop-shadow-sm">
                  {language === 'pt' ? 'construir' : 'build'}
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" className="text-brand-blue opacity-40" strokeLinecap="round" />
                </svg>
              </span>
            </h4>
            <p className="text-lg text-brand-muted font-light text-center md:text-left max-w-xl">
              {language === 'pt'
                ? 'Tecnologias que fazem parte do meu dia a dia — do pixel ao servidor.'
                : 'Technologies that are part of my daily workflow — from pixel to server.'}
            </p>
          </div>
 
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12 px-1">
 
            {/* Frontend & Mobile */}
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative bg-brand-surface/80 backdrop-blur-sm border border-brand-border group-hover:border-brand-blue/40 rounded-3xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(102,161,178,0.25)]">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h5 className="text-brand-text font-semibold text-base tracking-tight">Frontend & Mobile</h5>
                    <p className="text-brand-muted text-xs mt-1 font-light">
                      {language === 'pt' ? 'Interface e experiência' : 'Interface & experience'}
                    </p>
                  </div>
                  <span className="text-brand-blue/30 font-outfit font-bold text-4xl leading-none select-none group-hover:text-brand-blue/50 transition-colors">01</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['React', 'Next.js', 'React Native', 'TypeScript', 'Jest', 'TailwindCSS', 'Vite'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium text-brand-text bg-brand-bg border border-brand-border group-hover:border-brand-blue/25 transition-all duration-300 hover:bg-brand-blue/10 hover:border-brand-blue/50 hover:text-brand-blue cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Backend & Databases */}
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-crimson/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative bg-brand-surface/80 backdrop-blur-sm border border-brand-border group-hover:border-brand-crimson/40 rounded-3xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(188,21,78,0.25)]">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand-crimson/10 flex items-center justify-center mb-4 group-hover:bg-brand-crimson/20 transition-colors">
                      <svg className="w-5 h-5 text-brand-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h5 className="text-brand-text font-semibold text-base tracking-tight">Backend & Databases</h5>
                    <p className="text-brand-muted text-xs mt-1 font-light">
                      {language === 'pt' ? 'Lógica e persistência' : 'Logic & persistence'}
                    </p>
                  </div>
                  <span className="text-brand-crimson/30 font-outfit font-bold text-4xl leading-none select-none group-hover:text-brand-crimson/50 transition-colors">02</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Node.js', 'Express', 'Prisma', 'MySQL', 'HeidiSQL', 'PySpark', 'FastAPI', 'CI/CD'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium text-brand-text bg-brand-bg border border-brand-border group-hover:border-brand-crimson/25 transition-all duration-300 hover:bg-brand-crimson/10 hover:border-brand-crimson/50 hover:text-brand-crimson cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Data Science & Infra */}
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative bg-brand-surface/80 backdrop-blur-sm border border-brand-border group-hover:border-brand-orange/40 rounded-3xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(216,126,51,0.25)]">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h5 className="text-brand-text font-semibold text-base tracking-tight">Data Science & Infra</h5>
                    <p className="text-brand-muted text-xs mt-1 font-light">
                      {language === 'pt' ? 'Dados e infraestrutura' : 'Data & infrastructure'}
                    </p>
                  </div>
                  <span className="text-brand-orange/30 font-outfit font-bold text-4xl leading-none select-none group-hover:text-brand-orange/50 transition-colors">03</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Python', 'Docker', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Apache Spark', 'PM2', 'Linux', 'GCP', 'Git', 'GitHub', 'GitLab'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium text-brand-text bg-brand-bg border border-brand-border group-hover:border-brand-orange/25 transition-all duration-300 hover:bg-brand-orange/10 hover:border-brand-orange/50 hover:text-brand-orange cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}

