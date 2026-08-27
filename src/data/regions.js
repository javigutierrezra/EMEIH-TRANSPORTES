export const regionsChile = [
  {
    id: 'valparaiso',
    name: 'Región de Valparaíso',
    zone: 'Zona Central',
    mainCities: ['Valparaíso', 'Viña del Mar', 'Quillota', 'Los Andes', 'San Antonio', 'Concón'],
    estimatedDelivery: '24 a 48 horas',
    baseFreightCost: 65000,
    hubLocation: 'Base Central Concón / Quillota',
    trucksAvailable: ['Tolva 14m³', 'Tolva 22m³', 'Camión Rampa 30Ton', 'Camión Pluma']
  },
  {
    id: 'rm',
    name: 'Región Metropolitana de Santiago',
    zone: 'Zona Central',
    mainCities: ['Santiago Centro', 'Colina', 'Lampa', 'Puente Alto', 'Maipú', 'San Bernardo', 'Melipilla'],
    estimatedDelivery: '24 a 48 horas',
    baseFreightCost: 85000,
    hubLocation: 'Centro Logístico Santiago Norte / Sur',
    trucksAvailable: ['Tolva 14m³', 'Tolva 22m³', 'Camión Rampa', 'Camión Pluma']
  },
  {
    id: 'coquimbo',
    name: 'Región de Coquimbo',
    zone: 'Zona Norte',
    mainCities: ['La Serena', 'Coquimbo', 'Ovalle', 'Illapel', 'Vicuña'],
    estimatedDelivery: '48 a 72 horas',
    baseFreightCost: 140000,
    hubLocation: 'Base Norte La Serena',
    trucksAvailable: ['Tolva 22m³', 'Rampa Carga Seca', 'Batea Granelera']
  },
  {
    id: 'ohiggins',
    name: "Región del Libertador B. O'Higgins",
    zone: 'Zona Central',
    mainCities: ['Rancagua', 'San Fernando', 'Santa Cruz', 'Machalí', 'Pichilemu'],
    estimatedDelivery: '24 a 48 horas',
    baseFreightCost: 110000,
    hubLocation: 'Terminal Rancagua',
    trucksAvailable: ['Tolva 14m³', 'Tolva 22m³', 'Rampa']
  },
  {
    id: 'maule',
    name: 'Región del Maule',
    zone: 'Zona Centro-Sur',
    mainCities: ['Talca', 'Curicó', 'Linares', 'Constitución'],
    estimatedDelivery: '48 horas',
    baseFreightCost: 160000,
    hubLocation: 'Base Talca',
    trucksAvailable: ['Tolva 22m³', 'Rampa', 'Carga Consolidada']
  },
  {
    id: 'biobio',
    name: 'Región del Biobío',
    zone: 'Zona Sur',
    mainCities: ['Concepción', 'Talcahuano', 'Los Ángeles', 'Chillán (Ñuble)', 'Coronel'],
    estimatedDelivery: '48 a 72 horas',
    baseFreightCost: 220000,
    hubLocation: 'Base Concepción',
    trucksAvailable: ['Tolva 22m³', 'Camión Rampa 30Ton', 'Pluma']
  },
  {
    id: 'araucania',
    name: 'Región de La Araucanía',
    zone: 'Zona Sur',
    mainCities: ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón', 'Angol'],
    estimatedDelivery: '3 a 4 días',
    baseFreightCost: 290000,
    hubLocation: 'Terminal Temuco',
    trucksAvailable: ['Rampa 30Ton', 'Tolva Granelera']
  },
  {
    id: 'los-lagos',
    name: 'Región de Los Lagos',
    zone: 'Zona Sur',
    mainCities: ['Puerto Montt', 'Puerto Varas', 'Osorno', 'Castro (Chiloé)'],
    estimatedDelivery: '3 a 5 días',
    baseFreightCost: 380000,
    hubLocation: 'Terminal Puerto Montt',
    trucksAvailable: ['Camión Rampa Larga', 'Tolva Carga Seca']
  },
  {
    id: 'norte-grande',
    name: 'Norte Grande (Antofagasta / Calama / Iquique / Arica)',
    zone: 'Zona Norte',
    mainCities: ['Antofagasta', 'Calama', 'Iquique', 'Arica', 'Copiapó'],
    estimatedDelivery: '3 a 6 días',
    baseFreightCost: 450000,
    hubLocation: 'Ruta 5 Norte / Hub Antofagasta',
    trucksAvailable: ['Rampa de Alto Tonelaje (30-45Ton)', 'Camión Cama Baja', 'Tolva']
  }
];

export const truckTypes = [
  {
    id: 'tolva-14m3',
    name: 'Camión Tolva 14 m³ (2 Ejes / Doble Puente)',
    capacity: '14 metros cúbicos / hasta 18 Toneladas',
    recommendedFor: 'Despacho de áridos, maicillo, tierra de hojas y piedra cuarzo a obras medianas o parcelas.',
    iconName: 'Truck'
  },
  {
    id: 'tolva-22m3',
    name: 'Camión Tolva Granelero 22 m³',
    capacity: '22 metros cúbicos / hasta 28 Toneladas',
    recommendedFor: 'Proyectos de construcción, nivelación de terrenos masivos y distribución a distribuidoras.',
    iconName: 'Truck'
  },
  {
    id: 'rampa-30t',
    name: 'Camión Rampa / Semirremolque 30 Toneladas',
    capacity: '30 a 32 Toneladas (Carga paletizada o en maxisacos)',
    recommendedFor: 'Transporte de materiales embolsados, maxisacos de piedra cuarzo, adoquines y flete interregional.',
    iconName: 'Container'
  },
  {
    id: 'camion-pluma',
    name: 'Camión con Grúa Pluma Incorporada',
    capacity: '12 a 18 Toneladas con alcance de grúa 10m',
    recommendedFor: 'Descarga en sitios reducidos, elevación de maxisacos a terrazas o bodegas de obra.',
    iconName: 'Hammer'
  }
];
