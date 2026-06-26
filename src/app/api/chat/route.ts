import { NextRequest, NextResponse } from "next/server";
import { PROFILE_CONTEXT } from "@/data/profile-context";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// "openrouter/free" automatically picks the best free model available right now.
// The free model list changes often, so this is more reliable than hardcoding one.
// To pin a specific model, set OPENROUTER_MODEL in .env.local.
const MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";

const SYSTEM_PROMPT = `
You are an AI assistant for a personal portfolio site. Your job is to answer visitor questions using ONLY the information provided below.

Rules:
- Only use the information below. Don't make anything up or guess.
- If the answer isn't in this info, honestly say you don't know and suggest the visitor reach out directly via the contact info.
- Keep a friendly, concise, professional tone (a few sentences, unless more detail is genuinely needed).
- Don't pretend to BE the portfolio owner — respond as an assistant speaking about them.

Information:
${PROFILE_CONTEXT}
`.trim();

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const messages: ChatMessage[] = body?.messages ?? [];

        if (!Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Invalid message" }, { status: 400 });
        }

        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "OPENROUTER_API_KEY is not set in .env.local" },
                { status: 500 }
            );
        }

        // Only send the last few messages to keep context short and fast.
        const recentMessages = messages.slice(-12);

        const upstream = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                // OpenRouter recommends these headers for usage tracking (optional but good practice)
                "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
                "X-Title": "Portfolio Chatbot",
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [{ role: "system", content: SYSTEM_PROMPT }, ...recentMessages],
                temperature: 0.4,
                max_tokens: 500,
            }),
        });

        if (!upstream.ok) {
            const errText = await upstream.text();
            console.error("OpenRouter error:", upstream.status, errText);
            return NextResponse.json(
                { error: "Failed to reach the AI model. Please try again shortly." },
                { status: 502 }
            );
        }

        const data = await upstream.json();
        const reply: string =
            data?.choices?.[0]?.message?.content?.trim() ||
            "Sorry, I couldn't come up with a good answer.";

        return NextResponse.json({ reply });
    } catch (err) {
        console.error("Chat API error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}