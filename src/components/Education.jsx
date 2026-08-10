import React from "react";
import { School } from "@mui/icons-material";

export const Education = ({ education }) => {
    return (
        <section id="education" className="py-12 px-6 border-b border-blue-900/20 dark:border-blue-900/30">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-1">
                    <School className="text-blue-500" /> Education & Foundations
                </h2>
                <p className="text-xs font-mono text-slate-500">Academic background and core CS coursework</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">{education.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-medium mb-3">
                    {education.institution} — {education.location}
                </p>
                <span className="inline-block bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-[11px] px-2.5 py-0.5 rounded mb-4">
                    {education.period}
                </span>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                    <span className="text-xs font-mono text-slate-500 block mb-2">// Core Focus Areas</span>
                    <div className="flex flex-wrap gap-2">
                        {education.focus.map((item) => (
                            <span key={item} className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
                                • {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
