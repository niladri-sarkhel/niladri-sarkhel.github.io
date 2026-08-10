import React, { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

export const AuroraBackground = () => {
    const { darkMode } = useTheme();

    // Generate subtle yet clearly visible ambient stars
    const stars = useMemo(() => {
        return Array.from({ length: 45 }).map((_, i) => {
            const dirX = i % 2 === 0 ? 1 : -1;
            const dirY = i % 3 === 0 ? -1 : 1;
            const moveDistanceX = `${dirX * (12 + (i % 5) * 6)}vw`;
            const moveDistanceY = `${dirY * (10 + (i % 4) * 5)}vh`;

            return {
                id: i,
                top: `${(i * 2.2) % 96}%`,
                left: `${(i * 2.3) % 96}%`,
                size: i % 4 === 0 ? "w-1 h-1" : "w-0.5 h-0.5",
                delay: `${(i % 7) * 1.1}s`,
                speed: `${22 + (i % 5) * 5}s`,
                driftX: moveDistanceX,
                driftY: moveDistanceY,
                color:
                    i % 5 === 0
                        ? "bg-emerald-200/80 shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                        : i % 3 === 0
                            ? "bg-purple-200/80 shadow-[0_0_6px_rgba(192,132,252,0.6)]"
                            : "bg-sky-100/80 shadow-[0_0_5px_rgba(186,230,253,0.6)]",
            };
        });
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

            {/* 1. Extended Spectrum Lava Lamp Blobs */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? "opacity-75" : "opacity-45"}`}>
                <div className="absolute top-1/5 left-1/10 w-[30rem] h-[30rem] bg-gradient-to-tr from-emerald-500/40 via-teal-400/35 to-green-500/20 rounded-full blur-3xl animate-aurora-1" />
                <div className="absolute top-1/2 right-1/8 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-600/45 via-violet-500/35 to-indigo-600/30 rounded-full blur-3xl animate-aurora-2" />
                <div className="absolute bottom-1/6 left-1/4 w-[34rem] h-[34rem] bg-gradient-to-r from-blue-600/40 via-cyan-400/35 to-sky-500/25 rounded-full blur-3xl animate-aurora-3" />
            </div>

            {/* 2. Paper Edge Aura Pillars */}
            <div className="absolute inset-0 flex justify-center">
                <div className="w-full max-w-4xl relative h-full">
                    <div className="absolute -left-12 top-0 bottom-0 w-24 bg-gradient-to-r from-emerald-500/30 via-cyan-500/25 to-transparent blur-2xl animate-edge-pulse" />
                    <div className="absolute -right-12 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-500/35 via-blue-500/25 to-transparent blur-2xl animate-edge-pulse" />
                </div>
            </div>

            {/* 3. Ambient Moving Stars Layer (Increased opacity to 0.75 in dark mode, 0.45 in light mode) */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${darkMode ? "opacity-75" : "opacity-45"}`}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={`absolute rounded-full ${star.size} ${star.color} animate-star-move`}
                        style={{
                            top: star.top,
                            left: star.left,
                            animationDelay: star.delay,
                            "--star-speed": star.speed,
                            "--drift-x": star.driftX,
                            "--drift-y": star.driftY,
                        }}
                    />
                ))}
            </div>

            {/* 4. Ambient Wave Glow Sweep */}
            <div className="absolute inset-0 bg-wave-glow pointer-events-none" />

            {/* 5. Base Blueprint Grid Layer */}
            <div
                className={`absolute inset-0 ${darkMode ? "bg-grid-pattern-dark" : "bg-grid-pattern-light"
                    } transition-colors duration-200`}
            />

            {/* 6. Subdued Glowing Grid Line Wave */}
            <div className="absolute inset-0 bg-grid-line-wave pointer-events-none" />
        </div>
    );
};
