import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Zap } from 'lucide-react';

export function VeloriaNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1117]/95 backdrop-blur-xl border-b border-gray-800/80 shadow-lg" style={{ transform: 'none', transition: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: 'none', transition: 'none' }}>
        <div className="flex items-center justify-between h-16" style={{ transform: 'none', transition: 'none' }}>
          {/* Logo */}
          <div className="flex items-center" style={{ transform: 'none', transition: 'none' }}>
            <Link to="/" className="flex-shrink-0 flex items-center" style={{ transform: 'none', transition: 'none' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-lg bg-white/0 border border-[#3ecf8e]" style={{ transform: 'none', transition: 'none' }}>
                <img
                  src="/vite.svg"
                  alt="Vite Logo"
                  className="w-8 h-8"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="flex flex-col" style={{ transform: 'none', transition: 'none' }}>
                <span className="text-xl font-bold text-white" style={{ transform: 'none', transition: 'none' }}>Veloria Tech</span>
                <span className="text-xs text-gray-400 -mt-1" style={{ transform: 'none', transition: 'none' }}>Software Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" style={{ transform: 'none', transition: 'none' }}>
            <div className="ml-10 flex items-baseline space-x-2" style={{ transform: 'none', transition: 'none' }}>
              {[
                { label: 'Arenzo', path: '/#arenzo' },
                { label: 'Services', path: '/services' },
                { label: 'Projects', path: '/projects' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive(item.path)
                      ? 'text-[#3ecf8e] bg-[#3ecf8e]/10'
                      : 'text-gray-300 hover:text-[#3ecf8e]'
                    }`}
                  style={{ transform: 'none', transition: 'none' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3" style={{ transform: 'none', transition: 'none' }}>
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-[#3ecf8e] to-[#2bb377] text-black font-semibold shadow-lg border-0"
                style={{ transform: 'none', transition: 'none' }}
              >
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" style={{ transform: 'none', transition: 'none' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 p-2 rounded-lg"
              style={{ transform: 'none', transition: 'none' }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800/50 bg-[#0d1117]/95 backdrop-blur-xl" style={{ transform: 'none', transition: 'none' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ transform: 'none', transition: 'none' }}>
            {[
              { label: 'Arenzo', path: '/#arenzo' },
              { label: 'Services', path: '/services' },
              { label: 'Projects', path: '/projects' },
              { label: 'Testimonials', path: '/testimonials' },
              { label: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMenu}
                className={`block px-3 py-3 text-base font-medium rounded-lg w-full text-left transition-colors duration-300 ${isActive(item.path)
                    ? 'text-[#3ecf8e] bg-[#3ecf8e]/10'
                    : 'text-gray-300 hover:text-[#3ecf8e]'
                  }`}
                style={{ transform: 'none', transition: 'none' }}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-gray-800/50 pt-4 pb-3" style={{ transform: 'none', transition: 'none' }}>
              <div className="px-3" style={{ transform: 'none', transition: 'none' }}>
                <Link to="/contact" onClick={closeMenu}>
                  <Button
                    className="w-full bg-gradient-to-r from-[#3ecf8e] to-[#2bb377] text-black font-semibold border-0 shadow-lg"
                    style={{ transform: 'none', transition: 'none' }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}