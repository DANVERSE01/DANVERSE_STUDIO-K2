# Security Policy

## Reporting a Vulnerability

We take the security of DANVERSE Studio K2 seriously. We appreciate your efforts to responsibly disclose security vulnerabilities.

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to the project maintainers:

**Email:** `versedan13@gmail.com`

Please include the following information in your report:

1.  A clear and concise description of the vulnerability.
2.  The steps required to reproduce the vulnerability.
3.  The version of the project affected.
4.  Your contact information (optional, but appreciated for follow-up).

We will acknowledge your email within 48 hours and will send a more detailed response within 7 days, indicating the next steps in handling your report.

## Security Best Practices and Implementation

The project is built with security in mind, incorporating the following measures:

### 1. Next.js Security Headers (CTO Recommendation)

-   **Strict Security Headers:** Configured in `next.config.mjs` to mitigate common attacks:
    -   `Content-Security-Policy` (CSP)
    -   `Strict-Transport-Security` (HSTS)
    -   `X-Content-Type-Options`
    -   `X-Frame-Options`

### 2. Dependency Management

-   We use `npm audit` and Dependabot (via GitHub) to monitor and update dependencies to patch known vulnerabilities.
-   All dependencies are regularly reviewed.

### 3. 3D/WebGL Security

-   **Shader Sanitization:** All GLSL shaders are static and do not accept direct user input, preventing injection attacks via the 3D canvas.
-   **Resource Loading:** All 3D assets (models, textures) are loaded from trusted, internal sources.

## Responsible Disclosure

We request that you do not publicly disclose the vulnerability until we have had a chance to analyze and address it. We are committed to working with security researchers to ensure the safety of our users.

Thank you for helping keep DANVERSE Studio K2 secure.
