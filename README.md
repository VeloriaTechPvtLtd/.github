# Veloria Tech

**We build software end to end.**

Veloria Tech is a software development company based in Bengaluru, India. We partner with businesses to design, build, and ship digital products — from first idea through launch and beyond.

This repository hosts the official Veloria Tech website and company presence.

---

## About Us

Veloria Tech transforms ideas into powerful digital solutions that drive business growth. We work across mobile, web, AI, analytics, and cloud — delivering products that are secure, scalable, and built to last.

Whether you are a startup validating a new concept or an established company modernizing your stack, we bring an expert team, agile delivery, and a client-first approach to every engagement.

**At a glance**

- 8 production apps in portfolio
- 8 happy clients
- Global reach
- 100% client satisfaction focus

---

## What We Do

### Mobile App Development
Native iOS and Android applications, plus cross-platform builds with React Native and Flutter.

### Web Applications
Responsive, modern web apps — from marketing sites to full-scale platforms — built for performance and SEO.

### AI Chatbots & Automation
Intelligent chatbots and workflow automation powered by AI and machine learning.

### Analytics & Dashboards
Real-time data visualization and business intelligence dashboards for actionable insights.

### Cloud Solutions
Scalable infrastructure, migration, DevOps, and deployment on AWS, Azure, and GCP.

### Cybersecurity
Security audits, penetration testing, compliance support, and data protection.

### Custom Software
Tailored solutions for unique business needs — e-commerce, internal tools, integrations, and more.

---

## Why Veloria Tech

| | |
|---|---|
| **On-time delivery** | 95% on-time delivery rate without compromising quality |
| **Security first** | Industry-leading practices to protect your data and users |
| **Expert team** | Experienced developers, designers, and project managers |
| **Quality assurance** | Rigorous testing for reliable, bug-free delivery |
| **Fast development** | Agile methodology for rapid prototyping and iteration |
| **Client-focused** | We listen, collaborate, and aim to exceed expectations |

---

## Our Brand: Arenzo

**Arenzo** is a Veloria Tech product — a rental marketplace reimagined for automobiles, two-wheelers, furniture, electronics, construction equipment, and more.

Learn more at [arentzo.com](https://arentzo.com).

---

## Work With Us

We help innovative companies ship software that matters. Explore our portfolio, read client testimonials, and reach out when you are ready to start your next project.

**Website sections**

- Services — what we offer
- Projects — our work and case studies
- Testimonials — what clients say about us
- Contact — start a conversation

---

## Contact

| | |
|---|---|
| **Email** | [hr@veloriatech.com](mailto:hr@veloriatech.com) |
| **Phone** | [+91 63615 62262](tel:+916361562262) |
| **Location** | Bengaluru, India |
| **Legal** | [support@veloriatech.com](mailto:support@veloriatech.com) |
| **Privacy** | [support@veloriatech.com](mailto:support@veloriatech.com) |

**Connect with us**

- [GitHub](https://github.com/veloriatech)
- [LinkedIn](https://linkedin.com/company/veloriatech)
- [Twitter](https://twitter.com/veloriatech)
- [Instagram](https://instagram.com/veloriatech)

---

## Development

Stack: **Next.js 15** (App Router), React 18, TypeScript, Tailwind CSS.

```bash
npm install
cp .env.example .env.local   # set Web3Forms key + site URL
npm run dev                    # http://localhost:3000
npm run build                  # static generation for 100+ blog/project pages
```

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact form submissions via [Web3Forms](https://web3forms.com) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, and Open Graph (e.g. `https://veloriatech.com`) |

---

## Deployment (Vercel)

1. Push this repo to GitHub and [import the project in Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected).
3. Add environment variables in Vercel → Settings → Environment Variables:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy. Vercel pre-renders all blog and project pages at build time for SEO.
5. Add your custom domain in Vercel and update DNS (replace Firebase Hosting records).
6. After DNS propagates, submit `https://yourdomain.com/sitemap.xml` in Google Search Console.

The contact form uses Web3Forms to deliver submissions to `hr@veloriatech.com`.

---

## SEO

- Per-page `<title>`, meta description, Open Graph, and Twitter cards
- `/sitemap.xml` and `/robots.txt` generated at build time
- JSON-LD structured data (`Organization`, `Article`, `BreadcrumbList`, `SoftwareApplication`)
- 100+ blog posts and 8 project pages statically generated (SSG)

---

## Repository

This is the official source for the Veloria Tech company website. It is maintained by the Veloria Tech team for internal development and deployment of our public-facing presence.

For business inquiries, partnerships, or project discussions, contact us at [hr@veloriatech.com](mailto:hr@veloriatech.com).

---

## License

Copyright (c) 2026 Veloria Tech. All rights reserved.

This project is proprietary company property, not open source. Copying, rewriting, scraping, redistribution, and commercial reuse are prohibited without prior written permission from Veloria Tech. See [LICENSE](./LICENSE) for full terms.
