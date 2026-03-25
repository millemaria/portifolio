import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Portal da Transparência", desc: "Desenvolvimento de uma plataforma de alta performance com Next.js, focada em acessibilidade e transparência pública. Um projeto que não apenas serve ao cidadão, mas define padrões: em 2025, onde foi coroado com o Selo Diamante de Transparência, o nível mais alto de excelência em dados abertos." },
  { id: 2, title: "Jaboatão Oficial", desc: "Unindo Next.js e Express, liderei o desenvolvimento do novo Site Oficial de Jaboatão. Foco total em performance e experiência do usuário (UX), servindo como o hub principal de informações e serviços para uma das maiores cidades de Pernambuco." },
  { id: 3, title: "Diário Oficial do Jaboatão dos Guararapes", desc: "Desenvolvimento do novo ecossistema do Diário Oficial. Um projeto focado em UX moderno e um motor de busca de alta precisão, garantindo acessibilidade e rapidez na entrega de informações governamentais cruciais." },
  { id: 4, title: "Libera Via", desc: "O Liberavia moderniza a logística urbana através da tecnologia. Um sistema focado na transparência e agilidade para processos de liberação e uso do trânsito, conectando a administração pública às necessidades imediatas das vias." },
  { id: 5, title: "Libera Via", desc: "O Liberavia moderniza a logística urbana através da tecnologia. Um sistema focado na transparência e agilidade para processos de liberação e uso do solo, conectando a administração pública às necessidades imediatas de infraestrutura." },
  { id: 6, title: "Road Tech", desc: "Um ecossistema de aprendizado focado em segurança cibernética e carreira. O Road Tech simplifica a complexidade do mundo tech, oferecendo as ferramentas necessárias para que qualquer pessoa aprenda a navegar e a construir seu próprio futuro na programação." },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-brand-bg border-t border-brand-border text-brand-text py-32 px-6 md:px-12 z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h3 className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter">
            Projetos <span className="text-brand-crimson drop-shadow-md">Selecionados</span>
          </h3>
          <p className="mt-4 text-xl text-brand-muted max-w-xl font-light">
           Uma coleção selecionada de projetos que destacam desempenho, estética e arquiteturas web modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            return (
              <div
                key={proj.id}
                className={cn(
                  "group relative overflow-hidden rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-end transition-all duration-700 ease-out cursor-pointer",
                  "bg-brand-surface border border-brand-border",
                  "hover:bg-brand-hover hover:border-brand-crimson/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(188,21,78,0.25)]"
                )}
              >
                {/* Vibrant glow overlay */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-crimson/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  
                    <div className="w-10 h-10 rounded-full bg-brand-bg/50 border border-brand-border flex items-center justify-center text-brand-text group-hover:bg-brand-crimson group-hover:border-transparent group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-sm uppercase tracking-widest text-brand-orange mb-3 font-medium">
                    {String(proj.id).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </p>
                  <h4 className="font-outfit text-3xl font-bold tracking-tight text-brand-text mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-yellow group-hover:to-brand-orange transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-brand-muted font-light leading-relaxed line-clamp-3">
                    {proj.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
