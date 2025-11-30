import React from 'react';
import { ChevronRight, Globe, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-ocean-950">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2070" 
          alt="Deep Ocean" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/90 via-ocean-950/60 to-ocean-950/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
      </div>

      {/* RADAR VISUALIZATION BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
        <div className="relative w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full border border-sonar/30">
           {/* Inner Circles */}
           <div className="absolute inset-[15%] rounded-full border border-sonar/20"></div>
           <div className="absolute inset-[35%] rounded-full border border-sonar/20"></div>
           <div className="absolute inset-[55%] rounded-full border border-sonar/20"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
           
           {/* Sweep Hand */}
           <div className="absolute top-0 left-0 w-full h-full animate-[spin_4s_linear_infinite] origin-center">
             <div className="w-1/2 h-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(6,182,212,0.1)_60deg,rgba(6,182,212,0.4)_90deg,transparent_90.1deg)] absolute top-0 left-1/2 transform -translate-x-1/2"></div>
           </div>

           {/* Axis Lines */}
           <div className="absolute top-1/2 left-0 w-full h-px bg-sonar/30"></div>
           <div className="absolute left-1/2 top-0 h-full w-px bg-sonar/30"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-ocean-900/80 backdrop-blur-sm border border-sonar/30 text-sonar-light text-[10px] font-mono tracking-widest mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="w-2 h-2 rounded-full bg-sonar animate-pulse"></span>
          Operational Ready // Dual-Use Capability
        </div>

        <h1 className="text-5xl md:text-7xl font-tech font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          TURN ACOUSTIC NOISE <br/> INTO <span className="text-sonar-light">INTELLIGENCE</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-mono leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          The first Sonar-Native AI platform. 
          <br className="hidden md:block"/>
          We filter 99% of environmental noise to detect threats and monitor assets in real-time.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-sonar/10 border border-sonar text-sonar-light font-mono text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-sonar/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[scanline_1s_linear_infinite]"></div>
            <span className="relative flex items-center gap-2">
              Deploy Pilot Program <ChevronRight className="w-4 h-4" />
            </span>
          </button>
          
          <a href="#solutions" className="px-8 py-4 text-gray-400 hover:text-white font-mono text-sm tracking-widest uppercase border-b border-transparent hover:border-gray-500 transition-all">
            Explore Use Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;