# BUILD WEB - Finvora SGSI
## Instrucciones para construir la web base vacía

> **Instrucciones para Claude Code:**
> Lee `master.md` completo antes de ejecutar cualquier paso.
> El diseño visual ya fue generado con `stitch-design.md`.
> Este archivo construye la web base vacía en React + Tailwind usando ese diseño como referencia.
> La web debe estar 100% funcional en estructura y navegación aunque todo el contenido esté vacío.

---

## PREREQUISITOS

Antes de ejecutar este archivo verifica que:
- [ ] `master.md` fue leído completo
- [ ] `stitch-design.md` fue ejecutado y el diseño está exportado
- [ ] Los screenshots del diseño están en `_schema/design-screenshots/`
- [ ] Node.js está instalado en el sistema

---

## PASO 1 - Inicializar el proyecto React

Ejecuta en `D:/finvora-sgsi/web/`:

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
npm install @anthropic-ai/sdk
npm install recharts
npm install lucide-react
npm install framer-motion
```

Configura `tailwind.config.js`:
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1628",
          800: "#0F2140",
          700: "#1A2F4E",
        },
        blue: {
          electric: "#1E6FFF",
          cyan: "#00D4FF",
        },
        status: {
          implemented: "#00C48C",
          partial: "#FFB800",
          critical: "#FF4757",
          excluded: "#4A5568",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      }
    }
  },
  plugins: []
}
```

Configura `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0A1628;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0A1628; }
::-webkit-scrollbar-thumb { background: #1E6FFF; border-radius: 3px; }
```

---

## PASO 2 - Estructura de archivos

Crea esta estructura dentro de `web/src/`:

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── dashboard/
│   │   ├── MaturityGauge.jsx
│   │   ├── ComplianceBars.jsx
│   │   ├── RiskHeatMap.jsx
│   │   ├── ControlDonut.jsx
│   │   ├── MilestoneTimeline.jsx
│   │   └── RecentArtifacts.jsx
│   ├── controls/
│   │   ├── ControlCard.jsx
│   │   ├── NonConformityBanner.jsx
│   │   └── V1V2Toggle.jsx
│   ├── chat/
│   │   ├── ChatButton.jsx
│   │   ├── ChatPanel.jsx
│   │   └── CharacterCard.jsx
│   ├── artifacts/
│   │   ├── ArtifactCard.jsx
│   │   ├── ArtifactViewer.jsx
│   │   └── ComingSoon.jsx
│   └── common/
│       ├── Badge.jsx
│       ├── LanguageToggle.jsx
│       ├── Breadcrumb.jsx
│       └── SearchFilter.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Company.jsx
│   ├── ISO27001.jsx
│   ├── EUAIAct.jsx
│   ├── Operations.jsx
│   └── RelationsMap.jsx
├── data/
│   ├── artifacts/          → artefactos integrados (se llena incrementalmente)
│   ├── controls/
│   │   └── annex-a.js      → los 93 controles del Annex A como array
│   ├── relations.js         → mapa de relaciones entre artefactos
│   └── project-state.js    → estado actual del proyecto (completación)
├── lib/
│   ├── claude-client.js    → cliente Claude API para los personajes
│   ├── i18n.js             → traducciones EN/ES
│   └── utils.js            → helpers generales
├── App.jsx
└── main.jsx
```

---

## PASO 3 - Datos base

### `src/data/controls/annex-a.js`
Crea el array completo de los 93 controles del Annex A:

```javascript
export const annexAControls = [
  // Domain 5 - Organizational Controls (37 controls)
  { id: "A.5.1", name: "Policies for information security", domain: 5, domainName: "Organizational", status: "pending", riskLevel: null, soaStatus: null, relatedClauses: ["5.2"], relatedControls: ["A.5.2"] },
  { id: "A.5.2", name: "Information security roles and responsibilities", domain: 5, domainName: "Organizational", status: "pending", riskLevel: null, soaStatus: null, relatedClauses: ["5.3"], relatedControls: ["A.5.1"] },
  // ... continuar con los 93 controles completos
  // Domain 6 - People Controls (8 controls)
  // Domain 7 - Physical Controls (14 controls)
  // Domain 8 - Technological Controls (34 controls)
];
```

> **Nota:** Completa el array con los 93 controles. Usa los datos del Annex A de ISO 27001:2022.
> Cada control tendrá sus campos completados cuando Daniel integre el gap analysis (B1-01).

### `src/data/project-state.js`
Estado inicial del proyecto - todos en "pending":

```javascript
export const projectState = {
  lastUpdated: null,
  overallMaturity: 0,
  compliance: {
    iso27001: 0,
    gdpr: 0,
    euAiAct: 0,
    pciDss: 0,
  },
  controlStats: {
    implemented: 0,
    inProgress: 0,
    pending: 93,
    excluded: 0,
    total: 93,
  },
  artifacts: {
    B0: { total: 15, completed: 0 },
    B1: { total: 15, completed: 0 },
    B2: { total: 8, completed: 0 },
    B3: { total: 10, completed: 0 },
  },
  milestones: [
    { id: "schema", label: "Schema", completed: true, date: "2026-06-03" },
    { id: "design", label: "Design", completed: false, date: null },
    { id: "iso27001", label: "ISO 27001", completed: false, date: null },
    { id: "euAiAct", label: "EU AI Act", completed: false, date: null },
    { id: "operations", label: "Operations", completed: false, date: null },
  ]
};
```

### `src/data/relations.js`
Mapa de relaciones entre artefactos (basado en `master.md` sección 5):

```javascript
export const artifactRelations = {
  "B0-03": ["B1-01"],
  "B0-07": ["B1-01"],
  "B0-09": ["B1-01"],
  "B0-11": ["B1-01", "B1-05"],
  "B0-10": ["B1-02"],
  "B0-15": ["B1-02"],
  "B1-01": ["B1-02"],
  "B1-02": ["B1-03"],
  "B1-03": ["B1-04", "B1-05"],
  "B1-04": ["B1-06", "B2-05"],
  "B1-05": ["B1-06"],
  "B1-06": ["B3-01", "B2-05"],
  "B0-13": ["B2-01"],
  "B2-01": ["B2-02"],
  "B2-02": ["B2-03"],
  "B2-03": ["B2-05"],
  "B3-01": ["B3-06"],
  "B3-03": ["B3-04"],
  "B3-04": ["B3-05"],
  "B3-05": ["B3-07"],
  "B3-02": ["B3-04", "B3-06"],
};
```

### `src/lib/i18n.js`
Traducciones base EN/ES:

```javascript
export const translations = {
  en: {
    dashboard: "Dashboard",
    company: "The Company",
    iso27001: "ISO 27001",
    euAiAct: "EU AI Act",
    operations: "ISMS Operations",
    relationsMap: "Relations Map",
    maturityScore: "ISMS Maturity Score",
    complianceStatus: "Compliance Status",
    riskHeatMap: "Risk Heat Map",
    controlDistribution: "Control Distribution",
    projectMilestones: "Project Milestones",
    recentArtifacts: "Recent Artifacts",
    comingSoon: "Content in Progress",
    implemented: "Implemented",
    inProgress: "In Progress",
    pending: "Pending",
    excluded: "Excluded",
    talkToTeam: "Talk to Finvora's Team",
  },
  es: {
    dashboard: "Panel Principal",
    company: "La Empresa",
    iso27001: "ISO 27001",
    euAiAct: "Acto de IA de la UE",
    operations: "Operación del SGSI",
    relationsMap: "Mapa de Relaciones",
    maturityScore: "Puntuación de Madurez SGSI",
    complianceStatus: "Estado de Cumplimiento",
    riskHeatMap: "Mapa de Calor de Riesgos",
    controlDistribution: "Distribución de Controles",
    projectMilestones: "Hitos del Proyecto",
    recentArtifacts: "Artefactos Recientes",
    comingSoon: "Contenido en Progreso",
    implemented: "Implementado",
    inProgress: "En Progreso",
    pending: "Pendiente",
    excluded: "Excluido",
    talkToTeam: "Hablar con el Equipo de Finvora",
  }
};
```

---

## PASO 4 - Cliente Claude API

### `src/lib/claude-client.js`

```javascript
const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const characterSystemPrompts = {
  CISO: `You are the CISO (Chief Information Security Officer) of Finvora S.A.C., a fintech company based in Lima, Peru with 95 employees, processing $50M annually, with clients in EU and USA. You are responsible for the entire ISMS implementation under ISO 27001:2022, including all 93 Annex A controls, risk management, incident response, and security policies. You have deep knowledge of GDPR, PCI DSS, EU AI Act, and SOC 2 as they apply to Finvora. You are pragmatic but security-focused. You sometimes push back when budget constraints threaten critical controls. Always respond in the same language the user writes in (English or Spanish). Be specific and reference Finvora's actual context when answering.`,

  CTO: `You are the CTO (Chief Technology Officer) of Finvora S.A.C., a fintech company based in Lima, Peru. You manage all technology infrastructure including AWS cloud services, the payment processing platform, AI systems (credit scoring, fraud detection, risk analysis), and a development team of 20 engineers. You are technically brilliant but budget-conscious and sometimes question the cost of security controls. You prioritize system availability and developer productivity. Always respond in the same language the user writes in (English or Spanish). Be specific about technology decisions and their business impact.`,

  LegalDirector: `You are the Legal Director and Chief Compliance Officer of Finvora S.A.C., a fintech company based in Lima, Peru with clients in EU and USA. You are responsible for GDPR compliance, EU AI Act obligations, PCI DSS contractual requirements, and all regulatory matters. You have deep knowledge of data protection law and financial regulations. You sometimes conflict with the CISO on priorities - you focus on regulatory risk over technical security risk. Always respond in the same language the user writes in (English or Spanish). Reference specific articles and regulations when relevant.`,

  CFO: `You are the CFO (Chief Financial Officer) of Finvora S.A.C., a fintech company based in Lima, Peru. You manage the security budget, which is limited. You understand that security is an investment but you always push for ROI justification on every control implementation. You approve or reject budget requests for security tools and consultants. You are supportive of ISO 27001 certification because it opens enterprise client opportunities, but you scrutinize costs carefully. Always respond in the same language the user writes in (English or Spanish). Always ask about cost and business justification.`,
};

export async function askCharacter(character, userMessage, currentSection = "") {
  const systemPrompt = characterSystemPrompts[character];
  const contextNote = currentSection
    ? `\n\nThe user is currently viewing the "${currentSection}" section of the SGSI documentation.`
    : "";

  const response = await fetch(CLAUDE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: systemPrompt + contextNote,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  const data = await response.json();
  return data.content[0].text;
}

export async function runAuditorIA(allArtifactsContent) {
  const auditorPrompt = `You are an independent ISO 27001:2022 internal auditor conducting a formal internal audit of Finvora S.A.C.'s ISMS documentation. You are completely independent from the implementation team.

Your task: Review all the ISMS documentation provided and produce a formal internal audit report following ISO 27001 Clause 9.2 requirements.

For each finding, classify it as:
- Major Nonconformity (NC Mayor): fundamental failure to meet a SHALL requirement
- Minor Nonconformity (NC Menor): specific requirement not fully met but system still functions
- Observation: area of improvement that is not a nonconformity
- Positive Finding: something done particularly well

Important: You are evaluating DOCUMENTATION quality and completeness, not actual technical implementation (Finvora is a fictional company). Flag inconsistencies between documents, missing required documentation, unclear justifications in the SoA, objectives without measurable metrics, and policies that reference non-existent procedures.

Be rigorous. A first internal audit typically finds several nonconformities. Do not produce a perfect report - find real issues in the documentation.

Respond in the same language as the documentation (English).

DOCUMENTATION TO AUDIT:
${allArtifactsContent}`;

  const response = await fetch(CLAUDE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      messages: [{ role: "user", content: auditorPrompt }],
    }),
  });

  const data = await response.json();
  return data.content[0].text;
}
```

---

## PASO 5 - Componentes principales

### `src/components/layout/Sidebar.jsx`
Sidebar fijo con navegación, logo Finvora, patrón de circuito en fondo, ítem activo con glow eléctrico.

### `src/components/layout/Header.jsx`
Header con título "Finvora SGSI", toggle EN/ES, avatar.

### `src/components/layout/Layout.jsx`
Wrapper que combina Sidebar + Header + área de contenido con React Router.

### `src/components/controls/ControlCard.jsx`
El componente más importante de la web. Implementa:
- Borde izquierdo de color según estado (verde/ámbar/rojo/gris)
- Badges de dominio, riesgo y SoA
- Secciones expandibles
- Toggle V1/V2
- Banner de no conformidad colapsado

### `src/components/chat/ChatButton.jsx`
Botón flotante bottom-right. Al hacer clic abre `ChatPanel`.

### `src/components/chat/ChatPanel.jsx`
Panel con 4 character cards. Al seleccionar un personaje abre el chat. Llama a `askCharacter()` del cliente Claude API.

### `src/components/artifacts/ComingSoon.jsx`
Placeholder para secciones sin contenido. Muestra candado animado, fecha estimada y barra de progreso en 0%.

---

## PASO 6 - Páginas

### `src/pages/Dashboard.jsx`
Grid con los 6 componentes del dashboard: MaturityGauge, ComplianceBars, RiskHeatMap, ControlDonut, MilestoneTimeline, RecentArtifacts. Todos muestran datos de `project-state.js`.

### `src/pages/Company.jsx`
Grid de 15 ArtifactCards (B0-01 a B0-15). Las que tienen contenido en `data/artifacts/B0/` se muestran como completadas. Las que no tienen contenido muestran ComingSoon.

### `src/pages/ISO27001.jsx`
Tabs: Gap Analysis, SoA, Risk Treatment Plan, Implementation Plan, Policies, Vendor Assessment.
Gap Analysis tiene 3 vistas: By Domain, By Risk Level, By Status.
Cada control usa ControlCard.

### `src/pages/EUAIAct.jsx`
Grid de 8 ArtifactCards (B2-01 a B2-08). Todas en ComingSoon inicialmente.

### `src/pages/Operations.jsx`
Grid de 10 ArtifactCards (B3-01 a B3-10). B3-10 tiene el botón especial del Auditor IA (deshabilitado hasta que todos los demás artefactos estén completados).

### `src/pages/RelationsMap.jsx`
Visualización del grafo de relaciones usando los datos de `relations.js`. Usa una librería de grafos simple o D3.js. Cuatro vistas toggle.

---

## PASO 7 - Routing

### `src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Company from './pages/Company';
import ISO27001 from './pages/ISO27001';
import EUAIAct from './pages/EUAIAct';
import Operations from './pages/Operations';
import RelationsMap from './pages/RelationsMap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
          <Route path="iso27001" element={<ISO27001 />} />
          <Route path="iso27001/control/:controlId" element={<ISO27001 />} />
          <Route path="eu-ai-act" element={<EUAIAct />} />
          <Route path="operations" element={<Operations />} />
          <Route path="relations" element={<RelationsMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## PASO 8 - Variables de entorno

Crea `web/.env.local`:
```
VITE_ANTHROPIC_API_KEY=tu_api_key_aqui
```

Crea `web/.env.example`:
```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Agrega a `web/.gitignore`:
```
.env.local
.env
```

> **NUNCA subas la API key a GitHub. Solo sube `.env.example`.**

---

## PASO 9 - Verificación final

Antes de considerar la web base como completada, verifica:

- [ ] `npm run dev` ejecuta sin errores
- [ ] Todas las páginas cargan sin errores en consola
- [ ] El sidebar navega correctamente entre todas las páginas
- [ ] El toggle EN/ES cambia el idioma en toda la web
- [ ] Las secciones sin contenido muestran ComingSoon correctamente
- [ ] El botón flotante del chat abre el panel de personajes
- [ ] Los personajes responden cuando se les hace una pregunta (requiere API key válida)
- [ ] El dashboard muestra 0% en todos los gauges y barras
- [ ] Los 93 controles del Annex A están en `annex-a.js`
- [ ] No hay API key hardcodeada en ningún archivo

---

## PASO 10 - Commit inicial a GitHub

```bash
cd D:/finvora-sgsi
git init
git add .
git commit -m "feat: web base vacía - estructura completa, diseño Stitch, componentes base"
git branch -M main
git remote add origin https://github.com/[usuario]/finvora-sgsi.git
git push -u origin main
```

---

## POST-BUILD

Una vez completada la web base:

1. La web está vacía pero 100% navegable
2. Todas las secciones muestran ComingSoon
3. El dashboard muestra 0% en todo
4. Los personajes están activos y responden
5. El repositorio está en GitHub

**El siguiente paso es `integrate-artifact.md`** - cada vez que Daniel termine un artefacto, se ejecuta ese prompt para integrarlo a la web.

---

*Archivo creado: Junio 2026*
*Prerequisito: `stitch-design.md` ejecutado*
*Siguiente paso: `integrate-artifact.md`*
