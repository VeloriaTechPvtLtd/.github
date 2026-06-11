import 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function VeloriaFooter() {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Mobile App Development', href: '/services' },
        { name: 'Web Applications', href: '/services' },
        { name: 'AI & Machine Learning', href: '/services' },
        { name: 'Analytics & Dashboards', href: '/services' },
        { name: 'E-commerce Solutions', href: '/services' },
        { name: 'Custom Software', href: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Projects', href: '/projects' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/veloriatech', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/veloriatech', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/veloriatech', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/veloriatech', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'admin@veloriatech.com', href: 'mailto:admin@veloriatech.com' },
    { icon: Phone, text: '+91 63615 62262', href: 'tel:+916361562262' },
    { icon: MapPin, text: 'Bengaluru, India', href: '#' }
  ];

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center mb-4 sm:mb-6" 
              style={{ transform: 'none', transition: 'none' }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-lg bg-white/0 border border-[#3ecf8e]" style={{ transform: 'none', transition: 'none' }}>
                <img
                  src="/logo.png"
                  alt="Veloria Tech Logo"
                  className="w-8 h-8"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="flex flex-col" style={{ transform: 'none', transition: 'none' }}>
                <span className="text-xl sm:text-2xl font-bold text-white" style={{ transform: 'none', transition: 'none' }}>Veloria Tech</span>
                <span className="text-xs sm:text-sm text-gray-400" style={{ transform: 'none', transition: 'none' }}>Software Solutions</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base" style={{ transform: 'none', transition: 'none' }}>
              We build innovative software solutions that help businesses thrive in the digital age. 
              From mobile apps to AI-powered platforms, we turn your ideas into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  style={{ transform: 'none', transition: 'none' }}
                >
                  <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#3ecf8e] mr-2 sm:mr-3 flex-shrink-0" />
                  <a 
                    href={info.href}
                    className="text-gray-400 text-sm sm:text-base"
                    style={{ transform: 'none', transition: 'none' }}
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.href)}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1c2128] rounded-lg flex items-center justify-center hover:bg-[#3ecf8e]/10 transition-colors duration-300"
                  aria-label={social.label}
                  style={{ transform: 'none', transition: 'none' }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-[#3ecf8e]" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div 
              key={index}
              className="lg:col-span-1"
              style={{ transform: 'none', transition: 'none' }}
            >
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg" style={{ transform: 'none', transition: 'none' }}>{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ transform: 'none', transition: 'none' }}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#3ecf8e] text-sm text-left block transition-colors duration-300"
                      style={{ transform: 'none', transition: 'none' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8" style={{ transform: 'none', transition: 'none' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" style={{ transform: 'none', transition: 'none' }}>
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left" style={{ transform: 'none', transition: 'none' }}>
              © {new Date().getFullYear()} Veloria Tech. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 sm:space-x-6" style={{ transform: 'none', transition: 'none' }}>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#3ecf8e] text-xs sm:text-sm transition-colors duration-300"
                style={{ transform: 'none', transition: 'none' }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#3ecf8e] text-xs sm:text-sm transition-colors duration-300"
                style={{ transform: 'none', transition: 'none' }}
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-[#3ecf8e] text-xs sm:text-sm transition-colors duration-300"
                style={{ transform: 'none', transition: 'none' }}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}