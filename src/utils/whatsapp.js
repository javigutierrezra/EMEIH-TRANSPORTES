import { COMPANY_CONFIG } from '../config/companyConfig';

/**
 * Genera la URL formateada para enviar un mensaje directo a WhatsApp
 * @param {string} text - Texto del mensaje
 * @returns {string} - URL lista para redirección wa.me
 */
export function createWhatsAppUrl(text) {
  const message = text || COMPANY_CONFIG.whatsappMessageDefault;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera el mensaje formateado de cotización para WhatsApp
 * @param {Object} data - Datos de la cotización
 * @returns {string} - Texto del mensaje formateado
 */
export function buildQuoteWhatsAppMessage({
  clientName,
  clientPhone,
  serviceType,
  productName,
  truckName,
  quantity,
  unitType,
  regionName,
  commune,
  estimatedDelivery,
  totalEstimate
}) {
  let msg = `*SOLICITUD DE COTIZACIÓN - ${COMPANY_CONFIG.name.toUpperCase()}*\n`;
  msg += `-----------------------------------\n`;
  msg += `👤 *Cliente:* ${clientName || 'Cliente Web'}\n`;
  if (clientPhone) msg += `📞 *Teléfono:* ${clientPhone}\n`;
  msg += `📍 *Destino:* ${regionName} ${commune ? `(${commune})` : ''}\n`;
  msg += `🛠️ *Servicio:* ${serviceType === 'materiales' ? 'Materiales + Despacho' : 'Flete de Camión'}\n`;

  if (serviceType === 'materiales') {
    msg += `📦 *Material:* ${productName}\n`;
    msg += `🔢 *Cantidad:* ${quantity} ${unitType === 'm3' ? 'm³' : 'Toneladas'}\n`;
  } else if (truckName) {
    msg += `🚛 *Camión:* ${truckName}\n`;
    msg += `🔢 *Cantidad Estimada:* ${quantity} ${unitType === 'm3' ? 'm³' : 'Toneladas'}\n`;
  }

  if (estimatedDelivery) {
    msg += `⏱️ *Tiempo Estimado de Entrega:* ${estimatedDelivery}\n`;
  }

  if (totalEstimate) {
    msg += `-----------------------------------\n`;
    msg += `💵 *Presupuesto Estimado:* $${totalEstimate.toLocaleString('es-CL')} CLP\n\n`;
  }

  msg += `Por favor coordinar disponibilidad de fecha y atención. ¡Gracias!`;
  return msg;
}
