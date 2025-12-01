import React from 'react';
import { Section } from './ui/Section';
import { BENEFITS } from '../constants';

export const BenefitsSection: React.FC = () => {
  return (
    <Section id="beneficios" className="bg-brand-dark">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          POR QUE ESCOLHER A <span className="text-brand-accent">SKINCAR</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Resultados reais que vão além da estética. Entregamos valor, proteção e exclusividade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((benefit, index) => (
          <div 
            key={index}
            className="group glass-card p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border-t border-transparent hover:border-brand-accent/50"
          >
            <div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <benefit.icon className="text-brand-accent w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};