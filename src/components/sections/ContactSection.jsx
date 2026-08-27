import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { faqsData } from '../../data/faqs';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: 'Región de Valparaíso',
    service: 'Materiales + Despacho',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        region: 'Región de Valparaíso',
        service: 'Materiales + Despacho',
        message: ''
      });
    }, 4000);
  };

  const whatsappUrl = createWhatsAppUrl('Hola Emeih Transportes, les escribo desde el formulario web para realizar una consulta.');

  return (
    <section id="contacto" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4" />
            Atención Inmediata
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            CONTÁCTANOS Y <span className="text-brand-red">SOLICITA TU COTIZACIÓN</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Estamos listos para asesorarte con las mejores tarifas en fletes de carga y materiales de paisajismo.
          </p>
        </div>

        {/* Contact Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Contact Details & Info Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-xl font-bold text-zinc-900">Canales Directos de Atención</h3>
              <p className="text-xs text-zinc-500">Ponte en contacto directo con nuestro centro de operaciones:</p>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/20">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-800 font-bold">WhatsApp Directo</p>
                    <p className="text-base font-black text-emerald-900 group-hover:text-emerald-700 transition">{COMPANY_CONFIG.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold">Teléfono Operaciones</p>
                    <p className="text-base font-bold text-zinc-900">{COMPANY_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold">Correo Electrónico</p>
                    <p className="text-base font-bold text-zinc-900">{COMPANY_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 text-brand-red flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold">Horario de Despacho</p>
                    <p className="text-xs font-bold text-zinc-900">{COMPANY_CONFIG.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative shadow-md">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Envíanos un Mensaje</h3>
            <p className="text-xs text-zinc-500 mb-6">Completa el formulario y te responderemos a la brevedad.</p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-zinc-900">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-zinc-700">
                  Hemos recibido tus datos correctamente. Un ejecutivo de {COMPANY_CONFIG.name} te contactará a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Juan Pérez"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+56 9 1234 5678"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ejemplo@correo.cl"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Región de Destino</label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({...formData, region: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
                    >
                      <option value="Región de Valparaíso">Región de Valparaíso</option>
                      <option value="Región Metropolitana">Región Metropolitana (Santiago)</option>
                      <option value="Región de Coquimbo">Región de Coquimbo</option>
                      <option value="Región de O'Higgins">Región de O'Higgins</option>
                      <option value="Región del Maule">Región del Maule</option>
                      <option value="Región del Biobío">Región del Biobío</option>
                      <option value="Otras Regiones">Otras Regiones de Chile</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Detalle del Requerimiento / Cantidad</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Indica si necesitas materiales (ej. 15m³ de piedra cuarzo blanco) o un flete de camión especificando origen y destino..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-zinc-900 font-semibold focus:outline-none focus:border-brand-red"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Formulario de Contacto</span>
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-red" />
              Preguntas Frecuentes (FAQ)
            </h3>
            <p className="text-xs text-zinc-500 mt-1">Respuestas rápidas a las dudas comunes sobre fletes y despacho de materiales.</p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={faq.id || idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50"
                >
                  <span className="text-sm font-bold text-zinc-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-red shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
