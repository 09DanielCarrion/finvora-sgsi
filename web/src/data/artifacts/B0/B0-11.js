export const artifact = {
  "id": "B0-11",
  "name": "Historical Security Incidents",
  "block": "B0",
  "clause": "Clause 6.1.2",
  "completedDate": "2026-06-18",
  "version": "v1",
  "hasV2": false,
  "nonConformities": [],
  "content": "# Historical Security Incidents (Clause 6.1.2)\n\n## Incident 1 - October 2024: AWS Credential Exposure\n\n- **Description:** A GitHub repository was accidentally made public. It contained AWS credentials for a staging environment.\n- **Exposure duration:** approximately 2 hours before detection.\n- **Impact:** Staging credentials were exposed. Exploitation was neither confirmed nor ruled out.\n- **Response:** Credentials rotated within 4 hours. Repository made private again. No formal forensic investigation was conducted.\n- **Lessons learned:** Not formally documented at the time.\n- **Status:** Closed, without a formal remediation plan.\n- **Classification:** Unclassified - no incident classification process existed at the time.\n\n## Incident 2 - March 2025: Successful Phishing Attack\n\n- **Description:** A Finance department employee clicked a phishing email impersonating BBVA Continental. The employee's admin panel credentials were compromised.\n- **Duration:** The compromised account was active for approximately 6 hours before the employee reported unusual behavior.\n- **Impact:** Unauthorized access to the admin panel occurred. Records of approximately 150 customers were viewed. No data exfiltration was confirmed, but it could not be definitively ruled out.\n- **Response:** Password reset, sessions invalidated. Affected customers and INDECOPI were not notified.\n- **Lessons learned:** An advisory email about phishing was sent company-wide. No formal training was provided.\n- **Status:** Closed, without root cause analysis.\n- **Compliance note:** This incident likely required notification to INDECOPI under Ley 29733. That notification was not made.\n\n## Incident 3 - July 2025: Unauthorized Access by Former Employee\n\n- **Description:** A former developer, whose employment ended in May 2025, accessed the GitHub organization 6 weeks after departure because the account had not been deactivated.\n- **Duration:** Active unauthorized access for approximately 6 weeks.\n- **Impact:** The former employee downloaded source code for 3 microservices. No code modification was detected.\n- **Response:** The account was disabled. A manual access audit was initiated, which uncovered 6 additional inactive former-employee accounts still active.\n- **Status:** Partially remediated - 4 of 7 inactive accounts disabled, 3 remain pending as of this engagement's start.\n- **Note:** This incident directly motivated the informal control review Isabella Torres conducted upon joining Finvora.\n\n## Trends Identified\n\n- All three incidents trace back to process failures, not purely technological failures.\n- No formal incident management process existed at the time any of these incidents occurred.\n- None of the three incidents were reported to a regulator, even where reporting was likely required.\n- The organization's response pattern across all three incidents has been reactive rather than proactive.\n",
  "relatedArtifacts": [
    "B1-01",
    "B1-05"
  ],
  "relatedControls": [],
  "relatedClauses": [],
  "relatedRegulations": []
};
