import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  href,
  target,
  rel
}) {
  const baseStyles = "font-bold px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-base shadow-sm";
  
  const variants = {
    primary: "bg-brand-red hover:bg-brand-redHover text-white shadow-brand-red/25 hover:shadow-brand-red/40",
    secondary: "bg-zinc-900 hover:bg-black text-white border border-zinc-800 shadow-md",
    outlineRed: "bg-transparent hover:bg-brand-red/10 text-brand-red border-2 border-brand-red",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
