# Information Asset Inventory (Clause 8.1, A.5.9)

## Data Classification Scheme

- **Confidential:** customer data, AI models, secrets and credentials
- **Internal:** source code, infrastructure configuration, contracts
- **Public:** public API documentation, marketing materials

## Asset Register

| Asset ID | Asset Name | Type | Classification | Owner | Location | Critical | Notes |
|---|---|---|---|---|---|---|---|
| INF-01 | SME customer data (name, RUC, financials, credit history) | Information | Confidential | CISO | RDS PostgreSQL (us-east-1) | Yes | Core data asset for credit decisioning |
| INF-02 | Transaction data (amount, origin, destination, timestamp) | Information | Confidential | CISO | RDS PostgreSQL (us-east-1) | Yes | Subject to PCI DSS scope considerations |
| INF-03 | CreditScore AI model artifacts | Information | Confidential | CTO | SageMaker Model Registry | Yes | No bias audit performed |
| INF-04 | FraudGuard model artifacts | Information | Confidential | CTO | Lambda deployment package | Yes | Real-time fraud scoring |
| INF-05 | RiskAnalyzer model artifacts | Information | Confidential | CTO | SageMaker / internal pipeline | Yes | No technical documentation exists |
| INF-06 | AI training datasets (credit history, 2019-2024) | Information | Confidential | CTO | S3 (training bucket) | Yes | Not anonymized; retention undefined |
| INF-07 | Source code - credit platform | Information | Internal | CTO | GitHub (private repos) | Yes | 40% unreviewed for security in 3+ years |
| INF-08 | Source code - payments platform | Information | Internal | CTO | GitHub (private repos) | Yes | - |
| INF-09 | Infrastructure as Code (Terraform/CloudFormation) | Information | Internal | CTO | GitHub (private repos) | Yes | - |
| INF-10 | AWS API keys and secrets | Information | Confidential | CTO | AWS Secrets Manager / (partially hardcoded in repos) | Yes | 2 repos found with hardcoded secrets |
| INF-11 | Stripe API keys | Information | Confidential | CTO | AWS Secrets Manager | Yes | - |
| INF-12 | Equifax Peru API credentials | Information | Confidential | CTO | AWS Secrets Manager | Yes | - |
| INF-13 | Employee personal data (HR records) | Information | Confidential | HR Lead | Google Workspace / HR system | Yes | - |
| INF-14 | Hexalink GmbH employee data (EU data subjects) | Information | Confidential | Legal Director | RDS PostgreSQL (us-east-1) | Yes | GDPR cross-border transfer issue - see B0-08 |
| INF-15 | Client contracts | Information | Internal | Legal Director | Google Drive | No | - |
| INF-16 | Vendor contracts | Information | Internal | Legal Director | Google Drive | No | - |
| INF-17 | Financial reports | Information | Internal | CFO | Google Drive / accounting system | Yes | - |
| INF-18 | Board meeting materials | Information | Confidential | CEO | Google Drive (restricted) | No | - |
| INF-19 | Public API documentation | Information | Public | CTO | Swagger / developer portal | No | - |
| INF-20 | Marketing materials | Information | Public | Marketing Lead | Website / CMS | No | - |
| SW-01 | Digital credit platform (application) | Software | Internal | CTO | AWS ECS Fargate | Yes | Primary revenue-generating system |
| SW-02 | B2B payments platform (application) | Software | Internal | CTO | AWS ECS Fargate | Yes | - |
| SW-03 | CreditScore AI service | Software | Internal | CTO | Amazon SageMaker | Yes | - |
| SW-04 | FraudGuard service | Software | Internal | CTO | AWS Lambda | Yes | Sub-200ms latency requirement |
| SW-05 | RiskAnalyzer service | Software | Internal | CTO | Internal pipeline | Yes | Single point of knowledge - original developer departed |
| SW-06 | Admin panel | Software | Internal | CTO | AWS ECS Fargate | Yes | Exposed to public internet |
| SW-07 | Monitoring platform (Datadog) | Software | Internal | DevOps | SaaS | No | Partial coverage only |
| SW-08 | GitHub (source control) | Software | Internal | CTO | SaaS (Microsoft) | Yes | - |
| SW-09 | Jira | Software | Internal | Product | SaaS | No | - |
| SW-10 | Confluence | Software | Internal | Product | SaaS | No | - |
| SW-11 | Slack | Software | Internal | IT | SaaS | No | - |
| SW-12 | Notion | Software | Internal | Operations | SaaS | No | Some sensitive internal docs stored without DPA |
| HW-01 | AWS EC2 instances | Hardware/Infra | Internal | CTO | AWS us-east-1 | Yes | - |
| HW-02 | AWS RDS instances | Hardware/Infra | Confidential | CTO | AWS us-east-1 | Yes | - |
| HW-03 | Corporate laptops (95 units) | Hardware | Internal | IT | Employee custody | Yes | Antivirus on ~80% only |
| HW-04 | Corporate mobile phones (15 units, sales team) | Hardware | Internal | IT | Employee custody | No | - |
| SVC-01 | AWS (cloud provider) | Service | Confidential | CTO | External | Yes | DPA not formally signed for GDPR |
| SVC-02 | Stripe (payment processor) | Service | Confidential | CTO | External | Yes | PCI DSS compliance overdue |
| SVC-03 | Equifax Peru (credit data) | Service | Confidential | CTO | External | Yes | No verified ISO 27001 certification |
| SVC-04 | GitHub (source control hosting) | Service | Internal | CTO | External | Yes | - |
| SVC-05 | Datadog (monitoring) | Service | Internal | DevOps | External | No | - |
| SVC-06 | MongoDB Atlas (database hosting) | Service | Confidential | CTO | External | Yes | IP allowlist misconfigured |

**Total assets documented:** 40
