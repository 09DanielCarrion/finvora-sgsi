export const artifact = {
  "id": "B0-09",
  "name": "Current Security Controls",
  "block": "B0",
  "clause": "Clause 8.1",
  "completedDate": "2026-06-18",
  "version": "v1",
  "hasV2": false,
  "nonConformities": [],
  "content": "# Current Security Controls - Baseline Assessment\n\nThis document provides an honest baseline of what security controls exist today at Finvora, prior to any ISO 27001 remediation work, including what partially works and what does not work at all.\n\n## Controls That Exist (At Least Partially)\n\n| Control Area | Status | Description | Gaps Identified | Evidence Available |\n|---|---|---|---|---|\n| Password authentication | Partial | Passwords required for all systems | No formal complexity or rotation policy | None documented |\n| Antivirus on endpoints | Partial | Installed on approximately 80% of corporate laptops | 20% of laptops unprotected; no central management visibility | IT asset spreadsheet (informal) |\n| Database backups | Partial | RDS automated backups enabled | Backups are not regularly tested for restorability | AWS RDS configuration screenshots |\n| Production access control | Partial | Access control exists | Permissions are overly broad; many users hold admin-level access unnecessarily | AWS IAM console export |\n| HTTPS on public endpoints | Implemented | All public-facing endpoints use HTTPS | None identified | AWS Certificate Manager configuration |\n| Private GitHub repositories | Implemented | All source code repositories are private | Historical exposure incident (Oct 2024) shows process gaps despite this control | GitHub organization settings |\n| AWS CloudTrail | Partial | Enabled across the AWS account | Logs are not actively monitored or reviewed | CloudTrail configuration export |\n\n## Controls That Do Not Exist\n\n- A formal Information Security Policy\n- A vulnerability management process\n- A formal security incident management process\n- A security awareness program for employees\n- A secure offboarding process (7 active accounts belonging to former employees were identified during an informal audit)\n- MFA enforced across all critical systems (currently limited to AWS console access; not enforced on the admin panel or consistently across GitHub)\n- A formal patch management process\n- Any history of penetration testing\n- Signed Data Processing Agreements (DPAs) with all vendors handling personal data\n- A formal information asset inventory (prior to this engagement)\n- A formal data classification scheme (prior to this engagement)\n- A business continuity plan\n\n## Notable Incident (Documented Informally)\n\nIn October 2024, a developer accidentally made a GitHub repository public. The repository contained AWS credentials for a staging environment. The credentials were rotated within approximately 4 hours of discovery, but it was never conclusively determined whether they had been exploited in that window. No formal incident report was produced at the time (this incident is formally documented retrospectively in B0-11).\n",
  "relatedArtifacts": [
    "B1-01"
  ],
  "relatedControls": [],
  "relatedClauses": [],
  "relatedRegulations": []
};
