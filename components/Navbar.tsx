import React, { useState, useEffect } from 'react';
import { Menu, X, Radar, Shield } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-ocean-950/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Callsign */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center h-10 w-10 border border-sonar/30 bg-sonar/5 rounded-sm overflow-hidden group-hover:border-sonar transition-colors">
              <div className="absolute inset-0 bg-sonar-light/10 animate-pulse"></div>
              <Radar className="h-6 w-6 text-sonar-light relative z-10 group-hover:animate-spin" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-tech font-bold tracking-[0.2em] text-white">ATLANTIS</span>
              <span className="text-[10px] font-mono text-sonar-light tracking-widest">DEFENSE SYSTEMS</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white hover:bg-white/5 px-4 py-2 text-xs font-mono tracking-widest transition-all border border-transparent hover:border-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-px h-6 bg-gray-800 mx-4"></div>
              <button 
                onClick={scrollToContact}
                className="bg-sonar/10 hover:bg-sonar/20 text-sonar-light border border-sonar/50 px-6 py-2 text-xs font-mono font-bold tracking-widest transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2"
              >
                <Shield className="w-3 h-3" /> REQUEST PILOT
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none border border-transparent hover:border-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ocean-950/95 backdrop-blur-xl border-b border-sonar/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-4 text-sm font-mono tracking-widest border-l-2 border-transparent hover:border-sonar hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
             <button 
                onClick={() => {
                  scrollToContact();
                  setIsOpen(false);
                }}
                className="w-full text-left bg-sonar/10 text-sonar-light border border-sonar/30 px-3 py-3 text-xs font-mono tracking-widest mt-4 flex items-center gap-2"
              >
                <Shield className="w-3 h-3" /> REQUEST PILOT
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;