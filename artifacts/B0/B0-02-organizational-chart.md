# Organizational Chart - Finvora S.A.C.

## Executive Team (C-Suite)

### Carlos Mendoza - Chief Executive Officer (41)
Former BBVA Continental relationship banker, co-founded Finvora in 2019. Drives the company's growth agenda and is the primary relationship owner with Meridian Ventures and Hexalink GmbH. Supportive of the ISMS project because it is a contractual requirement from Hexalink, but impatient with anything that slows down product delivery. Wants the certification "done by December 2026" and tends to measure security progress in business terms (deals unlocked, risk avoided) rather than control-by-control progress.

### Andrea Castillo - Chief Technology Officer (36)
Owns engineering, infrastructure, and the AI/ML systems in production. Joined in 2020 after the original CTO left. Currently leading a platform redesign and considers most "security paperwork" a distraction for a team that is already stretched thin (30% annual engineering turnover). Not opposed to security in principle, but skeptical of controls that are not clearly tied to a real, demonstrated risk. Will need to be brought in early and shown concrete technical benefit, not just compliance language.

### Roberto Quispe - Chief Financial Officer (44)
Manages the company's finances and board reporting. Approved the $85,000 annual security budget for 2026 but considers it a ceiling, not a floor, until he sees clear ROI. Wants every new security investment quantified in terms of risk reduction or revenue protection. Sits on the budget conversation for the ISO 27001 certification itself, which is the single largest line item in the security budget this year.

### Isabella Torres - Chief Information Security Officer (33)
Hired 11 months ago (July 2025), coming from a boutique ISO 27001 consultancy where she led implementations for two other LATAM fintechs. Reports directly to the CEO. Is trying to build the ISMS from close to zero, with a team of 2.5 people. She is the project sponsor for Daniel Carrion's engagement and the main internal champion of the ISO 27001 process.

### Marco Villanueva - Director of Legal & Compliance (39)
Focused primarily on GDPR exposure from the Hexalink contract and on Peruvian financial and data protection regulation. Understands the legal stakes well but has limited technical background, which sometimes creates friction when regulatory requirements need to be translated into specific technical controls.

### Sofia Herrera - Chief Product Officer (34)
Manages the product roadmap, including the credit and payments user experience. Makes product-level decisions that have security and compliance implications (e.g., what data is collected at onboarding) without always looping in the CISO, which is a recurring friction point.

## Departments and Headcount

| Department | Headcount | Breakdown |
|---|---|---|
| Engineering | 28 | Backend (12), Frontend (8), DevOps/Infra (4), QA (4) |
| Product | 8 | Product Managers (3), UX/UI (3), Data Analysts (2) |
| Sales & Business Development | 15 | By geography (Peru, Colombia, Chile) |
| Operations & Customer Success | 18 | - |
| Finance & Accounting | 7 | - |
| Legal & Compliance | 4 | Includes Marco Villanueva |
| HR | 3 | - |
| Security | 3 | CISO (Isabella Torres) + Security Analyst (Luis Paredes) + DevSecOps part-time contractor |
| Marketing | 5 | - |
| Executive Assistants & Admin | 4 | - |
| **Total** | **95** | |

## Reporting Lines Relevant to the ISMS

- Isabella Torres (CISO) reports directly to the CEO, Carlos Mendoza.
- Luis Paredes (Security Analyst, 26, 4 months at the company) reports to Isabella Torres.
- The DevSecOps contractor (20 hours/week) reports to Isabella Torres with a dotted line to Andrea Castillo (CTO).
- Marco Villanueva (Legal) coordinates laterally with Isabella Torres on regulatory matters but does not report to her.

## Documented Friction Points

- Engineering lacks clarity on who approves security exceptions: the CTO or the CISO. This has caused at least one delayed remediation while the two waited on each other.
- No formal Security Committee exists yet. Security decisions that touch multiple departments are made ad hoc, usually in a Slack thread.
- Product-level security decisions (e.g., what data is collected during onboarding, what is exposed via partner APIs) are sometimes made by the CPO, Sofia Herrera, without consulting the CISO first.
