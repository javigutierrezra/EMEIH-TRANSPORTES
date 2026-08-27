import React, { useState } from 'react';
import { regionsChile, truckTypes } from '../../data/regions';
import { MapPin, Truck, Clock, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function CoverageMap({ onOpenQuoteModal }) {
  const [activeZone, setActiveZone] = useState('Zona Central');
  const zones = ['Zona Central', 'Zona Norte', 'Zona Sur'];

  const filteredRegions = regionsChile.filter(r => r.zone.includes(activeZone) || activeZone === 'Todas');

  return (
    <section id="cobertura" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            Red Logística Nacional en Chile
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            COBERTURA DE FLETES DE <span className="text-brand-red">ARICA A PUNTA ARENAS</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Disponemos de bases operativas y rutas consolidadas para garantizar traslados seguros y entregas oportunas de materiales y fletes industriales.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                activeZone === zone
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105'
                  : 'bg-white text-zinc-700 border border-slate-200 hover:text-black hover:bg-slate-100'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRegions.map((region) => (
            <div
              key={region.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full pointer-events-none group-hover:bg-brand-red/10 transition"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="red">{region.zone}</Badge>
                  <div className="flex items-center gap-1 text-xs text-brand-red font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{region.estimatedDelivery}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-brand-red transition-colors">
                  {region.name}
                </h3>
                <p className="text-xs font-semibold text-zinc-500 mb-4">
                  📍 {region.hubLocation}
                </p>

                {/* Main Cities */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-zinc-800 uppercase tracking-wider block mb-1.5">Ciudades con Ruta Frecuente:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {region.mainCities.map((city, idx) => (
                      <span key={idx} className="bg-slate-100 border border-slate-200 text-zinc-700 text-[11px] px-2 py-0.5 rounded font-medium">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trucks Available in this region */}
                <div>
                  <span className="text-[11px] font-bold text-zinc-800 uppercase tracking-wider block mb-1.5">Camiones Asignados:</span>
                  <div className="space-y-1">
                    {region.trucksAvailable.map((truck, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
                        <Truck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>{truck}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-medium">Flete Base desde ${region.baseFreightCost.toLocaleString('es-CL')}</span>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                >
                  <span>Cotizar Destino</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Fleet Showcase Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-zinc-900">NUESTRA FLOTA DE CAMIONES Y EQUIPO HEAVY-DUTY</h3>
            <p className="text-xs text-zinc-500 mt-1">Vehículos modernos con revisiones técnicas al día y choferes con licencia A5 profesional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {truckTypes.map((truck) => (
              <div key={truck.id} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900">{truck.name}</h4>
                <p className="text-xs text-brand-red font-bold">{truck.capacity}</p>
                <p className="text-[11px] text-zinc-600 leading-relaxed">{truck.recommendedFor}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
