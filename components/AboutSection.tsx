import React from 'react';
import { Section } from './ui/Section';

export const AboutSection: React.FC = () => {
  return (
    <Section id="sobre" className="bg-brand-gray border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Container */}
        <div className="relative order-1 lg:order-1">
          <div className="absolute -inset-4 bg-brand-accent/20 blur-xl rounded-lg opacity-50 lg:opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2300&auto=format&fit=crop" 
            alt="Detalhamento automotivo profissional" 
            className="relative w-full h-auto rounded-lg shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-video lg:aspect-auto"
            loading="lazy"
          />
        </div>
        
        {/* Text Content */}
        <div className="order-2 lg:order-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
            O QUE É A <span className="text-brand-accent">SKINCAR</span>?
          </h2>
          <div className="space-y-6 text-gray-400 font-light text-base md:text-lg">
            <p>
              Não somos apenas uma estética automotiva. Somos um laboratório de renovação veicular. 
              A SkinCar nasceu para atender proprietários que entendem que um carro não é apenas 
              um meio de transporte, mas uma extensão de sua personalidade.
            </p>
            <p>
              Nossa metodologia une <strong className="text-white">técnicas artesanais</strong> a <strong className="text-white">tecnologia de ponta</strong>. 
              Utilizamos produtos importados e equipamentos de precisão para garantir resultados que 
              superam o estado de fábrica.
            </p>
            
            <div className="pt-4 md:pt-6">
              <h3 className="font-display text-lg md:text-xl text-white mb-4">PARA QUEM É?</h3>
              <ul className="space-y-3">
                {['Colecionadores exigentes', 'Proprietários de carros de luxo', 'Apaixonados por detalhes', 'Quem busca valorização na revenda'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_8px_#00F0FF] flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};