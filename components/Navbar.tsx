import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Specific logic for Home to ensure it hits the absolute top
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        // Manual scroll calculation to ensure fixed header doesn't cover content
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      window.location.href = href;
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center relative z-[1001]">
            {/* Logo placeholder - replacing the image request */}
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="font-display font-black text-2xl tracking-tighter text-white cursor-pointer" aria-label="SkinCar - Ir para o início">
              SKIN<span className="text-brand-accent">CAR</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center relative z-[1001]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-brand-accent transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/5512991076943" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 px-6 py-2 rounded-none border border-white/20 font-display text-xs font-bold uppercase tracking-wider cursor-pointer">
              Agendar
            </a>
          </div>

          <div className="md:hidden flex items-center z-[1001]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 relative cursor-pointer"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 fixed top-0 left-0 w-full z-[999] pt-20 shadow-2xl"
          >
            <div className="px-4 pb-8 space-y-1 bg-brand-dark">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-brand-accent hover:bg-white/5 border-l-2 border-transparent hover:border-brand-accent transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="https://wa.me/5512991076943"
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-brand-accent hover:bg-white/5 border-l-2 border-transparent transition-all uppercase cursor-pointer"
                >
                  Agendar via WhatsApp
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};