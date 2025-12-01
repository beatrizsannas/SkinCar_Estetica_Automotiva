import React, { useState } from 'react';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';
import { ServiceModal } from './ServiceModal';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <Section id="servicos" className="bg-brand-gray relative overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-20 gap-8 md:gap-10">
        
        {/* Title Block */}
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-brand-accent shadow-[0_0_10px_#00F0FF]"></div>
            <p className="text-brand-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
              Alta Performance
            </p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none">
            NOSSOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
              SERVIÇOS
            </span>
          </h2>
        </div>
        
        {/* Description Block - Fixed Alignment for Mobile */}
        <div className="flex-1 w-full lg:w-auto flex flex-col items-start lg:items-end gap-4">
            <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent lg:from-transparent lg:via-white/20 lg:to-transparent"></div>
            <p className="text-gray-400 text-sm max-w-md text-left lg:text-right leading-relaxed">
              Explore nossa gama de tratamentos automotivos. 
              <span className="inline"> Clique nos cards para visualizar os detalhes técnicos e diferenciais de cada procedimento.</span>
            </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="group relative h-full cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-gray rounded-2xl"
            role="button"
            aria-label={`Ver detalhes de ${service.title}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedService(service);
              }
            }}
          >
            {/* Card Background & Border */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-brand-accent/40 pointer-events-none"></div>
            <div className="absolute inset-[1px] bg-[#0A0A0B] rounded-2xl z-10 pointer-events-none"></div>

            {/* Content - Reduced padding for more compact desktop view */}
            <div className="relative z-20 h-full p-6 md:p-6 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
              
              {/* Header Icon & Arrow - Reduced margin and size */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300 shadow-lg">
                  <service.icon className="text-gray-400 group-hover:text-brand-accent w-6 h-6 transition-colors duration-300" />
                </div>
                
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:flex">
                   <ArrowUpRight size={16} className="text-brand-accent" />
                </div>
                 <div className="md:hidden opacity-50">
                   <ArrowUpRight size={16} className="text-gray-500" />
                </div>
              </div>

              {/* Text */}
              <div className="mt-auto">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </Section>
  );
};