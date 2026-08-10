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

function MainLayout() {
    const [paletteOpen, setPaletteOpen] = useState(false);
    const { darkMode } = useTheme();

    return (
        <div
            className={`min-h-screen ${darkMode ? "bg-slate-950 bg-grid-pattern-dark text-slate-200" : "bg-slate-100 bg-grid-pattern-light text-slate-800"
                } font-sans transition-colors duration-200`}
        >
            {/* Centered Paper Container */}
            <div className="max-w-6xl mx-auto min-h-screen bg-white dark:bg-slate-900 border-x border-slate-300 dark:border-blue-900/40 shadow-2xl flex flex-col transition-colors duration-200">
                <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />

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
