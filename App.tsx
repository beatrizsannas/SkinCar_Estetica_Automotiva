import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ServicesSection } from './components/ServicesSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-text selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;