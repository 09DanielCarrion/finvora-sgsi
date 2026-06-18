export const projectState = {
  lastUpdated: null,
  overallMaturity: 0,
  compliance: { iso27001: 0, gdpr: 0, euAiAct: 0, pciDss: 0 },
  controlStats: { implemented: 0, inProgress: 0, pending: 93, excluded: 0, total: 93 },
  artifacts: {
    B0: { total: 15, completed: 0 },
    B1: { total: 15, completed: 0 },
    B2: { total: 8, completed: 0 },
    B3: { total: 10, completed: 0 },
  },
  milestones: [
    { id: "schema", label: "Schema", completed: true, date: "2026-06-03" },
    { id: "design", label: "Design", completed: true, date: "2026-06-18" },
    { id: "iso27001", label: "ISO 27001", completed: false, date: null },
    { id: "euAiAct", label: "EU AI Act", completed: false, date: null },
    { id: "operations", label: "Operations", completed: false, date: null },
  ]
};
