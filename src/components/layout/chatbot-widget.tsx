/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react";
import useSound from "use-sound";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

const DEFAULT_SUGGESTIONS = [
    "What are your core technical skills?",
    "Tell me about your projects",
    "How can I get in touch with you?",
];

interface ChatbotWidgetProps {
    title?: string;
    subtitle?: string;
    placeholder?: string;
    suggestions?: string[];
}

export default function ChatbotWidget({
    title = "Ask me anything",
    subtitle = "Portfolio AI assistant",
    placeholder = "Ask anything...",
    suggestions = DEFAULT_SUGGESTIONS,
}: ChatbotWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showHint, setShowHint] = useState(false);

    const hintRef = useRef<HTMLDivElement | null>(null);
    const [hasTriggeredHint, setHasTriggeredHint] = useState(false);

    const [playDing] = useSound("/ding.mp3", {
        volume: 0.5,
        onerror: () => console.log("Sound file not found"),
    });

    useEffect(() => {
        if (hasTriggeredHint) return;

        const trigger = () => {
            setHasTriggeredHint(true);
            setShowHint(true);

            playDing();
        };

        window.addEventListener("scroll", trigger, { once: true });
        window.addEventListener("click", trigger, { once: true });

        return () => {
            window.removeEventListener("scroll", trigger);
            window.removeEventListener("click", trigger);
        };
    }, [hasTriggeredHint, playDing]);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, isLoading]);

    async function sendMessage(text: string) {
        const content = text.trim();
        if (!content || isLoading) return;

        const nextMessages: ChatMessage[] = [
            ...messages,
            { role: "user", content },
        ];
        setMessages(nextMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: nextMessages }),
            });

            const data = await res.json();

            if (!res.ok)
                throw new Error(data?.error || "Failed to get a response");

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.reply },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong, please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {/* Floating button */}
            <div className="fixed bottom-3 md:bottom-6 right-6 z-50">
                {showHint && !isOpen && (
                    <motion.div
                        ref={hintRef}
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 22,
                        }}
                        className="fixed bottom-22 right-6 z-50"
                    >
                        <div className="relative  bg-white dark:bg-slate-950/95 border border-cyan-500/20 rounded-2xl rounded-br-sm px-4 py-3 shadow-xl shadow-primary/10 max-w-60">
                            {/* Dismiss Button */}
                            <button
                                onClick={() => {
                                    setShowHint(false);
                                }}
                                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-muted border border-border text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
                                aria-label="Dismiss"
                            >
                                <X className="size-3" />
                            </button>

                            {/* Content */}
                            <div className="flex items-center gap-2 mb-1">
                                <Sparkles className="w-3 h-3 text-primary shrink-0" />
                                <span className="text-lg font-semibold text-foreground">
                                    I know it all
                                </span>
                            </div>

                            <p className="text-md text-muted-foreground leading-snug">
                                Ask about my projects, skills or experience →
                            </p>

                            {/* Arrow pointing to button */}
                            <div className="absolute -bottom-2 right-4 w-3 h-3 bg-background dark:bg-background border-r border-b border-cyan-500/20  rotate-45" />
                        </div>
                    </motion.div>
                )}

                <button
                    onClick={() => {
                        setIsOpen((v) => !v);
                        setShowHint(false);
                    }}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                    className="flex h-10 px-3 items-center gap-3 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500  text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105"
                >
                    <Bot size={20} />
                    <span className="font-medium text-sm">Ask AI About Me</span>
                </button>
            </div>
            {/* Chat panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 flex  h-130 w-90 max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                                <Bot size={18} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {title}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 transition hover:text-white"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages / suggested questions */}
                    <div
                        ref={scrollRef}
                        className="flex-1 space-y-3 overflow-y-auto px-4 py-3"
                    >
                        {messages.length === 0 && (
                            <div className="space-y-2">
                                <p className="text-[11px] text-slate-500">
                                    // suggested questions
                                </p>
                                {suggestions.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => sendMessage(q)}
                                        className="block w-full rounded-lg border border-white/5 bg-white/3 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-cyan-500/30 hover:bg-white/6"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div
                                key={i}
                                dir={
                                    m.role === "assistant" &&
                                    /[\u0600-\u06FF]/.test(m.content)
                                        ? "rtl"
                                        : "ltr"
                                }
                                className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed ${
                                    m.role === "user"
                                        ? "ml-auto bg-cyan-500/15 text-cyan-50"
                                        : "mr-auto bg-white/5 text-slate-200"
                                }`}
                            >
                                {m.role === "assistant" ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {m.content}
                                    </ReactMarkdown>
                                ) : (
                                    m.content
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="mr-auto flex w-fit items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-400">
                                <Loader2 size={14} className="animate-spin" />
                                Thinking...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage(input);
                        }}
                        className="flex items-center gap-2 border-t border-white/5 p-3"
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={placeholder}
                            className="flex-1 rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500/50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 text-white transition disabled:opacity-40"
                            aria-label="Send"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
