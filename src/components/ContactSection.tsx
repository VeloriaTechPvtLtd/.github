import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'admin@veloriatech.com',
      link: 'mailto:admin@veloriatech.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 63615 62262',
      link: 'tel:+916361562262'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#'
    }
  ];

  const projectTypes = [
    'Mobile App Development',
    'Web Application',
    'AI/ML Solutions',
    'E-commerce Platform',
    'Analytics Dashboard',
    'Custom Software',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0d1117]" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#3ecf8e] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Thank You!</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-[#3ecf8e] text-black hover:bg-[#2bb377] font-semibold px-6 sm:px-8 py-3 sm:py-4"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0d1117]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            Ready to turn your idea into reality? Get in touch with us and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3ecf8e]/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3ecf8e]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{info.title}</h4>
                  <a 
                    href={info.link}
                    className="text-gray-400 hover:text-[#3ecf8e] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-gray-700 pt-6 sm:pt-8">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Response Time</h4>
              <div className="flex items-center text-gray-400">
                <div className="w-3 h-3 bg-[#3ecf8e] rounded-full mr-3 animate-pulse" />
                <span className="text-sm sm:text-base">We typically respond within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Project Type</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 pr-16 sm:pr-20 py-2.5 sm:py-3 text-white focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    style={{ paddingRight: '10rem' }}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-[#0d1117] border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3ecf8e] text-black hover:bg-[#2bb377] font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2 sm:mr-3" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}