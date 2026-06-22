# REDESIGN — Finvora SGSI
## Brief completo de remodelación total para Claude Code

> **Instrucciones para Claude Code:**
> Este archivo reemplaza completamente el diseño actual de la web.
> Lee `master.md` primero para entender el proyecto completo.
> Abandona todo el CSS y componentes visuales actuales.
> NO improvises nada visual — sigue este brief al pie de la letra.
> Toda la lógica de datos, routing y Claude API se mantiene igual.
> Solo cambia: estilos, componentes visuales, animaciones y layout.

---

## 1. CONCEPTO VISUAL — "INTELLIGENCE TERMINAL"

La estética es la intersección entre un terminal de inteligencia clasificada y una aplicación SaaS moderna de alta gama. No es cyberpunk ni neon. Es lo que verías si el equipo de osu!lazer diseñara los sistemas internos de una fintech europea seria. Autoritativo, preciso, ligeramente cinematográfico.

**Referencia de feeling:** osu!lazer — transiciones suaves con momentum, elementos que entran con física, interfaces que se sienten vivas sin ser ruidosas. Aplicado al contexto de GRC enterprise.

---

## 2. SISTEMA DE DISEÑO COMPLETO

### Paleta de colores — ESTRICTA, sin variaciones

```css
:root {
  /* Backgrounds */
  --bg-base: #06090F;        /* casi negro, undertone azul profundo */
  --bg-surface: #0C1220;     /* cards y paneles */
  --bg-elevated: #111B2E;    /* hovers y estados activos */
  --bg-overlay: #0A1525;     /* modales y drawers */

  /* Borders */
  --border-subtle: #1A2D4A;  /* líneas estructurales */
  --border-active: #2563EB;  /* bordes de elementos activos */
  --border-glow: rgba(59, 130, 246, 0.3); /* glow de borde */

  /* Accents */
  --accent-primary: #3B82F6;   /* azul eléctrico — usar con restricción */
  --accent-secondary: #06B6D4; /* cyan — solo para datos y highlights */
  --accent-glow: rgba(59, 130, 246, 0.12); /* blur/glow background */
  --accent-violet: #8B5CF6;    /* bloque B2 EU AI Act */

  /* Text */
  --text-primary: #E2E8F0;
  --text-secondary: #64748B;
  --text-tertiary: #334155;
  --text-mono: #94A3B8;        /* IDs, códigos, valores técnicos */

  /* Status */
  --status-success: #10B981;
  --status-warning: #F59E0B;
  --status-critical: #EF4444;
  --status-pending: #334155;

  /* Block colors */
  --block-b0: #06B6D4;   /* cyan — La Empresa */
  --block-b1: #3B82F6;   /* azul — ISO 27001 */
  --block-b2: #8B5CF6;   /* violeta — EU AI Act */
  --block-b3: #10B981;   /* verde — Operación */
}
```

### Tipografía — instalar via Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
/* Roles tipográficos */
.font-display  { font-family: 'Space Grotesk', sans-serif; }  /* headers, métricas, KPIs */
.font-body     { font-family: 'Inter', sans-serif; }           /* párrafos, labels, nav */
.font-mono     { font-family: 'JetBrains Mono', monospace; }  /* IDs, códigos, valores */
```

### Escala tipográfica

```css
--text-xs:   11px;  /* labels, badges */
--text-sm:   13px;  /* body secundario */
--text-base: 15px;  /* body principal */
--text-lg:   18px;  /* subtítulos */
--text-xl:   24px;  /* títulos de sección */
--text-2xl:  32px;  /* títulos de página */
--text-hero: 72px;  /* número del gauge */
```

### Espaciado y bordes

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 20px;

--shadow-card: 0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px var(--border-subtle);
--shadow-active: 0 0 0 1px var(--accent-primary), 0 0 20px var(--accent-glow);
--shadow-glow: 0 0 30px rgba(59,130,246,0.15);
```

---

## 3. COMPONENTES BASE

### Card — el componente más importante

Todas las cards siguen este patrón:

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  position: relative;
  transition: all 150ms ease-out;
  overflow: hidden;
}

/* Borde superior izquierdo con glow — la firma visual */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    var(--accent-primary) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.card:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
  transform: translateY(-1px);
  box-shadow: var(--shadow-active);
}

.card:hover::before {
  opacity: 1;
}
```

### Card de artefacto completado

```jsx
// Estructura JSX
<div className="artifact-card" data-block="B0">
  {/* Borde superior del color del bloque */}
  <div className="block-indicator" />

  {/* Header */}
  <div className="card-header">
    <span className="artifact-id font-mono">B0-01</span>
    <FileIcon size={14} />
  </div>

  {/* Contenido */}
  <h3 className="card-title font-display">Corporate Profile</h3>
  <span className="status-badge completed">Completed</span>
</div>
```

```css
.artifact-card[data-block="B0"] .block-indicator { background: var(--block-b0); }
.artifact-card[data-block="B1"] .block-indicator { background: var(--block-b1); }
.artifact-card[data-block="B2"] .block-indicator { background: var(--block-b2); }
.artifact-card[data-block="B3"] .block-indicator { background: var(--block-b3); }

.block-indicator {
  height: 2px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.artifact-id {
  font-size: var(--text-xs);
  color: var(--accent-secondary);
  letter-spacing: 0.08em;
}

.status-badge.completed {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--status-success);
  font-size: var(--text-xs);
  padding: 2px 8px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
```

### Card de artefacto pendiente (Coming Soon)

```css
.artifact-card.coming-soon {
  opacity: 0.5;
  border-style: dashed;
  border-color: var(--border-subtle);
}

.artifact-card.coming-soon:hover {
  opacity: 0.7;
  transform: none;
  box-shadow: none;
}

/* Ícono de candado — reemplazar con un ícono más sutil */
.coming-soon-icon {
  color: var(--text-tertiary);
  margin-bottom: 12px;
}
```

---

## 4. LAYOUT PRINCIPAL

### Sidebar — 240px fijo

```css
.sidebar {
  width: 240px;
  background: var(--bg-base);
  border-right: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: 100;

  /* Patrón de puntos sutil en el fondo */
  background-image: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.04) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
}

/* Logo */
.sidebar-logo {
  padding: 24px 20px 16px;
  border-bottom: 1px solid var(--border-subtle);
}

.logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.06em;
}

.logo-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Nav items */
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  margin: 2px 8px;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-family: 'Inter', sans-serif;
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 120ms ease-out;
  position: relative;
}

.nav-item:hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
  transform: translateX(2px);
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-primary);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* Indicador activo */
.nav-item.active::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 16px;
  background: var(--accent-primary);
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px var(--accent-primary);
}

/* Status en el footer del sidebar */
.sidebar-footer {
  margin-top: auto;
  padding: 16px 20px;
  border-top: 1px solid var(--border-subtle);
}

.system-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-secondary);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--status-success);
  box-shadow: 0 0 6px var(--status-success);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

### Header — 56px fijo

```css
.header {
  height: 56px;
  background: rgba(6, 9, 15, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 240px;
  right: 0;
  z-index: 99;
}

.header-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}

/* Toggle idioma */
.lang-toggle {
  display: flex;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
}

.lang-btn {
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 120ms;
}

.lang-btn.active {
  background: var(--accent-primary);
  color: white;
}
```

### Main content area

```css
.main-content {
  margin-left: 240px;
  margin-top: 56px;
  padding: 32px;
  min-height: calc(100vh - 56px);
  background: var(--bg-base);
}

/* Page header */
.page-header {
  margin-bottom: 32px;
}

.breadcrumb {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.breadcrumb-sep { color: var(--text-tertiary); }

.page-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
```

---

## 5. DASHBOARD — REDISEÑO COMPLETO

### Layout del dashboard

```
┌─────────────────────────────────────────────────────────────┐
│  [GAUGE HERO — col izquierda]   [COMPLIANCE BARS — col der] │
│  [grande, 34%, glow azul]       [4 barras con métricas]     │
├─────────────────────────────────────────────────────────────┤
│  [RISK HEATMAP — col izquierda] [CONTROL DONUT — col der]   │
│  [grid con glow en críticos]    [dona con estadísticas]      │
├─────────────────────────────────────────────────────────────┤
│  [TIMELINE — ancho completo]                                 │
│  [hitos con línea de progreso]                               │
├─────────────────────────────────────────────────────────────┤
│  [RECENT ARTIFACTS — ancho completo]                         │
│  [lista horizontal de los últimos 5]                         │
└─────────────────────────────────────────────────────────────┘
```

### Gauge de madurez — el elemento hero

```jsx
// El gauge ocupa toda la altura de su card
// Semicírculo SVG con gradiente y número animado

const MaturityGauge = ({ value }) => (
  <div className="gauge-card">
    <p className="gauge-label">ISMS Maturity Score</p>
    <div className="gauge-container">
      <svg viewBox="0 0 200 120" className="gauge-svg">
        {/* Track background */}
        <path
          d="M 20 110 A 90 90 0 0 1 180 110"
          fill="none"
          stroke="#1A2D4A"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Progress arc — color cambia según valor */}
        <path
          d="M 20 110 A 90 90 0 0 1 180 110"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${value * 2.83} 283`}
          className="gauge-progress"
        />
        {/* Glow effect */}
        <path
          d="M 20 110 A 90 90 0 0 1 180 110"
          fill="none"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${value * 2.83} 283`}
          filter="url(#blur)"
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
      </svg>
      {/* Número hero — count-up animation al cargar */}
      <div className="gauge-value">
        <span className="gauge-number font-display">{value}%</span>
        <span className="gauge-sub font-mono">
          {value < 40 ? 'Critical Gap' : value < 70 ? 'In Progress' : 'On Track'}
        </span>
      </div>
    </div>
  </div>
);
```

```css
.gauge-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 28px;
  position: relative;
  overflow: hidden;
}

/* Glow de fondo sutil */
.gauge-card::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.gauge-number {
  font-size: var(--text-hero);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.04em;
}

.gauge-sub {
  font-size: var(--text-xs);
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  text-align: center;
  margin-top: 4px;
}

.gauge-label {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
```

### Barras de cumplimiento

```css
.compliance-bar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.compliance-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  width: 110px;
  flex-shrink: 0;
}

.compliance-track {
  flex: 1;
  height: 4px;
  background: var(--bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.compliance-fill {
  height: 100%;
  border-radius: 2px;
  background: var(--accent-primary);
  box-shadow: 0 0 8px rgba(59,130,246,0.5);
  transition: width 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.compliance-pct {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-mono);
  width: 32px;
  text-align: right;
}
```

### Risk Heat Map — rediseñado

```css
.heatmap-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 4px;
  aspect-ratio: 1;
}

.heatmap-cell {
  border-radius: 4px;
  transition: all 150ms ease-out;
  cursor: pointer;
}

.heatmap-cell:hover {
  transform: scale(1.15);
  z-index: 1;
  box-shadow: 0 0 12px currentColor;
}

/* Colores por nivel de riesgo */
.heatmap-cell[data-level="1"] { background: #166534; }
.heatmap-cell[data-level="2"] { background: #14532D; opacity: 0.8; }
.heatmap-cell[data-level="3"] { background: #713F12; }
.heatmap-cell[data-level="4"] { background: #9A3412; }
.heatmap-cell[data-level="5"] { background: #7F1D1D; box-shadow: 0 0 8px rgba(239,68,68,0.4); }
```

### Timeline de hitos

```css
.timeline {
  display: flex;
  align-items: center;
  position: relative;
  padding: 24px 0;
}

/* Línea conectora */
.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-subtle);
  transform: translateY(-50%);
}

.timeline-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.timeline-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--border-subtle);
  background: var(--bg-base);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
}

.timeline-dot.completed {
  border-color: var(--accent-primary);
  background: rgba(59,130,246,0.1);
  box-shadow: 0 0 12px rgba(59,130,246,0.3);
}

.timeline-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: var(--text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 8px;
}
```

---

## 6. ISO 27001 — LOS 93 CONTROLES

### Estructura con acordeones por dominio

```
┌─────────────────────────────────────────────────────────────┐
│  [TABS: Gap Analysis | SoA | Risk Treatment | Plan | ...]   │
├─────────────────────────────────────────────────────────────┤
│  [DOMAIN A.5 — Organizational Controls — 37] ▼              │
│  ████████░░░░░░ 14/37 controls assessed                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ A.5.1 Policies  ● pending    A.5.2 Roles  ● pending  │   │
│  │ A.5.3 ...       ● pending    A.5.4 ...    ● pending  │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  [DOMAIN A.6 — People Controls — 8] ▶                       │
│  [DOMAIN A.7 — Physical Controls — 14] ▶                    │
│  [DOMAIN A.8 — Technological Controls — 34] ▶               │
└─────────────────────────────────────────────────────────────┘
```

### Control card — versión compacta

```css
.control-card-compact {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 120ms ease-out;
  border-left: 3px solid transparent;
}

.control-card-compact:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

/* Borde izquierdo según estado */
.control-card-compact[data-status="implemented"] { border-left-color: var(--status-success); }
.control-card-compact[data-status="partial"]     { border-left-color: var(--status-warning); }
.control-card-compact[data-status="missing"]     { border-left-color: var(--status-critical); }
.control-card-compact[data-status="excluded"]    { border-left-color: var(--text-tertiary); }

.control-id {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--accent-secondary);
  width: 48px;
  flex-shrink: 0;
}

.control-name {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-sm);
  color: var(--text-primary);
  flex: 1;
}

.control-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
```

### Drawer de detalle del control

Al hacer click en un control, se abre un drawer desde la derecha (no una página nueva):

```css
.control-drawer {
  position: fixed;
  top: 56px;
  right: 0;
  bottom: 0;
  width: 480px;
  background: var(--bg-overlay);
  border-left: 1px solid var(--border-subtle);
  z-index: 200;
  overflow-y: auto;
  padding: 28px;

  /* Animación de entrada */
  transform: translateX(100%);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.control-drawer.open {
  transform: translateX(0);
  box-shadow: -20px 0 60px rgba(0,0,0,0.5);
}
```

---

## 7. RELATIONS MAP — FORCE-DIRECTED GRAPH

Usa D3.js force simulation en lugar del círculo estático actual:

```javascript
// Configuración del grafo
const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d => d.id).distance(80).strength(0.5))
  .force('charge', d3.forceManyBody().strength(-200))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(30));

// Colores de nodos por bloque
const blockColors = {
  B0: '#06B6D4', B1: '#3B82F6', B2: '#8B5CF6', B3: '#10B981'
};

// Comportamiento de hover
node.on('mouseover', (event, d) => {
  // Opaca todos los nodos y links excepto los conectados al hovered
  const connectedIds = new Set(links
    .filter(l => l.source.id === d.id || l.target.id === d.id)
    .flatMap(l => [l.source.id, l.target.id])
  );

  node.style('opacity', n => connectedIds.has(n.id) ? 1 : 0.15);
  link.style('opacity', l =>
    l.source.id === d.id || l.target.id === d.id ? 0.8 : 0.05
  );
});
```

```css
/* Links con gradiente entre los colores de los nodos conectados */
.graph-link {
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.4;
  transition: opacity 200ms;
}

/* Nodos */
.graph-node circle {
  stroke-width: 2;
  transition: all 150ms;
  filter: drop-shadow(0 0 4px currentColor);
}

.graph-node:hover circle {
  r: 18; /* se agranda al hacer hover */
  filter: drop-shadow(0 0 10px currentColor);
}

.graph-node text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  fill: var(--text-primary);
  text-anchor: middle;
  dominant-baseline: central;
  pointer-events: none;
}
```

---

## 8. ANIMACIONES — SISTEMA COMPLETO

### Page transitions — al estilo osu!lazer

```javascript
// En App.jsx, usar Framer Motion para las transiciones de página
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 8,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// Wrapper para cada página
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {children}
</motion.div>
```

### Stagger de cards al cargar

```javascript
// Cards aparecen en cascada con 40ms entre cada una
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};
```

### Count-up animation para números

```javascript
// Hook para animar números al cargar
const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
};
```

### Micro-interacciones

```css
/* Todos los elementos interactivos */
button, .nav-item, .artifact-card, .control-card-compact {
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Click feedback */
button:active, .artifact-card:active {
  transform: scale(0.98);
}

/* Chat button — float animation */
.chat-button {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Sidebar dot pulsing */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 6px var(--status-success);
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 12px var(--status-success);
    opacity: 0.6;
  }
}
```

---

## 9. CHAT FLOTANTE — REDISEÑO

```css
/* Botón flotante */
.chat-fab {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 20px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(59, 130, 246, 0.3);
  transition: all 200ms ease-out;
  z-index: 300;
}

.chat-fab:hover {
  transform: scale(1.08);
  box-shadow:
    0 8px 30px rgba(59, 130, 246, 0.5),
    0 0 0 1px rgba(59, 130, 246, 0.5);
}

/* Panel de personajes */
.chat-panel {
  position: fixed;
  bottom: 92px;
  right: 28px;
  width: 320px;
  background: var(--bg-overlay);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 16px;
  z-index: 300;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);

  /* Animación de entrada */
  transform-origin: bottom right;
  animation: panel-open 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes panel-open {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Character cards dentro del panel */
.character-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 120ms;
}

.character-card:hover {
  background: var(--bg-elevated);
}

.character-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

/* Colores por personaje */
.char-ciso    .character-avatar { background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); }
.char-cto     .character-avatar { background: rgba(6,182,212,0.15);  border: 1px solid rgba(6,182,212,0.3); }
.char-legal   .character-avatar { background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); }
.char-cfo     .character-avatar { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); }

.character-name {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.character-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-secondary);
}
```

---

## 10. DEPENDENCIAS ADICIONALES A INSTALAR

```bash
cd D:/finvora-sgsi/web
npm install framer-motion
npm install d3
```

Framer Motion ya puede estar instalada — verificar antes de instalar.

---

## 11. CHECKLIST DE IMPLEMENTACIÓN

Claude Code debe verificar antes de hacer commit:

- [ ] Todos los colores usan las variables CSS definidas en la sección 2 — cero colores hardcodeados
- [ ] Space Grotesk cargando en todos los headers y números grandes
- [ ] JetBrains Mono en todos los IDs de artefactos y controles
- [ ] Page transitions funcionando entre todas las páginas
- [ ] Stagger animation al cargar cualquier lista de cards
- [ ] Count-up animation en el gauge del dashboard
- [ ] Force-directed graph en el Relations Map (no el círculo estático)
- [ ] Control drawer abriéndose desde la derecha al hacer click en un control
- [ ] Chat FAB con float animation y panel con animación de entrada
- [ ] Sidebar con patrón de puntos y indicador activo con glow
- [ ] Gauge de madurez con SVG personalizado (no el gauge genérico actual)
- [ ] Cards de artefactos con borde superior del color del bloque
- [ ] Cards Coming Soon con borde punteado y opacity 0.5
- [ ] `npm run build` sin errores
- [ ] No hay colores hardcodeados fuera del `:root`

---

## 12. LO QUE NO CAMBIA

- Toda la lógica de routing (React Router)
- El sistema de datos en `data/` y `project-state.js`
- El cliente de Claude API en `lib/claude-client.js`
- Las variables de entorno y `.env.local`
- Los artefactos integrados en `data/artifacts/`
- El sistema V1/V2 (lógica, no el estilo)
- El toggle EN/ES (lógica, no el estilo)

---

*Archivo creado: Junio 2026*
*Ejecutar: como remodelación total del diseño actual*
*Prerequisito: `master.md` leído*
*Lo que cambia: TODO lo visual*
*Lo que no cambia: lógica, datos, API*
