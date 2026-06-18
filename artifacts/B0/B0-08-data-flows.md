# Data Flows (GDPR Art. 30 - Record of Processing Activities)

## Flow 1 - SME Customer Onboarding

Web onboarding form -> KYC validation -> Equifax Peru credit bureau query -> storage in RDS PostgreSQL (us-east-1) -> confirmation notification by email/SMS (via Twilio).

**Data collected:** business name, RUC, legal representative identity, financial statements, bank account details, contact information.
**Storage:** RDS PostgreSQL, us-east-1, encrypted at rest (AWS-managed keys).
**Access:** Operations & Customer Success team, Engineering (production access), CreditScore AI pipeline.
**Retention:** Indefinite - no formal retention policy exists (see "Data Retention Policies" below).

## Flow 2 - Credit Application and Approval

Applicant data -> CreditScore AI (SageMaker) -> automated decision (for amounts under $5,000 USD) or analyst-assisted decision (for $5,000-$50,000 USD) -> notification -> disbursement via banking API.

**Data flow to the AI model:** the model receives 47 features including payment history, financial ratios, and in-app behavioral data. The model's score and recommendation are logged to RDS, but the full feature vector used for each decision is not consistently retained, making after-the-fact explainability difficult.
**Decision logging:** partial - sufficient to show the output score, insufficient to fully reconstruct the input state for every historical decision.

## Flow 3 - Payment Processing

Payment initiated -> Finvora validation -> Stripe -> destination bank -> confirmation.

**Card data handling:** card data is never stored directly by Finvora; Stripe tokens are used for all card-present operations.
**Logs:** transaction logs (amount, parties, timestamp, Stripe token reference) are retained in RDS PostgreSQL.
**Gap:** 3 of 8 Stripe webhook endpoints do not validate webhook signatures, creating a risk of spoofed payment confirmation events.

## Flow 4 - Hexalink GmbH Data (International Transfer)

European employee data from Hexalink GmbH -> Finvora platform -> storage in RDS PostgreSQL, us-east-1 (AWS, United States).

This is the most critical flow from a GDPR perspective. Personal data belonging to EU data subjects (Hexalink employees) is stored on infrastructure located in the United States without a documented adequate transfer mechanism (no Standard Contractual Clauses executed with AWS covering this specific flow, and no Data Processing Agreement signed between Finvora and Hexalink at the time of this assessment). This is flagged as a critical compliance gap (see B0-15).

## Flow 5 - AI Model Training

Historical credit data (2019-2024) -> preprocessing -> training on Amazon SageMaker -> model deployment.

**Personal data used in training:** yes - the training dataset includes personal and financial data of historical applicants. No formal anonymization or pseudonymization process is applied before training.
**Retention of training data:** indefinite, stored in an S3 bucket with no documented retention or deletion schedule.
**Bias auditing:** none performed to date on any model version.

## Data Retention Policies (Current State - Incomplete)

Finvora does not currently have a formal data retention policy. In practice, customer data, transaction data, and AI training data are retained indefinitely across all systems reviewed. This is flagged as a critical compliance gap relevant to GDPR Art. 5(1)(e) (storage limitation) and to Ley 29733 in Peru, and will require a formal retention schedule as part of the Risk Treatment Plan (B1-05).
