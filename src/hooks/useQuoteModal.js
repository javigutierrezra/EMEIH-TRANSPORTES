import { useState } from 'react';

/**
 * Hook personalizado para controlar la apertura, cierre y producto seleccionado del Modal de Cotizaciones.
 */
export function useQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [initialVolume, setInitialVolume] = useState(10);

  const openQuoteModal = (product = null, calculatedM3 = null) => {
    if (product) {
      setSelectedProduct(product);
      if (calculatedM3 && parseFloat(calculatedM3) > 0) {
        setInitialVolume(parseFloat(calculatedM3));
      }
    } else {
      setSelectedProduct(null);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedProduct,
    initialVolume,
    openQuoteModal,
    closeQuoteModal
  };
}
