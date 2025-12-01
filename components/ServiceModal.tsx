import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home } from 'lucide-react';
import { Button } from './ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  price?: string;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  // Split details by newline to create a list
  const detailItems = service.details.split('\n').filter(item => item.trim().length > 0);

  const handleGoHome = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000]"
          />
          {/* Main container - centered and fixed */}
          <div className="fixed inset-0 z-[2010] flex items-center justify-center p-4 pointer-events-none">
            
            {/* Modal Card 
                - Fixed max-height to 75vh for both mobile and desktop to be 100% safe against UI bars.
                - Pointer events auto to re-enable clicking inside the modal.
            */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-brand-gray border border-brand-accent/30 w-full max-w-lg rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] pointer-events-auto flex flex-col max-h-[75vh] overflow-hidden relative"
            >
              
              {/* FIXED HEADER - Title and Controls */}
              <div className="flex-shrink-0 p-5 border-b border-white/10 flex justify-between items-start bg-brand-gray relative z-20">
                <div className="pr-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">{service.title}</h3>
                  <div className="h-1 w-20 bg-brand-accent rounded-full mt-3"></div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0 -mr-2 -mt-2">
                  <button 
                    onClick={handleGoHome}
                    className="text-gray-500 hover:text-brand-accent hover:bg-white/10 rounded-full transition-all p-2 cursor-pointer"
                    title="Ir para o início"
                    aria-label="Ir para o início"
                  >
                    <Home size={20} />
                  </button>
                  <button 
                    onClick={onClose}
                    className="text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-all p-2 cursor-pointer"
                    aria-label="Fechar"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* SCROLLABLE BODY */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-brand-gray scrollbar-thin scrollbar-thumb-brand-accent/20 scrollbar-track-transparent">
                <div>
                  <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-2 font-bold">Descrição</h4>
                  <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">{service.description}</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-xs md:text-sm uppercase tracking-wider text-brand-accent mb-4 font-bold flex items-center gap-2">
                      Serviços
                  </h4>
                  
                  <ul className="space-y-3">
                    {detailItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_#00F0FF] flex-shrink-0" />
                        <span className="flex-1 whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price Section */}
                <div className="border-t border-white/10 pt-6">
                  <span className="block text-xs uppercase text-gray-500 mb-1">Investimento a partir de</span>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                    {service.price ? (
                      service.price.split('\n').map((line, index) => (
                        <div key={index} className="block leading-tight mb-1 last:mb-0">
                          {line}
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-500 text-lg italic">Sob consulta</span>
                    )}
                  </div>
                  
                  <Button 
                    href={`https://wa.me/5512991076943?text=Olá, gostaria de saber mais sobre ${service.title}`} 
                    target="_blank"
                    fullWidth
                  >
                    Agendar Agora
                  </Button>
                </div>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};