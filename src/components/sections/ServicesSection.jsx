import React from 'react';
import { Truck, Mountain, Shield, Clock, FileText, Check } from 'lucide-react';
import Button from '../common/Button';

export default function ServicesSection({ onOpenQuoteModal }) {
  return (
    <section id="servicios" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider">
            Nuestros Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            SOLUCIONES EN <span className="text-brand-red">LOGÍSTICA DE CARGA</span> Y <span className="text-brand-red">MATERIALES DE PAISAJISMO</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Combinamos una potente flota de camiones con el suministro directo de cantera para ofrecer precios competitivos a empresas, proyectos de arquitectura y clientes particulares.
          </p>
        </div>

        {/* Two Main Service Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Fletes & Camiones */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-brand-red/50 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-bl-full pointer-events-none group-hover:bg-brand-red/10 transition-colors"></div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-red/30">
                <Truck className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Pilar Operativo 01</span>
              <h3 className="text-2xl font-black text-zinc-900 mt-1 mb-4">
                Fletes en Camiones a Todo Chile
              </h3>

              <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                Prestamos servicio continuo de transporte de carga por carretera. Disponemos de camiones tolva de 14m³ a 22m³, camiones rampa de 30 toneladas y camiones con grúa pluma para descargas complejas.
              </p>

              <ul className="space-y-3 text-sm text-zinc-700 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Camiones Tolva:</strong> Transporte a granel de áridos, escombros limpios y maicillo.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Camiones Rampa y Cama Baja:</strong> Carga paletizada, maxisacos y maquinaria.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Fletes Interregionales:</strong> Conexión diaria entre Zona Norte, Central y Sur.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>GPS y Seguros:</strong> Monitoreo constante de ruta para tranquilidad de tu proyecto.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-semibold">Disponibilidad Inmediata</span>
              <Button
                onClick={onOpenQuoteModal}
                variant="primary"
                className="py-2.5 px-4 text-xs"
              >
                Cotizar Flete de Camión
              </Button>
            </div>
          </div>

          {/* Pillar 2: Materiales de Paisajismo */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-brand-red/50 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-900/5 rounded-bl-full pointer-events-none group-hover:bg-zinc-900/10 transition-colors"></div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6 shadow-lg">
                <Mountain className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Pilar Operativo 02</span>
              <h3 className="text-2xl font-black text-zinc-900 mt-1 mb-4">
                Venta y Suministro de Paisajismo
              </h3>

              <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                Venta directa desde canteras seleccionadas. Abastecemos a proyectos de arquitectura del paisaje, empresas constructoras, municipalidades y hogares particulares con materiales de máxima pureza.
              </p>

              <ul className="space-y-3 text-sm text-zinc-700 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-900/10 text-zinc-900 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Piedra Cuarzo Blanco:</strong> Diversas granulometrías para jardines de alto nivel.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-900/10 text-zinc-900 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Maicillo y Gravillas:</strong> Para senderos, caminos de parcela y estacionamientos.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-900/10 text-zinc-900 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Piedra Bola de Río & Volcánica:</strong> Canto rodado natural y decorativo.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-900/10 text-zinc-900 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Tierra de Hojas Cernida & Compost:</strong> Substratos 100% orgánicos enriquecidos.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-semibold">Venta por m³ o Tonelada</span>
              <Button
                onClick={onOpenQuoteModal}
                variant="secondary"
                className="py-2.5 px-4 text-xs"
              >
                Cotizar Materiales
              </Button>
            </div>
          </div>

        </div>

        {/* Feature Grid Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900">Despachos Puntuales</h4>
              <p className="text-xs text-zinc-600 mt-1">Coordinación directa de horario de llegada a obra sin retrasos innecesarios.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900">Factura y Convenios</h4>
              <p className="text-xs text-zinc-600 mt-1">Emitimos Factura Electrónica y ofrecemos convenios mensuales a constructoras.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900">Garantía de Cubicaje</h4>
              <p className="text-xs text-zinc-600 mt-1">Garantizamos la cantidad exacta de $m^3$ y peso en báscula certificada.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
