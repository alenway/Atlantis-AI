import React from 'react';
import { TEAM, ROADMAP } from '../constants';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-ocean-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Section */}
        <div className="mb-32">
            <h2 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-12 text-center">Command Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
                <div key={member.name} className="relative group">
                    {/* Card Frame */}
                    <div className="absolute inset-0 border border-gray-800 bg-ocean-900/60 backdrop-blur-sm clip-path-polygon hover:border-sonar/30 transition-colors"></div>
                    
                    <div className="relative p-6 pt-8 flex flex-col items-center text-center">
                        <div className="absolute top-0 left-0 p-2 text-[10px] font-mono text-gray-600 bg-gray-900 border-b border-r border-gray-800">
                            ID: {member.name.split(' ')[0].toUpperCase()}_01
                        </div>

                        {/* Image Container */}
                        <div className="w-32 h-32 mb-6 relative">
                            <div className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-2 rounded-full overflow-hidden border border-sonar/20 bg-gray-800">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        <div className="mb-6 border-b border-gray-800 pb-6 w-full">
                            <h3 className="text-xl font-tech font-bold text-white">{member.name.toUpperCase()}</h3>
                            <p className="text-sonar-light text-xs font-mono tracking-widest mt-1">{member.role}</p>
                        </div>
                        
                        <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6 h-20">
                            {member.bio}
                        </p>
                        
                        <div className="flex justify-center items-center opacity-50 hover:opacity-100 transition-opacity w-full">
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* Roadmap Section */}
        <div>
            <h2 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-12 text-center">Mission Phases</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
                {ROADMAP.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center border ${index === 0 ? 'border-sonar/50 bg-sonar/5' : 'border-gray-800 bg-ocean-900/20'} p-6 transition-all hover:border-gray-600`}>
                        <div className="md:w-1/4 mb-4 md:mb-0">
                            <h4 className={`font-tech font-bold text-xl ${index === 0 ? 'text-sonar-light' : 'text-gray-500'}`}>{item.phase}</h4>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">{item.timeline}</div>
                        </div>
                        <div className="md:w-3/4 flex flex-wrap gap-x-8 gap-y-2">
                            {item.milestones.map((milestone, mIdx) => (
                                <div key={mIdx} className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-sonar-light animate-pulse' : 'bg-gray-700'}`}></div>
                                    <span className={`text-sm font-mono ${index === 0 ? 'text-white' : 'text-gray-500'}`}>{milestone}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Team;