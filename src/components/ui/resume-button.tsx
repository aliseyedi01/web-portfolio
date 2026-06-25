// components/ui/resume-button.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
    IconChevronDown,
    IconEye,
    IconDownload,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
    fileName?: string;
    className?: string;
    layoutId?: string;
    activeClassName?: string;
}

export function ResumeButton({
    fileName = "aliseyedi01-resume.pdf",
    layoutId = "navbar-active-pill",
    activeClassName = "bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-indigo-600 shadow-md shadow-blue-500/30",
    className,
}: ResumeButtonProps) {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const resumePath = `/${fileName}`;
    const imageFileName = "/resume/resume-high-quality.png";

    // Needed so createPortal only runs client-side (avoids SSR mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close the dropdown when clicking outside it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Lock body scroll + close modal on Escape
    useEffect(() => {
        if (!modalOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setModalOpen(false);
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [modalOpen]);

    return (
        <>
            <div ref={ref} className={cn("relative", className)}>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className={cn(
                        "relative font-semibold flex items-center gap-1 rounded-full px-3 py-1 md:py-1.5 text-sm transition-colors duration-300",
                        open
                            ? "text-foreground dark:text-white"
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {open && (
                        <motion.span
                            {...(layoutId ? { layoutId } : {})}
                            className={cn(
                                "absolute inset-0 rounded-full",
                                activeClassName,
                            )}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />
                    )}
                    <span
                        className={cn(
                            "relative z-10",
                            layoutId
                                ? "hidden sm:block"
                                : "block text-xs md:text-md pt-0.5",
                        )}
                    >
                        Resume
                    </span>
                    <motion.span
                        className="relative z-10"
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IconChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full mt-2 left-1/2 -translate-x-1/3 md:-translate-x-1/4 w-38 md:w-44 rounded-xl border border-blue-400/20 dark:border-blue-500/15 bg-white/90 dark:bg-background/90 backdrop-blur-xl shadow-lg shadow-blue-500/10 overflow-hidden z-50"
                        >
                            {/* View - opens image in modal */}
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setImgLoaded(false);
                                    setModalOpen(true);
                                }}
                                className="w-full flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors text-left"
                            >
                                <IconEye className="h-4 w-4 shrink-0" />
                                View Resume
                            </button>
                            <div className="h-px bg-border/50 mx-3" />
                            {/* Download - forces file download */}
                            <a
                                href={resumePath}
                                download={fileName}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                            >
                                <IconDownload className="h-4 w-4 shrink-0" />
                                Download
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {modalOpen && (
                            <motion.div
                                key="resume-modal-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setModalOpen(false)}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                            >
                                <motion.div
                                    key="resume-modal-content"
                                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-full max-w-3xl max-h-[88vh] rounded-2xl border border-blue-400/20 dark:border-blue-500/15 bg-white/95 dark:bg-background/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20 overflow-hidden flex flex-col"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
                                        <span className="text-sm font-semibold text-foreground">
                                            Resume Preview
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={resumePath}
                                                download={fileName}
                                                className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                                            >
                                                <IconDownload className="h-3.5 w-3.5" />
                                                Download
                                            </a>
                                            <button
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }
                                                aria-label="Close resume preview"
                                                className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                                            >
                                                <IconX className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Preview */}
                                    <div className="relative flex-1 overflow-auto bg-muted/30 flex items-start justify-center p-2 sm:p-4">
                                        {!imgLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="h-8 w-8 rounded-full border-2 border-blue-400/30 border-t-blue-500 animate-spin" />
                                            </div>
                                        )}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={imageFileName}
                                            alt="Resume preview"
                                            onLoad={() => setImgLoaded(true)}
                                            className={cn(
                                                "max-w-full max-h-full w-auto h-auto object-contain rounded-md shadow-md transition-opacity duration-300",
                                                imgLoaded
                                                    ? "opacity-100"
                                                    : "opacity-0",
                                            )}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
}
