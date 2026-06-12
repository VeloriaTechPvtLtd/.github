"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { SectionLink } from './SectionLink';

type FooterSectionLink =
  | { name: string; sectionId: string }
  | { name: string; href: string };

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function VeloriaFooter() {
  const footerSections: { title: string; links: FooterSectionLink[] }[] = [
    {
      title: 'Services',
      links: [
        { name: 'Mobile App Development', sectionId: 'services' },
        { name: 'Web Applications', sectionId: 'services' },
        { name: 'AI & Machine Learning', sectionId: 'services' },
        { name: 'Analytics & Dashboards', sectionId: 'services' },
        { name: 'E-commerce Solutions', sectionId: 'services' },
        { name: 'Custom Software', sectionId: 'services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Projects', sectionId: 'projects' },
        { name: 'Testimonials', sectionId: 'testimonials' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', sectionId: 'contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VeloriaTechPvtLtd', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/veloria-tech-pvt-ltd', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/veloriatech', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/veloriatech', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Veloria-Tech/61590616626553/', label: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@veloriatech.com', href: 'mailto:support@veloriatech.com' },
    { icon: Phone, text: '+91 63615 62262', href: 'tel:+916361562262' },
    { icon: MapPin, text: 'Bengaluru, India', href: '#' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center mb-4 sm:mb-6" 
              style={{ transform: 'none', transition: 'none' }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 border border-border" style={{ transform: 'none', transition: 'none' }}>
                <img
                  src="/logo.png"
                  alt="Veloria Tech Logo"
                  className="w-8 h-8"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="flex flex-col" style={{ transform: 'none', transition: 'none' }}>
                <span className="text-xl sm:text-2xl font-medium text-foreground tracking-snug" style={{ transform: 'none', transition: 'none' }}>Veloria Tech</span>
                <span className="text-[0.625rem] text-muted-foreground tracking-wide uppercase" style={{ transform: 'none', transition: 'none' }}>Software Solutions</span>
              </div>
            </Link>
            
            <p className="text-body-sm text-muted-foreground mb-6 sm:mb-8 max-w-md leading-relaxed tracking-snug" style={{ transform: 'none', transition: 'none' }}>
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
                  <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground mr-2 sm:mr-3 flex-shrink-0" />
                  <a 
                    href={info.href}
                    className="text-muted-foreground text-sm sm:text-base"
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
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-card rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors duration-300"
                  aria-label={social.label}
                  style={{ transform: 'none', transition: 'none' }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-black" />
                </a>
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
              <h3 className="text-foreground font-bold mb-4 sm:mb-6 text-base sm:text-lg" style={{ transform: 'none', transition: 'none' }}>{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ transform: 'none', transition: 'none' }}>
                    {'href' in link ? (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-black text-sm text-left block transition-colors duration-300 relative z-10 pointer-events-auto"
                        style={{ transform: 'none', transition: 'none' }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <SectionLink
                        sectionId={link.sectionId}
                        className="text-muted-foreground hover:text-black text-sm text-left block transition-colors duration-300 relative z-10 pointer-events-auto"
                      >
                        {link.name}
                      </SectionLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8" style={{ transform: 'none', transition: 'none' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" style={{ transform: 'none', transition: 'none' }}>
            <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left" style={{ transform: 'none', transition: 'none' }}>
              © {new Date().getFullYear()} Veloria Tech. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6" style={{ transform: 'none', transition: 'none' }}>
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-black text-xs sm:text-sm transition-colors duration-300"
                style={{ transform: 'none', transition: 'none' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-black text-xs sm:text-sm transition-colors duration-300"
                style={{ transform: 'none', transition: 'none' }}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-muted-foreground hover:text-black text-xs sm:text-sm transition-colors duration-300"
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