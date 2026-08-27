import React from 'react';

export default function Badge({ children, variant = 'red', className = '' }) {
  const variants = {
    red: 'bg-brand-red/10 text-brand-red border-brand-red/30',
    dark: 'bg-zinc-900 text-white border-zinc-800',
    gray: 'bg-slate-100 text-zinc-700 border-slate-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-300'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border inline-flex items-center gap-1.5 ${variants[variant] || variants.red} ${className}`}>
      {children}
    </span>
  );
}
