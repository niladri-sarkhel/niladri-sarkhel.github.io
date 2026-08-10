import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { portfolioData } from "#data";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { CommandPalette } from "./components/CommandPalette";
import { Footer } from "./components/Footer";
import { AuroraBackground } from "./components/AuroraBackground";

function MainLayout() {
    const [paletteOpen, setPaletteOpen] = useState(false);
    const { darkMode } = useTheme();

    return (
        <div
            className={`relative min-h-screen ${darkMode ? "bg-slate-950 text-slate-200" : "bg-slate-100 text-slate-800"
                } font-sans transition-colors duration-200`}
        >
            <AuroraBackground />

            {/* Fixed Full-Width Navbar */}
            <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />

            {/* Centered Paper Container (Added pt-16 to offset fixed navbar height) */}
            <div className="relative z-10 max-w-6xl mx-auto min-h-screen pt-16 bg-white/95 dark:bg-slate-900/90 border-x border-slate-300 dark:border-blue-900/40 shadow-2xl backdrop-blur-xs flex flex-col transition-colors duration-200">
                <main className="flex-1">
                    <Hero data={portfolioData.profile} />
                    <Projects projects={portfolioData.projects} />
                    <Skills skills={portfolioData.skills} />
                    <Education education={portfolioData.education} />
                </main>

                <Footer profile={portfolioData.profile} />
            </div>

            <CommandPalette
                isOpen={paletteOpen}
                onClose={() => setPaletteOpen(false)}
                data={portfolioData}
            />
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainLayout />
        </ThemeProvider>
    );
}
