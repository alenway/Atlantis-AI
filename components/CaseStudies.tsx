import React from 'react';
import { CASE_STUDIES } from '../constants';
import CaseStudyCard from './CaseStudyCard';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-ocean-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-sonar-light tracking-[0.3em] uppercase mb-3">Operational Success</h2>
            <h3 className="text-3xl md:text-4xl font-tech font-bold text-white">
              DECLASSIFIED <span className="text-gray-500">MISSION REPORTS</span>
            </h3>
          </div>
          <p className="text-gray-400 font-mono text-sm max-w-md text-right hidden md:block">
            Proven performance in high-stakes environments. <br/>
            Real results from active deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;