import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-ocean-950 relative border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-sm font-mono text-sonar-light tracking-[0.3em] uppercase mb-3">
                            Initiate Contact
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-tech font-bold text-white mb-6">
                            SECURE A{" "}
                            <span className="text-sonar-light">
                                PILOT DEPLOYMENT
                            </span>
                        </h3>
                        <p className="text-gray-400 font-mono text-lg mb-12">
                            Ready to validate Atlantis AI in your operational
                            environment? Our engineering team is ready to scope
                            a Proof of Concept (POC) tailored to your hardware
                            and mission requirements.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-ocean-900 border border-white/10 flex items-center justify-center text-sonar-light">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">
                                        Secure Comms
                                    </div>
                                    <div className="text-white font-mono">
                                        pilots@atlantis-ai.com
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-ocean-900 border border-white/10 flex items-center justify-center text-sonar-light">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">
                                        HQ Location
                                    </div>
                                    <div className="text-white font-mono">
                                        New Delhi / India
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-ocean-900/50 border border-white/10 p-8 backdrop-blur-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-ocean-950 border border-gray-800 text-white p-3 focus:border-sonar outline-none font-mono text-sm"
                                        placeholder="Rahul"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-ocean-950 border border-gray-800 text-white p-3 focus:border-sonar outline-none font-mono text-sm"
                                        placeholder="Shah"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">
                                    Organization / Command
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-ocean-950 border border-gray-800 text-white p-3 focus:border-sonar outline-none font-mono text-sm"
                                    placeholder="Indain Navy / Shell Offshore"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-ocean-950 border border-gray-800 text-white p-3 focus:border-sonar outline-none font-mono text-sm"
                                    placeholder="name@defense-corp.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">
                                    Mission Requirement
                                </label>
                                <select className="w-full bg-ocean-950 border border-gray-800 text-white p-3 focus:border-sonar outline-none font-mono text-sm">
                                    <option>Select Operational Need...</option>
                                    <option>
                                        Anti-Submarine Warfare (ASW)
                                    </option>
                                    <option>Port / Harbor Security</option>
                                    <option>
                                        Offshore Infrastructure Monitoring
                                    </option>
                                    <option>Aquaculture / Fisheries</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button className="w-full bg-sonar text-ocean-950 font-bold font-mono uppercase py-4 hover:bg-sonar-light transition-colors mt-4">
                                Request Briefing
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
