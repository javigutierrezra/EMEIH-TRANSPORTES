import React from 'react';
import { Truck, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function Footer({ setCurrentView, onOpenQuoteModal }) {
  const handleNavClick = (viewId) => {
    if (setCurrentView) {
      setCurrentView(viewId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappUrl = createWhatsAppUrl();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleNavClick('inicio')} className="flex items-center gap-3 group text-left">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/30">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-white">EMEIH</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block"></span>
                </div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest -mt-1">
                  {COMPANY_CONFIG.slogan}
                </p>
              </div>
            </button>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {COMPANY_CONFIG.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY_CONFIG.whatsappNumber}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-brand-red hover:text-brand-red transition"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-white hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => handleNavClick('inicio')} className="hover:text-white transition text-left">Inicio</button></li>
              <li><button onClick={() => handleNavClick('empresa')} className="hover:text-white transition text-left">La Empresa</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-white transition text-left">Servicios & Materiales</button></li>
              <li><button onClick={() => handleNavClick('cobertura')} className="hover:text-white transition text-left">Cobertura en Chile</button></li>
              <li><button onClick={() => handleNavClick('contacto')} className="hover:text-white transition font-bold text-brand-red text-left">Contactar Ahora</button></li>
            </ul>
          </div>

          {/* Col 3: Materials Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Materiales Destacados</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Piedra Cuarzo Blanco</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Maicillo Seleccionado</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Piedra Bola de Río</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Arena Rubia Fina</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Tierra de Hojas Cernida</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-brand-red transition text-left">Chip de Corteza de Pino</button></li>
            </ul>
          </div>

          {/* Col 4: Operations & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Bases & Operaciones</h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Base Central: {COMPANY_CONFIG.baseLocation}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Móvil: {COMPANY_CONFIG.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.email}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                onClick={() => handleNavClick('contacto')}
                variant="primary"
                className="w-full py-2.5 text-xs text-center block"
              >
                Contactar Ahora
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name}. Todos los derechos reservados. Chile.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Términos de Servicio</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Política de Privacidad</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Facturación Electrónica</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
