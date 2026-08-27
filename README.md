# 🚛 Emeih Transportes - Sitio Web Oficial

Sitio web corporativo de alto rendimiento e interactivo para **Emeih Transportes**, empresa chilena de fletes en camiones de carga pesada a nivel nacional y comercialización directa de materiales de paisajismo (cuarzo, piedras, maicillo, arenas y tierras).

---

## 🎨 Paleta Corporativa
- **Blanco (`#FFFFFF` / `#F8FAFC`)**: Fondo principal del sitio.
- **Rojo (`#DC2626` / `#B91C1C`)**: Color de acento primario (botones, enlaces, badges, precios).
- **Negro (`#09090B` / `#18181B`)**: Tipografía principal y contraste en el pie de página.

---

## 🚀 Requisitos Previos e Instalación

### 1. Requisitos
- **Node.js**: v18.0.0 o superior
- **NPM**: v9.0.0 o superior (o Yarn / PNPM)

### 2. Pasos para ejecutar en Visual Studio Code

```bash
# 1. Abrir la carpeta del proyecto en VS Code
cd emeih-transportes

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev
```

El servidor estará listo en `http://localhost:5180`.

### 4. Compilar para Producción
```bash
npm run build
```
Generará la carpeta optimizada `/dist` lista para subir a cualquier servidor hosting (Vercel, Netlify, cPanel, Hostinger, AWS, etc.).

---

## 📁 Estructura del Proyecto

```text
emeih-transportes/
├── .env.example                # Plantilla de variables de entorno
├── .gitignore                  # Archivos ignorados por Git
├── README.md                   # Documentación principal del proyecto
├── index.html                  # Plantilla HTML de Vite
├── package.json                # Dependencias y scripts del proyecto
├── postcss.config.js           # Configuración de PostCSS / Autoprefixer
├── tailwind.config.js          # Configuración de colores y estilos Tailwind
├── vite.config.js              # Configuración del servidor Vite (Puerto 5180)
├── public/
│   └── favicon.svg             # Isotipo oficial SVG
└── src/
    ├── main.jsx                # Punto de entrada de React
    ├── index.css               # Estilos globales y utilidades Tailwind
    ├── config/
    │   └── companyConfig.js    # ⚙️ DATOS EDITABLES DE LA EMPRESA (Teléfono, Email, WhatsApp)
    ├── data/
    │   ├── products.js         # 📦 Catálogo de materiales de paisajismo con fotos HD
    │   ├── regions.js          # 📍 Cobertura logística y tipos de camiones en Chile
    │   └── faqs.js             # ❓ Preguntas frecuentes
    ├── utils/
    │   └── whatsapp.js         # 📲 Utilidad para generar mensajes y enlaces a WhatsApp
    ├── hooks/
    │   └── useQuoteModal.js    # ⚓ Hook personalizado para control del modal de cotizaciones
    ├── components/
    │   ├── common/             # Componentes base reutilizables (Button, Badge)
    │   │   ├── Badge.jsx
    │   │   └── Button.jsx
    │   ├── layout/             # Componentes de diseño principal (Header, Footer)
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   ├── sections/           # Vistas / Secciones de contenido
    │   │   ├── HeroSection.jsx
    │   │   ├── AboutSection.jsx
    │   │   ├── ServicesSection.jsx
    │   │   ├── ProductsCatalog.jsx
    │   │   ├── QuoteCalculator.jsx
    │   │   ├── CoverageMap.jsx
    │   │   └── ContactSection.jsx
    │   └── modals/
    │       └── QuoteModal.jsx   # Modal de cotización rápida
    └── pages/
        └── HomePage.jsx        # Enrutador y orquestador principal de pestañas
```

---

## 🛠️ Guía de Modificación y Edición desde VS Code

### 1. Cambiar Datos de Contacto (Teléfono, WhatsApp, Correo)
Edita el archivo `src/config/companyConfig.js`:
```javascript
export const COMPANY_CONFIG = {
  name: 'Emeih Transportes',
  phone: '+56 9 8452 9102',
  whatsappNumber: '56984529102',
  email: 'contacto@emeihtransportes.cl',
  // ...
};
```

### 2. Modificar o Agregar Productos de Paisajismo
Edita `src/data/products.js`. Puedes cambiar nombres, descripciones, precios por $m^3$ o toneladas, e imágenes HD.

### 3. Modificar Cobertura en Chile o Tipos de Camiones
Edita `src/data/regions.js` para actualizar tarifas base, ciudades principales o agregar nuevas zonas.

### 4. Cambiar Colores Corporativos
Edita `tailwind.config.js` en la sección `theme.extend.colors.brand`.

---

## 📄 Licencia
Este proyecto es propiedad exclusiva de **Emeih Transportes**. Todos los derechos reservados.
