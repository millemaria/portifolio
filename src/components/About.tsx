export default function About() {
  return (
    <section className="bg-black text-white py-32 md:py-48 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">
              Sobre <span className="text-neutral-500">Mim</span>
            </h3>
            
            <div className="space-y-8 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              <p>
                Sou uma <strong className="text-white font-medium">Desenvolvedora Full Stack</strong> com foco em entregar experiências digitais extraordinárias. Acredito que o código não deve apenas funcionar, mas deve ser elegante, performático e acessível.
              </p>
              <p>
                Minha especialidade é atuar em todas as frentes da aplicação, unindo o desenvolvimento de <strong className="text-white font-medium">interfaces dinâmicas e fluidas no front-end</strong> à construção de <strong className="text-white font-medium">arquiteturas robustas e escaláveis no back-end</strong>.
              </p>
              <p>
                Com experiência liderando projetos de impacto, busco constantemente inovação em cada linha de código, transformando desafios complexos em produtos digitais inovadores, seguros e focados na melhor experiência de uso possível para as pessoas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 relative transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-black" />
              <div className="absolute inset-0 opacity-10 flex items-center justify-center mix-blend-overlay">
                <svg className="w-48 h-48 text-white scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="mt-40 border-t border-white/10 pt-20">
          <div className="mb-14">
            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Minha <span className="text-neutral-500">Stack Técnica</span>
            </h4>
            <p className="text-xl text-neutral-400 font-light">
              As principais ferramentas e tecnologias com as quais trabalho diariamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Frontend & Mobile */}
            <div className="bg-neutral-950/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-neutral-900 transition-colors duration-500 group">
              <h5 className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-8 group-hover:text-neutral-400 transition-colors">
                Frontend & Mobile
              </h5>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">React</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Next.js</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">React Native</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">TypeScript</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Jest</span>
              </div>
            </div>

            {/* Backend & Databases */}
            <div className="bg-neutral-950/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-neutral-900 transition-colors duration-500 group">
              <h5 className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-8 group-hover:text-neutral-400 transition-colors">
                Backend & Databases
              </h5>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Node.js</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Express</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Prisma</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">MySQL</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">HeidiSQL</span>
              </div>
            </div>

            {/* Data Science & Infra */}
            <div className="bg-neutral-950/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-neutral-900 transition-colors duration-500 group">
              <h5 className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-8 group-hover:text-neutral-400 transition-colors">
                Data Science & Infra
              </h5>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Python</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Docker</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">PySpark</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">Pandas</span>
                <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-sm font-medium text-neutral-200">PM2</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
