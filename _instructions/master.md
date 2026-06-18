# MASTER - Proyecto SGSI Finvora
## Instrucciones maestras para Claude Code

> **Lee este archivo completo antes de ejecutar cualquier acción en este proyecto.**
> Este es el documento de referencia central. Todos los demás archivos de `_instructions/` derivan de este.

---

## 1. CONTEXTO DEL PROYECTO

### ¿Qué es este proyecto?
Un portfolio GRC profesional construido por **Daniel Carrión**, estudiante de Ingeniería de Sistemas en Lima, Perú. El proyecto simula la implementación completa de un SGSI (Sistema de Gestión de Seguridad de la Información) bajo ISO 27001:2022 para una empresa fintech ficticia llamada **Finvora S.A.C.**, con extensión a EU AI Act, NIST AI RMF e ISO 42001.

### ¿Para quién es?
El público objetivo son **hiring managers de empresas tech EU/USA** que buscan GRC analysts entry-level con conocimiento práctico de ISO 27001 y AI Governance. El proyecto sustituye la experiencia laboral que Daniel aún no tiene.

### ¿Cuál es el objetivo final?
Que un hiring manager pueda entrar a la web, navegar el análisis completo, interactuar con los personajes de Finvora, y entender en 15 minutos el nivel de razonamiento aplicado de Daniel - sin que Daniel esté presente para explicarlo.

---

## 2. LA EMPRESA FICTICIA - FINVORA S.A.C.

| Campo | Valor |
|---|---|
| Nombre | Finvora S.A.C. |
| Sector | Fintech - plataforma de pagos digitales y crédito |
| Sede | Lima, Perú |
| Clientes | EU y USA |
| Empleados | 95 |
| Fundación | 2019 |
| Volumen de transacciones | $50M anuales |
| Regulaciones aplicables | ISO 27001, GDPR, PCI DSS, EU AI Act, SOC 2 |
| Sistemas de IA | Scoring crediticio, detección de fraude, análisis de riesgo automatizado |

Finvora es el vehículo para aplicar todos los frameworks. No es una empresa real - es una simulación creíble con tensiones reales, presupuesto limitado y decisiones difíciles.

---

## 3. ARQUITECTURA DEL PROYECTO

### Estructura de carpetas

```
finvora-sgsi/
│
├── _instructions/          → instrucciones maestras para Claude Code
│   ├── master.md           → este archivo
│   ├── stitch-design.md    → prompts de Stitch en secuencia
│   ├── build-web.md        → instrucciones para construir la web base
│   ├── integrate-artifact.md → prompt reutilizable para integrar artefactos
│   └── deploy.md           → guía de despliegue en Vercel (ejecutar al final)
│
├── _schema/                → esquemas y mapas de referencia
│   ├── web-schema.md       → esquema completo de la web
│   ├── artifact-inventory.md → inventario de los 47 artefactos
│   └── relations-map.md    → mapa de relaciones entre artefactos
│
├── artifacts/              → todos los artefactos producidos por Daniel
│   ├── B0/                 → Bloque 0 - Finvora la empresa
│   ├── B1/                 → Bloque 1 - ISO 27001
│   ├── B2/                 → Bloque 2 - EU AI Act + AI Frameworks
│   └── B3/                 → Bloque 3 - Operación del SGSI
│
├── web/                    → código de la web generado por Claude Code
│   ├── src/
│   │   ├── components/     → componentes React reutilizables
│   │   ├── pages/          → páginas principales
│   │   ├── data/           → artefactos integrados como JSON/MD
│   │   ├── styles/         → estilos Tailwind y globales
│   │   └── lib/            → utilidades, Claude API client, helpers
│   ├── public/
│   └── package.json
│
└── README.md               → descripción del proyecto para GitHub
```

### Tecnología
- **Framework:** React + Vite
- **Estilos:** Tailwind CSS
- **Diseño:** Google Stitch (via MCP) → exportado a React
- **AI:** Claude API (claude-sonnet-4-6) para personajes interactivos y Auditor IA
- **Deploy:** Vercel (ejecutar al final - ver `deploy.md`)
- **Repositorio:** GitHub

### Arquitectura frontend
100% estático. Sin backend propio. Las llamadas a Claude API van directo desde el frontend usando la API key como variable de entorno en Vercel. Sin base de datos - todo el contenido vive en archivos del repositorio.

---

## 4. INVENTARIO DE ARTEFACTOS

### Bloque 0 - La Empresa Finvora (generados por Claude, no por Daniel)

| ID | Artefacto | Formato | Clause/Regulación |
|---|---|---|---|
| B0-00 | Consultant Onboarding Brief (mandato, accesos, stakeholders, agenda) | MD | Clause 4.1 + 5.3 |
| B0-01 | Perfil corporativo (historia, misión, visión, valores, objetivos) | MD | Clause 4.1 |
| B0-02 | Organigrama completo con roles y responsabilidades | MD + Diagrama | Clause 5.3 |
| B0-03 | Análisis de contexto interno y externo (FODA de seguridad) | MD + Tabla | Clause 4.1 |
| B0-04 | Partes interesadas y sus requisitos | MD + Tabla | Clause 4.2 |
| B0-05 | Alcance del SGSI propuesto | MD | Clause 4.3 |
| B0-06 | Arquitectura tecnológica actual | MD + Diagrama | Clause 4.1 |
| B0-07 | Inventario de activos de información | Tabla | Clause 8.1 + A.5.9 |
| B0-08 | Flujos de datos | MD + Diagrama | GDPR Art. 30 + Clause 4.1 |
| B0-09 | Controles de seguridad actuales | MD + Tabla | Clause 8.1 |
| B0-10 | Presupuesto disponible para seguridad | MD + Tabla | Clause 7.1 |
| B0-11 | Incidentes históricos de seguridad | MD + Tabla | Clause 6.1.2 |
| B0-12 | Proveedores críticos y contratos existentes | MD + Tabla | Clause 4.2 + A.5.19 |
| B0-13 | Sistemas de IA en operación | MD + Tabla | EU AI Act + ISO 42001 |
| B0-14 | Apetito de riesgo y objetivos de certificación | MD | Clause 5.1 + 6.2 |
| B0-15 | Regulaciones aplicables y estado actual de cumplimiento | MD + Tabla | Clause 4.2 |

### Bloque 1 - ISO 27001: Implementación del SGSI (producidos por Daniel)

| ID | Artefacto | Formato | Clause/Regulación |
|---|---|---|---|
| B1-01 | Gap Analysis completo - Clauses 4–10 + 93 controles Annex A | Excel + MD | Clauses 4–10 + Annex A completo |
| B1-02 | Metodología de priorización (riesgo x impacto regulatorio x costo) | MD + Tabla | Clause 6.1.2 + 6.1.3 |
| B1-03 | Ranking de controles priorizados | Tabla | Clause 6.1.3 |
| B1-04 | Statement of Applicability (SoA) completo | Tabla + MD | Clause 6.1.3d |
| B1-05 | Risk Treatment Plan | MD + Tabla | Clause 6.1.3e |
| B1-06 | Plan de implementación con controles reales, herramientas y costos | MD + Tabla | Clause 8.1 |
| B1-07 | Política de Seguridad de la Información | MD | Clause 5.2 |
| B1-08 | Política de Control de Acceso | MD | A.5.15 + A.5.18 |
| B1-09 | Política de Gestión de Contraseñas | MD | A.8.5 |
| B1-10 | Política de Clasificación de la Información | MD | A.5.12 |
| B1-11 | Política de Trabajo Remoto | MD | A.6.7 |
| B1-12 | Política de Gestión de Incidentes | MD | A.5.24 + A.5.25 |
| B1-13 | Vendor Assessment - proveedores críticos | MD + Tabla | A.5.19 + A.5.20 |
| B1-14 | Objetivos de seguridad de la información | MD | Clause 6.2 |
| B1-15 | Executive Summary Bloque 1 para el CEO | MD | Clause 9.3 |

### Bloque 2 - EU AI Act + NIST AI RMF + ISO 42001 (producidos por Daniel)

| ID | Artefacto | Formato | Clause/Regulación |
|---|---|---|---|
| B2-01 | Clasificación de sistemas de IA bajo EU AI Act | MD + Tabla | EU AI Act Art. 6 + Annex III |
| B2-02 | Análisis de obligaciones por sistema (Arts. 9–15) | MD + Tabla | EU AI Act Arts. 9–15 |
| B2-03 | Mapeo EU AI Act ↔ ISO 27001 ↔ NIST AI RMF ↔ ISO 42001 | MD + Tabla | Todos los frameworks |
| B2-04 | Risk Register específico de IA | Tabla | Clause 6.1.2 + EU AI Act Art. 9 |
| B2-05 | Plan de cumplimiento EU AI Act | MD + Tabla | EU AI Act + Clause 6.1.3 |
| B2-06 | Controles adicionales ISO 42001 | MD + Tabla | ISO 42001 Annex A |
| B2-07 | NIST AI RMF Profile para Finvora | MD + Tabla | NIST AI RMF |
| B2-08 | Executive Summary Bloque 2 para el CEO | MD | Clause 9.3 + EU AI Act |

### Bloque 3 - Operación del SGSI (producidos por Daniel)

| ID | Artefacto | Formato | Clause/Regulación |
|---|---|---|---|
| B3-01 | Métricas de seguridad post-implementación | MD + Tabla | Clause 9.1 |
| B3-02 | Simulación de incidente de seguridad | MD | A.5.24–A.5.28 + GDPR Art. 33 |
| B3-03 | Informe de auditoría interna | MD + Tabla | Clause 9.2 |
| B3-04 | No conformidades identificadas y clasificación | MD + Tabla | Clause 10.2 |
| B3-05 | Acciones correctivas con root cause analysis | MD + Tabla | Clause 10.2 |
| B3-06 | Revisión por la dirección - acta y decisiones | MD | Clause 9.3 |
| B3-07 | Ciclo de mejora | MD | Clause 10.1 |
| B3-08 | Cambios en el entorno | MD | Clause 6.3 |
| B3-09 | Executive Summary final para el CEO | MD | Clause 9.3 |
| B3-10 | Informe de auditoría automatizada - Auditor IA | MD | Clause 9.2 |

**Total: 48 artefactos**

---

## 5. MAPA DE RELACIONES ENTRE ARTEFACTOS

```
B0-03 → B1-01 (Gap Analysis)
B0-07 → B1-01 (Gap Analysis)
B0-09 → B1-01 (Gap Analysis)
B0-11 → B1-01 + B1-05 (RTP)
B0-10 → B1-02 (Metodología priorización)
B0-15 → B1-02 (Metodología priorización)

B1-01 → B1-02 → B1-03 → B1-04 (SoA) + B1-05 (RTP)
B1-04 + B1-05 → B1-06 (Plan implementación)
B1-06 → B3-01 (Métricas post-implementación)

B0-13 → B2-01 → B2-02 → B2-03 → B2-05
B1-04 + B1-06 → B2-05 (Plan cumplimiento EU AI Act)

B3-01 → B3-06 (Revisión por la dirección)
B3-03 → B3-04 → B3-05 → B3-07 (Ciclo de mejora)
B3-02 → B3-04 + B3-06
```

### Relaciones artefacto → Clause ISO 27001

| Clause | Artefactos |
|---|---|
| Clause 4 | B0-01, B0-03, B0-04, B0-05, B0-06, B0-08 |
| Clause 5 | B0-02, B0-14, B1-07 |
| Clause 6 | B1-01, B1-02, B1-03, B1-04, B1-05, B1-14 |
| Clause 7 | B0-10, B0-02 |
| Clause 8 | B0-07, B0-09, B1-06 |
| Clause 9 | B3-01, B3-03, B3-06, B3-10 |
| Clause 10 | B3-04, B3-05, B3-07 |

### Mapeo control Annex A → artefacto de evidencia

| Artefacto de evidencia | Controles Annex A que cubre |
|---|---|
| B1-07 Politica de Seguridad | A.5.1, A.5.2 |
| B1-08 Politica Control de Acceso | A.5.15, A.5.16, A.5.17, A.5.18 |
| B1-09 Politica Contrasenas | A.8.5 |
| B1-10 Politica Clasificacion | A.5.10, A.5.11, A.5.12, A.5.13 |
| B1-11 Politica Trabajo Remoto | A.6.7 |
| B1-12 Politica Gestion Incidentes | A.5.24, A.5.25, A.5.26, A.5.27, A.5.28 |
| B1-13 Vendor Assessment | A.5.19, A.5.20, A.5.21, A.5.22, A.5.23 |
| B1-06 Plan de implementacion | Todos los controles aplicables del SoA |
| B3-02 Incidente simulado | A.5.24, A.5.25, A.5.26, A.5.27, A.5.28, A.6.8 |

---

## 6. ARQUITECTURA DE LA WEB

### Secciones principales

```
FINVORA SGSI - Centro de Control de Seguridad
│
├── DASHBOARD PRINCIPAL
│   ├── Gauge de madurez SGSI (0-100%)
│   ├── Estado de cumplimiento por framework (ISO 27001, GDPR, EU AI Act, PCI DSS)
│   ├── Mapa de calor de riesgos (5x5)
│   ├── Distribución de controles (dona)
│   ├── Timeline del proyecto
│   └── Feed de últimos artefactos integrados
│
├── FINVORA - La Empresa (Bloque 0)
│   └── B0-01 a B0-15
│
├── ISO 27001 - Implementación (Bloque 1)
│   ├── Gap Analysis con vistas por dominio, riesgo y estado
│   ├── Metodología de priorización
│   ├── SoA
│   ├── Risk Treatment Plan
│   ├── Plan de implementación
│   ├── Políticas (B1-07 a B1-12)
│   ├── Vendor Assessment
│   └── Executive Summary B1
│
├── EU AI Act + Frameworks de IA (Bloque 2)
│   └── B2-01 a B2-08
│
├── Operación del SGSI (Bloque 3)
│   └── B3-01 a B3-09 + B3-10 (Auditor IA - activación única)
│
├── MAPA DE RELACIONES
│   ├── Vista grafo - artefactos conectados visualmente
│   ├── Vista por clause ISO 27001
│   ├── Vista por regulación
│   └── Vista por control Annex A
│
└── CHAT - Equipo Directivo Finvora (botón flotante en toda la web)
    ├── P-01: CISO
    ├── P-02: CTO
    ├── P-03: Director Legal
    └── P-04: CFO
```

### Componente central - Tarjeta de control
Cada uno de los 93 controles del Annex A tiene su propia tarjeta con:
- Número y nombre del control
- Dominio (5, 6, 7 u 8)
- Puntuación en el gap analysis
- Estado en el SoA (aplicable / excluido / implementado / pendiente)
- Nivel de riesgo residual
- Control real seleccionado en el plan de implementación
- Herramienta / proveedor específico
- Costo de implementación
- Links a clauses relacionados
- Links a regulaciones externas relacionadas
- Links a controles del Annex A relacionados
- Links a artefactos relacionados
- Toggle V1/V2 si tiene no conformidades del Auditor IA

### Sistema V1/V2
- Cada artefacto tiene toggle V1 / V2 en su tarjeta
- V1 = documento original - nunca se borra
- V2 = documento corregido post-auditoría
- Banner de no conformidad: hallazgo del auditor + acción correctiva + cambios resaltados en verde
- Si un artefacto no tiene NCs: solo muestra V1 sin toggle

### Toggle de idioma
- Botón EN / ES visible en toda la web
- Cambia todo el contenido entre inglés y español
- Terminología técnica ISO mantiene nomenclatura oficial en inglés

### Secciones vacías
Las secciones sin contenido muestran estado "Coming Soon" con fecha estimada de completación. La web se ve completa desde el primer día aunque el contenido crezca incrementalmente.

---

## 7. PERSONAJES INTERACTIVOS (Claude API)

| ID | Personaje | Rol | Cuándo usar |
|---|---|---|---|
| P-01 | CISO | Chief Information Security Officer | Controles, riesgos, decisiones técnicas de seguridad |
| P-02 | CTO | Chief Technology Officer | Infraestructura, sistemas de IA, viabilidad técnica |
| P-03 | Director Legal | Cumplimiento Legal | Regulaciones, obligaciones legales, exclusiones del SoA |
| P-04 | CFO | Chief Financial Officer | Presupuesto, ROI de controles, decisiones financieras |
| P-05 | Auditor IA | Auditor Interno Independiente | Activación única al final - produce B3-10 |

**Reglas de los personajes:**
- Cada personaje tiene fricción real - el CTO cuestiona costos, el CFO quiere recortar presupuesto, el Director Legal tiene prioridades distintas
- No confirman todas las decisiones automáticamente
- El chat sabe en qué sección está el usuario y da contexto relevante
- El Auditor IA (P-05) NO es un chat interactivo - se activa una sola vez al final con un botón especial y produce el informe B3-10

**Configuración Claude API:**
```javascript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    system: "[system prompt del personaje con contexto completo de Finvora]",
    messages: [{ role: "user", content: "[pregunta del usuario]" }]
  })
});
```

**API key:** variable de entorno `VITE_ANTHROPIC_API_KEY` - nunca hardcodeada en el código.

---

## 8. DISEÑO VISUAL

- **Fondo principal:** Navy blue (#0A1628)
- **Acento primario:** Electric blue (#1E6FFF)
- **Acento secundario:** Cyan (#00D4FF)
- **Texto primario:** Blanco (#FFFFFF)
- **Texto secundario:** Gris claro (#A0AEC0)
- **Control implementado:** Verde (#00C48C)
- **Control parcial:** Ámbar (#FFB800)
- **Control crítico:** Rojo (#FF4757)
- **Fondo de tarjetas:** Azul oscuro (#0F2140)
- **Tipografía:** Inter o Geist
- **Estética:** SOC (Security Operations Center) - similar a Datadog o Splunk

---

## 9. REGLAS PARA CLAUDE CODE

1. **Lee este archivo completo antes de ejecutar cualquier acción.**
2. **Nunca modifiques archivos en `_instructions/` o `_schema/` - son de solo lectura.**
3. **Todo el código de la web va en `web/`.**
4. **Todos los artefactos van en `artifacts/` organizados por bloque (B0/, B1/, B2/, B3/).**
5. **Cuando integres un artefacto, sigue exactamente las instrucciones de `integrate-artifact.md`.**
6. **Nunca hardcodees la API key de Anthropic - usa siempre `VITE_ANTHROPIC_API_KEY`.**
7. **Mantén el sistema V1/V2 activo en todos los artefactos desde el inicio.**
8. **Las secciones sin contenido muestran estado "Coming Soon" - nunca las elimines.**
9. **Cada vez que integres un artefacto, actualiza el dashboard con el nuevo estado de completación.**
10. **El Auditor IA (P-05) solo se activa cuando Daniel lo indique explícitamente - nunca automáticamente.**

---

## 10. ESTADO ACTUAL DEL PROYECTO

| Fase | Estado | Fecha estimada |
|---|---|---|
| Esquema web diseñado | ✅ Completado | Junio 2026 |
| Estructura de repositorio creada | ✅ Completado | Junio 2026 |
| Diseño visual (Stitch) | ⬜ Pendiente | Junio 2026 |
| Web base vacía construida | ⬜ Pendiente | Junio 2026 |
| Bloque 0 - Finvora generada | ⬜ Pendiente | Junio 2026 |
| Bloque 1 - ISO 27001 | ⬜ Pendiente | Nov–Dic 2026 |
| Bloque 2 - EU AI Act | ⬜ Pendiente | Dic 2026–Ene 2027 |
| Bloque 3 - Operación | ⬜ Pendiente | Enero 2027 |
| Auditoría IA (P-05) | ⬜ Pendiente | Enero 2027 |
| Deploy en Vercel | ⬜ Pendiente | Enero 2027 |

---

*Archivo creado: Junio 2026*
*Autor: Daniel Carrión*
*Próximo archivo a ejecutar: `stitch-design.md`*
