# Esquema Web - Proyecto SGSI Finvora
**GRC Portfolio - Daniel Carrión**
*Esquema integrado: Inventario de artefactos + Mapa de relaciones + Arquitectura de navegación*

---

## PARTE 1 - INVENTARIO COMPLETO DE ARTEFACTOS

### BLOQUE 0 - La Empresa: Finvora S.A.C.

| ID | Artefacto | Formato | Clause/Regulación | Estado inicial |
|---|---|---|---|---|
| B0-00 | Consultant Onboarding Brief (mandato, accesos, stakeholders, primera semana, timeline) | MD | Clause 4.1 + 5.3 | Generado por Claude |
| B0-01 | Perfil corporativo (historia, misión, visión, valores, objetivos estratégicos) | MD | Clause 4.1 | Generado por Claude |
| B0-02 | Organigrama completo con roles y responsabilidades | MD + Diagrama | Clause 5.3 | Generado por Claude |
| B0-03 | Análisis de contexto interno y externo (FODA de seguridad) | MD + Tabla | Clause 4.1 | Generado por Claude |
| B0-04 | Partes interesadas y sus requisitos | MD + Tabla | Clause 4.2 | Generado por Claude |
| B0-05 | Alcance del SGSI propuesto | MD | Clause 4.3 | Generado por Claude |
| B0-06 | Arquitectura tecnológica actual (servidores, redes, cloud, endpoints) | MD + Diagrama | Clause 4.1 | Generado por Claude |
| B0-07 | Inventario de activos de información | Excel/Tabla | Clause 8.1 + A.5.9 | Generado por Claude |
| B0-08 | Flujos de datos (cómo entra, procesa y sale la información) | MD + Diagrama | GDPR Art. 30 + Clause 4.1 | Generado por Claude |
| B0-09 | Controles de seguridad actuales (qué tiene Finvora hoy) | MD + Tabla | Clause 8.1 | Generado por Claude |
| B0-10 | Presupuesto disponible para seguridad | MD + Tabla | Clause 7.1 | Generado por Claude |
| B0-11 | Incidentes históricos de seguridad | MD + Tabla | Clause 6.1.2 | Generado por Claude |
| B0-12 | Proveedores críticos y contratos existentes | MD + Tabla | Clause 4.2 + A.5.19 | Generado por Claude |
| B0-13 | Sistemas de IA en operación (scoring crediticio, detección de fraude, análisis de riesgo) | MD + Tabla | EU AI Act + ISO 42001 | Generado por Claude |
| B0-14 | Apetito de riesgo y objetivos de certificación (voz de la dirección) | MD | Clause 5.1 + 6.2 | Generado por Claude |
| B0-15 | Regulaciones aplicables y estado actual de cumplimiento | MD + Tabla | Clause 4.2 | Generado por Claude |

---

### BLOQUE 1 - ISO 27001: Implementación del SGSI

| ID | Artefacto | Formato | Clause/Regulación | Producido por |
|---|---|---|---|---|
| B1-01 | Gap Analysis completo - Clauses 4–10 + 93 controles Annex A | Excel + MD | Clauses 4–10 + Annex A completo | Daniel |
| B1-02 | Metodología de priorización (riesgo x impacto regulatorio x costo) | MD + Tabla | Clause 6.1.2 + 6.1.3 | Daniel |
| B1-03 | Ranking de controles priorizados | Excel + Tabla | Clause 6.1.3 | Daniel |
| B1-04 | Statement of Applicability (SoA) completo | Excel + MD | Clause 6.1.3d | Daniel |
| B1-05 | Risk Treatment Plan | MD + Tabla | Clause 6.1.3e | Daniel |
| B1-06 | Plan de implementación con controles reales, herramientas y costos | MD + Tabla | Clause 8.1 | Daniel |
| B1-07 | Política de Seguridad de la Información | MD | Clause 5.2 | Daniel |
| B1-08 | Política de Control de Acceso | MD | A.5.15 + A.5.18 | Daniel |
| B1-09 | Política de Gestión de Contraseñas | MD | A.8.5 | Daniel |
| B1-10 | Política de Clasificación de la Información | MD | A.5.12 | Daniel |
| B1-11 | Política de Trabajo Remoto | MD | A.6.7 | Daniel |
| B1-12 | Política de Gestión de Incidentes | MD | A.5.24 + A.5.25 | Daniel |
| B1-13 | Vendor Assessment - proveedores críticos de Finvora | MD + Tabla | A.5.19 + A.5.20 | Daniel |
| B1-14 | Objetivos de seguridad de la información | MD | Clause 6.2 | Daniel |
| B1-15 | Executive Summary Bloque 1 para el CEO | MD | Clause 9.3 | Daniel |

---

### BLOQUE 2 - EU AI Act + NIST AI RMF + ISO 42001

| ID | Artefacto | Formato | Clause/Regulación | Producido por |
|---|---|---|---|---|
| B2-01 | Clasificación de sistemas de IA de Finvora bajo EU AI Act | MD + Tabla | EU AI Act Art. 6 + Annex III | Daniel |
| B2-02 | Análisis de obligaciones por sistema (Arts. 9–15) | MD + Tabla | EU AI Act Arts. 9–15 | Daniel |
| B2-03 | Mapeo EU AI Act ↔ ISO 27001 ↔ NIST AI RMF ↔ ISO 42001 | MD + Tabla | Todos los frameworks | Daniel |
| B2-04 | Risk Register específico de IA | Excel + Tabla | Clause 6.1.2 + EU AI Act Art. 9 | Daniel |
| B2-05 | Plan de cumplimiento EU AI Act | MD + Tabla | EU AI Act + Clause 6.1.3 | Daniel |
| B2-06 | Controles adicionales ISO 42001 para sistemas de IA | MD + Tabla | ISO 42001 Annex A | Daniel |
| B2-07 | NIST AI RMF Profile para Finvora | MD + Tabla | NIST AI RMF | Daniel |
| B2-08 | Executive Summary Bloque 2 para el CEO | MD | Clause 9.3 + EU AI Act | Daniel |

---

### BLOQUE 3 - Operación del SGSI

| ID | Artefacto | Formato | Clause/Regulación | Producido por |
|---|---|---|---|---|
| B3-01 | Métricas de seguridad post-implementación (KPIs, dashboard) | MD + Tabla | Clause 9.1 | Daniel |
| B3-02 | Simulación de incidente de seguridad - proceso completo | MD | A.5.24–A.5.28 + GDPR Art. 33 | Daniel |
| B3-03 | Informe de auditoría interna | MD + Tabla | Clause 9.2 | Daniel |
| B3-04 | No conformidades identificadas y clasificación | MD + Tabla | Clause 10.2 | Daniel |
| B3-05 | Acciones correctivas con root cause analysis | MD + Tabla | Clause 10.2 | Daniel |
| B3-06 | Revisión por la dirección - acta y decisiones | MD | Clause 9.3 | Daniel |
| B3-07 | Ciclo de mejora - qué cambiar en el siguiente ciclo | MD | Clause 10.1 | Daniel |
| B3-08 | Cambios en el entorno - cómo el SGSI absorbe un cambio mayor | MD | Clause 6.3 | Daniel |
| B3-09 | Executive Summary final para el CEO | MD | Clause 9.3 | Daniel |
| B3-10 | Informe de auditoría automatizada - output del Auditor IA | MD | Clause 9.2 | Claude API (Auditor IA) |

---

### PERSONAJES INTERACTIVOS (Claude API)

| ID | Personaje | Rol en Finvora | Contexto que conoce | Cuándo usar |
|---|---|---|---|---|
| P-01 | CISO | Chief Information Security Officer | Todo el SGSI, todos los controles, todas las decisiones de seguridad | Preguntas sobre controles, riesgos, decisiones técnicas |
| P-02 | CTO | Chief Technology Officer | Arquitectura tecnológica, sistemas de IA, infraestructura, presupuesto tech | Preguntas sobre infraestructura, sistemas de IA, viabilidad técnica |
| P-03 | Director Legal | Director de Cumplimiento Legal | GDPR, PCI DSS, EU AI Act, contratos con terceros, regulaciones | Preguntas sobre regulaciones, obligaciones legales, exclusiones del SoA |
| P-04 | CFO | Chief Financial Officer | Presupuesto de seguridad, ROI de controles, decisiones de inversión | Preguntas sobre presupuesto, priorización por costo, decisiones financieras |

| P-05 | Auditor IA | Auditor Interno Independiente | Todos los artefactos del proyecto completo | Se activa una sola vez al final. Produce B3-10. No es chat interactivo. |

> **Nota:** Cada personaje tiene fricción real - el CTO cuestiona costos, el CFO quiere recortar presupuesto, el Director Legal tiene prioridades distintas. No confirman todas las decisiones automáticamente.

---

## PARTE 2 - MAPA DE RELACIONES

### Relaciones entre artefactos

```
B0-03 (Contexto) ──────────────────→ B1-01 (Gap Analysis)
B0-07 (Inventario de activos) ─────→ B1-01 (Gap Analysis)
B0-09 (Controles actuales) ────────→ B1-01 (Gap Analysis)
B0-11 (Incidentes históricos) ─────→ B1-01 (Gap Analysis) + B1-05 (RTP)
B0-10 (Presupuesto) ───────────────→ B1-02 (Metodología priorización)
B0-15 (Regulaciones aplicables) ───→ B1-02 (Metodología priorización)

B1-01 (Gap Analysis) ──────────────→ B1-02 (Metodología priorización)
B1-02 (Metodología priorización) ──→ B1-03 (Ranking de controles)
B1-03 (Ranking de controles) ──────→ B1-04 (SoA) + B1-05 (RTP)
B1-04 (SoA) ───────────────────────→ B1-06 (Plan de implementación)
B1-05 (RTP) ───────────────────────→ B1-06 (Plan de implementación)
B1-06 (Plan de implementación) ────→ B3-01 (Métricas post-implementación)

B0-13 (Sistemas de IA) ────────────→ B2-01 (Clasificación EU AI Act)
B2-01 (Clasificación EU AI Act) ───→ B2-02 (Análisis de obligaciones)
B2-02 (Análisis de obligaciones) ──→ B2-03 (Mapeo de frameworks)
B2-03 (Mapeo de frameworks) ───────→ B2-05 (Plan de cumplimiento)
B1-04 (SoA) ───────────────────────→ B2-05 (Plan de cumplimiento)
B1-06 (Plan de implementación) ────→ B2-05 (Plan de cumplimiento)

B3-01 (Métricas) ──────────────────→ B3-06 (Revisión por la dirección)
B3-03 (Auditoría interna) ─────────→ B3-04 (No conformidades)
B3-04 (No conformidades) ──────────→ B3-05 (Acciones correctivas)
B3-05 (Acciones correctivas) ──────→ B3-07 (Ciclo de mejora)
B3-02 (Incidente simulado) ────────→ B3-04 (No conformidades) + B3-06 (Revisión)
```

### Relaciones artefacto → Clause ISO 27001

| Artefacto | Clause(s) relacionado(s) |
|---|---|
| B0-01, B0-03, B0-04, B0-05 | Clause 4 (Contexto) |
| B0-02, B0-14, B1-07 | Clause 5 (Liderazgo) |
| B1-01 | Clauses 4–10 + Annex A completo (el gap analysis evalúa todo ISO 27001) |
| B1-02, B1-03, B1-04, B1-05, B1-14 | Clause 6 (Planificación) |
| B0-10, B0-02 | Clause 7 (Soporte) |
| B0-07, B0-09, B1-06 | Clause 8 (Operación) |
| B3-01, B3-03, B3-06 | Clause 9 (Evaluación del desempeño) |
| B3-04, B3-05, B3-07 | Clause 10 (Mejora) |

### Relaciones artefacto → Regulación externa

| Artefacto | Regulación relacionada |
|---|---|
| B0-08, B0-12, B1-13 | GDPR |
| B0-07, B0-09, B1-06 | PCI DSS |
| B0-13, B2-01, B2-02, B2-03, B2-04, B2-05 | EU AI Act |
| B2-03, B2-06, B2-07 | ISO 42001 + NIST AI RMF |

### Relaciones artefacto → Control Annex A

> Cada control del Annex A en el Gap Analysis (B1-01) tiene relación directa con al menos uno de los artefactos de políticas (B1-07 a B1-12), el plan de implementación (B1-06), y el SoA (B1-04). Estas relaciones se mapean individualmente en la web para cada uno de los 93 controles.

---

## PARTE 3 - ARQUITECTURA DE NAVEGACIÓN

### Estructura general de la web

```
FINVORA SGSI - Centro de Control de Seguridad
│
├── 🏠 DASHBOARD PRINCIPAL
│   ├── Estado general del SGSI (gauge de madurez)
│   ├── Controles implementados vs pendientes (progreso)
│   ├── Nivel de riesgo residual actual
│   ├── Estado de cumplimiento por framework
│   │   ├── ISO 27001: X%
│   │   ├── GDPR: X%
│   │   ├── EU AI Act: X%
│   │   └── PCI DSS: X%
│   ├── Últimos artefactos agregados
│   └── Toggle idioma: EN / ES
│
├── 🏢 FINVORA - La Empresa
│   ├── Consultant Onboarding Brief (B0-00)
│   ├── Perfil corporativo (B0-01)
│   ├── Organigrama (B0-02)
│   ├── Alcance del SGSI propuesto (B0-05)
│   ├── Contexto interno y externo (B0-03)
│   ├── Partes interesadas (B0-04)
│   ├── Arquitectura tecnológica (B0-06)
│   ├── Inventario de activos (B0-07)
│   ├── Flujos de datos (B0-08)
│   ├── Controles actuales (B0-09)
│   ├── Presupuesto de seguridad (B0-10)
│   ├── Incidentes históricos (B0-11)
│   ├── Proveedores y contratos (B0-12)
│   ├── Sistemas de IA (B0-13)
│   ├── Apetito de riesgo (B0-14)
│   └── Regulaciones aplicables (B0-15)
│
├── 📊 ISO 27001 - Implementación
│   ├── Gap Analysis (B1-01)
│   │   ├── Vista por dominio (5, 6, 7, 8)
│   │   ├── Vista por nivel de riesgo
│   │   ├── Vista por estado (cumple / parcial / no cumple)
│   │   └── Detalle de cada control (tarjeta expandible)
│   ├── Metodología de priorización (B1-02)
│   ├── Ranking de controles (B1-03)
│   ├── Statement of Applicability (B1-04)
│   │   ├── Controles aplicables
│   │   ├── Controles excluidos con justificación
│   │   └── Estado de implementación
│   ├── Risk Treatment Plan (B1-05)
│   ├── Plan de implementación (B1-06)
│   ├── Políticas de seguridad
│   │   ├── Política de Seguridad de la Información (B1-07)
│   │   ├── Política de Control de Acceso (B1-08)
│   │   ├── Política de Gestión de Contraseñas (B1-09)
│   │   ├── Política de Clasificación de la Información (B1-10)
│   │   ├── Política de Trabajo Remoto (B1-11)
│   │   └── Política de Gestión de Incidentes (B1-12)
│   ├── Vendor Assessment (B1-13)
│   ├── Objetivos de seguridad (B1-14)
│   └── Executive Summary Bloque 1 (B1-15)
│
├── 🤖 EU AI Act + Frameworks de IA
│   ├── Sistemas de IA de Finvora (B0-13)
│   ├── Clasificación bajo EU AI Act (B2-01)
│   ├── Análisis de obligaciones (B2-02)
│   ├── Mapeo de frameworks (B2-03)
│   ├── Risk Register de IA (B2-04)
│   ├── Plan de cumplimiento EU AI Act (B2-05)
│   ├── Controles ISO 42001 (B2-06)
│   ├── NIST AI RMF Profile (B2-07)
│   └── Executive Summary Bloque 2 (B2-08)
│
├── ⚙️ Operación del SGSI
│   ├── Métricas post-implementación (B3-01)
│   ├── Incidente simulado (B3-02)
│   ├── Auditoría interna (B3-03)
│   ├── No conformidades (B3-04)
│   ├── Acciones correctivas (B3-05)
│   ├── Revisión por la dirección (B3-06)
│   ├── Ciclo de mejora (B3-07)
│   ├── Cambios en el entorno (B3-08)
│   └── Executive Summary Final (B3-09)
│
├── 🗺️ MAPA DE RELACIONES
│   ├── Vista grafo - todos los artefactos conectados visualmente
│   ├── Vista por clause ISO 27001
│   ├── Vista por regulación (GDPR, EU AI Act, PCI DSS)
│   └── Vista por control Annex A
│
└── 💬 CHAT - Equipo Directivo Finvora [BOTÓN FLOTANTE EN TODA LA WEB]
    ├── CISO - Chief Information Security Officer
    ├── CTO - Chief Technology Officer
    ├── Director Legal
    └── CFO - Chief Financial Officer
```

---

### Comportamiento de navegación

**Tarjeta de control (elemento central de la web):**
Cada uno de los 93 controles del Annex A tiene su propia tarjeta con:
- Número y nombre del control
- Dominio al que pertenece
- Puntuación en el gap analysis
- Estado en el SoA (aplicable / no aplicable / excluido)
- Nivel de riesgo residual
- Control real seleccionado en el plan de implementación
- Herramienta / proveedor específico
- Costo de implementación
- Clauses de ISO 27001 relacionados (links)
- Regulaciones externas relacionadas (links)
- Controles del Annex A relacionados (links)
- Artefactos relacionados (links directos)

**Navegación entre relaciones:**
- Desde cualquier artefacto → ver todos los artefactos relacionados
- Desde cualquier clause → ver todos los artefactos que lo cumplen
- Desde cualquier control → ver su posición en gap analysis, SoA y plan de implementación
- Desde cualquier regulación → ver todos los controles y artefactos que la cubren

**Chat flotante contextual:**
- Disponible en toda la web como botón flotante
- Al abrir, el personaje sabe en qué sección está el usuario
- Cada personaje tiene el contexto completo de Finvora inyectado en su system prompt
- Los personajes tienen fricción real - cuestionan, priorizan diferente, tienen conflictos de interés

**Sistema V1 / V2 - Control de versiones post-auditoría:**
- Cada artefacto tiene toggle V1 / V2 en su propia tarjeta
- V1 = documento original, nunca se borra
- V2 = documento corregido post-auditoría
- Banner de no conformidad: muestra hallazgo del auditor + acción correctiva + cambios resaltados en verde
- Si un artefacto no tiene NCs: solo muestra V1 sin toggle

**Toggle de idioma:**
- Botón EN / ES visible en toda la web
- Cambia todo el contenido entre inglés y español
- El contenido técnico (nombres de controles, clauses) mantiene terminología oficial en inglés

---

### Dashboard principal - elementos visuales

| Elemento | Tipo | Datos que muestra |
|---|---|---|
| Gauge de madurez SGSI | Semicírculo 0-100% | Porcentaje de controles implementados vs total aplicables |
| Estado por framework | 4 barras de progreso | ISO 27001, GDPR, EU AI Act, PCI DSS |
| Mapa de calor de riesgos | Matriz 5x5 | Riesgos por probabilidad e impacto |
| Distribución de controles | Gráfico de dona | Implementados / En progreso / Pendientes / Excluidos |
| Timeline del proyecto | Línea de tiempo | Hitos completados y próximos |
| Últimos artefactos | Feed | Los últimos 5 artefactos agregados al proyecto |

---

### Secciones vacías vs completadas

La web se construye desde el primer día con todas las secciones visibles. Las secciones sin contenido muestran un estado "En construcción" con la fecha estimada de completación. Esto permite:
- Ver el proyecto crecer en tiempo real
- Mostrar la arquitectura completa desde el inicio
- Demostrar planificación incluso antes de tener todo el contenido

---

## PARTE 4 - MAPEO CONTROL ANNEX A → ARTEFACTO DE EVIDENCIA

> Cada control implementado se respalda con uno o varios artefactos de evidencia. No hay 93 documentos separados - hay politicas bien estructuradas que cubren grupos de controles relacionados.

| Artefacto de evidencia | Controles Annex A que cubre |
|---|---|
| Politica de Seguridad de la Informacion (B1-07) | A.5.1, A.5.2 |
| Politica de Control de Acceso (B1-08) | A.5.15, A.5.16, A.5.17, A.5.18 |
| Politica de Gestion de Contrasenas (B1-09) | A.8.5 |
| Politica de Clasificacion de la Informacion (B1-10) | A.5.10, A.5.11, A.5.12, A.5.13 |
| Politica de Trabajo Remoto (B1-11) | A.6.7 |
| Politica de Gestion de Incidentes (B1-12) | A.5.24, A.5.25, A.5.26, A.5.27, A.5.28 |
| Vendor Assessment (B1-13) | A.5.19, A.5.20, A.5.21, A.5.22, A.5.23 |
| Plan de implementacion (B1-06) | Todos los controles aplicables del SoA |
| Risk Treatment Plan (B1-05) | A.5.7, A.8.8 |
| Arquitectura tecnologica (B0-06) | A.8.20, A.8.21, A.8.22 |
| Flujos de datos (B0-08) | A.5.14 |
| Inventario de activos (B0-07) | A.5.9, A.5.10 |
| Incidente simulado (B3-02) | A.5.24, A.5.25, A.5.26, A.5.27, A.5.28, A.6.8 |
| Metricas post-implementacion (B3-01) | A.5.29, A.5.30 |

> **Nota:** Este mapeo se completara en detalle durante la construccion del proyecto una vez que el gap analysis defina que controles son aplicables para Finvora. Los controles excluidos del SoA no requieren artefacto de evidencia, solo justificacion en el SoA.

---

## RESUMEN EJECUTIVO DEL ESQUEMA

| Dimensión | Detalle |
|---|---|
| Total de artefactos | 48 artefactos (16 Bloque 0 + 15 Bloque 1 + 8 Bloque 2 + 10 Bloque 3) |
| Personajes interactivos | 5 (CISO, CTO, Director Legal, CFO, Auditor IA - activacion unica) |
| Secciones principales | 7 (Dashboard, Empresa, ISO 27001, EU AI Act, Operación, Mapa, Chat) |
| Tecnología | React + Tailwind CSS |
| Idiomas | Inglés y español con toggle |
| Relaciones documentadas | Artefacto↔Artefacto, Artefacto↔Clause, Artefacto↔Regulación, Artefacto↔Control |
| Construcción | Progresiva - cada artefacto completado se integra inmediatamente |

---

*Esquema elaborado el 3 de junio de 2026.*
*Siguiente paso: Brief técnico completo para Claude Code.*
