import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export const CVModal = ({
    isOpen,
    onClose,
    pdfUrl = "/resume.pdf",
    fileName = "Akash_Ghosh_CV.pdf",
}) => {
    // Lock background scroll when modal is active & handle Escape key press
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

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            {/* 1. Header Toolbar (WhatsApp style) */}
            <div
                className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-slate-100 select-none"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <FileText className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-slate-200">
                            {fileName}
                        </h3>
                        <p className="text-xs text-slate-400">Document Preview</p>
                    </div>
                </div>

                {/* Control Actions */}
                <div className="flex items-center gap-2">
                    {/* Download Action */}
                    <a
                        href={pdfUrl}
                        download={fileName}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors duration-200 shadow-sm"
                        title="Download PDF"
                    >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                    </a>

                    {/* Open in New Tab Action */}
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                        title="Open in new tab"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Close Modal Button */}
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                        title="Close viewer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* 2. PDF Viewer Container */}
            <div
                className="flex-1 w-full h-full p-2 sm:p-4 md:p-6 flex justify-center items-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full h-full max-w-5xl rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
                    <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                        className="w-full h-full border-none rounded-xl"
                        title="CV Preview"
                    />
                </div>
            </div>
        </div>
    );
};
