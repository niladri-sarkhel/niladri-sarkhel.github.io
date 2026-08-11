import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Close, Download, OpenInNew, Description } from "@mui/icons-material";

export const CVModal = ({
    isOpen,
    onClose,
    pdfUrl = "/resume.pdf",
    fileName = "Niladri_Sarkhel_CV.pdf",
}) => {
    // Lock background scroll and attach Escape listener
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            {/* Top Toolbar */}
            <div
                className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-100 select-none shrink-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                        <Description className="!text-xl" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-slate-200">
                            {fileName}
                        </h3>
                        <p className="text-xs text-slate-400">Document Preview</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href={pdfUrl}
                        download={fileName}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors shadow-sm"
                        title="Download PDF"
                    >
                        <Download className="!text-base" />
                        <span className="hidden sm:inline">Download</span>
                    </a>

                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center"
                        title="Open in new tab"
                    >
                        <OpenInNew className="!text-base" />
                    </a>

                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                        title="Close viewer"
                    >
                        <Close className="!text-xl" />
                    </button>
                </div>
            </div>

            {/* Viewport Container */}
            <div
                className="flex-1 min-h-0 w-full p-2 sm:p-4 flex justify-center items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full h-full max-w-5xl bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full border-none"
                        title="CV Preview"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};
