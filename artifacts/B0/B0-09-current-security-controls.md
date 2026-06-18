# Current Security Controls - Baseline Assessment

This document provides an honest baseline of what security controls exist today at Finvora, prior to any ISO 27001 remediation work, including what partially works and what does not work at all.

## Controls That Exist (At Least Partially)

| Control Area | Status | Description | Gaps Identified | Evidence Available |
|---|---|---|---|---|
| Password authentication | Partial | Passwords required for all systems | No formal complexity or rotation policy | None documented |
| Antivirus on endpoints | Partial | Installed on approximately 80% of corporate laptops | 20% of laptops unprotected; no central management visibility | IT asset spreadsheet (informal) |
| Database backups | Partial | RDS automated backups enabled | Backups are not regularly tested for restorability | AWS RDS configuration screenshots |
| Production access control | Partial | Access control exists | Permissions are overly broad; many users hold admin-level access unnecessarily | AWS IAM console export |
| HTTPS on public endpoints | Implemented | All public-facing endpoints use HTTPS | None identified | AWS Certificate Manager configuration |
| Private GitHub repositories | Implemented | All source code repositories are private | Historical exposure incident (Oct 2024) shows process gaps despite this control | GitHub organization settings |
| AWS CloudTrail | Partial | Enabled across the AWS account | Logs are not actively monitored or reviewed | CloudTrail configuration export |

## Controls That Do Not Exist

- A formal Information Security Policy
- A vulnerability management process
- A formal security incident management process
- A security awareness program for employees
- A secure offboarding process (7 active accounts belonging to former employees were identified during an informal audit)
- MFA enforced across all critical systems (currently limited to AWS console access; not enforced on the admin panel or consistently across GitHub)
- A formal patch management process
- Any history of penetration testing
- Signed Data Processing Agreements (DPAs) with all vendors handling personal data
- A formal information asset inventory (prior to this engagement)
- A formal data classification scheme (prior to this engagement)
- A business continuity plan

## Notable Incident (Documented Informally)

In October 2024, a developer accidentally made a GitHub repository public. The repository contained AWS credentials for a staging environment. The credentials were rotated within approximately 4 hours of discovery, but it was never conclusively determined whether they had been exploited in that window. No formal incident report was produced at the time (this incident is formally documented retrospectively in B0-11).
