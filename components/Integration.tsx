import React from 'react';
import { INTEGRATION_STEPS } from '../constants';
import { ArrowRight, Server, Radio, Database } from 'lucide-react';

const Integration: React.FC = () => {
  return (
    <section id="integration" className="py-24 bg-ocean-900/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-sonar-light tracking-[0.3em] uppercase mb-3">Deployment Architecture</h2>
          <h3 className="text-3xl md:text-4xl font-tech font-bold text-white">
            SEAMLESS INTEGRATION WITH <br/> <span className="text-gray-400">YOUR EXISTING HARDWARE</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-sonar/30 to-transparent border-t border-dashed border-gray-700 z-0"></div>

          {INTEGRATION_STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-ocean-950 border border-gray-800 flex items-center justify-center mb-8 relative group">
                <div className="absolute inset-0 bg-sonar/5 rounded-full animate-pulse"></div>
                {idx === 0 && <Radio className="w-8 h-8 text-gray-400 group-hover:text-sonar-light transition-colors" />}
                {idx === 1 && <Server className="w-8 h-8 text-gray-400 group-hover:text-sonar-light transition-colors" />}
                {idx === 2 && <Database className="w-8 h-8 text-gray-400 group-hover:text-sonar-light transition-colors" />}
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-ocean-900 border border-sonar/30 rounded-full flex items-center justify-center text-xs font-mono font-bold text-sonar-light">
                  0{idx + 1}
                </div>
              </div>

              <h4 className="text-xl font-tech font-bold text-white mb-4">{step.title}</h4>
              <p className="text-gray-400 text-sm font-mono leading-relaxed max-w-xs">
                {step.description}
              </p>

            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-ocean-950 border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-left">
              <h5 className="text-white font-tech font-bold text-xl mb-1">Hardware Agnostic</h5>
              <p className="text-gray-500 text-sm font-mono">Compatible with COTS hydrophones, sonobuoys, and proprietary naval arrays.</p>
           </div>
           <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
           <div className="text-left">
              <h5 className="text-white font-tech font-bold text-xl mb-1">Low Bandwidth</h5>
              <p className="text-gray-500 text-sm font-mono">Transmits &lt;1kbps of structured metadata. No raw audio upload needed.</p>
           </div>
           <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
           <div className="text-left">
              <h5 className="text-white font-tech font-bold text-xl mb-1">Secure</h5>
              <p className="text-gray-500 text-sm font-mono">Air-gapped on-premise deployment available for classified ops.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Integration;