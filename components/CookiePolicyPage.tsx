"use client";

import { motion } from 'framer-motion';
import { PageHeaderBand } from './PageHeaderBand';

export function CookiePolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeaderBand width="4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </PageHeaderBand>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
                <p>Veloria Tech uses cookies to enhance your browsing experience and provide personalized services.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="text-muted-foreground space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Page views and user behavior</li>
                    <li>Traffic sources</li>
                    <li>Performance metrics</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Functional Cookies</h3>
                  <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences.</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Marketing Cookies</h3>
                  <p>These cookies track visitors across websites to display relevant advertisements and measure campaign effectiveness.</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Ad personalization</li>
                    <li>Campaign tracking</li>
                    <li>Conversion measurement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We may use third-party services that place cookies on your device:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Social Media Plugins:</strong> For social sharing functionality</li>
                  <li><strong>Customer Support Tools:</strong> For chat and support services</li>
                  <li><strong>Marketing Platforms:</strong> For advertising and remarketing</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>You can control and manage cookies in several ways:</p>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">Browser Settings</h3>
                  <p>Most browsers allow you to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when closing browser</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">Opt-Out Tools</h3>
                  <p>You can opt out of specific tracking services:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Google Analytics Opt-out Browser Add-on</li>
                    <li>Digital Advertising Alliance opt-out page</li>
                    <li>Network Advertising Initiative opt-out page</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Retention</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Different cookies have different lifespans:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until expiration date or manual deletion</li>
                  <li><strong>Analytics Cookies:</strong> Typically expire after 24 months</li>
                  <li><strong>Marketing Cookies:</strong> Usually expire after 30-90 days</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Updates to This Policy</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <div className="text-muted-foreground space-y-4">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="bg-card p-6 rounded-lg">
                  <p><strong>Email:</strong> support@veloriatech.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> San Francisco, CA</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 