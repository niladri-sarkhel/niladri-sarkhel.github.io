import React, { useEffect, useState } from "react";
import { Search, Code, Storage, School, Close, Launch } from "@mui/icons-material";

export const CommandPalette = ({ isOpen, onClose, data }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                isOpen ? onClose() : null;
            }
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const actions = [
        { label: "Jump to /about", href: "#about", icon: <Code className="!text-sm" /> },
        { label: "Jump to /projects", href: "#projects", icon: <Code className="!text-sm" /> },
        { label: "Jump to /skills", href: "#skills", icon: <Storage className="!text-sm" /> },
        { label: "Jump to /education", href: "#education", icon: <School className="!text-sm" /> },
        { label: "Open GitHub Profile", href: data.profile.socials.github, icon: <Launch className="!text-sm" />, external: true },
    ].filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden font-mono text-sm">
                <div className="flex items-center px-4 py-3 border-b border-slate-800 text-slate-400">
                    <Search className="!text-base mr-2 text-blue-400" />
                    <input
                        type="text"
                        placeholder="Type a command or section..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-slate-200 w-full text-xs font-mono"
                        autoFocus
                    />
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-300">
                        <Close className="!text-base" />
                    </button>
                </div>

                <div className="max-h-60 overflow-y-auto p-2">
                    {actions.length > 0 ? (
                        actions.map((action, idx) => (
                            <a
                                key={idx}
                                href={action.href}
                                target={action.external ? "_blank" : "_self"}
                                rel={action.external ? "noreferrer" : ""}
                                onClick={onClose}
                                className="flex items-center justify-between p-2.5 hover:bg-blue-600/20 hover:text-blue-300 rounded text-xs text-slate-300 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    {action.icon} {action.label}
                                </span>
                                <span className="text-[10px] text-slate-500">↵ Jump</span>
                            </a>
                        ))
                    ) : (
                        <p className="text-slate-500 text-xs p-4 text-center">No commands found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
