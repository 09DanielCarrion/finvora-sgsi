# Critical Vendors and Existing Contracts (Clause 4.2, A.5.19)

| Vendor | Service | Data Access | Contract Type | DPA Signed | Security Certification | Risk Level | Notes |
|---|---|---|---|---|---|---|---|
| AWS | Cloud infrastructure (all environments) | Access to all data, by virtue of hosting | Standard AWS enterprise agreement | No (GDPR DPA not formally executed) | ISO 27001 certified | Critical | Largest single point of regulatory exposure given Hexalink data flow |
| Stripe | Payment processing | Transaction data | Standard processor agreement | Yes | PCI DSS Level 1 | Critical | Compliance reminders sent twice regarding Finvora's own PCI DSS status |
| Equifax Peru | Credit bureau data | Bidirectional access to customer credit data | Data usage agreement | No | Not verified | High | No formal GDPR-compliant DPA |
| MongoDB Atlas | NoSQL database hosting | Unstructured customer data | SaaS subscription | No | ISO 27001 certified | High | IP allowlist misconfigured |
| GitHub (Microsoft) | Source code hosting | Source code, historical secrets | SaaS subscription | No | Not verified for GDPR purposes | High | - |
| Datadog | Monitoring and logging | Logs that may contain personal data | SaaS subscription | No | SOC 2 Type II | Medium | - |
| Twilio | SMS and communications | Customer phone numbers | SaaS subscription | Yes | ISO 27001 certified | Medium | - |
| Hexalink GmbH | EU client / data processing partner | European employee personal data | Master services agreement | No (in negotiation) | N/A (client, not a sub-processor) | Critical | Primary driver of GDPR exposure |
| Experian Peru | Secondary credit bureau data | Customer credit data | Data usage agreement | No | Not verified | Medium | - |
| Truora (KYC provider) | Identity verification | Identity documents, photos | SaaS subscription | No | Not verified | High | - |
| Salesforce | CRM | Corporate client data | SaaS subscription | Available but not activated | Not verified for this account | Medium | - |
| Notion | Internal documentation | Internal documents, occasionally sensitive | SaaS subscription | No | Not verified | Medium | - |

## Critical Findings

- 8 of 12 critical vendors do not have a signed DPA.
- The most critical vendor, AWS, does not have a formal DPA covering GDPR, which directly exposes Finvora to regulatory risk given the Hexalink data flow described in B0-08.
- No vendor has been evaluated through a formal security questionnaire or vendor risk assessment process to date.
