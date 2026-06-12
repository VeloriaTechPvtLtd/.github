"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const companyDetails = [
  { label: 'Legal Name', value: 'Veloria Tech (OPC) Private Limited' },
  { label: 'Trade Name', value: 'Veloria Tech' },
  { label: 'CIN', value: 'U62012AP2025OPC120527' },
  { label: 'Registration Number', value: '120527' },
  { label: 'Date of Incorporation', value: '31 July 2025' },
  { label: 'Company Status', value: 'Active' },
  { label: 'Listing Status', value: 'Unlisted' },
  { label: 'Company Category', value: 'Company limited by shares' },
  { label: 'Company Class', value: 'One Person Company (OPC)' },
  { label: 'Registrar of Companies (ROC)', value: 'ROC Vijayawada' },
  { label: 'State of Registration', value: 'Andhra Pradesh, India' },
  { label: 'Authorized Share Capital', value: '₹1,00,000' },
  { label: 'Paid-up Share Capital', value: '₹10,000' },
  { label: 'Industry / Activity', value: 'Computer consultancy, software development & related IT services (NIC: 62012)' },
];

export function AboutUsPage() {
  return (
    <div className="legal-doc-page bg-background min-h-screen overflow-visible">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 page-top pb-12 sm:pb-16 overflow-visible">
        <motion.div
          className="overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="max-w-none overflow-visible">
            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Veloria Tech is a digital and AI solutions company that builds mobile applications, web platforms,
                  and custom software for businesses. We help teams turn ideas into reliable, production-ready products
                  — from concept and design through development, launch, and ongoing support.
                </p>
                <p>
                  Veloria Tech (OPC) Private Limited is a legally incorporated entity in India, registered with the
                  Ministry of Corporate Affairs (MCA). This page contains our corporate and legal information as required
                  for transparency with clients, partners, and regulators.
                </p>
              </div>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Corporate & Legal Information</h2>
              <div className="bg-card rounded-lg border border-border overflow-visible">
                <dl className="divide-y divide-border overflow-visible">
                  {companyDetails.map((item) => (
                    <div key={item.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4">
                      <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
                      <dd className="text-sm text-muted-foreground sm:col-span-2">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Company details are sourced from public MCA records. For the latest filings, visit{' '}
                <a
                  href="https://www.mca.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  mca.gov.in
                </a>
                .
              </p>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Registered Office</h2>
              <div className="text-muted-foreground space-y-4">
                <div className="bg-card p-6 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Veloria Tech (OPC) Private Limited</p>
                  <p>12-132, Pedda Devarampadu</p>
                  <p>Ongole, Andhra Pradesh — 523182</p>
                  <p>India</p>
                </div>
              </div>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Director</h2>
              <div className="text-muted-foreground space-y-4">
                <div className="bg-card p-6 rounded-lg">
                  <p><strong className="text-foreground">Vadlamudi Srinivasu</strong> — Director</p>
                  <p className="mt-2 text-sm">As per MCA records, Vadlamudi Srinivasu is the director of Veloria Tech (OPC) Private Limited.</p>
                </div>
              </div>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Our core services include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mobile application development (iOS, Android, and cross-platform)</li>
                  <li>Web application and platform development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Analytics dashboards and business intelligence tools</li>
                  <li>E-commerce and marketplace platforms</li>
                  <li>Custom enterprise software and integrations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Legal & Compliance</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Use of this website and our services is governed by Indian law. By engaging with Veloria Tech,
                  you agree to the policies listed below. Please review them carefully:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link>
                    {' '}— governs use of our website and software development services
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link>
                    {' '}— explains how we collect, use, and protect personal data
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="underline hover:text-foreground">Cookie Policy</Link>
                    {' '}— describes cookies and tracking technologies on this site
                  </li>
                </ul>
                <p>
                  All contracts, invoices, and deliverables are issued in the name of{' '}
                  <strong className="text-foreground">Veloria Tech (OPC) Private Limited</strong> unless otherwise
                  agreed in writing. Intellectual property, confidentiality, and payment terms for projects are defined
                  in individual statements of work or service agreements.
                </p>
                <p>
                  Disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in
                  Andhra Pradesh, India, unless a different forum is specified in a signed agreement.
                </p>
              </div>
            </section>

            <section className="mb-8 overflow-visible">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="text-muted-foreground space-y-4">
                <p>For general inquiries, partnerships, or legal correspondence:</p>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p><strong className="text-foreground">Email:</strong> support@veloriatech.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +91 63615 62262</p>
                  <p><strong className="text-foreground">Website:</strong>{' '}
                    <a href="https://veloriatech.com" className="underline hover:text-foreground">veloriatech.com</a>
                  </p>
                  <p><strong className="text-foreground">Business location:</strong> Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
