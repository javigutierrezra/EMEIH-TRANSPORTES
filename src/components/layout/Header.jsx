import React, { useState } from 'react';
import { Truck, MessageSquare, Menu, X, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function Header({ currentView, setCurrentView, onOpenQuoteModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = createWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-brand-red text-white py-1.5 px-4 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white text-brand-red px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Chile</span>
            <span className="hidden sm:inline">{COMPANY_CONFIG.coverageSummary}</span>
            <span className="sm:hidden">Fletes y Materiales en todo Chile</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex items-center gap-1 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Directo: {COMPANY_CONFIG.phone}
            </a>
            <span className="hidden md:inline text-white/60">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-white" />
              Base Operativa: {COMPANY_CONFIG.baseLocation}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick('inicio')} className="flex items-center gap-3 group text-left">
            <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform duration-300">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-zinc-900">EMEIH</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block"></span>
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest -mt-1">
                {COMPANY_CONFIG.slogan}
              </p>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`px-4 py-2 rounded-xl transition ${
                currentView === 'inicio' ? 'bg-slate-100 text-zinc-900 font-bold shadow-sm border border-slate-200' : 'text-zinc-700 hover:text-brand-red hover:bg-slate-100'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('empresa')}
              className={`px-4 py-2 rounded-xl transition ${
                currentView === 'empresa' ? 'bg-slate-100 text-zinc-900 font-bold shadow-sm border border-slate-200' : 'text-zinc-700 hover:text-brand-red hover:bg-slate-100'
              }`}
            >
              La Empresa
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className={`px-4 py-2 rounded-xl transition ${
                currentView === 'servicios' ? 'bg-slate-100 text-zinc-900 font-bold shadow-sm border border-slate-200' : 'text-zinc-700 hover:text-brand-red hover:bg-slate-100'
              }`}
            >
              Servicios & Materiales
            </button>
            <button
              onClick={() => handleNavClick('cobertura')}
              className={`px-4 py-2 rounded-xl transition ${
                currentView === 'cobertura' ? 'bg-slate-100 text-zinc-900 font-bold shadow-sm border border-slate-200' : 'text-zinc-700 hover:text-brand-red hover:bg-slate-100'
              }`}
            >
              Cobertura Chile
            </button>
          </nav>

          {/* Single Primary Action Button on the Right */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('contacto')}
              variant="primary"
              className={`py-2.5 px-5 text-sm ${currentView === 'contacto' ? 'ring-4 ring-brand-red/30' : ''}`}
            >
              <MessageSquare className="w-4 h-4" />
              Contactar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-zinc-800 hover:text-black p-2 rounded-lg bg-slate-100 border border-slate-200"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`block w-full text-left py-2 text-base font-semibold ${currentView === 'inicio' ? 'text-brand-red font-bold' : 'text-zinc-800'}`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('empresa')}
            className={`block w-full text-left py-2 text-base font-semibold ${currentView === 'empresa' ? 'text-brand-red font-bold' : 'text-zinc-800'}`}
          >
            La Empresa
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className={`block w-full text-left py-2 text-base font-semibold ${currentView === 'servicios' ? 'text-brand-red font-bold' : 'text-zinc-800'}`}
          >
            Servicios & Materiales
          </button>
          <button
            onClick={() => handleNavClick('cobertura')}
            className={`block w-full text-left py-2 text-base font-semibold ${currentView === 'cobertura' ? 'text-brand-red font-bold' : 'text-zinc-800'}`}
          >
            Cobertura Nacional Chile
          </button>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <Button
              onClick={() => handleNavClick('contacto')}
              variant="primary"
              className="w-full py-3 text-center"
            >
              Contactar Ahora
            </Button>
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full py-3 justify-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Contacto por WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
