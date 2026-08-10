import React from "react";
import { Terminal, Launch, GitHub, LinkedIn, Email } from "@mui/icons-material";

export const Hero = ({ data }) => {
    return (
        <section id="about" className="py-12 px-6 border-b border-blue-900/20 dark:border-blue-900/30">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-600 dark:text-blue-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                {data.status}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-3">
                {data.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-mono font-medium text-base md:text-lg mb-6">
                {data.role} — {data.location}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                {data.bio}
            </p>

            {/* Terminal / System Spec Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 shadow-xl mb-8">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800 text-slate-500">
                    <Terminal className="!text-sm text-blue-400" />
                    <span>system_info.sh</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {data.stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between sm:justify-start sm:gap-4">
                            <span className="text-slate-500">{stat.label}:</span>
                            <span className="text-blue-400 font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Actions */}
            <div className="flex flex-wrap items-center gap-4">
                <a
                    href={data.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-mono font-bold transition-all shadow-md shadow-blue-600/20"
                >
                    <GitHub className="!text-base" /> GitHub
                </a>
                <a
                    href={data.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-blue-500/40 hover:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-md text-xs font-mono font-bold transition-all"
                >
                    <LinkedIn className="!text-base" /> LinkedIn
                </a>
                <a
                    href={`mailto:${data.socials.email}`}
                    className="flex items-center gap-2 border border-slate-300 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-md text-xs font-mono transition-all"
                >
                    <Email className="!text-base" /> Contact
                </a>
            </div>
        </section>
    );
};
