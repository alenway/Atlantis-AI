
import React from 'react';
import { CaseStudy } from '../types';
import { FileText } from 'lucide-react';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <div className="bg-ocean-900/20 border border-white/10 hover:border-sonar/30 transition-all group relative overflow-hidden h-full flex flex-col">
      
      {/* Image Header */}
      <div className="h-48 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-ocean-950/50 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>
        
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Sector Badge */}
        <div className="absolute top-4 left-4 z-30">
             <div className="bg-ocean-950/80 backdrop-blur border border-sonar/30 px-3 py-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sonar-light animate-pulse"></span>
                <span className="text-[10px] font-mono text-sonar-light uppercase tracking-widest">{study.sector}</span>
             </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow">
        
        {/* Header */}
        <div className="mb-6 relative">
          <div className="flex justify-between items-start">
             <div>
                <div className="text-[10px] font-mono text-gray-500 mb-1">CASE ID: {study.id}</div>
                <h4 className="text-xl font-bold font-tech text-white uppercase leading-tight">{study.title}</h4>
                <p className="text-xs font-mono text-sonar/70 mt-1 uppercase">Client: {study.client}</p>
             </div>
             <FileText className="w-5 h-5 text-gray-700 group-hover:text-sonar/40 transition-colors" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-red-500/50"></span> Challenge
            </p>
            <p className="text-sm text-gray-400 font-mono leading-relaxed pl-3 border-l border-gray-800">
              {study.challenge}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
               <span className="w-1 h-1 bg-sonar/50"></span> Solution
            </p>
            <p className="text-sm text-gray-300 font-mono leading-relaxed pl-3 border-l border-sonar/30">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6 mt-auto bg-ocean-900/30 -mx-8 -mb-8 p-8">
          {study.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold font-tech text-white group-hover:text-sonar-light transition-colors">{stat.value}</div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CaseStudyCard;
