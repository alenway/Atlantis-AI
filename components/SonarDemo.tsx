import React, { useState } from 'react';
import { SONAR_PRESETS } from '../constants';
import { SonarAnalysisResult } from '../types';
import { Loader2, Terminal, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

// Mock analysis function that simulates AI response
const mockAnalyzeSonarText = async (description: string): Promise<SonarAnalysisResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const lowerDesc = description.toLowerCase();
  
  // Generate mock responses based on keywords in the input
  if (lowerDesc.includes('submarine') || lowerDesc.includes('propeller') || lowerDesc.includes('screw')) {
    return {
      classification: "SUBMARINE - DIESEL-ELECTRIC",
      confidence: 87,
      threatLevel: "HIGH",
      description: "Five-blade propeller signature detected at 12Hz fundamental frequency. Cavitation pattern consistent with Kilo-class diesel-electric submarine operating at patrol depth. Blade rate analysis indicates speed of approximately 8 knots.",
      recommendedAction: "Track and Monitor"
    };
  } else if (lowerDesc.includes('whale') || lowerDesc.includes('mammal') || lowerDesc.includes('biological')) {
    return {
      classification: "MARINE MAMMAL - CETACEAN",
      confidence: 94,
      threatLevel: "LOW",
      description: "Bioacoustic signature matches Blue Whale vocalizations. Frequency range 10-40Hz with characteristic low-frequency moans. Estimated range: 15-20 nautical miles. No tactical significance.",
      recommendedAction: "Log and Disregard"
    };
  } else if (lowerDesc.includes('seismic') || lowerDesc.includes('earthquake') || lowerDesc.includes('geological')) {
    return {
      classification: "GEOLOGICAL EVENT",
      confidence: 91,
      threatLevel: "MEDIUM",
      description: "Broadband impulse signature consistent with underwater seismic activity. Duration and spectral characteristics indicate magnitude 3.2-4.0 event. No immediate threat to operations but recommend monitoring for aftershocks.",
      recommendedAction: "Continue Monitoring"
    };
  } else if (lowerDesc.includes('ship') || lowerDesc.includes('vessel') || lowerDesc.includes('merchant')) {
    return {
      classification: "SURFACE VESSEL - COMMERCIAL",
      confidence: 82,
      threatLevel: "LOW",
      description: "Single-screw merchant vessel signature detected. Engine harmonics at 4Hz suggest large cargo vessel. Cavitation noise indicates cruising speed of 14-16 knots. Standard commercial traffic pattern.",
      recommendedAction: "Track - No Immediate Action"
    };
  } else {
    return {
      classification: "UNKNOWN ACOUSTIC CONTACT",
      confidence: 45,
      threatLevel: "MEDIUM",
      description: "Unidentified acoustic signature requires further analysis. Spectral characteristics do not match database profiles. Recommend extended monitoring and cross-reference with secondary sensors.",
      recommendedAction: "Increase Sensitivity & Monitor"
    };
  }
};

const SonarDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SonarAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await mockAnalyzeSonarText(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="technology" className="py-24 bg-ocean-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end gap-4">
           <h2 className="text-3xl font-tech font-bold text-white">OPERATOR <span className="text-sonar-light">CONSOLE</span></h2>
           <div className="h-px flex-grow bg-gray-800 mb-2"></div>
           <span className="text-xs font-mono text-gray-500 mb-2">AUTH_TOKEN: VALID</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Input Terminal */}
          <div className="font-mono text-sm">
            <div className="bg-ocean-900 border border-gray-700 p-1 shadow-lg">
               <div className="bg-ocean-950 p-6 min-h-[400px] flex flex-col">
                  <div className="text-gray-500 mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> root@atlantis-edge:~# initiate_analysis
                  </div>
                  
                  <div className="flex-grow">
                     <p className="text-sonar-light mb-2">&gt; Enter acoustic signature parameters for classification:</p>
                     <textarea 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Waiting for input stream..."
                      className="w-full h-32 bg-transparent border-l-2 border-sonar/30 pl-4 text-gray-300 focus:outline-none focus:border-sonar resize-none mb-8 placeholder-gray-700"
                    />
                    
                    <div className="mb-8">
                      <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Inject Simulated Data:</p>
                      <div className="flex flex-col gap-2">
                        {SONAR_PRESETS.map((preset, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setInput(preset)}
                            className="text-left text-xs text-gray-400 hover:text-sonar-light hover:bg-white/5 py-2 px-3 border border-transparent hover:border-gray-800 transition-colors truncate"
                          >
                            [SIG_0{idx + 1}] {preset}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAnalyze}
                    disabled={loading || !input}
                    className="w-full bg-sonar/10 border border-sonar hover:bg-sonar hover:text-ocean-950 text-sonar-light uppercase font-bold py-4 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Activity className="w-4 h-4" />}
                    {loading ? 'RUNNING INFERENCE...' : 'EXECUTE ANALYSIS'}
                  </button>
               </div>
            </div>
          </div>

          {/* Right Column: Results HUD */}
          <div className="font-mono text-sm">
             <div className="h-full bg-black/50 border border-gray-800 p-6 relative overflow-hidden shadow-2xl">
                {/* Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Spectrogram Visualization Layer */}
                 <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
                    <img 
                        src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2668" 
                        className="w-full h-full object-cover mix-blend-screen"
                        alt="Spectrogram"
                    />
                 </div>

                {!result && !loading && (
                   <div className="absolute inset-0 flex items-center justify-center flex-col opacity-30">
                      <div className="w-24 h-24 border-4 border-gray-700 rounded-full flex items-center justify-center">
                         <div className="w-20 h-20 bg-gray-800 rounded-full animate-pulse"></div>
                      </div>
                      <p className="mt-4 text-gray-500 tracking-widest">SYSTEM STANDBY</p>
                   </div>
                )}

                {loading && (
                   <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/80 backdrop-blur-sm">
                      <div className="text-center">
                         <div className="text-sonar-light text-4xl font-tech font-bold animate-pulse mb-2">PROCESSING</div>
                         <div className="w-48 h-1 bg-gray-800 mx-auto overflow-hidden">
                            <div className="h-full bg-sonar w-full animate-[scanline_1s_linear_infinite] -translate-x-full"></div>
                         </div>
                         <div className="text-xs text-gray-500 mt-2">Vectorizing Audio...</div>
                      </div>
                   </div>
                )}

                {result && (
                   <div className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="flex justify-between items-start border-b border-gray-800 pb-4 mb-6">
                         <div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Target Classification</p>
                            <h3 className="text-2xl text-white font-bold">{result.classification}</h3>
                         </div>
                         <div className="text-right">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Confidence Probability</p>
                            <h3 className="text-2xl text-sonar-light font-bold">{result.confidence}%</h3>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className={`p-4 border ${result.threatLevel === 'CRITICAL' ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-900/50'}`}>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Threat Level</p>
                            <div className={`flex items-center gap-2 font-bold ${result.threatLevel === 'CRITICAL' ? 'text-red-500' : 'text-white'}`}>
                               <AlertTriangle className="w-4 h-4" /> {result.threatLevel}
                            </div>
                         </div>
                         <div className="p-4 border border-gray-700 bg-gray-900/50">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Action Protocol</p>
                            <div className="flex items-center gap-2 font-bold text-white">
                               <ShieldCheck className="w-4 h-4 text-green-500" /> {result.recommendedAction}
                            </div>
                         </div>
                      </div>

                      <div className="bg-gray-900/40 p-4 border border-gray-800">
                         <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Tactical Analysis</p>
                         <p className="text-gray-300 leading-relaxed border-l-2 border-sonar/50 pl-4 py-1">
                            {result.description}
                         </p>
                      </div>
                   </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SonarDemo;