# SETUP - Finvora SGSI
## Configuración inicial del repositorio

> **Este archivo se ejecuta UNA SOLA VEZ al inicio del proyecto.**
> Crea toda la estructura de carpetas, inicializa Git y conecta con GitHub.
> Ya tienes creada la carpeta `D:/finvora-sgsi/_instructions/` con todos los archivos.

---

## PREREQUISITOS

- [ ] Node.js instalado (versión 18 o superior)
- [ ] Git instalado
- [ ] Cuenta de GitHub activa
- [ ] Carpeta `D:/finvora-sgsi/` ya existe
- [ ] Carpeta `D:/finvora-sgsi/_instructions/` ya existe con los 8 archivos:
  - master.md
  - setup.md (este archivo)
  - stitch-design.md
  - build-web.md
  - integrate-artifact.md
  - generate-finvora.md
  - deploy.md
  - esquema_web_finvora.md (Claude Code lo copiará a _schema/web-schema.md)

---

## PASO 1 - Crear estructura completa de carpetas

Ejecuta desde `D:/finvora-sgsi/`:

```bash
# Schema (para archivos de referencia)
mkdir _schema

# Artefactos organizados por bloque
mkdir artifacts
mkdir artifacts/B0
mkdir artifacts/B1
mkdir artifacts/B2
mkdir artifacts/B3

# Web (se llenará con build-web.md)
mkdir web
```

La estructura resultante debe ser:

```
finvora-sgsi/
├── _instructions/              ✅ ya existe
│   ├── master.md               ✅ ya existe
│   ├── setup.md                ✅ ya existe (este archivo)
│   ├── stitch-design.md        ✅ ya existe
│   ├── build-web.md            ✅ ya existe
│   ├── integrate-artifact.md   ✅ ya existe
│   ├── generate-finvora.md     ✅ ya existe
│   ├── deploy.md               ✅ ya existe
│   └── esquema_web_finvora.md  ✅ ya existe (fuente para _schema/web-schema.md)
│
├── _schema/                    ← crear ahora + Claude Code copia esquema_web_finvora.md aquí como web-schema.md
│
├── artifacts/                  ← crear ahora
│   ├── B0/                     ← crear ahora (se llenará con generate-finvora.md)
│   ├── B1/                     ← crear ahora (se llenará cuando Daniel produzca artefactos)
│   ├── B2/                     ← crear ahora
│   └── B3/                     ← crear ahora
│
└── web/                        ← crear ahora (se llenará con build-web.md)
```

> **Claude Code ejecuta:** Después de crear `_schema/`, copia `_instructions/esquema_web_finvora.md` a `_schema/web-schema.md` con este comando:
> ```bash
> cp _instructions/esquema_web_finvora.md _schema/web-schema.md
> ```

---

## PASO 2 - Crear el README.md raíz

Crea `D:/finvora-sgsi/README.md`:

```markdown
# Finvora SGSI - GRC Portfolio Project

> A complete ISMS implementation simulation under ISO 27001:2022,
> extended with EU AI Act, NIST AI RMF, and ISO 42001.

**Author:** Daniel Carrión - GRC Analyst | AI Governance
**Status:** 🔄 In Progress
**Live Demo:** Coming soon

---

## About This Project

This project simulates the complete implementation of an Information Security
Management System (ISMS) for a fictional fintech company called Finvora S.A.C.,
based in Lima, Peru, with clients in the EU and USA.

The project was built as a GRC portfolio to demonstrate applied knowledge of
ISO 27001:2022, EU AI Act, NIST AI RMF, and ISO 42001 - substituting real
work experience with a structured, documented implementation exercise.

## Frameworks Covered

- ISO/IEC 27001:2022 - Information Security Management System
- EU AI Act (2024/1689) - AI Risk Classification and Obligations
- NIST AI RMF 1.0 - AI Risk Management Framework
- ISO/IEC 42001:2023 - AI Management System
- GDPR - General Data Protection Regulation
- PCI DSS - Payment Card Industry Data Security Standard

## Project Structure

| Block | Content | Status |
|---|---|---|
| Block 0 | Finvora Company Profile (16 artifacts) | 🔄 In Progress |
| Block 1 | ISO 27001 Implementation (15 artifacts) | ⬜ Pending |
| Block 2 | EU AI Act + AI Frameworks (8 artifacts) | ⬜ Pending |
| Block 3 | ISMS Operations (10 artifacts) | ⬜ Pending |

**Total: 48 artifacts + 5 interactive characters (CISO, CTO, Legal Director, CFO, AI Auditor)**

## Tech Stack

- React + Vite
- Tailwind CSS
- Claude API (Anthropic) - interactive characters + AI Auditor
- Google Stitch MCP (UI Design)
- Vercel (Deploy)

## Repository Structure

finvora-sgsi/
├── _instructions/    → Claude Code instruction files
├── _schema/          → Project schemas and maps
├── artifacts/        → All 48 GRC artifacts (B0–B3)
└── web/              → React web application

---

*Project started: June 2026*
```

---

## PASO 3 - Crear `.gitignore` raíz

Crea `D:/finvora-sgsi/.gitignore`:

```
# Dependencies
node_modules/

# Environment variables - NUNCA subir al repositorio
.env
.env.local
.env.production

# Build outputs
web/dist/
web/.vite/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Logs
*.log
npm-debug.log*

# Stitch credentials
service-account.json
```

---

## PASO 4 - Inicializar Git

Ejecuta desde `D:/finvora-sgsi/`:

```bash
git init
git add .
git commit -m "chore: setup inicial - estructura de carpetas, instrucciones y esquemas"
```

---

## PASO 5 - Crear repositorio en GitHub y conectar

1. Ve a **https://github.com/new**
2. Nombre del repositorio: `finvora-sgsi`
3. Descripción: `GRC Portfolio - ISMS Implementation under ISO 27001:2022 + EU AI Act`
4. Visibilidad: **Public** (el hiring manager debe poder verlo)
5. **No** inicialices con README ni .gitignore (ya los tienes)
6. Haz clic en **Create repository**

Conecta el repositorio local:

```bash
git remote add origin https://github.com/[tu-usuario]/finvora-sgsi.git
git branch -M main
git push -u origin main
```

---

## PASO 6 - Verificación final del setup

Verifica que todo está en orden:

- [ ] `_instructions/` tiene los 8 archivos (master, setup, stitch-design, build-web, integrate-artifact, generate-finvora, deploy, esquema_web_finvora)
- [ ] `_schema/` existe y tiene `web-schema.md` (copiado por Claude Code desde `_instructions/esquema_web_finvora.md`)
- [ ] `artifacts/B0/`, `B1/`, `B2/`, `B3/` existen y están vacías
- [ ] `web/` existe y está vacía
- [ ] `README.md` existe en la raíz con 48 artefactos mencionados
- [ ] `.gitignore` existe y tiene `.env.local` y `service-account.json`
- [ ] El repositorio en GitHub muestra todos los archivos
- [ ] No hay API keys ni credenciales en ningún archivo subido a GitHub

---

## ORDEN DE EJECUCIÓN COMPLETO

Con el setup completo, el orden es:

1. ✅ `setup.md` - este archivo (ejecutado)
2. ⬜ `stitch-design.md` - generar el diseño visual con Google Stitch MCP
3. ⬜ `build-web.md` - construir la web base vacía en React
4. ⬜ `generate-finvora.md` - generar los 16 artefactos del Bloque 0
5. ⬜ `integrate-artifact.md` - ejecutar por cada artefacto que Daniel termine
6. ⬜ `deploy.md` - ejecutar al final cuando todos los artefactos estén listos

---

*Archivo creado: Junio 2026*
*Se ejecuta: una sola vez al inicio*
*Siguiente paso: `stitch-design.md`*
