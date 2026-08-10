import React, { useEffect, useState } from "react";

export const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress(); // Initial check

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 h-1 overflow-hidden">
            <div
                className="bg-blue-600 dark:bg-blue-500 h-full transition-all duration-75 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};
