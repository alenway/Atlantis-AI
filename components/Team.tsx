import { Linkedin } from "lucide-react";
import React from "react";
import { TeamMember } from "../constants/types";

interface TeamProps {
    members: TeamMember[];
    title?: string;
}

const Team: React.FC<TeamProps> = ({
    members,
    title = "Command Structure",
}) => {
    return (
        <section
            id="team"
            className="py-24 bg-ocean-950 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Dynamic */}
                <h2 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mb-12 text-center">
                    {title}
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <div key={member.name} className="relative group">
                            <div className="absolute inset-0 border border-gray-800 bg-ocean-900/60 backdrop-blur-sm transition-colors"></div>

                            <div className="relative p-6 pt-8 flex flex-col items-center text-center">
                                <div className="absolute top-0 left-0 p-2 text-[10px] font-mono text-gray-600 bg-gray-900 border-b border-r border-gray-800">
                                    ID:{" "}
                                    {member.name.split(" ")[0].toUpperCase()}_01
                                </div>

                                <div className="w-32 h-32 mb-6 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>

                                <div className="mb-6 border-b border-gray-800 pb-6 w-full">
                                    <h3 className="text-xl font-tech font-bold text-white">
                                        {member.name.toUpperCase()}
                                    </h3>
                                    <p className="text-sonar-light text-xs font-mono tracking-widest mt-1">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6 h-20">
                                    {member.bio}
                                </p>

                                <div className="flex justify-center opacity-50 hover:opacity-100 transition-opacity">
                                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
