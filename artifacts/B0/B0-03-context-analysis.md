# Context Analysis - Internal and External Factors (Clause 4.1)

## Internal Factors

### Positive

- A CISO with prior ISO 27001 implementation experience was recently hired (July 2025) and is actively structuring the security function.
- The engineering team is technically competent and works within an established DevOps/CI-CD culture, which makes many controls easier to operationalize once prioritized.
- The CEO is personally committed to the certification, because it directly unlocks revenue (the Hexalink contract).
- Infrastructure is 100% on AWS, which simplifies the application of cloud-native security controls (IAM policies, CloudTrail, GuardDuty, WAF) compared to a hybrid or on-prem environment.
- A CI/CD pipeline (GitHub Actions to ECR to ECS Fargate) is already established, providing a natural point to embed security gates later.

### Negative

- The security team consists of only 2.5 people (Isabella, Luis, and a part-time DevSecOps contractor) for a 95-person organization.
- Significant technical debt exists: approximately 40% of the credit platform's codebase has not had a security review in over 3 years.
- No formal documentation of the system architecture exists; what documentation does exist is scattered across Confluence, Notion, and informal Slack threads.
- Security policies are nonexistent or outdated; the last formal policy document was written in 2021 and is not actively followed.
- Engineering turnover is high (30% annually), which means security knowledge and context are repeatedly lost.
- Onboarding for new employees does not include any security awareness training.
- Access for departed employees is not always revoked promptly, as confirmed by an informal audit Isabella ran shortly after joining (see B0-09 and B0-11).
- The annual security budget of $85,000 USD is insufficient relative to the company's size, data sensitivity, and the number of regulatory regimes it must satisfy.

## External Factors

### Positive

- Demand for ISO 27001-certified fintechs is growing in the enterprise and cross-border partnership market, which makes the certification a competitive differentiator once achieved.
- The Peruvian regulatory environment (SBS) is currently less stringent than the European regime, giving Finvora a window of time to mature its controls before facing the strictest enforcement.
- AWS-native security tooling is available and partially already paid for as part of existing cloud spend.
- The GRC community in Latin America is growing, making it easier to find talent, training, and external consulting support such as this engagement.

### Negative

- The EU AI Act is in force, and Finvora's credit scoring system is very likely classified as high-risk under Annex III.
- GDPR applies because the Hexalink GmbH contract involves processing personal data of European employees.
- PCI DSS v4.0 compliance is increasingly demanded by payment processors of partners like Finvora, and Stripe has already sent formal reminders.
- Peruvian financial technology regulation is evolving, notably SBS Circular G-185 on technology risk management, which Finvora does not yet fully satisfy.
- Direct competitors (Kueski, Konfio) are already ISO 27001 certified, putting Finvora at a competitive disadvantage in enterprise and cross-border deals until certification is achieved.
- Phishing attacks targeting LATAM fintechs increased 340% in 2024 according to CERT-PE, raising the baseline threat level for an organization that has already experienced one successful phishing incident.

## Security SWOT Matrix

| | Helpful | Harmful |
|---|---|---|
| **Internal** | **Strengths:** Experienced CISO, competent engineering team with DevOps culture, CEO buy-in, AWS-native infrastructure, established CI/CD pipeline | **Weaknesses:** Undersized security team (2.5 FTE), 40% of credit platform code unreviewed for 3+ years, no architecture documentation, outdated/absent policies, 30% engineering turnover, no security onboarding, delayed offboarding, insufficient budget ($85K) |
| **External** | **Opportunities:** Market demand for ISO 27001-certified fintechs, lighter local regulatory pressure (for now), available AWS security tooling, growing LATAM GRC talent pool | **Threats:** EU AI Act high-risk classification likely, GDPR exposure via Hexalink, overdue PCI DSS v4.0 compliance, evolving SBS Circular G-185, certified competitors, 340% rise in LATAM fintech phishing attacks |
