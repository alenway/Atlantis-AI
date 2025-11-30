import React from 'react';
import { TRUST_METRICS } from '../constants';
import { ShieldCheck, Anchor, Activity } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-ocean-900 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="p-8 group hover:bg-white/5 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean-950 border border-sonar/20 rounded-sm group-hover:border-sonar/50 transition-colors">
                   {idx === 0 && <Activity className="w-6 h-6 text-sonar-light" />}
                   {idx === 1 && <Anchor className="w-6 h-6 text-sonar-light" />}
                   {idx === 2 && <ShieldCheck className="w-6 h-6 text-sonar-light" />}
                </div>
                <div>
                  <div className="text-3xl font-tech font-bold text-white mb-1 group-hover:text-sonar-light transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-sonar-light tracking-widest uppercase mb-2">
                    {metric.label}
                  </div>
                  <p className="text-sm text-gray-500 font-mono leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustBar;