import { motion } from 'framer-motion';

export function TermsPage() {
  return (
    <div className="pt-16 bg-[#0d1117] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>By accessing and using Veloria Tech's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
              <div className="text-gray-300 space-y-4">
                <p>Veloria Tech provides software development services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mobile application development</li>
                  <li>Web application development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Analytics and dashboard development</li>
                  <li>E-commerce platform development</li>
                  <li>Custom software solutions</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Project Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>All software development projects are subject to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Written agreements specifying project scope, timeline, and deliverables</li>
                  <li>Payment terms as agreed upon in individual contracts</li>
                  <li>Intellectual property rights as defined in project agreements</li>
                  <li>Quality assurance and testing procedures</li>
                  <li>Post-delivery support terms</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>Unless otherwise specified in writing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client retains ownership of their business concepts and proprietary information</li>
                  <li>Veloria Tech retains rights to general methodologies and techniques</li>
                  <li>Source code ownership is determined by individual project agreements</li>
                  <li>Third-party components remain property of their respective owners</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
              <div className="text-gray-300 space-y-4">
                <p>Veloria Tech maintains strict confidentiality regarding:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client business information and trade secrets</li>
                  <li>Project specifications and requirements</li>
                  <li>Proprietary algorithms and processes</li>
                  <li>Personal and sensitive data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitations of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>Veloria Tech's liability is limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct damages not exceeding the project contract value</li>
                  <li>Correction of defects in deliverables during warranty period</li>
                  <li>Replacement or refund for services not delivered as specified</li>
                </ul>
                <p className="mt-4"> is not liable for indirect, incidental, or consequential damages.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>Either party may terminate services under the following conditions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Material breach of contract terms</li>
                  <li>Non-payment of agreed fees</li>
                  <li>Mutual agreement to terminate</li>
                  <li>As specified in individual project agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <div className="text-gray-300 space-y-4">
                <p>These terms are governed by the laws of California, United States. Any disputes shall be resolved through arbitration or in the courts of San Francisco, CA.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>For questions regarding these terms, please contact:</p>
                <div className="bg-[#1c2128] p-6 rounded-lg">
                  <p><strong>Email:</strong> legal@veloriatech.com</p>
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