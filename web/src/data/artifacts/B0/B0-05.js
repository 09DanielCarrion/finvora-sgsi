export const artifact = {
  "id": "B0-05",
  "name": "ISMS Scope",
  "block": "B0",
  "clause": "Clause 4.3",
  "completedDate": "2026-06-18",
  "version": "v1",
  "hasV2": false,
  "nonConformities": [],
  "content": "# ISMS Scope Document (Clause 4.3)\n\n## In Scope\n\n- Digital credit platform (primary system, including CreditScore AI and RiskAnalyzer)\n- B2B payments platform (including FraudGuard)\n- Financial Services API (partner-facing)\n- AWS infrastructure - both production and staging environments\n- Lima headquarters (Av. Pardo 261, Miraflores)\n- All employees with access to production systems or customer data\n- Vendors and suppliers with access to customer data or production systems (AWS, Stripe, Equifax Peru, MongoDB Atlas, GitHub, Datadog, Truora)\n\n## Out of Scope (With Justification)\n\n| Excluded Item | Justification |\n|---|---|\n| Colombia and Chile offices | Nascent operations representing less than 15% combined of company revenue; will be incorporated into the next certification cycle once operational maturity and headcount justify inclusion |\n| Legacy accounting systems | Scheduled for replacement in Q3 2026; including a system about to be decommissioned would create unnecessary audit and remediation overhead with no lasting benefit |\n| Mexico expansion | Not yet operational; no systems, data, or personnel exist yet to bring into scope |\n\n## Boundary and Interface Description\n\nThe ISMS boundary is drawn around Finvora's Lima-based operations, its AWS-hosted production and staging environments, and the personnel and contractors who interact with those systems. Interfaces with out-of-scope entities are documented as follows:\n\n- **Colombia/Chile offices:** Connect to in-scope systems via the same AWS environment and API layer used by Peru operations. Until these offices are brought into scope, any data flow from these offices into in-scope systems is treated as an external interface and subject to the same access controls as any other external connection.\n- **Legacy accounting systems:** Interface with in-scope financial reporting processes via manual data export; no direct system-to-system integration with customer-facing platforms exists.\n- **Mexico expansion:** No interface exists yet; will be addressed in scope review prior to launch.\n\nThis scope will be formally reviewed at the next management review (see B3-06) and updated as the certification boundary evolves, particularly as Colombia and Chile operations mature.\n",
  "relatedArtifacts": [],
  "relatedControls": [],
  "relatedClauses": [],
  "relatedRegulations": []
};
