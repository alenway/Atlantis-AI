import React, { useState } from 'react';
import { USE_CASES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DEFENSE' | 'COMMERCIAL'>('DEFENSE');

  return (
    <section id="solutions" className="py-24 bg-ocean-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sonar/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-mono text-sonar-light tracking-[0.3em] uppercase mb-3">Mission Profiles</h2>
            <h3 className="text-4xl md:text-5xl font-tech font-bold text-white max-w-xl leading-tight">
              SCALABLE INTELLIGENCE FOR <span className="text-sonar-light">EVERY SECTOR</span>
            </h3>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-ocean-900 border border-white/10 p-1 rounded-sm">
            <button
              onClick={() => setActiveTab('DEFENSE')}
              className={`px-8 py-3 text-sm font-mono font-bold tracking-widest transition-all rounded-sm ${
                activeTab === 'DEFENSE' 
                ? 'bg-sonar text-ocean-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              DEFENSE
            </button>
            <button
              onClick={() => setActiveTab('COMMERCIAL')}
              className={`px-8 py-3 text-sm font-mono font-bold tracking-widest transition-all rounded-sm ${
                activeTab === 'COMMERCIAL' 
                ? 'bg-sonar text-ocean-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              CIVIL / AQUACULTURE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {USE_CASES[activeTab].map((useCase) => (
            <div key={useCase.id} className="group relative bg-ocean-900/40 border border-white/5 hover:border-sonar/30 transition-all duration-300 overflow-hidden">
              
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-ocean-950/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ocean-950 to-transparent z-20"></div>
                
                <div className="absolute bottom-4 left-6 z-30 flex items-center gap-3">
                  <div className="p-2 bg-sonar/20 backdrop-blur-md border border-sonar/30 rounded-sm">
                    <useCase.icon className="w-6 h-6 text-sonar-light" />
                  </div>
                  <h4 className="text-2xl font-tech font-bold text-white">{useCase.title}</h4>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8 h-12">
                  {useCase.description}
                </p>

                <div className="space-y-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Capabilities Deployed:</p>
                  {useCase.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sonar-light" />
                      <span className="text-sm text-gray-400 font-mono">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                   <span className="text-xs font-mono text-sonar-light">READY FOR DEPLOYMENT</span>
                   <div className="w-16 h-px bg-sonar/50"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;