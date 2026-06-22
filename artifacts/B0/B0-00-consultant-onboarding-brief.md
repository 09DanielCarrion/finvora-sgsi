# Consultant Onboarding Brief

**Document prepared by:** Isabella Torres, CISO
**Date:** June 20, 2026
**Recipient:** Daniel Carrion, GRC Consultant

---

## Engagement Overview

| Field | Value |
|---|---|
| Consultant | Daniel Carrion, GRC Consultant - ISO 27001 Lead Implementer (PECB Provisional) |
| Client | Finvora S.A.C. |
| Engagement start | June 20, 2026 |
| Engagement duration | 6 months |
| Primary contact | Isabella Torres, CISO (isabella.torres@finvora.com) |
| Secondary contact | Carlos Mendoza, CEO (carlos.mendoza@finvora.com) |
| Contract type | Fixed-fee consulting contract - $18,000 USD total ($3,000/month) |

## Engagement Objective

Lead the full ISO 27001:2022 implementation for Finvora S.A.C. and prepare the organization for certification audit before December 31, 2026. This is a contractual requirement from Hexalink GmbH (see B0-15 for regulatory context).

## Your Mandate

- Conduct a complete gap analysis of all 10 ISO 27001 clauses and 93 Annex A controls
- Define and document the ISMS scope
- Lead the risk assessment and risk treatment process
- Develop the Statement of Applicability (SoA)
- Create or update all mandatory policies and procedures
- Prepare the organization for the Stage 1 and Stage 2 certification audits
- You are NOT responsible for technical implementation - the engineering team executes. You design, document, and verify.

## Access Granted

- Full access to all internal documentation (Google Drive, Confluence, Notion)
- Interview access to all employees - coordinate through department heads
- Read access to AWS CloudTrail logs and security dashboards
- Access to GitHub (read-only) to review code security practices
- Access to Datadog monitoring dashboards
- You will NOT have access to: production databases, customer data, financial systems

## Key Stakeholders and Their Posture

| Stakeholder | Role | Posture toward ISMS | Your approach |
|---|---|---|---|
| Isabella Torres | CISO | Champion - fully supportive, hired you | Weekly sync, your main ally |
| Carlos Mendoza | CEO | Supportive but impatient - wants cert by Dec 2026 | Monthly updates, focus on business outcomes |
| Andrea Castillo | CTO | Resistant - engineering is "too busy" | Build trust, show ISO 27001 helps engineering |
| Roberto Quispe | CFO | Neutral - watches budget carefully | Always justify ROI, quantify risk in dollars |
| Marco Villanueva | Director Legal | Engaged - worried about GDPR/EU AI Act | Collaborate on regulatory mapping |
| Luis Paredes | Security Analyst | Eager to learn - will support your work | Delegate documentation tasks, mentor him |

## Known Issues You Will Find (Isabella's Informal Briefing)

Isabella has prepared you for what you will encounter. Do not be surprised by:

1. No formal security policies exist (the last one was written in 2021 and nobody follows it)
2. Secrets of AWS hardcoded in 2 GitHub repositories - partially remediated, still a risk
3. 3 unresolved access accounts from former employees - Luis is working on it
4. The October 2024 GitHub incident was never formally investigated - you will need to document it retrospectively
5. PCI DSS compliance is overdue - Stripe has sent 2 warnings - this needs to be escalated immediately
6. The CTO will push back on everything that touches the engineering workflow - be prepared for that conversation
7. The CFO approved $39,000 for your engagement and initial security tools - that is the real budget constraint

## Your First Week - Suggested Agenda

- Day 1: Review all B0 documentation (this brief + company profile + org chart)
- Day 2: Interview Isabella Torres (2 hours) - deep dive on current security posture
- Day 3: Interview Andrea Castillo (CTO) - understand technology architecture and constraints
- Day 4: Interview Marco Villanueva (Legal) - understand regulatory priorities
- Day 5: Interview Roberto Quispe (CFO) - understand budget reality and ROI expectations
- Week 2: Begin gap analysis - start with Clause 4 and 5, then move to Annex A

## Deliverables Timeline

| Deliverable | Due Date | Clause |
|---|---|---|
| ISMS Scope Document | Month 1 (July 2026) | Clause 4.3 |
| Gap Analysis Complete | Month 2 (August 2026) | Clauses 4-10 + Annex A |
| Risk Assessment | Month 2-3 (Aug-Sep 2026) | Clause 6.1.2 |
| Statement of Applicability | Month 3 (September 2026) | Clause 6.1.3d |
| Risk Treatment Plan | Month 3 (September 2026) | Clause 6.1.3e |
| All Mandatory Policies | Month 3-4 (Sep-Oct 2026) | Clauses 5.2, 7.5 |
| Implementation Plan | Month 4 (October 2026) | Clause 8.1 |
| Internal Audit | Month 5 (November 2026) | Clause 9.2 |
| Management Review | Month 5 (November 2026) | Clause 9.3 |
| Stage 1 Audit Ready | Month 6 (December 2026) | - |
| Stage 2 Audit Ready | Month 6 (December 2026) | - |

## Important Notes

- You are the lead, but Isabella is accountable to the CEO. Keep her informed of everything.
- Any finding that requires CEO decision (budget, org changes) goes through Isabella first.
- The engineering team does not report to you. Influence, do not command.
- Document everything. Every interview, every decision, every exception. This is an audit-ready project.
- If you find something that looks like a potential data breach or regulatory violation, escalate to Isabella immediately.

*Document prepared by: Isabella Torres, CISO*
*Date: June 20, 2026*
