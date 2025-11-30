import React from 'react';
import { Radar, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean-950 border-t border-gray-900 pt-16 pb-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          <div className="max-w-xs">
             <div className="flex items-center gap-3 mb-6">
                <Radar className="h-6 w-6 text-sonar-light" />
                <div>
                  <span className="block text-white font-bold tracking-widest text-sm">ATLANTIS AI</span>
                  <span className="block text-gray-600 text-[10px]">DEFENSE SYSTEMS DIVISION</span>
                </div>
             </div>
             <p className="text-gray-500 leading-relaxed">
               Building the world's first real-time underwater intelligence network. 
               Safeguarding national security and blue economy assets.
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-gray-500">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold tracking-widest mb-2">SOLUTIONS</h4>
              <a href="#" className="hover:text-sonar-light transition-colors">Defense</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Offshore Energy</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Aquaculture</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Port Security</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold tracking-widest mb-2">COMPANY</h4>
              <a href="#team" className="hover:text-sonar-light transition-colors">Leadership</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Careers</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Newsroom</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Contact</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold tracking-widest mb-2">LEGAL</h4>
              <a href="#" className="hover:text-sonar-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sonar-light transition-colors">Security</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700">
          <p>© {new Date().getFullYear()} Atlantis AI Systems. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
             <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;