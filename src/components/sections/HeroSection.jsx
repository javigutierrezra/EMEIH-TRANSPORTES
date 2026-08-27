import React from 'react';
import { Truck, ArrowRight, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function HeroSection({ setCurrentView, onOpenQuoteModal }) {
  const whatsappUrl = createWhatsAppUrl();

  return (
    <section id="inicio" className="relative min-h-[80vh] bg-gradient-to-b from-white via-slate-50 to-slate-100 flex items-center overflow-hidden border-b border-slate-200 py-16">
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 mix-blend-multiply scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      {/* Decorative Red Accent Blurs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content: Focus on Company identity & Contact */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              {COMPANY_CONFIG.name} • Chile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
              EMPRESA DE <span className="text-brand-red">FLETES EN CAMIONES</span> Y MATERIALES DE PAISAJISMO
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
              {COMPANY_CONFIG.description}
            </p>

            {/* Key Company Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-zinc-700 font-semibold">
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                <span>Flota de camiones propia a todo Chile</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                <span>Venta de cuarzo, piedras y maicillo</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                <span>Despacho a granel o en maxisacos</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                <span>Atención directa y facturación inmediata</span>
              </div>
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                onClick={() => setCurrentView('contacto')}
                variant="primary"
                className="group"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contactar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => setCurrentView('empresa')}
                variant="secondary"
              >
                <Truck className="w-5 h-5 text-white" />
                <span>Conocer La Empresa</span>
              </Button>

              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlineRed"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Right Card: Direct Contact & Info Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-black text-zinc-900">{COMPANY_CONFIG.name}</h3>
                  <p className="text-xs text-zinc-500 font-medium">Información de Contacto Directo</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center font-bold shadow-md">
                  <Truck className="w-6 h-6" />
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-semibold">WhatsApp Comercial</p>
                    <p className="text-sm font-black text-zinc-900">{COMPANY_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-semibold">Teléfono Operaciones</p>
                    <p className="text-sm font-black text-zinc-900">{COMPANY_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-semibold">Base y Operaciones</p>
                    <p className="text-xs font-bold text-zinc-900">{COMPANY_CONFIG.baseLocation}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={() => setCurrentView('contacto')}
                variant="primary"
                className="w-full justify-center text-sm py-3"
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
