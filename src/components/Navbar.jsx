import React from "react";
import { useTheme } from "../context/ThemeContext";
import { DarkMode, LightMode, Search } from "@mui/icons-material";
import { ProgressBar } from "./ProgressBar";

export const Navbar = ({ onOpenCommandPalette }) => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-blue-900/40 transition-colors">
            <div className="px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono font-bold text-sm">
                        NS
                    </div>
                    <span className="font-mono font-bold text-sm text-slate-800 dark:text-slate-100 tracking-tight">
                        niladri.sarkhel<span className="text-blue-500">$</span>
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <a href="#about" className="hover:text-blue-500 transition-colors">/about</a>
                    <a href="#projects" className="hover:text-blue-500 transition-colors">/projects</a>
                    <a href="#skills" className="hover:text-blue-500 transition-colors">/skills</a>
                    <a href="#education" className="hover:text-blue-500 transition-colors">/education</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={onOpenCommandPalette}
                        className="flex items-center gap-2 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-md text-xs font-mono transition-all"
                    >
                        <Search className="!text-sm" />
                        <span className="hidden sm:inline">Search...</span>
                        <kbd className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-600 dark:text-slate-400">Ctrl+K</kbd>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-blue-600 dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                        title="Toggle Theme"
                    >
                        {darkMode ? <LightMode className="!text-base" /> : <DarkMode className="!text-base" />}
                    </button>
                </div>
            </div>

            {/* Progress Bar under Nav */}
            <ProgressBar />
        </header>
    );
};
