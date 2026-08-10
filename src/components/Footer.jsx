import React from "react";

export const Footer = ({ profile }) => {
    return (
        <footer className="py-8 px-6 text-center font-mono text-xs text-slate-500 dark:text-slate-500">
            <p className="mb-2">
                {profile.name} — Built with React, Tailwind CSS v4 & MUI Icons
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-600">
                Hosted on GitHub Pages
            </p>
        </footer>
    );
};
