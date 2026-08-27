import React, { useState } from 'react';
import { categories, products } from '../../data/products';
import { Mountain, Calculator, Search, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function ProductsCatalog({ onSelectProductQuote }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cubic Volume Estimator State
  const [calcLength, setCalcLength] = useState(10); // meters
  const [calcWidth, setCalcWidth] = useState(5);   // meters
  const [calcDepth, setCalcDepth] = useState(5);   // cm
  const [showVolumeCalculator, setShowVolumeCalculator] = useState(false);

  // Calculated Cubic Meters = Length * Width * (Depth / 100)
  const calculatedM3 = ((parseFloat(calcLength) || 0) * (parseFloat(calcWidth) || 0) * ((parseFloat(calcDepth) || 0) / 100)).toFixed(2);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
              <Mountain className="w-3.5 h-3.5" />
              Suministro Directo de Cantera
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              MATERIALES DE <span className="text-brand-red">PAISAJISMO Y ÁRIDOS</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
              Catálogo de piedras decorativas, cuarzo, arenas y substratos. Selecciona cualquier producto para cotizar su despacho directo en camión tolva o rampla.
            </p>
          </div>

          {/* Toggle Volume Calculator Button */}
          <Button
            onClick={() => setShowVolumeCalculator(!showVolumeCalculator)}
            variant="secondary"
            className="py-3 px-5 text-sm shrink-0 self-start md:self-auto"
          >
            <Calculator className="w-4 h-4 text-brand-red" />
            <span>{showVolumeCalculator ? 'Ocultar Calculadora m³' : 'Calculadora de Metros Cúbicos (m³)'}</span>
          </Button>
        </div>

        {/* Interactive Cubic Volume Calculator Box */}
        {showVolumeCalculator && (
          <div className="bg-white border-2 border-brand-red/40 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Calculadora de Proyecto Paisajístico</h3>
                <p className="text-xs text-zinc-500">Calcula fácilmente cuántos metros cúbicos ($m^3$) de piedra o tierra necesitas para tu superficie.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-end mt-6">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">Largo del área (Metros)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={calcLength}
                  onChange={(e) => setCalcLength(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-brand-red font-semibold"
                  placeholder="Ej: 10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">Ancho del área (Metros)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={calcWidth}
                  onChange={(e) => setCalcWidth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-brand-red font-semibold"
                  placeholder="Ej: 5"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">Grosor / Capa deseada (cm)</label>
                <select
                  value={calcDepth}
                  onChange={(e) => setCalcDepth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-brand-red font-semibold"
                >
                  <option value="3">3 cm (Senderos ligeros)</option>
                  <option value="5">5 cm (Capa estándar piedras/maicillo)</option>
                  <option value="7">7 cm (Tráfico peatonal intenso)</option>
                  <option value="10">10 cm (Base estacionamiento)</option>
                  <option value="15">15 cm (Capa profunda / Relleno)</option>
                </select>
              </div>

              <div className="bg-slate-900 border border-brand-red/40 p-4 rounded-2xl text-center text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Resultado Estimado</span>
                <span className="text-3xl font-black text-brand-red">{calculatedM3} m³</span>
                <span className="text-[11px] text-zinc-300 block mt-0.5">
                  (~{(calculatedM3 * 1.5).toFixed(1)} Toneladas de Piedra)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-zinc-700 hover:text-black hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar material (ej. cuarzo, maicillo)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-brand-red shadow-sm"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <Badge variant="red" className="bg-white/90 shadow-md">{product.tag}</Badge>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-right shadow-md">
                  <span className="text-[10px] text-zinc-500 block font-semibold">Valor referencia</span>
                  <span className="text-sm font-black text-brand-red">
                    ${product.pricePerM3.toLocaleString('es-CL')} / m³
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Recommended Uses */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-zinc-800 uppercase tracking-wider block mb-2">Usos recomendados:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.uses.map((use, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-200 text-zinc-700 text-[10px] px-2 py-0.5 rounded-md font-medium">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-zinc-500">
                    <span>Unidades: </span>
                    <span className="text-zinc-900 font-semibold">{product.unitOptions.join(', ')}</span>
                  </div>

                  <Button
                    onClick={() => onSelectProductQuote(product, calculatedM3)}
                    variant="primary"
                    className="py-2 px-4 text-xs shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Cotizar</span>
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
