# Current Technology Architecture

## Cloud Infrastructure (AWS)

- **Primary region:** us-east-1 (N. Virginia) - chosen in 2019 for cost and service availability reasons; not yet migrated to sa-east-1 (Sao Paulo) due to migration cost and effort.
- **Secondary region (DR):** us-west-2 (Oregon) - used for backups only; not a hot standby.
- **AWS services in use:** EC2, RDS (PostgreSQL), S3, Lambda, API Gateway, CloudFront, SQS, SNS, Cognito, CloudWatch, WAF (not enabled on all endpoints).
- **Network:** a single VPC with 3 subnets (public, private, database), though segregation between them is not consistently enforced at the security group level.
- **Account structure:** a single AWS account is used for all environments; AWS Organizations and Service Control Policies (SCPs) are not in use.

## Application Stack

- **Backend:** Python (FastAPI) for current services, Node.js for legacy microservices.
- **Frontend:** React + Next.js.
- **Databases:** PostgreSQL (RDS) for transactional data, MongoDB Atlas for unstructured data.
- **Cache:** Redis (ElastiCache).
- **Message queue:** AWS SQS.
- **CI/CD:** GitHub Actions to Amazon ECR to ECS Fargate.
- **Monitoring:** CloudWatch and Datadog, though Datadog coverage is partial and limited mainly to critical services.

## AI/ML Systems

- **CreditScore AI:** Proprietary credit scoring model (scikit-learn + XGBoost), trained on data from Equifax Peru and Finvora's own transactional history. Deployed on Amazon SageMaker. Retrained monthly.
- **FraudGuard:** Real-time anomaly detection model deployed as an AWS Lambda function. Requires sub-200ms latency.
- **RiskAnalyzer:** Combines CreditScore AI output with payment behavior data to produce an automated risk decision, including the credit limit assigned to a customer.

(Full technical detail on these systems is documented in B0-13.)

## Known Technical Debt and Security Issues

- Three legacy Node.js microservices have had no active maintenance since 2022.
- AWS secrets were found hardcoded in two GitHub repositories (detected by Isabella Torres in January 2026); remediation is partially complete.
- AWS WAF is not enabled on 4 endpoints of the payments API.
- Application logs are not centralized; each service logs independently, with no unified log pipeline.
- No formal vulnerability management process exists; patching happens opportunistically.
- MongoDB Atlas does not have a correctly configured IP allowlist.
- MFA is not enforced across all critical systems - it is enabled for AWS console access but not consistently for the admin panel or for all GitHub accounts.

## Endpoints and APIs

- **Public API:** api.finvora.com (REST, 847 documented endpoints in Swagger).
- **Partner API:** partners.finvora.com (restricted by API key only, no OAuth).
- **Admin panel:** admin.finvora.com (intended for internal use only, but reachable from the public internet).
- **Stripe webhooks:** signature validation is missing on 3 of 8 webhook endpoints.
