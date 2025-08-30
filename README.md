````markdown
# EnseñaPe Landing Page

Una landing page moderna y responsive para EnseñaPe, la plataforma que conecta estudiantes universitarios para compartir conocimiento.

## 🚀 Características

- **React 19** con TypeScript
- **Tailwind CSS** para estilos modernos y responsive
- **Vite** para construcción rápida con esbuild
- **React Router** para enrutamiento
- **Diseño 100% responsivo** que se adapta a todos los dispositivos
- **Interfaz moderna** con animaciones y efectos visuales
- **Componentes profesionales** con hover effects y transiciones
- **Accesibilidad mejorada** con estados de focus y ARIA labels

## 🎨 Diseño y UX

### Sistema de Colores
- **Primario**: Azul (#3B82F6) con gradientes
- **Secundario**: Grises (#64748B)
- **Acentos**: Verde, Púrpura, y otros colores temáticos
- **Fondos**: Gradientes suaves y patrones sutiles

### Tipografía
- **Fuente principal**: Inter (Google Fonts)
- **Jerarquía tipográfica** clara con diferentes pesos
- **Responsive typography** que se adapta al tamaño de pantalla

### Animaciones
- **Fade in** para elementos que aparecen
- **Slide up** para transiciones suaves
- **Hover effects** en botones y tarjetas
- **Floating elements** para dinamismo visual

## 📱 Secciones de la Landing Page

1. **Header Navegable**: 
   - Logo con gradiente
   - Navegación responsive con menú móvil
   - Botones de acción prominentes

2. **Hero Section**:
   - Título impactante con gradientes
   - CTA buttons con efectos hover
   - Indicadores de confianza
   - Ilustraciones animadas

3. **How It Works**:
   - Proceso en 3 pasos visuales
   - Iconografía consistente
   - Animaciones escalonadas

4. **Features Section**:
   - Layout alternativo para tutores y estudiantes
   - Mockups interactivos
   - Beneficios destacados con iconos

5. **Stats Section**:
   - Fondo con gradiente llamativo
   - Números impactantes
   - Efectos de cristal (glassmorphism)

6. **Call to Action**:
   - Diseño centrado e impactante
   - Múltiples opciones de acción
   - Indicadores de confianza

7. **Footer Completo**:
   - Newsletter signup
   - Enlaces organizados
   - Redes sociales con iconos SVG
   - Información de contacto

8. **Componentes Adicionales**:
   - Scroll to top button
   - Loading states
   - Responsive breakpoints optimizados

## 🛠️ Stack Tecnológico

### Core
- **React** 19.1.1
- **TypeScript** 5.8.3
- **Vite** 7.1.2

### Styling
- **Tailwind CSS** 3.4+ (recién instalado)
- **PostCSS** y **Autoprefixer**
- **Custom CSS** para animaciones específicas

### Routing
- **React Router DOM** 7.8.2

### Development Tools
- **ESLint** para linting
- **Vite Dev Server** con hot reload

## 🔧 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]
cd ensenape-landing

# Instalar dependencias
npm install

# Instalar Tailwind CSS (ya incluido)
npm install -D tailwindcss postcss autoprefixer

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

### URLs de Desarrollo
- **Local**: http://localhost:5173/EnsenaPe
- **Network**: Usar `--host` para exponer en red local

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Header con navegación responsive
│   ├── HeroSection.tsx # Hero con gradientes y animaciones
│   ├── HowItWorksSection.tsx # Proceso en pasos
│   ├── FeaturesSection.tsx # Características para tutores/estudiantes
│   ├── StatsSection.tsx # Estadísticas con glassmorphism
│   ├── CallToAction.tsx # CTA principal
│   ├── Footer.tsx      # Footer completo
│   └── ScrollToTop.tsx # Botón scroll to top
├── styles/             # Estilos
│   └── App.css        # Estilos globales (reemplazado por Tailwind)
├── index.css          # Configuración Tailwind y utilidades
├── App.tsx            # Componente principal
└── main.tsx          # Punto de entrada
```

### Archivos de Configuración
```
├── tailwind.config.js  # Configuración Tailwind
├── postcss.config.js   # Configuración PostCSS
├── vite.config.ts      # Configuración Vite
└── tsconfig.json       # Configuración TypeScript
```

## 🎨 Características de Diseño

### Responsive Design
- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid systems** adaptativos
- **Typography scaling** automático

### Componentes Reutilizables
- **Buttons**: Primarios, secundarios con efectos
- **Cards**: Hover effects y sombras dinámicas
- **Containers**: Padding y margin consistentes
- **Animations**: Clases utilitarias para transiciones

### Paleta de Colores Personalizada
```css
primary: {
  50: '#eff6ff',   100: '#dbeafe',
  // ... hasta 900
}
secondary: {
  50: '#f8fafc',   100: '#f1f5f9',
  // ... hasta 900
}
```

## 🚀 Scripts Disponibles

```bash
npm run dev       # Servidor de desarrollo con hot reload
npm run build     # Construcción optimizada para producción
npm run preview   # Vista previa de la build de producción
npm run lint      # Linter ESLint para código TypeScript/React
```

## 📱 Optimizaciones

### Performance
- **Code splitting** automático con Vite
- **Tree shaking** para CSS no utilizado (Tailwind)
- **Lazy loading** de componentes pesados
- **Optimización de imágenes** y SVGs

### SEO y Accesibilidad
- **Meta tags** apropiados
- **Alt texts** en imágenes
- **ARIA labels** en elementos interactivos
- **Focus states** visibles para navegación por teclado
- **Semantic HTML** estructura

### Cross-Browser
- **Autoprefixer** para compatibilidad CSS
- **Polyfills** automáticos de Vite
- **Testing** en diferentes dispositivos y navegadores

## 🔗 Enlaces y Recursos

- **Demo Live**: [Desplegar cuando esté listo]
- **Diseño en Figma**: [Si está disponible]
- **Tailwind Documentation**: https://tailwindcss.com/docs
- **React Router Docs**: https://reactrouter.com/

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Haz tus cambios siguiendo las convenciones de Tailwind
4. Asegúrate de que el diseño sea responsive
5. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
6. Push a la rama (`git push origin feature/nueva-caracteristica`)
7. Abre un Pull Request

### Convenciones de Código
- **Tailwind classes** en orden: layout, spacing, typography, colors, effects
- **Components** en PascalCase
- **Props** con TypeScript interfaces
- **Responsive** design en todas las nuevas características

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

**EnseñaPe** - Conectando estudiantes universitarios para compartir conocimiento 🎓
*Diseñado con ❤️ usando React, TypeScript y Tailwind CSS*

````
