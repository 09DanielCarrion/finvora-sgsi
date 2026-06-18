# AI Systems in Operation (EU AI Act + ISO 42001 Context)

## System 1 - CreditScore AI (Credit Scoring)

- **Technical description:** XGBoost model trained on historical credit data from Equifax Peru combined with 18 months of Finvora's own transactional history. Uses 47 features, including payment history, financial ratios, and in-app behavioral signals.
- **Input:** A credit application with the SME's data.
- **Output:** A score from 0-1000 plus a recommendation (Approve / Reject / Manual Review).
- **Automated decision:** Yes, for amounts under $5,000 USD, with no human intervention.
- **Assisted decision:** For amounts between $5,000 and $50,000 USD, an analyst reviews the score and recommendation before deciding.
- **Affected users:** Peruvian, Colombian, and Chilean SMEs, and potentially Hexalink GmbH's supplier network.
- **Training data:** 180,000 historical credit records, 2019-2024. No bias audit has been performed.
- **Retraining cadence:** Monthly, on Amazon SageMaker.
- **EU AI Act classification:** High-risk, Annex III Section 5(b) (AI systems used to evaluate creditworthiness).
- **Identified problem:** The model has never been audited for bias based on gender, age, or geographic location.

## System 2 - FraudGuard (Real-Time Fraud Detection)

- **Technical description:** Anomaly detection model based on Isolation Forest, executed as an AWS Lambda function on every transaction.
- **Input:** Real-time transaction data (amount, origin, destination, time, device, geolocation).
- **Output:** A fraud score from 0-100. Above 75, the transaction is automatically blocked. Between 50 and 75, additional verification is required.
- **Automated decision:** Yes, automatic blocking with no human intervention.
- **Latency requirement:** Under 200ms.
- **Affected users:** All payments platform customers.
- **EU AI Act classification:** Possibly high-risk, pending a formal Annex III analysis - automatic blocking of transactions can affect access to essential financial services.
- **Identified problem:** False positive rate of approximately 3.2%, with legitimate customers blocked and no clear appeals process.

## System 3 - RiskAnalyzer (Automated Risk Analysis)

- **Technical description:** A pipeline combining CreditScore AI and FraudGuard outputs with external data to generate a complete customer risk profile.
- **Output:** A risk profile (Low / Medium / High / Very High) and a recommended credit limit.
- **Automated decision:** Yes, automatically determines the customer's credit limit.
- **EU AI Act classification:** High-risk, Annex III Section 5(b).
- **Identified problem:** No technical documentation exists for this system. The lead developer who built it left the company in 2024.

## Current EU AI Act Compliance Status

| Obligation | Status |
|---|---|
| Technical documentation (Art. 11) | Does not exist for any system |
| Event logging (Art. 12) | Partial - only for CreditScore AI |
| Human oversight (Art. 14) | Partial - only for credits above $5,000 |
| Registration in EU database (Art. 51) | Not performed |
| Conformity assessment | Not performed |
