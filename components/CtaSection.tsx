import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const CtaSection: React.FC = () => {
  return (
    <Section id="cta" className="bg-brand-dark py-20 md:py-32">
      <div className="relative rounded-3xl bg-gradient-to-r from-brand-gray to-black overflow-hidden border border-white/10 p-6 sm:p-12 md:p-24 text-center">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
            SEU CARRO MERECE <br/>
            <span className="text-brand-accent">O MELHOR</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-2">
            Não espere mais para dar ao seu veículo o tratamento premium que ele precisa. 
            Agende agora o tratamento do seu veículo.
          </p>
          <div className="flex justify-center w-full">
            <Button fullWidth={false} className="w-full sm:w-auto min-w-[200px]" href="https://wa.me/5512991076943" target="_blank">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};