import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { DarkMode, LightMode, Search } from "@mui/icons-material";
import { ProgressBar } from "./ProgressBar";

export const Navbar = ({ onOpenCommandPalette }) => {
    const { darkMode, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState("about");
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        const sections = ["about", "projects", "skills", "education"];
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleThemeToggle = () => {
        setIsFlipping(true);
        toggleTheme();
        setTimeout(() => setIsFlipping(false), 400);
    };

    const navLinks = [
        { id: "about", label: "/about" },
        { id: "projects", label: "/projects" },
        { id: "skills", label: "/skills" },
        { id: "education", label: "/education" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-blue-900/40 transition-colors">
            <div className="max-w-4xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">

                {/* Left: Branding */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono font-bold text-sm">
                        NS
                    </div>
                    <span className="hidden sm:inline font-mono font-bold text-sm text-slate-800 dark:text-slate-100 tracking-tight">
                        niladri.sarkhel<span className="text-blue-500">$</span>
                    </span>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 max-w-md mx-2">
                    <button
                        onClick={onOpenCommandPalette}
                        className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-md text-xs font-mono transition-all group"
                    >
                        <Search className="!text-sm text-slate-400 group-hover:text-blue-500 transition-colors" />
                        <span className="truncate">Search commands or sections...</span>
                        <kbd className="hidden md:inline bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-600 dark:text-slate-400 ml-auto">
                            Ctrl+K
                        </kbd>
                    </button>
                </div>

                {/* Right: Links & Theme Switcher */}
                <div className="flex items-center gap-4 shrink-0">
                    <nav className="hidden lg:flex items-center gap-4 text-xs font-mono">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`transition-colors duration-150 ${isActive
                                            ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-500 pb-0.5"
                                            : "text-slate-500 dark:text-slate-400 hover:text-blue-500"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    <button
                        onClick={handleThemeToggle}
                        className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-blue-600 dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center transition-all shadow-xs"
                        title="Toggle Theme"
                    >
                        <div className={isFlipping ? "animate-flip" : ""}>
                            {darkMode ? <LightMode className="!text-base" /> : <DarkMode className="!text-base" />}
                        </div>
                    </button>
                </div>
            </div>

            <ProgressBar />
        </header>
    );
};
