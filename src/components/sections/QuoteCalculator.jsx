import React, { useState } from 'react';
import { regionsChile, truckTypes } from '../../data/regions';
import { products } from '../../data/products';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { buildQuoteWhatsAppMessage } from '../../utils/whatsapp';
import { Calculator, Truck, Mountain, MessageSquare, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

export default function QuoteCalculator() {
  const [serviceType, setServiceType] = useState('materiales');
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [selectedTruck, setSelectedTruck] = useState(truckTypes[0].id);
  const [quantity, setQuantity] = useState(10);
  const [unitType, setUnitType] = useState('m3');
  const [selectedRegion, setSelectedRegion] = useState('valparaiso');
  const [commune, setCommune] = useState('');
  const [clientName, setClientName] = useState('');

  const regionObj = regionsChile.find(r => r.id === selectedRegion) || regionsChile[0];
  const productObj = products.find(p => p.id === selectedProduct) || products[0];
  const truckObj = truckTypes.find(t => t.id === selectedTruck) || truckTypes[0];

  let estimatedMaterialPrice = 0;
  if (serviceType === 'materiales') {
    estimatedMaterialPrice = unitType === 'm3' 
      ? productObj.pricePerM3 * quantity 
      : productObj.pricePerTon * quantity;
  }

  const estimatedFreightBase = regionObj.baseFreightCost;
  const totalEstimate = serviceType === 'materiales' 
    ? estimatedMaterialPrice + estimatedFreightBase 
    : estimatedFreightBase + (quantity > 10 ? (quantity - 10) * 4500 : 0);

  const handleWhatsAppSubmit = () => {
    const message = buildQuoteWhatsAppMessage({
      clientName,
      serviceType,
      productName: productObj.name,
      truckName: truckObj.name,
      quantity,
      unitType,
      regionName: regionObj.name,
      commune,
      estimatedDelivery: regionObj.estimatedDelivery,
      totalEstimate
    });

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            Cotizador Interactivo en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            CALCULA Y COTIZA TU <span className="text-brand-red">FLETE O MATERIALES</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Obtén un estimado instantáneo del costo de flete y despacho a tu comuna en Chile. Envía tu solicitud directamente por WhatsApp con 1 click.
          </p>
        </div>

        {/* Calculator Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Step 1: Select Service Type */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-3">
                1. Selecciona el Tipo de Servicio:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setServiceType('materiales')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 ${
                    serviceType === 'materiales'
                      ? 'bg-brand-red/10 border-brand-red text-zinc-900 shadow-sm'
                      : 'bg-white border-slate-200 text-zinc-600 hover:border-slate-300'
                  }`}
                >
                  <Mountain className={`w-6 h-6 shrink-0 ${serviceType === 'materiales' ? 'text-brand-red' : ''}`} />
                  <div>
                    <p className="text-sm font-bold">Materiales + Despacho</p>
                    <p className="text-[11px] text-zinc-500">Cuarzo, maicillo, tierra, piedras</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('flete')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 ${
                    serviceType === 'flete'
                      ? 'bg-brand-red/10 border-brand-red text-zinc-900 shadow-sm'
                      : 'bg-white border-slate-200 text-zinc-600 hover:border-slate-300'
                  }`}
                >
                  <Truck className={`w-6 h-6 shrink-0 ${serviceType === 'flete' ? 'text-brand-red' : ''}`} />
                  <div>
                    <p className="text-sm font-bold">Solo Flete de Camión</p>
                    <p className="text-[11px] text-zinc-500">Arriendo de camión tolva/rampa</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Select Specific Product or Truck */}
            {serviceType === 'materiales' ? (
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  2. Selecciona el Material de Paisajismo:
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - Ref: ${p.pricePerM3.toLocaleString('es-CL')}/m³
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  2. Selecciona el Tipo de Camión Requerido:
                </label>
                <select
                  value={selectedTruck}
                  onChange={(e) => setSelectedTruck(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
                >
                  {truckTypes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.capacity})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 3: Quantity & Units */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  3. Cantidad Requerida:
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Unidad de Medida:
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setUnitType('m3')}
                    className={`flex-1 py-3 rounded-xl border text-xs font-bold transition ${
                      unitType === 'm3'
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-white text-zinc-600 border-slate-300'
                    }`}
                  >
                    Metros Cúbicos (m³)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnitType('tons')}
                    className={`flex-1 py-3 rounded-xl border text-xs font-bold transition ${
                      unitType === 'tons'
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-white text-zinc-600 border-slate-300'
                    }`}
                  >
                    Toneladas
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Destination Region & Commune */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  4. Región de Destino en Chile:
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
                >
                  {regionsChile.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} ({r.zone})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Comuna o Ciudad Específica:
                </label>
                <input
                  type="text"
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  placeholder="Ej: Concón, Quillota, Colina, Rancagua..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
                />
              </div>
            </div>

            {/* Optional Client Name */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                Nombre o Empresa (Opcional):
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Tu nombre para personalizar la atención"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red shadow-sm"
              />
            </div>

          </div>

          {/* Right Summary Card & WhatsApp Action */}
          <div className="lg:col-span-5 bg-white border-2 border-brand-red/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Resumen de Cotización</h3>
                <p className="text-xs text-zinc-500">Presupuesto estimado instantáneo</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-zinc-500">Servicio:</span>
                <span className="text-zinc-900 font-bold">{serviceType === 'materiales' ? 'Materiales + Despacho' : 'Flete de Camión'}</span>
              </div>

              {serviceType === 'materiales' && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-zinc-500">Producto:</span>
                  <span className="text-zinc-900 font-bold text-right">{productObj.name}</span>
                </div>
              )}

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-zinc-500">Cantidad:</span>
                <span className="text-zinc-900 font-bold">{quantity} {unitType === 'm3' ? 'm³' : 'Ton'}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-zinc-500">Destino:</span>
                <span className="text-zinc-900 font-bold text-right">{regionObj.name}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-zinc-500">Tiempo de Despacho:</span>
                <span className="text-brand-red font-bold">{regionObj.estimatedDelivery}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center space-y-1">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider block">Total Estimado Referencial</span>
              <span className="text-3xl font-black text-brand-red">
                ${totalEstimate.toLocaleString('es-CL')} CLP
              </span>
              <span className="text-[10px] text-zinc-500 block pt-1">
                *Incluye estimación de despacho según zona. Valor final confirmado con tu ejecutivo.
              </span>
            </div>

            {/* Direct WhatsApp Button */}
            <Button
              onClick={handleWhatsAppSubmit}
              variant="whatsapp"
              className="w-full py-4 text-base font-bold justify-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Enviar Cotización por WhatsApp</span>
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 text-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Respuesta inmediata en minutos por nuestro equipo operativo.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
