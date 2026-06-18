# STITCH DESIGN - Finvora SGSI
## Secuencia de prompts para Google Stitch via MCP

> **Instrucciones para Claude Code:**
> Ejecuta estos prompts en orden estricto usando el MCP de Google Stitch.
> Espera a que cada prompt genere su diseño antes de ejecutar el siguiente.
> Un prompt a la vez - no combines ni paralelices.
> Al finalizar toda la secuencia, exporta el diseño completo y úsalo como base para `build-web.md`.

---

## REGLAS DE EJECUCIÓN

1. Usa el modelo **Thinking** de Stitch para mayor calidad en prompts de layout complejo
2. Usa el modelo **Flash** para ajustes simples de color, texto o espaciado
3. Después de cada prompt, espera hasta 10 minutos antes de intentar obtener el screen - Stitch puede tardar en procesar aunque la llamada haga timeout
4. Si list_screens devuelve vacío, haz polling cada 60 segundos, máximo 10 intentos
5. Después de cada prompt, verifica que el output incluye todos los elementos solicitados
6. Si algo falta, ejecuta un prompt de refinamiento antes de continuar al siguiente
7. Guarda screenshot y HTML de cada pantalla aprobada
8. Al final exporta el HTML completo de todas las pantallas

---

## SECUENCIA DE PROMPTS

### PROMPT 1 - Base visual y layout general
```
Dark professional cybersecurity dashboard for a fintech company called Finvora. Desktop web app layout. Navy blue background (#0A1628), electric blue accents (#1E6FFF), cyan highlights (#00D4FF). Fixed left sidebar navigation (260px), top header bar, main content area. SOC security operations center aesthetic.
```

**Verificar:** fondo oscuro, sidebar izquierdo, header, área de contenido principal.

---

### PROMPT 2 - Sidebar de navegación
```
In the left sidebar, add 6 navigation items with icons: Dashboard (home icon), The Company (building icon), ISO 27001 (shield icon), EU AI Act (robot icon), ISMS Operations (gear icon), Relations Map (network icon). Active item has electric blue (#1E6FFF) glow border. Subtle circuit pattern in sidebar background. Finvora logo at the top of the sidebar.
```

**Verificar:** 6 items, íconos, efecto glow en item activo, logo Finvora.

---

### PROMPT 3 - Header principal
```
In the top header bar: Finvora SGSI title on the left, language toggle button (EN / ES) in the center-right, user avatar on the far right. Header background slightly lighter than main background (#0F2140). Bottom border with electric blue (#1E6FFF).
```

**Verificar:** título, toggle EN/ES, avatar, borde inferior.

---

### PROMPT 4 - Dashboard: gauge de madurez
```
In the main content area, add a large semicircle maturity gauge (0-100%) as the hero element. Label: "ISMS Maturity Score". Show 0% as current value (placeholder). Color gradient from red (0%) to green (100%). Electric blue needle. Below the gauge show the percentage number in large bold white text.
```

**Verificar:** semicírculo, gradiente de color, aguja, porcentaje.

---

### PROMPT 5 - Dashboard: barras de cumplimiento
```
Below the maturity gauge, add 4 horizontal progress bars labeled: ISO 27001, GDPR, EU AI Act, PCI DSS. Each bar shows 0% as placeholder. Bar color: electric blue (#1E6FFF). Background bar: dark blue-gray (#1A2F4E). Show percentage text on the right of each bar. Group them in a card with title "Compliance Status".
```

**Verificar:** 4 barras, labels, porcentajes, card container.

---

### PROMPT 6 - Dashboard: mapa de calor de riesgos
```
Add a 5x5 risk heat map matrix. X axis labeled "Likelihood" (1-5), Y axis labeled "Impact" (1-5). Color gradient: green (low risk, bottom-left) to red (critical risk, top-right). Each cell is a small square. Empty cells as placeholder. Title: "Risk Heat Map". Place it next to the compliance bars.
```

**Verificar:** matriz 5x5, ejes etiquetados, gradiente de color.

---

### PROMPT 7 - Dashboard: gráfico de dona y timeline
```
Add two more elements to the dashboard: 1) A donut chart titled "Control Distribution" with 4 segments: Implemented (green), In Progress (amber), Pending (gray), Excluded (dark gray). Show 0/93 controls as placeholder. 2) A horizontal timeline titled "Project Milestones" showing 5 milestone dots: Schema, Design, ISO 27001, EU AI Act, Operations. All dots in gray as placeholder.
```

**Verificar:** dona con 4 segmentos, timeline con 5 hitos.

---

### PROMPT 8 - Dashboard: feed de artefactos recientes
```
Add a "Recent Artifacts" feed panel on the right side of the dashboard. Shows the last 5 artifacts added. Each item has: artifact ID badge (B0-01 style), artifact name, date added, and a small status badge. Show 5 placeholder items. Card background (#0F2140).
```

**Verificar:** 5 items, ID badge, nombre, fecha, status badge.

---

### PROMPT 9 - Tarjeta de control (componente central)
```
Design a control card component for ISO 27001 Annex A controls. Dark card (#0F2140) with colored left border (4px): green for implemented, amber for partial, red for not implemented, gray for excluded. Header shows: control code (A.5.15), control name, domain badge. Below: risk level badge, SoA status badge. Three expandable sections: "Gap Analysis", "Implementation Details", "Related Controls & Clauses". Add a small V1/V2 toggle button in the top-right corner. Card has subtle hover effect.
```

**Verificar:** borde izquierdo de color, badges, secciones expandibles, toggle V1/V2.

---

### PROMPT 10 - Banner de no conformidad
```
Inside the control card, add a collapsed non-conformity banner below the header. When expanded it shows: auditor finding text area (red left border), corrective action text area (amber left border), and a diff view showing changes highlighted in green. Add expand/collapse arrow button. Banner background slightly red-tinted (#1A0A0A).
```

**Verificar:** banner colapsado, secciones de hallazgo y acción correctiva, diff en verde.

---

### PROMPT 11 - Botón flotante del chat
```
Add a floating action button fixed to the bottom-right corner. Electric blue gradient (#1E6FFF to #00D4FF). Chat bubble icon. On hover shows tooltip "Talk to Finvora's Team". When clicked, opens a panel showing 4 character cards: CISO (shield icon, blue), CTO (code icon, cyan), Legal Director (scales icon, purple), CFO (chart icon, green). Each card shows role title and brief description. Panel has dark background (#0F2140) with blur effect.
```

**Verificar:** botón flotante, tooltip, panel con 4 personajes, íconos y colores.

---

### PROMPT 12 - Página "The Company" (Bloque 0)
```
Design the "Finvora - The Company" page. Left sidebar stays fixed. Main area has a page header: "Finvora S.A.C." title, subtitle "ISO 27001 SGSI Documentation", breadcrumb "Dashboard > The Company". Below: a grid of 15 artifact cards (B0-01 to B0-15). Each card shows: artifact ID, artifact name, status badge (Coming Soon in gray, or Completed in green), and a small icon representing the content type (document, chart, diagram). Cards have dark background (#0F2140) with hover effect.
```

**Verificar:** header con breadcrumb, grid de 15 cards, badges de estado.

---

### PROMPT 13 - Página ISO 27001 - Gap Analysis view
```
Design the ISO 27001 Gap Analysis page. Three view toggle buttons at the top: "By Domain", "By Risk Level", "By Status". In "By Domain" view, show 4 domain sections: Organizational Controls (37), People Controls (8), Physical Controls (14), Technological Controls (34). Each section is a collapsible group with domain title, control count, and average score. Inside each group, show 3 sample control cards in a grid. Add a search bar and filter dropdowns at the top.
```

**Verificar:** 3 toggles de vista, 4 dominios, cards dentro de grupos, búsqueda y filtros.

---

### PROMPT 14 - Página Relations Map
```
Design the Relations Map page. Main area shows a network graph visualization with nodes and edges. Nodes are artifact cards (small circles with ID label). Edges are colored lines connecting related artifacts. Four view toggle buttons: "All Relations", "By ISO Clause", "By Regulation", "By Annex A Control". Add a legend panel on the right showing node types and edge colors. Show a placeholder graph with ~10 sample nodes connected.
```

**Verificar:** grafo con nodos y edges, toggles de vista, leyenda.

---

### PROMPT 15 - Estado "Coming Soon" para secciones vacías
```
Design a "Coming Soon" placeholder card for sections without content yet. Shows: a lock icon, section title, "Content in Progress" subtitle, estimated completion date, and a small progress bar showing 0%. Card uses the same dark style (#0F2140) with a dashed border in electric blue (#1E6FFF). Subtle animated pulse effect on the lock icon.
```

**Verificar:** ícono de candado, fecha estimada, barra de progreso, borde punteado, animación.

---

### PROMPT 16 - Ajuste final de consistencia visual
```
Review the complete design for visual consistency. Ensure: all backgrounds use the navy blue (#0A1628) palette, all interactive elements have hover states, all text is readable (minimum contrast ratio), spacing is consistent across all pages, the electric blue (#1E6FFF) accent is used consistently for active states and CTAs. Apply any needed corrections.
```

**Verificar:** consistencia de colores, hover states, contraste, espaciado.

---

## POST-EJECUCIÓN

Una vez completados los 16 prompts:

1. **Exportar el diseño completo** desde Stitch como HTML/CSS
2. **Guardar screenshots** de todas las pantallas generadas en `_schema/design-screenshots/`
3. **Continuar con `build-web.md`** para construir la web en React usando el diseño exportado como referencia

---

*Archivo creado: Junio 2026*
*Siguiente paso después de ejecutar: `build-web.md`*