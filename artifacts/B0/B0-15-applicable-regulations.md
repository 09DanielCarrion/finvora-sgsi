# Applicable Regulations and Current Compliance Status (Clause 4.2)

## Regulation 1 - ISO/IEC 27001:2022

- **Applicability:** Voluntary in principle, but contractually required by Hexalink GmbH.
- **Current status:** Not certified. Preparation in progress (this engagement).
- **Estimated gap:** High - approximately 65% of Annex A controls are not formally implemented.
- **Deadline:** December 31, 2026.
- **Owner:** Isabella Torres (CISO).

## Regulation 2 - GDPR (EU 2016/679)

- **Applicability:** Mandatory due to the Hexalink GmbH contract, which involves processing European employees' personal data.
- **Current status:** Non-compliant. European citizens' data is stored in us-east-1 without a documented adequate transfer mechanism (no SCCs executed with AWS covering this specific flow).
- **Risk:** Potential fines of up to EUR 20M or 4% of global annual turnover.
- **Critical gaps:** AWS DPA not signed, data stored in the US without SCCs, incomplete record of processing activities.
- **Owner:** Marco Villanueva (Director Legal), supported by Isabella Torres.
- **Deadline:** Q3 2026.

## Regulation 3 - EU AI Act (EU 2024/1689)

- **Applicability:** Mandatory. CreditScore AI and RiskAnalyzer are classified as high-risk under Annex III, Section 5(b). FraudGuard requires further classification analysis.
- **Current status:** Non-compliant. None of the obligations under Arts. 9-15 have been implemented.
- **Critical pending obligations:** technical documentation (Art. 11), AI risk management system (Art. 9), human oversight (Art. 14), registration in the EU database (Art. 51).
- **Timeline:** High-risk Annex III obligations begin to apply from August 2026 (phase 1) or December 2027 (certain provisions).
- **Owner:** Marco Villanueva, supported by Isabella Torres and Andrea Castillo (CTO).

## Regulation 4 - PCI DSS v4.0

- **Applicability:** Required by Stripe as a condition of the payment processing agreement.
- **Current status:** Partial compliance at SAQ A level only. No formal assessment has been conducted.
- **Risk:** Termination of the Stripe contract if PCI DSS v4.0 compliance is not achieved. The original deadline (March 2025) has already passed; Stripe has sent two reminders.
- **Mitigating action taken:** Isabella Torres sent a formal holding response to Stripe in May 2026 acknowledging the gap and committing to a remediation timeline aligned with the ISO 27001 engagement, which has bought temporary goodwill but not a formal extension. This must be resolved within the engagement.
- **Owner:** Isabella Torres and Andrea Castillo.
- **Deadline:** Urgent - already overdue.

## Regulation 5 - Ley 29733 (Personal Data Protection, Peru)

- **Applicability:** Mandatory for all Peruvian customer data.
- **Current status:** Registration with INDECOPI is pending. The March 2025 phishing incident (see B0-11) likely required notification that was never made.
- **Risk:** Fines of up to 100 UIT (approximately $130,000 USD).
- **Owner:** Marco Villanueva.

## Regulation 6 - SBS Circular G-185 (Technology Risk Management)

- **Applicability:** Mandatory for financial services companies supervised by SBS.
- **Current status:** Basic compliance. Finvora produces an annual technology risk report but does not fully satisfy all requirements of the circular.
- **Owner:** Isabella Torres and Roberto Quispe (CFO).

## Compliance Priority Matrix

| Regulation | Urgency | Impact | Priority |
|---|---|---|---|
| PCI DSS v4.0 | Critical | High | 1 |
| GDPR | High | Very High | 2 |
| ISO 27001 | High | High | 3 |
| EU AI Act | Medium-High | High | 4 |
| Ley 29733 | Medium | Medium | 5 |
| SBS G-185 | Medium | Medium | 6 |
