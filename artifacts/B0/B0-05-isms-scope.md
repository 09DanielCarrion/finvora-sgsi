# ISMS Scope Document (Clause 4.3)

## In Scope

- Digital credit platform (primary system, including CreditScore AI and RiskAnalyzer)
- B2B payments platform (including FraudGuard)
- Financial Services API (partner-facing)
- AWS infrastructure - both production and staging environments
- Lima headquarters (Av. Pardo 261, Miraflores)
- All employees with access to production systems or customer data
- Vendors and suppliers with access to customer data or production systems (AWS, Stripe, Equifax Peru, MongoDB Atlas, GitHub, Datadog, Truora)

## Out of Scope (With Justification)

| Excluded Item | Justification |
|---|---|
| Colombia and Chile offices | Nascent operations representing less than 15% combined of company revenue; will be incorporated into the next certification cycle once operational maturity and headcount justify inclusion |
| Legacy accounting systems | Scheduled for replacement in Q3 2026; including a system about to be decommissioned would create unnecessary audit and remediation overhead with no lasting benefit |
| Mexico expansion | Not yet operational; no systems, data, or personnel exist yet to bring into scope |

## Boundary and Interface Description

The ISMS boundary is drawn around Finvora's Lima-based operations, its AWS-hosted production and staging environments, and the personnel and contractors who interact with those systems. Interfaces with out-of-scope entities are documented as follows:

- **Colombia/Chile offices:** Connect to in-scope systems via the same AWS environment and API layer used by Peru operations. Until these offices are brought into scope, any data flow from these offices into in-scope systems is treated as an external interface and subject to the same access controls as any other external connection.
- **Legacy accounting systems:** Interface with in-scope financial reporting processes via manual data export; no direct system-to-system integration with customer-facing platforms exists.
- **Mexico expansion:** No interface exists yet; will be addressed in scope review prior to launch.

This scope will be formally reviewed at the next management review (see B3-06) and updated as the certification boundary evolves, particularly as Colombia and Chile operations mature.
