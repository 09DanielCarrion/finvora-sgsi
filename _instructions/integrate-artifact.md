# INTEGRATE ARTIFACT - Finvora SGSI
## Prompt reutilizable para integrar un nuevo artefacto a la web

> **Instrucciones para Claude Code:**
> Este archivo se ejecuta cada vez que Daniel termina un artefacto y quiere integrarlo a la web.
> Daniel te pasará el artefacto adjunto junto con su ID.
> Sigue los pasos en orden estricto.
> Lee `master.md` si necesitas contexto sobre el artefacto o sus relaciones.

---

## CÓMO USAR ESTE ARCHIVO

Daniel ejecutará este prompt así:

```
Tengo un nuevo artefacto para integrar.
ID: [B0-01]
Archivo adjunto: [nombre-del-archivo.md]
Ejecuta integrate-artifact.md
```

Claude Code debe:
1. Leer el artefacto adjunto completo
2. Identificar su ID y ubicación según `master.md`
3. Seguir los pasos de este archivo en orden
4. Confirmar al final que la integración fue exitosa

---

## PASO 1 - Identificar el artefacto

Lee el artefacto adjunto y extrae:
- **ID:** (ej. B0-01, B1-04, B3-02)
- **Bloque:** (B0, B1, B2 o B3)
- **Nombre:** según el inventario en `master.md`
- **Formato:** MD, tabla, diagrama
- **Clause/Regulación:** según el inventario en `master.md`
- **Artefactos relacionados:** según el mapa de relaciones en `master.md`

Confirma estos datos antes de continuar.

---

## PASO 2 - Guardar el artefacto

Guarda el archivo en la carpeta correcta:

```
artifacts/
├── B0/[id]-[nombre-corto].md      → si es Bloque 0
├── B1/[id]-[nombre-corto].md      → si es Bloque 1
├── B2/[id]-[nombre-corto].md      → si es Bloque 2
└── B3/[id]-[nombre-corto].md      → si es Bloque 3
```

Ejemplos:
- `artifacts/B0/B0-01-perfil-corporativo.md`
- `artifacts/B1/B1-04-soa.md`
- `artifacts/B3/B3-02-incidente-simulado.md`

Si el artefacto es una tabla (Excel exportado como CSV o MD), guárdalo con la misma convención.

---

## PASO 3 - Convertir el artefacto a datos de la web

Crea o actualiza el archivo de datos correspondiente en `web/src/data/artifacts/`:

```javascript
// web/src/data/artifacts/[bloque]/[id].js

export const artifact = {
  id: "[ID]",
  name: "[Nombre completo del artefacto]",
  block: "[B0/B1/B2/B3]",
  clause: "[Clause o Regulación]",
  completedDate: "[fecha de hoy]",
  version: "v1",
  hasV2: false,
  nonConformities: [],
  content: `[contenido del artefacto en markdown]`,
  relatedArtifacts: ["[IDs de artefactos relacionados según master.md]"],
  relatedControls: ["[IDs de controles Annex A si aplica]"],
  relatedClauses: ["[Números de clauses ISO 27001 si aplica]"],
  relatedRegulations: ["[GDPR/EU AI Act/PCI DSS si aplica]"],
};
```

---

## PASO 4 - Actualizar el estado del proyecto

Actualiza `web/src/data/project-state.js`:

1. Marca el artefacto como completado en su bloque:
```javascript
artifacts: {
  [bloque]: { total: [N], completed: [N+1] },
}
```

2. Actualiza `lastUpdated` con la fecha de hoy.

3. Si el artefacto es del Bloque 1 (controles ISO 27001), actualiza también `controlStats` según los controles que cubre.

4. Recalcula `overallMaturity` con esta fórmula:
```javascript
overallMaturity = Math.round(
  (totalArtifactsCompleted / 47) * 100
);
```

5. Si es un artefacto de cumplimiento específico, actualiza el porcentaje correspondiente en `compliance`:
- Artefactos B1 → actualiza `iso27001`
- Artefactos B2 con GDPR → actualiza `gdpr`
- Artefactos B2 con EU AI Act → actualiza `euAiAct`
- Artefactos B1 con PCI DSS → actualiza `pciDss`

---

## PASO 5 - Actualizar la tarjeta del artefacto en la web

Encuentra el componente ArtifactCard del artefacto en la página correspondiente y:

1. Cambia el estado de `coming-soon` a `completed`
2. Agrega el link al contenido del artefacto
3. Muestra la fecha de completación
4. Activa el badge de estado verde

Si el artefacto es un control del Annex A (Bloque 1):
- Actualiza la ControlCard correspondiente con los datos del gap analysis
- Actualiza el estado en el SoA si corresponde
- Activa los links a artefactos relacionados

---

## PASO 6 - Actualizar el mapa de relaciones

Si el artefacto nuevo activa relaciones que antes no existían:

1. Verifica en `master.md` qué artefactos están relacionados con este
2. Para cada artefacto relacionado que YA esté completado, activa el link bidireccional en la web
3. Para cada artefacto relacionado que AÚN no esté completado, marca la relación como "pending" (se activará cuando ese artefacto se integre)
4. Actualiza el grafo en `RelationsMap.jsx` con los nuevos nodos activos

---

## PASO 7 - Agregar al feed de artefactos recientes

Agrega el nuevo artefacto al inicio del feed en el Dashboard:

```javascript
// En project-state.js, agrega al inicio del array recentArtifacts:
recentArtifacts: [
  {
    id: "[ID del nuevo artefacto]",
    name: "[Nombre corto]",
    date: "[fecha de hoy]",
    status: "completed",
    block: "[B0/B1/B2/B3]"
  },
  // ... los 4 artefactos anteriores (máximo 5 en el feed)
]
```

---

## PASO 8 - Casos especiales

### Si el artefacto es B1-01 (Gap Analysis):
Además de los pasos anteriores:
- Importa los datos de puntuación de los 93 controles
- Actualiza cada ControlCard con su puntuación del gap analysis
- Actualiza el mapa de calor de riesgos en el dashboard
- Recalcula los porcentajes de cumplimiento por dominio

### Si el artefacto es B1-04 (SoA):
Además de los pasos anteriores:
- Actualiza el estado de cada control (aplicable/excluido/implementado/pendiente)
- Actualiza los badges de SoA en todas las ControlCards
- Actualiza la donut chart de distribución de controles

### Si el artefacto es B3-10 (Auditor IA):
Este artefacto se genera automáticamente - no se integra manualmente.
Ver sección "Activar el Auditor IA" al final de este archivo.

### Si el artefacto tiene una versión V2 (corrección post-auditoría):
1. Guarda el artefacto corregido como `[id]-v2.md` en la carpeta correspondiente
2. Actualiza el objeto del artefacto en `web/src/data/artifacts/`:
   - `version: "v2"`
   - `hasV2: true`
   - `v2Content: "[contenido corregido]"`
   - `v2Date: "[fecha de la corrección]"`
3. Activa el toggle V1/V2 en la tarjeta del artefacto
4. Marca la no conformidad como "closed" en `nonConformities`

---

## PASO 9 - Verificación

Antes de hacer commit, verifica:

- [ ] El artefacto está guardado en `artifacts/[bloque]/`
- [ ] El archivo de datos está en `web/src/data/artifacts/[bloque]/`
- [ ] `project-state.js` está actualizado con el nuevo estado
- [ ] La tarjeta del artefacto en la web muestra estado "completed"
- [ ] Los links a artefactos relacionados están activos (si aplica)
- [ ] El feed de artefactos recientes muestra el nuevo artefacto
- [ ] El dashboard refleja el nuevo porcentaje de completación
- [ ] `npm run dev` ejecuta sin errores después de la integración

---

## PASO 10 - Commit

```bash
git add .
git commit -m "feat: integrar artefacto [ID] - [nombre corto del artefacto]"
git push origin main
```

Vercel redesplegará automáticamente en ~30 segundos.

---

## ACTIVAR EL AUDITOR IA (solo al final del proyecto)

Este proceso se ejecuta una sola vez cuando todos los artefactos B0, B1, B2 y B3-01 a B3-09 estén completados.

### Prerequisito
El botón "Run Internal Audit" en la página Operations solo se activa cuando `projectState.artifacts` muestra todos los bloques completados excepto B3-10.

### Proceso de activación
Cuando Daniel hace clic en "Run Internal Audit":

1. La web recopila el contenido de todos los artefactos completados
2. Llama a `runAuditorIA()` del cliente Claude API con todo el contenido
3. Muestra un loading state ("Auditor IA reviewing documentation...")
4. Recibe el informe de auditoría
5. Guarda el informe como `artifacts/B3/B3-10-informe-auditoria-ia.md`
6. Integra el informe a la web como artefacto B3-10
7. Para cada no conformidad encontrada, crea un banner en el artefacto afectado
8. Activa el toggle V1/V2 en los artefactos con NCs
9. Actualiza el estado del proyecto

### Output del Auditor IA
El informe B3-10 tendrá esta estructura:
```markdown
# Internal Audit Report - Finvora S.A.C. ISMS
**Audit Date:** [fecha]
**Auditor:** Independent AI Auditor (automated)
**Standard:** ISO/IEC 27001:2022

## Executive Summary
## Audit Scope
## Methodology
## Findings
### Major Nonconformities (NC Mayor)
### Minor Nonconformities (NC Menor)
### Observations
### Positive Findings
## Conclusion
## Next Steps
```

---

*Archivo creado: Junio 2026*
*Se ejecuta: cada vez que Daniel completa un artefacto*
*Prerequisito: web base construida con `build-web.md`*
