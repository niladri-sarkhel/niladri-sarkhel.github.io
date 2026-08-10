import React from "react";
import { useTheme } from "../context/ThemeContext";

export const AuroraBackground = () => {
    const { darkMode } = useTheme();

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* 1. Lava Lamp Aurora Blobs (Rendered behind grid) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? "opacity-70" : "opacity-35"}`}>
                {/* Cyan / Teal Blob */}
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-tr from-cyan-500/40 to-teal-400/30 rounded-full blur-3xl animate-aurora-1" />

                {/* Deep Violet / Magenta Blob */}
                <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-600/35 to-indigo-500/30 rounded-full blur-3xl animate-aurora-2" />

                {/* Royal Blue / Electric Sky Blob */}
                <div className="absolute bottom-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-600/30 to-sky-400/30 rounded-full blur-3xl animate-aurora-3" />
            </div>

            {/* 2. Dynamic Wave Glow Sweep */}
            <div className="absolute inset-0 bg-wave-glow pointer-events-none" />

            {/* 3. Grid Overlay illuminated by backlights */}
            <div
                className={`absolute inset-0 ${darkMode ? "bg-grid-pattern-dark" : "bg-grid-pattern-light"
                    } transition-colors duration-200`}
            />
        </div>
    );
};
