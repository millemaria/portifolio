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
                    Sou uma <strong className="text-brand-text text-white font-medium">Desenvolvedora Full Stack</strong> com foco em entregar experiências digitais extraordinárias. Acredito que o código não deve apenas funcionar, mas deve ser elegante, performático e acessível.
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
                    I am a <strong className="text-brand-text text-white font-medium">Full Stack Developer</strong> focused on delivering extraordinary digital experiences. I believe code shouldn't just work—it should be elegant, performant, and accessible.
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
        <div className="mt-40 border-t border-brand-border pt-20">
          <div className="mb-14 text-center md:text-left">
            <h4 className="font-outfit text-3xl md:text-5xl font-semibold tracking-tight text-brand-text mb-4">
              {language === 'pt' ? 'Minha ' : 'My '}<span className="text-brand-blue drop-shadow-sm">{language === 'pt' ? 'Stack Técnica' : 'Tech Stack'}</span>
            </h4>
            <p className="text-xl text-brand-muted font-light">
              {language === 'pt' ? 'As principais ferramentas e tecnologias com as quais trabalho diariamente.' : 'The core tools and technologies I work with daily.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Frontend & Mobile */}
            <div className="bg-brand-surface border border-brand-border p-8 rounded-3xl hover:bg-brand-hover hover:border-brand-blue/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(102,161,178,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-blue/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <h5 className="text-brand-blue uppercase tracking-widest text-sm font-semibold mb-8 transition-colors relative z-10">
                Frontend & Mobile
              </h5>
              <div className="flex flex-wrap gap-3 relative z-10">
                {['React', 'Next.js', 'React Native', 'TypeScript', 'Jest', 'TailwindCSS','Vite'].map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-brand-bg border border-brand-border rounded-full text-sm font-medium text-brand-text group-hover:border-brand-blue/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Databases */}
            <div className="bg-brand-surface border border-brand-border p-8 rounded-3xl hover:bg-brand-hover hover:border-brand-crimson/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(188,21,78,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-crimson/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <h5 className="text-brand-crimson uppercase tracking-widest text-sm font-semibold mb-8 transition-colors relative z-10">
                Backend & Databases
              </h5>
              <div className="flex flex-wrap gap-3 relative z-10">
                {['Node.js', 'Express', 'Prisma', 'MySQL', 'HeidiSQL','CI/CD'].map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-brand-bg border border-brand-border rounded-full text-sm font-medium text-brand-text group-hover:border-brand-crimson/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science & Infra */}
            <div className="bg-brand-surface border border-brand-border p-8 rounded-3xl hover:bg-brand-hover hover:border-brand-orange/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(216,126,51,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <h5 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-8 transition-colors relative z-10">
                Data Science & Infra
              </h5>
              <div className="flex flex-wrap gap-3 relative z-10">
                {['Python', 'Docker', 'PySpark', 'Pandas', 'PM2'].map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-brand-bg border border-brand-border rounded-full text-sm font-medium text-brand-text group-hover:border-brand-orange/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
