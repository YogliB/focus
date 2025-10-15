# Security Policy

## Purpose

This document describes the security and privacy practices for Focus, a privacy-first meditation application. It explains how to report vulnerabilities and how we protect user data.

## Security Principles (privacy-first)

- Minimize data collection: we collect only what is necessary for core features.
- Local-first processing: user-sensitive operations run on-device whenever possible.
- Default privacy: privacy-protecting defaults and opt-in features.
- Transparency: clear explanation of what is stored and why.

## Responsible Disclosure & Reporting

We appreciate responsible reporting of security issues. Send reports to <replace-with-security-contact>. Do not publicly disclose vulnerabilities until we have had reasonable time to respond and remediate.

## Supported Vulnerability Types

We accept reports for: authentication/authorization issues, data leakage, encryption failures, insecure storage, supply-chain risks, injection flaws, and remote code execution. If in doubt, report it.

## How We Handle Reports

- Acknowledgement: within 48 hours.
- Triage & initial assessment: within 5 business days.
- Fix & release plan: estimated timeline provided after triage.
- Public disclosure: coordinated with reporter after remediation or mitigation.

## Data Handling & Minimal Data Retention

- Data minimization: we store the minimum data required to provide functionality.
- Retention: personal data is retained only as long as necessary; retention periods are documented where applicable.
- Deletion: users can request deletion of their data; requests are processed promptly.

## Third-party dependencies & Supply Chain

- We track dependencies and perform routine updates. Critical vulnerabilities in third-party libraries are patched promptly.
- Report supply-chain concerns to the same contact above and include reproducible details.

## Encryption & Storage

- Data at rest: sensitive user data is encrypted using industry-standard algorithms where stored.
- Data in transit: all network communication uses TLS with up-to-date cipher suites.
- Secrets: API keys and credentials are not stored in plaintext; developers must follow secure secret management practices.

## Security Releases & Updates

- Security fixes are prioritized and released as soon as safely possible. Patch notes highlight security-related changes.

## How to Contribute to Security

- Follow the responsible disclosure process above.
- For code contributions, open a PR with tests and a clear security rationale.
- For vulnerability research, include proof-of-concept and remediation suggestions when safe.

## Notes

- Security contact: <replace-with-security-contact>.
- This policy may be updated; the latest version is in the docs directory.
