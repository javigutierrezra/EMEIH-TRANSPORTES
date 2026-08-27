import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProductsCatalogSection from '../components/sections/ProductsCatalog';
import QuoteCalculatorSection from '../components/sections/QuoteCalculator';
import CoverageMapSection from '../components/sections/CoverageMap';
import ContactSection from '../components/sections/ContactSection';
import QuoteModal from '../components/modals/QuoteModal';
import { useQuoteModal } from '../hooks/useQuoteModal';

export default function HomePage() {
  const [currentView, setCurrentView] = useState('inicio'); // 'inicio', 'empresa', 'servicios', 'cobertura', 'contacto'
  
  const {
    isOpen: isQuoteModalOpen,
    selectedProduct: selectedProductForQuote,
    initialVolume: modalVolume,
    openQuoteModal,
    closeQuoteModal
  } = useQuoteModal();

  return (
    <div className="min-h-screen bg-slate-50 text-zinc-900 font-sans selection:bg-brand-red selection:text-white flex flex-col justify-between">
      {/* Top Header Navigation */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenQuoteModal={() => openQuoteModal()}
      />

      {/* Main Container - Displays ONLY the active view selected */}
      <main className="flex-grow">
        {currentView === 'inicio' && (
          <div className="animate-fadeIn">
            <HeroSection
              setCurrentView={setCurrentView}
              onOpenQuoteModal={() => openQuoteModal()}
            />
          </div>
        )}

        {currentView === 'empresa' && (
          <div className="animate-fadeIn">
            <AboutSection
              setCurrentView={setCurrentView}
              onOpenQuoteModal={() => openQuoteModal()}
            />
          </div>
        )}

        {currentView === 'servicios' && (
          <div className="animate-fadeIn space-y-12">
            <ServicesSection onOpenQuoteModal={() => openQuoteModal()} />
            <ProductsCatalogSection onSelectProductQuote={openQuoteModal} />
            <QuoteCalculatorSection />
          </div>
        )}

        {currentView === 'cobertura' && (
          <div className="animate-fadeIn">
            <CoverageMapSection onOpenQuoteModal={() => openQuoteModal()} />
          </div>
        )}

        {currentView === 'contacto' && (
          <div className="animate-fadeIn">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenQuoteModal={() => openQuoteModal()}
      />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        selectedProductItem={selectedProductForQuote}
        initialVolume={modalVolume}
      />
    </div>
  );
}
