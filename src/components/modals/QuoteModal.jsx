import React, { useState, useEffect } from 'react';
import { X, Truck, Mountain, MessageSquare, Calculator } from 'lucide-react';
import { products } from '../../data/products';
import { regionsChile } from '../../data/regions';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { buildQuoteWhatsAppMessage } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function QuoteModal({ isOpen, onClose, selectedProductItem, initialVolume }) {
  const [service, setService] = useState('materiales');
  const [product, setProduct] = useState(selectedProductItem ? selectedProductItem.id : products[0].id);
  const [volume, setVolume] = useState(initialVolume || 10);
  const [unit, setUnit] = useState('m3');
  const [region, setRegion] = useState('valparaiso');
  const [commune, setCommune] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  useEffect(() => {
    if (selectedProductItem) {
      setProduct(selectedProductItem.id);
      setService('materiales');
    }
    if (initialVolume) {
      setVolume(initialVolume);
    }
  }, [selectedProductItem, initialVolume]);

  if (!isOpen) return null;

  const currentProduct = products.find(p => p.id === product) || products[0];
  const currentRegion = regionsChile.find(r => r.id === region) || regionsChile[0];

  const handleWhatsAppSubmit = () => {
    const message = buildQuoteWhatsAppMessage({
      clientName,
      clientPhone,
      serviceType: service,
      productName: currentProduct.name,
      quantity: volume,
      unitType: unit,
      regionName: currentRegion.name,
      commune,
      estimatedDelivery: currentRegion.estimatedDelivery
    });

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-brand-red/40 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-500 hover:text-zinc-900 p-2 rounded-xl bg-slate-100 border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center font-bold shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-zinc-900">Solicitar Cotización Rápida</h3>
            <p className="text-xs text-zinc-500">{COMPANY_CONFIG.name} - Fletes & Paisajismo</p>
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Servicio Requerido</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setService('materiales')}
                className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                  service === 'materiales' ? 'bg-brand-red text-white border-brand-red' : 'bg-slate-50 text-zinc-700 border-slate-200'
                }`}
              >
                <Mountain className="w-4 h-4" />
                <span>Materiales Paisajismo</span>
              </button>

              <button
                type="button"
                onClick={() => setService('flete')}
                className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                  service === 'flete' ? 'bg-brand-red text-white border-brand-red' : 'bg-slate-50 text-zinc-700 border-slate-200'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Flete de Camión</span>
              </button>
            </div>
          </div>

          {service === 'materiales' && (
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Material Seleccionado</label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Cantidad</label>
              <input
                type="number"
                min="1"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Unidad</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              >
                <option value="m3">Metros Cúbicos (m³)</option>
                <option value="tons">Toneladas</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Región</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              >
                {regionsChile.map((r) => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Comuna</label>
              <input
                type="text"
                placeholder="Ej. Viña del Mar"
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Tu Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Tu Teléfono</label>
              <input
                type="tel"
                placeholder="+56 9 ..."
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Button
              onClick={handleWhatsAppSubmit}
              variant="whatsapp"
              className="w-full py-4 text-base justify-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Cotizar Directo por WhatsApp</span>
            </Button>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs text-zinc-500 hover:text-zinc-900 transition text-center font-semibold"
            >
              Cancelar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
