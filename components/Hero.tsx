import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 mix-blend-luminosity transform scale-105 pointer-events-none z-0"
        role="img"
        aria-label="Background texture of a luxury car detail"
      ></div>
      {/* Enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-brand-dark pointer-events-none z-0"></div>
      
      {/* Animated Shapes/Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content Wrapper - Using standard relative positioning for z-index context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-50"
        >
          <div className="inline-block mb-4 px-3 py-1 md:px-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-sm">
            <span className="text-brand-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Estética Automotiva Premium</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] md:leading-tight tracking-tight">
            ELEVANDO O <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600 neon-text">
              PADRÃO
            </span>
          </h1>
          
          <p className="font-sans text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light drop-shadow-lg px-2">
            Transformamos veículos em obras de arte. Tecnologia de ponta, 
            produtos exclusivos e acabamento impecável para quem exige o melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
            <div className="relative group w-full sm:w-auto">
              {/* Glow behind button */}
              <div className="absolute -inset-1 bg-brand-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse pointer-events-none"></div>
              <Button href="#servicos" fullWidth className="sm:w-auto animate-pulse-glow shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]">
                Acessar Catálogo <ChevronRight size={18} />
              </Button>
            </div>
            <Button variant="outline" href="#sobre" fullWidth className="sm:w-auto">
              Conhecer a marca
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </motion.div>
    </div>
  );
};