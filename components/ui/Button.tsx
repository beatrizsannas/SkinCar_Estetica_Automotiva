import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  target,
  rel,
  ...props 
}) => {
  // Base styles: Ensure z-index is high, display is inline-flex, and cursor is pointer
  const baseStyles = "relative z-40 font-display font-bold uppercase tracking-wider py-4 px-8 transition-all duration-300 overflow-hidden inline-flex items-center justify-center cursor-pointer active:scale-95 select-none";
  
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    outline: "border border-brand-accent text-brand-accent hover:bg-brand-accent/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] bg-brand-dark/50 backdrop-blur-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  // Smart smooth scrolling handler with offset
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
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
    }
  };

  // If href is provided, render as an anchor tag explicitly
  if (href) {
    const isExternal = target === '_blank';
    const relAttribute = rel || (isExternal ? "noopener noreferrer" : undefined);

    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={target}
        rel={relAttribute}
        onClick={handleClick}
        style={{ WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
      >
        <span className="relative z-50 flex items-center justify-center gap-2 pointer-events-none">
          {children}
        </span>
      </a>
    );
  }

  // Otherwise render as a standard button
  return (
    <button 
      className={combinedClasses}
      type="button"
      {...props}
      style={{ WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
    >
      <span className="relative z-50 flex items-center justify-center gap-2 pointer-events-none">
        {children}
      </span>
    </button>
  );
};