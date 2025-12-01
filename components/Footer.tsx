import React from 'react';
import { Instagram, MessageCircle, Youtube } from 'lucide-react';

// Custom Tiktok Icon
const TiktokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC = () => {
  const phoneNumber = "5512991076943";
  const displayPhone = "(12) 991076943";

  return (
    <footer id="contato" className="bg-black pt-16 md:pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="font-display font-black text-2xl md:text-3xl tracking-tighter text-white mb-6 block">
              SKIN<span className="text-brand-accent">CAR</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6 font-light text-sm md:text-base">
              Elevando a estética automotiva a um novo patamar de excelência. 
              Tecnologia, precisão e paixão por carros.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/_skincar_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all border border-white/10 hover:border-brand-accent">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all border border-white/10 hover:border-brand-accent">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.tiktok.com/@skincar539" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all border border-white/10 hover:border-brand-accent">
                <TiktokIcon size={20} />
              </a>
              <a href="https://www.youtube.com/@skinCar_EsteticaAutomoti-eb4qr" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all border border-white/10 hover:border-brand-accent">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <button className="flex items-center gap-3 hover:text-brand-accent transition-colors cursor-pointer text-left" onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}>
                  <MessageCircle size={16} className="flex-shrink-0" /> {displayPhone}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#sobre" className="hover:text-brand-accent transition-colors flex items-center gap-2 py-1">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-brand-accent transition-colors flex items-center gap-2 py-1">Serviços</a></li>
              <li><a href="#servicos" className="hover:text-brand-accent transition-colors flex items-center gap-2 py-1">Catálogo</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} SkinCar Estética Automotiva. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-600 text-xs">
             <a href="https://www.tiktok.com/@skincar539" className="hover:text-brand-accent transition-colors p-1">TikTok: @skincar539</a>
             <span className="hidden sm:inline w-1 h-1 bg-white/20 rounded-full"></span>
             <a href="https://www.youtube.com/@skinCar_EsteticaAutomoti-eb4qr" className="hover:text-brand-accent transition-colors p-1">YouTube: @SkinCar</a>
          </div>
        </div>
      </div>
    </footer>
  );
};