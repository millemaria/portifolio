import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  return (
    <section className="bg-brand-bg text-brand-text py-20 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Tech Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-neutral)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-neutral)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_100%,#000_20%,transparent_100%)] pointer-events-none opacity-60 z-0" />
      
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto relative z-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Esquerda: Textos e Botões */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
          <h3 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-blue">
            {language === 'pt' ? 'Fale comigo!' : 'Get in touch!'}
          </h3>
          
          <div className="space-y-4 md:space-y-6 text-brand-muted text-base md:text-lg mt-6 md:mt-8 w-full">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>barbosaj901@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>+55 81 99525-7758</span>
            </div>
          </div>

          <a 
            href="https://wa.me/5581995257758" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-3 mt-4 rounded-sm border border-brand-blue text-brand-blue font-semibold text-sm tracking-widest transition-all duration-300 hover:bg-brand-blue hover:text-white"
          >
            {/* Ícone do WhatsApp */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WHATSAPP
          </a>
        </div>

        {/* Direita: Celular Flutuante Iluminado */}
        <div className="flex justify-center relative mt-12 lg:mt-0 group perspective-1000 scale-90 md:scale-100">
          <div className="w-[300px] md:w-[320px] h-[580px] md:h-[600px] relative transform -rotate-12 lg:group-hover:-translate-y-4 lg:group-hover:rotate-0 transition-all duration-700 ease-out z-10">
            <Image 
              src="/icons/cell.png" 
              alt="Celular" 
              fill 
              className="object-contain drop-shadow-[10px_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
          
          {/* Sombra embaixo do celular */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/60 rounded-[100%] blur-xl transition-all duration-700 group-hover:w-40 group-hover:opacity-40" />
        </div>
      </div>

      {/* Linha separadora do Footer */}
      <div className="max-w-6xl mx-auto border-t border-brand-border pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-brand-muted text-sm font-light z-10 relative">
        
        {/* Assinatura Esquerda */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
           <span className="font-outfit text-2xl md:text-3xl font-light text-brand-text">Jamille<span className="font-semibold">Barbosa</span></span>
           <div className="flex flex-col text-xs md:text-sm">
             <span>© {new Date().getFullYear()} {language === 'pt' ? 'por Jamille Barbosa.' : 'by Jamille Barbosa.'}</span>
             <span>{language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</span>
           </div>
        </div>
        
        {/* Ícones Sociais Direita */}
        <div className="flex gap-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/millesmaria_?igsh=cDNvYnp3YWUwM2U5&utm_source=qr" className="text-brand-text hover:text-brand-blue transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/millemaria" className="text-brand-text hover:text-brand-blue transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://br.linkedin.com/in/jamillemaria" className="text-brand-text hover:text-brand-blue transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>

          
        </div>
      </div>
    </section>
  );
}
