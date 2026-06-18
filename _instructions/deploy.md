# DEPLOY - Finvora SGSI
## Guía de despliegue en Vercel

> **Este archivo es una guía para ejecutar al final del proyecto.**
> No ejecutar hasta que todos los artefactos estén integrados y el Auditor IA haya producido B3-10.
> El deploy en Vercel conecta el repositorio de GitHub y publica la web automáticamente.

---

## PREREQUISITOS

Antes de ejecutar este archivo verifica que:

- [ ] Todos los 47 artefactos están integrados a la web
- [ ] B3-10 (Auditor IA) fue generado y está integrado
- [ ] Las correcciones V2 están aplicadas donde corresponde
- [ ] `npm run build` ejecuta sin errores en local
- [ ] No hay API keys hardcodeadas en ningún archivo
- [ ] `.env.local` está en `.gitignore` y NO está en GitHub
- [ ] `README.md` está completo y profesional
- [ ] El repositorio en GitHub está actualizado con el último commit

---

## PASO 1 - Build de producción local

Verifica que el build de producción funciona antes de desplegar:

```bash
cd D:/finvora-sgsi/web
npm run build
npm run preview
```

Abre `http://localhost:4173` y verifica:
- [ ] Todas las páginas cargan correctamente
- [ ] La navegación funciona sin errores
- [ ] Los personajes interactivos responden
- [ ] El toggle EN/ES funciona
- [ ] El dashboard muestra todos los datos correctamente
- [ ] No hay errores en la consola del navegador

---

## PASO 2 - Crear cuenta en Vercel

1. Ve a **https://vercel.com**
2. Haz clic en **Sign Up**
3. Selecciona **Continue with GitHub**
4. Autoriza Vercel para acceder a tus repositorios

---

## PASO 3 - Importar el repositorio

1. En el dashboard de Vercel, haz clic en **Add New → Project**
2. Busca el repositorio `finvora-sgsi` en la lista
3. Haz clic en **Import**

---

## PASO 4 - Configurar el proyecto en Vercel

En la pantalla de configuración:

| Campo | Valor |
|---|---|
| Project Name | finvora-sgsi |
| Framework Preset | Vite |
| Root Directory | web |
| Build Command | npm run build |
| Output Directory | dist |
| Install Command | npm install |

**Importante:** El Root Directory debe ser `web` - no la raíz del repositorio.

---

## PASO 5 - Configurar variables de entorno

En la sección **Environment Variables** antes de hacer el primer deploy:

| Name | Value | Environment |
|---|---|---|
| VITE_ANTHROPIC_API_KEY | [tu API key de Anthropic] | Production, Preview, Development |

**Cómo obtener la API key:**
1. Ve a **https://console.anthropic.com**
2. Settings → API Keys
3. Create Key → copia el valor
4. Pégalo en Vercel

---

## PASO 6 - Deploy inicial

Haz clic en **Deploy**.

Vercel ejecutará automáticamente:
1. `npm install` - instala dependencias
2. `npm run build` - genera el build de producción
3. Despliega en CDN global

El proceso tarda aproximadamente 2-3 minutos.

Si el deploy falla, revisa los logs en Vercel para identificar el error.

---

## PASO 7 - Verificar el deploy

Una vez completado, Vercel te da una URL del tipo:
`https://finvora-sgsi.vercel.app`

Verifica en la URL de producción:
- [ ] La web carga correctamente
- [ ] Todas las páginas son accesibles
- [ ] Los personajes interactivos responden (confirma que la API key está configurada)
- [ ] El toggle EN/ES funciona
- [ ] La web se ve bien en desktop (el proyecto está diseñado para desktop)

---

## PASO 8 - Dominio personalizado (opcional)

Si Daniel quiere usar un dominio personalizado como `finvora.danielcarrion.dev`:

1. En Vercel, ve a **Settings → Domains**
2. Agrega el dominio deseado
3. Sigue las instrucciones de Vercel para configurar los DNS en tu registrador de dominio
4. El certificado SSL se genera automáticamente

**Dominios recomendados para el portfolio:**
- `finvora-sgsi.vercel.app` (gratis, sin configuración adicional)
- `finvora.danielcarrion.com` (requiere comprar el dominio ~$10/año)

---

## PASO 9 - Deploy automático configurado

Desde este momento, cada vez que Claude Code hace `git push origin main`:

1. Vercel detecta el nuevo commit automáticamente
2. Ejecuta el build en ~30 segundos
3. Despliega la nueva versión
4. La URL pública se actualiza automáticamente

No necesitas hacer nada manual para actualizaciones futuras.

---

## PASO 10 - Agregar la URL al portfolio principal

Una vez desplegado, agrega el link en:

1. **LinkedIn** - Featured section: "GRC Portfolio - Finvora SGSI Project"
2. **CV** - sección Projects: `finvora-sgsi.vercel.app`
3. **GitHub README** del repositorio: badge con link al deploy
4. **Web de portfolio personal** (cuando la construyas): tarjeta del proyecto con link

---

## CONFIGURACIÓN DEL README.md PARA GITHUB

El README del repositorio debe ser profesional y en inglés. Estructura recomendada:

```markdown
# Finvora SGSI - GRC Portfolio Project

> A complete ISMS implementation simulation under ISO 27001:2022,
> extended with EU AI Act, NIST AI RMF, and ISO 42001.

**Live Demo:** [finvora-sgsi.vercel.app](https://finvora-sgsi.vercel.app)

## About This Project
[Descripción del proyecto en 3 párrafos]

## Frameworks Covered
- ISO/IEC 27001:2022
- EU AI Act (2024/1689)
- NIST AI RMF 1.0
- ISO/IEC 42001:2023
- GDPR
- PCI DSS

## Project Structure
[Descripción de los 4 bloques]

## Tech Stack
- React + Vite
- Tailwind CSS
- Claude API (Anthropic)
- Google Stitch (UI Design)
- Vercel (Deploy)

## Author
Daniel Carrión - GRC Analyst | AI Governance
[LinkedIn] | [Email]
```

---

## TROUBLESHOOTING

**Error: "VITE_ANTHROPIC_API_KEY is not defined"**
→ Verifica que la variable de entorno está configurada en Vercel Settings → Environment Variables.

**Error: "Build failed - module not found"**
→ Verifica que `web/package.json` tiene todas las dependencias y ejecuta `npm install` localmente.

**Error: "404 on page refresh"**
→ Agrega un archivo `web/public/vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Los personajes no responden en producción**
→ Verifica que la API key en Vercel es válida y tiene créditos disponibles en console.anthropic.com.

**La web se ve mal en móvil**
→ El proyecto está diseñado para desktop. Agregar responsividad móvil es una mejora opcional para después del deploy inicial.

---

*Archivo creado: Junio 2026*
*Ejecutar: cuando todos los 47 artefactos estén integrados y B3-10 esté generado*
*Prerequisito: `integrate-artifact.md` ejecutado para todos los artefactos*
