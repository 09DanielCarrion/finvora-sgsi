# GENERATE FINVORA - Bloque 0
## Instrucciones para generar la empresa ficticia completa

> **Instrucciones para Claude Code:**
> Este archivo genera los 15 artefactos del Bloque 0 - el perfil completo de Finvora S.A.C.
> Cada artefacto debe sentirse como un documento real de una empresa real.
> No generes información genérica. Cada dato debe tener coherencia interna con los demás.
> Al terminar, guarda cada artefacto en `artifacts/B0/` con su ID correspondiente.

---

## CONTEXTO GENERAL DE FINVORA

Antes de generar los artefactos, interioriza este contexto:

Finvora S.A.C. es una fintech peruana fundada en 2019 por dos ex-banqueros del BBVA Continental. Empezaron como una plataforma de pagos B2B para empresas medianas que querían cobrar y pagar sin depender de la banca tradicional. En 2021 pivotaron hacia el crédito digital - otorgan líneas de crédito a PYMEs peruanas usando scoring crediticio propio basado en IA. En 2023 empezaron a expandirse hacia Colombia y Chile, y en 2024 cerraron un contrato con una empresa alemana de supply chain (Hexalink GmbH) que los obliga a cumplir con GDPR y los pone en el radar del EU AI Act.

Hoy Finvora tiene 95 empleados, procesa $50M anuales en transacciones, tiene deuda de Series A con un fondo de capital de riesgo americano (Meridian Ventures), y enfrenta presión simultánea de tres frentes: crecer rápido, cumplir regulaciones europeas, y no quebrar en el intento.

El equipo directivo tiene fricciones reales:
- El CEO (Carlos Mendoza, 41) quiere certificarse en ISO 27001 porque Hexalink GmbH lo exige como condición del contrato para 2027
- El CTO (Andrea Castillo, 36) dice que el equipo técnico no tiene tiempo para "papelería de seguridad" - están en medio de un rediseño de la plataforma
- El CFO (Roberto Quispe, 44) aprobó un presupuesto de seguridad de $85,000 USD para el año, que el CISO considera insuficiente
- El Director Legal (Marco Villanueva, 39) está preocupado por GDPR y EU AI Act pero no entiende bien la parte técnica
- La CISO (Isabella Torres, 33) fue contratada hace 8 meses, viene de una consultora ISO 27001, y está intentando estructurar todo desde cero

---

## CONTEXTO DEL CONSULTOR

Antes de generar los artefactos, interioriza también el rol del consultor:

Daniel Carrión es un GRC Consultant externo contratado por Isabella Torres para liderar la implementación del SGSI. Tiene certificación PECB ISO 27001 Lead Implementer (Provisional Implementer). Es su primer engagement como consultor independiente. Isabella lo contrató porque el equipo interno de seguridad no tiene capacidad para hacer la implementación completa en el tiempo requerido. Daniel tiene acceso completo a toda la documentación, puede entrevistar a cualquier persona de la empresa, y reporta semanalmente a Isabella y mensualmente al CEO.

---

## INSTRUCCIONES DE GENERACIÓN

Genera los 16 artefactos en orden (B0-00 primero, B0-15 último). Cada uno debe:
1. Ser coherente con todos los demás artefactos
2. Contener información específica, no genérica
3. Incluir tensiones y problemas reales, no solo aspectos positivos
4. Usar nombres, números y fechas concretas
5. Estar escrito en inglés (el proyecto apunta a hiring managers EU/USA)
6. Guardarse en `artifacts/B0/[ID]-[nombre].md`

---

## ARTEFACTO B0-00 - Consultant Onboarding Brief

**Archivo:** `artifacts/B0/B0-00-consultant-onboarding-brief.md`

Genera el documento de onboarding que Isabella Torres le entrega a Daniel Carrión en su primer día. Este es el documento más importante del Bloque 0 - define el mandato, el contexto y las expectativas. Debe sentirse como un briefing real de una CISO a un consultor externo.

**Engagement Overview:**
- Consultant: Daniel Carrión, GRC Consultant - ISO 27001 Lead Implementer (PECB Provisional)
- Client: Finvora S.A.C.
- Engagement start: [fecha de inicio del proyecto]
- Engagement duration: 8 months
- Primary contact: Isabella Torres, CISO (isabella.torres@finvora.com)
- Secondary contact: Carlos Mendoza, CEO (carlos.mendoza@finvora.com)
- Contract type: Fixed-fee consulting contract - $24,000 USD total ($3,000/month)

**Engagement Objective:**
Lead the full ISO 27001:2022 implementation for Finvora S.A.C. and prepare the organization for certification audit before December 31, 2026. This is a contractual requirement from Hexalink GmbH (see B0-15 for regulatory context).

**Your Mandate:**
- Conduct a complete gap analysis of all 10 ISO 27001 clauses and 93 Annex A controls
- Define and document the ISMS scope
- Lead the risk assessment and risk treatment process
- Develop the Statement of Applicability (SoA)
- Create or update all mandatory policies and procedures
- Prepare the organization for the Stage 1 and Stage 2 certification audits
- You are NOT responsible for technical implementation - the engineering team executes. You design, document, and verify.

**Access Granted:**
- Full access to all internal documentation (Google Drive, Confluence, Notion)
- Interview access to all employees - coordinate through department heads
- Read access to AWS CloudTrail logs and security dashboards
- Access to GitHub (read-only) to review code security practices
- Access to Datadog monitoring dashboards
- You will NOT have access to: production databases, customer data, financial systems

**Key Stakeholders and Their Posture:**

| Stakeholder | Role | Posture toward ISMS | Your approach |
|---|---|---|---|
| Isabella Torres | CISO | Champion - fully supportive, hired you | Weekly sync, your main ally |
| Carlos Mendoza | CEO | Supportive but impatient - wants cert by Dec 2026 | Monthly updates, focus on business outcomes |
| Andrea Castillo | CTO | Resistant - engineering is "too busy" | Build trust, show ISO 27001 helps engineering |
| Roberto Quispe | CFO | Neutral - watches budget carefully | Always justify ROI, quantify risk in dollars |
| Marco Villanueva | Director Legal | Engaged - worried about GDPR/EU AI Act | Collaborate on regulatory mapping |
| Luis Paredes | Security Analyst | Eager to learn - will support your work | Delegate documentation tasks, mentor him |

**Known Issues You Will Find (Isabella's informal briefing):**
Isabella has prepared you for what you will encounter. Do not be surprised by:
1. No formal security policies exist (the last one was written in 2021 and nobody follows it)
2. Secrets of AWS hardcoded in 2 GitHub repositories - partially remediated, still a risk
3. 3 unresolved access accounts from former employees - Luis is working on it
4. The October 2024 GitHub incident was never formally investigated - you will need to document it retrospectively
5. PCI DSS compliance is overdue - Stripe has sent 2 warnings - this needs to be escalated immediately
6. The CTO will push back on everything that touches the engineering workflow - be prepared for that conversation
7. The CFO approved $39,000 for your engagement and initial security tools - that is the real budget constraint

**Your First Week - Suggested Agenda:**
- Day 1: Review all B0 documentation (this brief + company profile + org chart)
- Day 2: Interview Isabella Torres (2 hours) - deep dive on current security posture
- Day 3: Interview Andrea Castillo (CTO) - understand technology architecture and constraints
- Day 4: Interview Marco Villanueva (Legal) - understand regulatory priorities
- Day 5: Interview Roberto Quispe (CFO) - understand budget reality and ROI expectations
- Week 2: Begin gap analysis - start with Clause 4 and 5, then move to Annex A

**Deliverables Timeline:**

| Deliverable | Due Date | Clause |
|---|---|---|
| ISMS Scope Document | Month 1 | Clause 4.3 |
| Gap Analysis Complete | Month 2 | Clauses 4-10 + Annex A |
| Risk Assessment | Month 2-3 | Clause 6.1.2 |
| Statement of Applicability | Month 3 | Clause 6.1.3d |
| Risk Treatment Plan | Month 3 | Clause 6.1.3e |
| All Mandatory Policies | Month 4-5 | Clauses 5.2, 7.5 |
| Implementation Plan | Month 4 | Clause 8.1 |
| Internal Audit | Month 6-7 | Clause 9.2 |
| Management Review | Month 7 | Clause 9.3 |
| Stage 1 Audit Ready | Month 7 | - |
| Stage 2 Audit Ready | Month 8 | - |

**Important Notes:**
- You are the lead, but Isabella is accountable to the CEO. Keep her informed of everything.
- Any finding that requires CEO decision (budget, org changes) goes through Isabella first.
- The engineering team does not report to you. Influence, do not command.
- Document everything. Every interview, every decision, every exception. This is an audit-ready project.
- If you find something that looks like a potential data breach or regulatory violation, escalate to Isabella immediately.

*Document prepared by: Isabella Torres, CISO*
*Date: [engagement start date]*

---

## ARTEFACTO B0-01 - Perfil Corporativo

**Archivo:** `artifacts/B0/B0-01-corporate-profile.md`

Genera un perfil corporativo completo que incluya:

**Company Overview:**
- Nombre legal completo, RUC, fecha de constitución, sede principal
- Historia de la empresa: desde la fundación en 2019, el pivot de 2021, la expansión regional de 2023, el contrato con Hexalink GmbH en 2024
- Misión, visión y valores (que sean coherentes con una fintech de crecimiento agresivo)
- Estructura societaria: menciona que Meridian Ventures tiene 23% de participación y tiene un asiento en el directorio

**Business Model:**
- Líneas de negocio actuales con porcentaje de revenue: Pagos B2B (35%), Crédito digital PYMEs (55%), Servicios financieros API (10%)
- Clientes principales por segmento - mínimo 8 clientes ficticios con nombres, industria y volumen aproximado
- Geografías: Perú (80%), Colombia (12%), Chile (5%), Alemania/EU vía Hexalink (3%)

**Strategic Objectives 2026-2027:**
- Certificación ISO 27001 antes de diciembre 2026 (requisito contractual Hexalink)
- Expansión a México en Q3 2026
- Lanzamiento de producto de seguros paramétricos en Q4 2026
- Serie B fundraising en 2027

**Key Risks (from board perspective):**
- Dependencia del contrato Hexalink (representa 18% del revenue)
- Regulación creciente en todos los mercados
- Deuda técnica acumulada por crecimiento rápido
- Rotación de personal técnico (30% anual en el equipo de ingeniería)

---

## ARTEFACTO B0-02 - Organigrama

**Archivo:** `artifacts/B0/B0-02-organizational-chart.md`

Genera el organigrama completo con:

**Executive Team (C-Suite):**
- CEO: Carlos Mendoza - perfil detallado (background, responsabilidades, relación con seguridad)
- CTO: Andrea Castillo - perfil detallado (stack técnico que gestiona, postura frente a seguridad)
- CFO: Roberto Quispe - perfil detallado (prioridades financieras, visión del ROI de seguridad)
- CISO: Isabella Torres - perfil detallado (8 meses en el cargo, viene de consultoría ISO 27001, reporta al CEO)
- Director Legal & Compliance: Marco Villanueva - perfil detallado (enfocado en GDPR y regulación financiera)
- Chief Product Officer: Sofía Herrera - perfil detallado (gestiona el roadmap de producto)

**Departamentos con headcount real:**
- Engineering (28 personas): Backend (12), Frontend (8), DevOps/Infra (4), QA (4)
- Product (8 personas): Product Managers (3), UX/UI (3), Data Analysts (2)
- Sales & Business Development (15 personas): por geografía
- Operations & Customer Success (18 personas)
- Finance & Accounting (7 personas)
- Legal & Compliance (4 personas incluyendo Marco)
- HR (3 personas)
- Security (CISO Isabella + 1 Security Analyst junior + 1 DevSecOps part-time)
- Marketing (5 personas)
- Executive Assistants & Admin (4 personas)

**Reporting lines relevantes para el SGSI:**
- Isabella Torres (CISO) reporta directamente al CEO
- El Security Analyst junior (Luis Paredes, 26, 4 meses en la empresa) reporta a Isabella
- El DevSecOps part-time (contractor, 20h/semana) reporta a Isabella con línea punteada al CTO
- Marco Villanueva (Legal) tiene coordinación lateral con Isabella para temas regulatorios

**Friction points documentados:**
- El equipo de Engineering no tiene claridad sobre quién aprueba excepciones de seguridad - ¿CTO o CISO?
- No existe un Comité de Seguridad formal todavía
- Las decisiones de seguridad en producto las toma el CPO sin consultar siempre a la CISO

---

## ARTEFACTO B0-03 - Análisis de Contexto (FODA de Seguridad)

**Archivo:** `artifacts/B0/B0-03-context-analysis.md`

Genera un análisis de contexto completo bajo el Clause 4.1 de ISO 27001:

**Internal Factors (positive):**
- CISO con experiencia en ISO 27001 recién contratada
- Equipo técnico competente con cultura DevOps
- CEO comprometido con la certificación por razones contractuales
- Infraestructura 100% en AWS (facilita controles de seguridad cloud)
- Proceso de desarrollo con CI/CD establecido

**Internal Factors (negative):**
- Equipo de seguridad de solo 2.5 personas para 95 empleados
- Deuda técnica significativa: 40% del código de la plataforma de crédito tiene más de 3 años sin revisión de seguridad
- No existe documentación formal de la arquitectura de sistemas
- Políticas de seguridad inexistentes o desactualizadas (la última fue escrita en 2021)
- Alta rotación en ingeniería: 30% anual - el conocimiento de seguridad se pierde
- El proceso de onboarding no incluye formación en seguridad
- Accesos de ex-empleados no siempre se revocan a tiempo (detectado en auditoría informal de Isabella)
- Presupuesto de seguridad: $85,000 USD/año - insuficiente para el tamaño y regulaciones de la empresa

**External Factors (positive):**
- Creciente demanda de fintechs certificadas ISO 27001 en el mercado enterprise
- Marco regulatorio peruano (SBS) aún no tan estricto como el europeo - ventana de tiempo
- Herramientas de seguridad cloud de AWS disponibles y parcialmente pagadas
- Comunidad GRC en crecimiento en Latinoamérica

**External Factors (negative):**
- EU AI Act en vigor: los sistemas de IA de Finvora (scoring crediticio) clasifican como alto riesgo bajo Annex III
- GDPR: el contrato con Hexalink GmbH implica procesamiento de datos de empleados europeos
- PCI DSS v4.0: los procesadores de pago empiezan a exigir cumplimiento a partners como Finvora
- Regulación financiera peruana en evolución: SBS Circular G-185 sobre gestión de riesgos tecnológicos
- Competidores directos (Kueski, Konfío) ya tienen ISO 27001 - ventaja competitiva en riesgo
- Amenazas crecientes: phishing dirigido a fintechs en LATAM aumentó 340% en 2024 según CERT-PE

**SWOT Matrix para seguridad:**
Genera la matriz completa con los factores anteriores organizados en las 4 cuadrantes.

---

## ARTEFACTO B0-04 - Partes Interesadas

**Archivo:** `artifacts/B0/B0-04-interested-parties.md`

Genera la tabla completa de partes interesadas con:

**Para cada parte interesada incluye:**
- Nombre/tipo de parte interesada
- Descripción y relación con Finvora
- Requisitos de seguridad específicos que tienen
- Cómo se gestionan esos requisitos actualmente
- Nivel de criticidad (High/Medium/Low)

**Partes interesadas a incluir:**
1. Hexalink GmbH (cliente EU) - requiere ISO 27001, GDPR, EU AI Act compliance
2. Meridian Ventures (inversor) - requiere reporting de riesgos de seguridad y cyber insurance
3. SBS - Superintendencia de Banca y Seguros del Perú - regulación local
4. SUNAT - obligaciones tributarias digitales
5. AWS (proveedor cloud) - shared responsibility model
6. Stripe (procesador de pagos) - requiere cumplimiento PCI DSS
7. Clientes PYMEs peruanas - esperan protección de datos financieros
8. Clientes corporativos Colombia/Chile - requisitos de seguridad contractuales
9. Empleados - necesitan políticas claras y formación
10. Directorio (incluye Meridian Ventures) - quiere visibilidad de riesgos
11. Auditores externos - revisión anual de estados financieros incluye riesgos tecnológicos
12. INDECOPI - autoridad peruana de protección de datos personales
13. Proveedores de datos crediticios (Equifax Perú, Experian) - DPAs requeridos
14. Partners de integración API (8 empresas) - requisitos de seguridad en SLAs

---

## ARTEFACTO B0-05 - Alcance del SGSI

**Archivo:** `artifacts/B0/B0-05-isms-scope.md`

Genera el documento de alcance del SGSI bajo Clause 4.3:

**In scope:**
- Plataforma de crédito digital (sistema principal)
- Plataforma de pagos B2B
- API de servicios financieros
- Infraestructura AWS (producción y staging)
- Oficinas de Lima (sede principal, Miraflores)
- Todos los empleados que acceden a sistemas de producción
- Proveedores con acceso a datos de clientes

**Out of scope (con justificación):**
- Oficinas de Colombia y Chile (operaciones nacientes, menos del 15% del revenue, serán incluidas en el siguiente ciclo de certificación)
- Sistemas legacy de contabilidad (próximos a ser reemplazados en Q3 2026)
- El proceso de expansión a México (aún no operativo)

**Justificación de las exclusiones:**
Cada exclusión debe justificarse explicando por qué no afecta la capacidad de Finvora de lograr los resultados del SGSI ni los requisitos de las partes interesadas.

**ISMS boundaries:**
Descripción detallada de las interfaces con sistemas y entidades fuera del alcance.

---

## ARTEFACTO B0-06 - Arquitectura Tecnológica

**Archivo:** `artifacts/B0/B0-06-technology-architecture.md`

Genera la documentación de arquitectura tecnológica actual:

**Cloud Infrastructure (AWS):**
- Región principal: us-east-1 (N. Virginia) - elegida en 2019, no migrada aún a sa-east-1 por costo
- Región secundaria (DR): us-west-2 (Oregon) - solo para backups, no hot standby
- Servicios AWS en uso: EC2, RDS (PostgreSQL), S3, Lambda, API Gateway, CloudFront, SQS, SNS, Cognito, CloudWatch, WAF (no habilitado en todos los endpoints)
- VPC con 3 subnets: public, private, database - pero la segregación no se aplica consistentemente
- No se usa AWS Organizations ni SCPs - todo en una sola cuenta AWS

**Application Stack:**
- Backend: Python (FastAPI) + Node.js (microservicios legacy)
- Frontend: React + Next.js
- Base de datos: PostgreSQL (RDS) para transacciones, MongoDB Atlas para datos no estructurados
- Cache: Redis (ElastiCache)
- Message queue: SQS
- CI/CD: GitHub Actions → ECR → ECS Fargate
- Monitoreo: CloudWatch + Datadog (parcial, solo en servicios críticos)

**AI/ML Systems:**
- Scoring crediticio: modelo propio en Python (scikit-learn + XGBoost), entrenado con datos de Equifax Perú y datos transaccionales propios. Desplegado en SageMaker. Se retrain mensual.
- Detección de fraude: modelo de anomalías en tiempo real, desplegado como Lambda function. Latencia < 200ms requerida.
- Análisis de riesgo automatizado: combina scoring crediticio con datos de comportamiento de pago. Output: decisión de crédito automática para montos < $5,000 USD.

**Known Technical Debt & Security Issues:**
- 3 microservicios legacy en Node.js sin mantenimiento activo desde 2022
- Secrets de AWS hardcodeados en 2 repositorios de GitHub (detectado por Isabella en enero 2026, aún no completamente remediado)
- WAF no habilitado en 4 endpoints de la API de pagos
- Logs de aplicación no centralizados - cada servicio loguea por separado
- No existe gestión formal de vulnerabilidades - se parchea cuando el equipo recuerda
- MongoDB Atlas sin IP allowlist configurada correctamente
- MFA no habilitado para todos los usuarios de AWS IAM

**Endpoints y APIs:**
- API pública: api.finvora.com (REST, 847 endpoints documentados en Swagger)
- API de socios: partners.finvora.com (acceso restringido por API key, sin OAuth)
- Panel de administración: admin.finvora.com (solo acceso interno, pero expuesto a internet)
- Webhooks de Stripe: sin validación de firma en 3 de 8 endpoints

---

## ARTEFACTO B0-07 - Inventario de Activos

**Archivo:** `artifacts/B0/B0-07-asset-inventory.md`

Genera el inventario completo de activos de información:

**Formato de la tabla:**

| Asset ID | Asset Name | Type | Classification | Owner | Location | Critical | Notes |
|---|---|---|---|---|---|---|---|

**Tipos de activos a incluir (mínimo 40 activos):**

*Information Assets:*
- Datos de clientes PYMEs (nombre, RUC, estados financieros, historial crediticio)
- Datos de transacciones (monto, origen, destino, timestamp)
- Modelos de IA (scoring crediticio, detección de fraude)
- Datos de entrenamiento de los modelos de IA
- Código fuente de la plataforma
- Configuraciones de infraestructura (Terraform, CloudFormation)
- Claves de API y secrets (AWS, Stripe, Equifax)
- Datos de empleados
- Contratos con clientes y proveedores
- Reportes financieros
- Datos de Hexalink GmbH (datos de empleados europeos)

*Software Assets:*
- Plataforma de crédito (aplicación principal)
- Plataforma de pagos
- Sistema de scoring crediticio (SageMaker)
- Panel de administración
- Sistema de monitoreo (Datadog)
- GitHub (repositorios de código)
- Jira, Confluence, Slack (herramientas de productividad)

*Hardware/Infrastructure Assets:*
- Infraestructura AWS (instancias EC2, RDS, etc.)
- Laptops corporativas (95 empleados)
- Teléfonos corporativos (equipo de ventas: 15)
- Servidores físicos (ninguno - 100% cloud)

*Service Assets:*
- AWS (proveedor cloud principal)
- Stripe (procesamiento de pagos)
- Equifax Perú (datos crediticios)
- GitHub (repositorios)
- Datadog (monitoreo)
- MongoDB Atlas (base de datos)

**Clasificación de datos:**
- Confidential: datos de clientes, modelos de IA, secrets
- Internal: código fuente, configuraciones, contratos
- Public: documentación de API pública, marketing

---

## ARTEFACTO B0-08 - Flujos de Datos

**Archivo:** `artifacts/B0/B0-08-data-flows.md`

Genera la documentación de flujos de datos bajo GDPR Art. 30 (registro de actividades de tratamiento):

**Flujo 1 - Onboarding de cliente PYME:**
Describe paso a paso cómo los datos de una PYME entran al sistema: formulario web → validación KYC → consulta Equifax → almacenamiento en RDS → notificación por email/SMS. Incluye qué datos se recopilan, dónde se almacenan, quién tiene acceso y por cuánto tiempo se retienen.

**Flujo 2 - Solicitud y aprobación de crédito:**
Datos del solicitante → scoring crediticio (SageMaker) → decisión automática o manual → notificación → desembolso vía API bancaria. Incluye el flujo de datos hacia el modelo de IA y cómo se registra la decisión.

**Flujo 3 - Procesamiento de pago:**
Origen de pago → validación Finvora → Stripe → banco destino → confirmación. Incluye datos de tarjeta (nunca almacenados directamente), tokens de Stripe, y logs de transacción.

**Flujo 4 - Datos de Hexalink GmbH (transferencia internacional):**
Datos de empleados europeos de Hexalink → plataforma de Finvora → almacenamiento en us-east-1 (AWS N. Virginia). Este flujo es el más crítico bajo GDPR - los datos de ciudadanos europeos están almacenados en servidores en EE.UU. sin mecanismo de transferencia adecuado documentado actualmente.

**Flujo 5 - Entrenamiento de modelos de IA:**
Datos históricos de crédito → preprocesamiento → entrenamiento en SageMaker → modelo desplegado. Incluye qué datos personales se usan para entrenar, si están anonimizados, y por cuánto tiempo se retienen los datos de entrenamiento.

**Data Retention Policies (current state - incomplete):**
Documenta que Finvora actualmente no tiene una política formal de retención de datos. Los datos se retienen indefinidamente en la mayoría de los casos. Esto es un hallazgo de compliance crítico.

---

## ARTEFACTO B0-09 - Controles de Seguridad Actuales

**Archivo:** `artifacts/B0/B0-09-current-security-controls.md`

Genera el estado actual de los controles de seguridad - honesto, con lo que funciona y lo que no:

**Formato por dominio ISO 27001:**

Para cada control incluye:
- Estado: Implemented / Partial / Not Implemented
- Descripción de lo que existe actualmente
- Gaps identificados
- Evidencia disponible (o falta de ella)

**Controles que SÍ existen (parcialmente):**
- Autenticación con contraseñas: existe pero sin política formal de complejidad
- Antivirus en laptops: instalado en ~80% de los equipos, no en todos
- Backups de base de datos: automatizados en RDS, pero no se prueban regularmente
- Control de acceso a producción: existe pero los permisos son demasiado amplios (muchos usuarios con acceso admin)
- HTTPS en todos los endpoints públicos: sí
- GitHub con repositorios privados: sí
- AWS CloudTrail habilitado: sí, pero los logs no se revisan activamente

**Controles que NO existen:**
- Política formal de seguridad de la información
- Proceso de gestión de vulnerabilidades
- Gestión formal de incidentes de seguridad
- Programa de security awareness para empleados
- Proceso de offboarding seguro (se detectaron 7 cuentas activas de ex-empleados)
- MFA en todos los sistemas críticos (solo en AWS console, no en admin panel ni GitHub para todos)
- Gestión de parches formal
- Pruebas de penetración (nunca se ha hecho una)
- DPA firmados con todos los proveedores que manejan datos personales
- Inventario de activos formal
- Clasificación de datos
- Plan de continuidad del negocio

**Notable incident (documentado informalmente):**
En octubre 2024 un desarrollador accidentalmente hizo público un repositorio de GitHub que contenía credenciales de AWS de un entorno de staging. Las credenciales fueron rotadas en 4 horas pero no hay certeza de si fueron explotadas. No existe un informe formal del incidente.

---

## ARTEFACTO B0-10 - Presupuesto de Seguridad

**Archivo:** `artifacts/B0/B0-10-security-budget.md`

Genera el documento de presupuesto de seguridad:

**Presupuesto aprobado 2026: $85,000 USD**

Desglose de lo ya comprometido:
- Herramientas de seguridad existentes (Datadog partial, antivirus): $18,000/año
- Salario Security Analyst junior (Luis Paredes): $28,800/año (incluye beneficios)
- DevSecOps contractor (20h/semana): $19,200/año
- Total comprometido: $66,000/año
- **Presupuesto disponible para nuevas iniciativas: $19,000 USD**

Necesidades identificadas por Isabella (con costos estimados):
- Herramienta de gestión de vulnerabilidades (Tenable.io o similar): $12,000/año
- Certificación ISO 27001 (auditoría + consultoría): $35,000-45,000 (one-time)
- Pentesting anual: $15,000-25,000
- Security awareness platform (KnowBe4 o similar): $8,500/año
- WAF completo (AWS WAF en todos los endpoints): $6,000/año adicional
- SIEM básico: $18,000/año
- Total necesidades identificadas: ~$110,000 adicionales

**Gap de presupuesto: $91,000 USD**

Isabella ha solicitado al CFO un presupuesto adicional de $60,000 para Q2-Q4 2026. El CFO aprobó $20,000 adicionales condicionado a que se justifique el ROI de cada inversión. La conversación está en curso.

**Priorización propuesta por Isabella con el presupuesto disponible ($39,000 total):**
1. Consultoría ISO 27001 (mínimo viable para certificación): $20,000
2. Herramienta de gestión de vulnerabilidades: $12,000
3. Security awareness básico: $7,000

---

## ARTEFACTO B0-11 - Incidentes Históricos

**Archivo:** `artifacts/B0/B0-11-security-incidents.md`

Genera el registro de incidentes de seguridad históricos de Finvora:

**Incidente 1 - Octubre 2024: Exposición de credenciales AWS**
- Descripción: Repositorio de GitHub accidentalmente hecho público contenía credenciales de AWS (staging environment)
- Duración de exposición: aproximadamente 2 horas antes de ser detectado
- Impacto: Credenciales de staging expuestas. No se confirmó explotación pero tampoco se descartó completamente
- Respuesta: Credenciales rotadas en 4 horas. Repositorio privatizado. No se realizó investigación forense formal
- Lecciones aprendidas: No documentadas formalmente
- Estado: Cerrado sin plan de remediación formal
- Clasificación actual: No clasificado (no existía proceso de clasificación)

**Incidente 2 - Marzo 2025: Ataque de phishing exitoso**
- Descripción: Un empleado del área de finanzas hizo clic en un email de phishing que imitaba a BBVA Continental. Sus credenciales del panel de administración fueron comprometidas
- Duración: La cuenta comprometida estuvo activa ~6 horas antes de que el empleado reportara comportamiento extraño
- Impacto: Acceso no autorizado al panel de administración. Se revisaron datos de ~150 clientes. No se detectó exfiltración de datos pero no hay certeza
- Respuesta: Contraseña cambiada, sesiones invalidadas. No se notificó a clientes afectados ni a INDECOPI
- Lecciones aprendidas: Se envió un email a todos los empleados advirtiendo sobre phishing. Sin entrenamiento formal
- Estado: Cerrado sin análisis de causa raíz
- Nota de compliance: Este incidente probablemente requería notificación a INDECOPI bajo la Ley 29733. No se realizó.

**Incidente 3 - Julio 2025: Acceso no autorizado por ex-empleado**
- Descripción: Un ex-desarrollador (desvinculado en mayo 2025) accedió al repositorio de GitHub 6 semanas después de su salida porque su cuenta no fue desactivada
- Duración: Acceso activo por ~6 semanas
- Impacto: El ex-empleado descargó código fuente de 3 microservicios. No se detectó modificación de código
- Respuesta: Cuenta desactivada. Auditoría manual de accesos iniciada (encontró 6 cuentas adicionales de ex-empleados activas)
- Estado: Parcialmente remediado - 4 de las 7 cuentas inactivas han sido desactivadas, 3 pendientes
- Nota: Este incidente motivó la revisión informal de controles que Isabella realizó al llegar

**Tendencias identificadas:**
- Los tres incidentes tienen como causa raíz problemas de proceso, no de tecnología
- No existe un proceso formal de gestión de incidentes
- Ningún incidente fue reportado a autoridades regulatorias cuando correspondía
- La respuesta ha sido reactiva en todos los casos

---

## ARTEFACTO B0-12 - Proveedores Críticos

**Archivo:** `artifacts/B0/B0-12-critical-vendors.md`

Genera el registro de proveedores críticos:

**Formato:**

| Vendor | Service | Data Access | Contract Type | DPA Signed | Security Certification | Risk Level | Notes |
|---|---|---|---|---|---|---|---|

**Proveedores a incluir (mínimo 12):**

1. **AWS** - Infraestructura cloud completa. Acceso a todos los datos. BAA/DPA disponible pero no firmado formalmente para GDPR. ISO 27001 certificado. Riesgo: Critical.

2. **Stripe** - Procesamiento de pagos. Acceso a datos de transacciones. DPA firmado. PCI DSS Level 1. Riesgo: Critical.

3. **Equifax Perú** - Datos crediticios. Acceso bidireccional a datos de clientes. Contrato de uso de datos firmado. Sin certificación ISO 27001 verificada. Riesgo: High.

4. **MongoDB Atlas** - Base de datos NoSQL. Acceso a datos no estructurados de clientes. Sin DPA formal. ISO 27001 certificado. IP allowlist mal configurada. Riesgo: High.

5. **GitHub (Microsoft)** - Repositorios de código fuente. Acceso al código y secrets históricos. Sin DPA formal para GDPR. Riesgo: High.

6. **Datadog** - Monitoreo y logs. Acceso a logs que pueden contener datos personales. Sin DPA formal. SOC 2 Type II. Riesgo: Medium.

7. **Twilio** - SMS y comunicaciones. Acceso a números de teléfono de clientes. DPA firmado. ISO 27001. Riesgo: Medium.

8. **Hexalink GmbH** (cliente/partner EU) - Procesamiento de datos de empleados europeos. Requiere DPA bajo GDPR. DPA en negociación, no firmado. Riesgo: Critical (por GDPR).

9. **Experian Perú** - Datos crediticios secundarios. Contrato de uso firmado. Sin DPA GDPR. Riesgo: Medium.

10. **KYC provider (Truora)** - Verificación de identidad. Acceso a datos de identidad de clientes (DNI, fotos). Sin DPA formal. Sin certificación verificada. Riesgo: High.

11. **Salesforce** - CRM. Acceso a datos de clientes corporativos. DPA disponible pero no activado. Riesgo: Medium.

12. **Notion** - Documentación interna. Acceso a documentos internos que a veces contienen datos sensibles. Sin DPA formal. Riesgo: Medium.

**Hallazgos críticos:**
- 8 de 12 proveedores críticos no tienen DPA firmado
- El proveedor más crítico (AWS) no tiene DPA formal para GDPR, exponiendo a Finvora a riesgo regulatorio con Hexalink
- Ningún proveedor ha sido evaluado con un cuestionario de seguridad formal

---

## ARTEFACTO B0-13 - Sistemas de IA

**Archivo:** `artifacts/B0/B0-13-ai-systems.md`

Genera la documentación de los sistemas de IA de Finvora - crítica para el EU AI Act:

**Sistema 1 - CreditScore AI (sistema de scoring crediticio)**
- Descripción técnica: Modelo XGBoost entrenado con datos históricos de crédito de Equifax Perú + datos transaccionales propios (18 meses de historial). Features: 47 variables incluyendo historial de pagos, ratios financieros, datos de comportamiento en la app.
- Input: Solicitud de crédito con datos de la PYME
- Output: Score de 0-1000 + recomendación (Aprobado/Rechazado/Revisar manualmente)
- Decisión automática: Sí, para montos < $5,000 USD. Sin intervención humana.
- Decisión asistida: Para montos $5,000-$50,000. El analista ve el score y la recomendación.
- Usuarios afectados: PYMEs peruanas, colombianas y chilenas (potencialmente: clientes de Hexalink)
- Datos de entrenamiento: 180,000 créditos históricos 2019-2024. Sin auditoría de sesgo realizada.
- Retrain: Mensual en SageMaker
- **Clasificación EU AI Act:** Alto riesgo - Annex III, Sección 5b (sistemas de IA para evaluar la solvencia crediticia)
- **Problema identificado:** El modelo nunca ha sido auditado para detectar sesgo por género, edad o ubicación geográfica

**Sistema 2 - FraudGuard (detección de fraude en tiempo real)**
- Descripción técnica: Modelo de detección de anomalías basado en Isolation Forest. Se ejecuta como AWS Lambda en cada transacción.
- Input: Datos de la transacción en tiempo real (monto, origen, destino, hora, dispositivo, geolocalización)
- Output: Score de fraude 0-100. Si > 75: transacción bloqueada automáticamente. Si 50-75: requiere verificación adicional.
- Decisión automática: Sí, bloqueo automático sin intervención humana
- Latencia requerida: < 200ms
- Usuarios afectados: Todos los clientes de la plataforma de pagos
- **Clasificación EU AI Act:** Posiblemente alto riesgo - requiere análisis bajo Annex III. El bloqueo automático de transacciones puede afectar el acceso a servicios financieros esenciales.
- **Problema identificado:** Tasa de falsos positivos de ~3.2% - clientes legítimos bloqueados sin proceso claro de apelación

**Sistema 3 - RiskAnalyzer (análisis de riesgo automatizado)**
- Descripción técnica: Pipeline que combina CreditScore AI + FraudGuard + datos externos para generar un perfil de riesgo completo del cliente
- Output: Perfil de riesgo (Low/Medium/High/Very High) + límite de crédito recomendado
- Decisión automática: Sí, determina automáticamente el límite de crédito del cliente
- **Clasificación EU AI Act:** Alto riesgo - Annex III, Sección 5b
- **Problema identificado:** No existe documentación técnica del sistema. El desarrollador principal que lo construyó dejó la empresa en 2024.

**Estado de cumplimiento EU AI Act (current):**
- Documentación técnica (Art. 11): No existe para ningún sistema
- Logs de eventos (Art. 12): Parcial solo en CreditScore AI
- Supervisión humana (Art. 14): Parcial - solo para créditos > $5,000
- Registro en base de datos EU (Art. 51): No realizado
- Evaluación de conformidad: No realizada

---

## ARTEFACTO B0-14 - Apetito de Riesgo y Objetivos de Certificación

**Archivo:** `artifacts/B0/B0-14-risk-appetite.md`

Genera el documento de apetito de riesgo y objetivos:

**Risk Appetite Statement (aprobado por el Directorio en enero 2026):**
- Finvora acepta riesgo operativo moderado en el proceso de crecimiento
- Finvora tiene cero tolerancia a brechas de datos de clientes que resulten en pérdida financiera para los clientes
- Finvora tiene baja tolerancia a incidentes de seguridad que afecten la disponibilidad de la plataforma de pagos (RTO máximo: 4 horas)
- Finvora acepta riesgo regulatorio bajo si el impacto potencial es menor a $50,000 USD en multas
- Finvora tiene baja tolerancia a riesgos reputacionales - cualquier brecha pública podría afectar la relación con Hexalink y el fundraising de Serie B

**Risk Acceptance Criteria:**
- Riesgo Bajo (score 1-6): Aceptado sin acción inmediata
- Riesgo Medio (score 7-12): Requiere plan de tratamiento en 90 días
- Riesgo Alto (score 13-19): Requiere plan de tratamiento en 30 días
- Riesgo Crítico (score 20-25): Requiere acción inmediata - escalar al CEO

**Certification Objectives:**
- Objetivo primario: Obtener certificación ISO 27001 antes del 31 de diciembre 2026 (requisito contractual Hexalink)
- Objetivo secundario: Establecer programa de cumplimiento GDPR básico para Q3 2026
- Objetivo terciario: Documentar compliance roadmap para EU AI Act para Q4 2026
- Objetivo 2027: SOC 2 Type II para expansión al mercado americano

**Current Risk Posture:**
Isabella Torres (CISO) evaluó informalmente el riesgo general de Finvora en una presentación al directorio en febrero 2026: "Finvora opera actualmente con un perfil de riesgo de seguridad que yo clasificaría como Alto. Tenemos incidentes históricos no remediados completamente, deuda técnica significativa, y ausencia de controles básicos documentados. La buena noticia es que la infraestructura cloud de AWS nos da una base sólida. La mala noticia es que no la estamos aprovechando al máximo."

---

## ARTEFACTO B0-15 - Regulaciones Aplicables

**Archivo:** `artifacts/B0/B0-15-applicable-regulations.md`

Genera el análisis de regulaciones aplicables y estado de cumplimiento:

**Regulación 1 - ISO/IEC 27001:2022**
- Aplicabilidad: Voluntaria pero requerida contractualmente por Hexalink GmbH
- Estado actual: No certificada. Preparación en proceso.
- Gap estimado: Alto - 65% de los controles del Annex A no están implementados formalmente
- Deadline: 31 diciembre 2026
- Responsable: Isabella Torres (CISO)

**Regulación 2 - GDPR (EU 2016/679)**
- Aplicabilidad: Obligatoria por el contrato con Hexalink GmbH (procesamiento de datos de empleados europeos)
- Estado actual: No cumple. Datos de ciudadanos europeos almacenados en us-east-1 sin mecanismo de transferencia adecuado (SCCs no firmadas con AWS para este flujo específico)
- Riesgo: Multa potencial de hasta €20M o 4% facturación global
- Gap crítico: DPA con AWS no firmado, datos en servidor US sin SCCs, no hay registro de actividades de tratamiento completo
- Responsable: Marco Villanueva (Director Legal) con soporte de Isabella Torres
- Deadline: Q3 2026

**Regulación 3 - EU AI Act (EU 2024/1689)**
- Aplicabilidad: Obligatoria. CreditScore AI y RiskAnalyzer clasifican como sistemas de alto riesgo bajo Annex III, Sección 5b. FraudGuard requiere análisis adicional.
- Estado actual: No cumple. Ninguna de las obligaciones de los Arts. 9-15 está implementada.
- Obligaciones críticas pendientes: documentación técnica (Art. 11), sistema de gestión de riesgos de IA (Art. 9), supervisión humana (Art. 14), registro en base de datos EU (Art. 51)
- Timeline: Obligaciones para sistemas de alto riesgo Annex III aplican desde agosto 2026 (fase 1) o diciembre 2027 (algunos)
- Responsable: Marco Villanueva + Isabella Torres + Andrea Castillo (CTO)

**Regulación 4 - PCI DSS v4.0**
- Aplicabilidad: Requerido por Stripe como condición del contrato de procesamiento de pagos
- Estado actual: Cumplimiento parcial SAQ A (los más básicos). No se ha realizado evaluación formal.
- Riesgo: Terminación del contrato con Stripe si no cumple con PCI DSS v4.0 antes de marzo 2025 (ya vencido - Stripe ha enviado 2 recordatorios)
- Responsable: Isabella Torres + Andrea Castillo
- Deadline: URGENTE - ya vencido

**Regulación 5 - Ley 29733 (Protección de Datos Personales, Perú)**
- Aplicabilidad: Obligatoria para todos los datos de clientes peruanos
- Estado actual: Registro en INDECOPI pendiente. El incidente de phishing de marzo 2025 probablemente requería notificación que no se realizó.
- Riesgo: Multa de hasta 100 UIT (~$130,000 USD) por incumplimiento
- Responsable: Marco Villanueva

**Regulación 6 - SBS Circular G-185 (Gestión de Riesgos de TI)**
- Aplicabilidad: Obligatoria para empresas de servicios financieros supervisadas por SBS
- Estado actual: Cumplimiento básico. Finvora tiene un informe anual de riesgos tecnológicos pero no cumple todos los requisitos de la circular.
- Responsable: Isabella Torres + Roberto Quispe (CFO)

**Compliance Priority Matrix:**

| Regulación | Urgencia | Impacto | Prioridad |
|---|---|---|---|
| PCI DSS v4.0 | Crítica | Alto | 1 |
| GDPR | Alta | Muy Alto | 2 |
| ISO 27001 | Alta | Alto | 3 |
| EU AI Act | Media-Alta | Alto | 4 |
| Ley 29733 | Media | Medio | 5 |
| SBS G-185 | Media | Medio | 6 |

---

## INSTRUCCIONES FINALES DE GENERACIÓN

Una vez generados los 16 artefactos (B0-00 a B0-15):

1. Verifica que todos están guardados en `artifacts/B0/` con sus IDs correctos
2. Verifica coherencia interna - los nombres de personas, números y fechas deben ser consistentes entre todos los artefactos
3. El B0-00 debe ser coherente con todos los demás - el briefing de Isabella debe anticipar exactamente los problemas que se documentan en B0-09, B0-11 y B0-12
4. Ejecuta `integrate-artifact.md` para cada uno de los 16 artefactos en orden (B0-00 primero, B0-15 último)
4. Confirma a Daniel que el Bloque 0 está completo y listo

**Nota de coherencia crítica:**
- Los secrets de AWS hardcodeados mencionados en B0-06 deben aparecer como incidente en B0-11
- Los 7 ex-empleados con acceso activo mencionados en B0-09 deben estar referenciados en B0-11
- El presupuesto de $85,000 en B0-10 debe ser coherente con los controles actuales en B0-09
- Los sistemas de IA en B0-13 deben estar en el inventario de activos B0-07
- Los proveedores en B0-12 deben aparecer en los flujos de datos B0-08
- Las regulaciones en B0-15 deben ser coherentes con las partes interesadas en B0-04

---

*Archivo creado: Junio 2026*
*Genera: 15 artefactos del Bloque 0 en artifacts/B0/*
*Prerequisito: setup.md y build-web.md ejecutados*
*Siguiente paso después de ejecutar: integrate-artifact.md para cada artefacto B0*
