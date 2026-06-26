/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, X } from "lucide-react";

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
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 transition-transform hover:scale-105 active:scale-95"
            >
                {isOpen ? <X size={22} /> : <Bot size={22} />}
            </button>

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
                                        className="block w-full rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-left text-sm text-slate-200 transition hover:border-cyan-500/30 hover:bg-white/[0.06]"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed ${
                                    m.role === "user"
                                        ? "ml-auto bg-cyan-500/15 text-cyan-50"
                                        : "mr-auto bg-white/5 text-slate-200"
                                }`}
                            >
                                {m.content}
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
                            className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500/50"
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
