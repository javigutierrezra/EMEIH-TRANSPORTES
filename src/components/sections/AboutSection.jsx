import React from 'react';
import { Truck, HeartHandshake, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import Button from '../common/Button';

export default function AboutSection({ setCurrentView, onOpenQuoteModal }) {
  return (
    <section id="empresa" className="py-20 bg-white relative border-b border-slate-200 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            Conoce {COMPANY_CONFIG.name}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            NUESTRA <span className="text-brand-red">EMPRESA Y COMPROMISO</span> EN CHILE
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Somos una empresa comprometida con la entrega oportuna en fletes de camiones a nivel nacional y la distribución directa de materiales de paisajismo de primera calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image / Stats showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                alt="Flota de camiones Emeih Transportes Chile"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900">{COMPANY_CONFIG.name} Chile</h4>
                    <p className="text-xs text-zinc-600">Puntualidad en cada flete y máxima calidad en materiales de paisajismo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight">
              LOGÍSTICA DE CARGA PESADA Y SUMINISTRO DIRECTO DE CANTERA
            </h3>

            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
              En <strong className="text-zinc-900 font-bold">{COMPANY_CONFIG.name}</strong> combinamos el transporte de carga con camiones de alto tonelaje y el abastecimiento de materiales decorativos y de construcción para proyectos de arquitectura, constructoras y hogares en Chile.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Flota de Camiones Profesional</h4>
                  <p className="text-xs text-zinc-600">Camiones Tolva (14m³ - 22m³), Camiones Rampa (30Ton) y Grúa Pluma conducidos por profesionales A5.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Venta de Materiales de Paisajismo</h4>
                  <p className="text-xs text-zinc-600">Piedra Cuarzo Blanco, Maicillo, Canto Rodado, Arenas, Tierra de Hojas y Compost con pesaje garantizado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Cobertura de Arica a Punta Arenas</h4>
                  <p className="text-xs text-zinc-600">Bases operativas estratégicas y despacho continuo a parcelas y obras urbanas o rurales.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                onClick={() => setCurrentView('contacto')}
                variant="primary"
              >
                Contactar Ahora
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
