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
    <section className="relative min-h-screen bg-black text-white py-32 px-6 md:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Projetos <span className="text-neutral-500">Selecionados</span>
          </h3>
          <p className="mt-4 text-xl text-neutral-400 max-w-xl">
           Uma coleção selecionada de projetos que destacam desempenho, estética e arquiteturas web modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-end transition-all duration-700 ease-out",
                "bg-white/[0.03] backdrop-blur-xl border border-white/[0.05]",
                "hover:bg-white/[0.08] hover:border-white/[0.1] hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
              )}
            >
              {/* Subtle hover glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-white/[0.01] to-transparent" />
              
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  {String(proj.id).padStart(2, "0")} / 04
                </p>
                <h4 className="text-3xl font-semibold tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
