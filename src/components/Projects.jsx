import React from "react";
import { Code, GitHub, Launch } from "@mui/icons-material";

export const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-12 px-6 border-b border-blue-900/20 dark:border-blue-900/30">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-1">
                    <Code className="text-blue-500" /> System Projects
                </h2>
                <p className="text-xs font-mono text-slate-500">Selected engineering work with architecture highlights</p>
            </div>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-200"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                                {project.category}
                            </span>
                            <div className="flex gap-2 text-slate-500">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                                        <GitHub className="!text-lg" />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                                        <Launch className="!text-lg" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-4">{project.description}</p>

                        {/* Architecture Highlights Box */}
                        <div className="bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/60 rounded-lg p-3 font-mono text-xs mb-4">
                            <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1 text-[11px]">
                // Architecture Highlights
                            </span>
                            <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                                {project.architecture.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                        <span className="text-blue-500">›</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700/50"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
