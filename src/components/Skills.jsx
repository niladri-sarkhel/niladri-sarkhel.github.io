import React from "react";
import { Storage } from "@mui/icons-material";

export const Skills = ({ skills }) => {
    return (
        <section id="skills" className="py-12 px-6 border-b border-blue-900/20 dark:border-blue-900/30">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-1">
                    <Storage className="text-blue-500" /> Technical Capabilities
                </h2>
                <p className="text-xs font-mono text-slate-500">Core technologies, frameworks, and tooling</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4 rounded-lg"
                    >
                        <h3 className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400 mb-3 tracking-wider">
                            [{category}]
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono px-2.5 py-1 rounded shadow-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
