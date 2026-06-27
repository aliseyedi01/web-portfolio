<div align="center">

# 🧑‍💻 Ali Seyedi — Portfolio

A modern, fast, and animated personal portfolio built with Next.js 16, TypeScript, and a rich, animated UI — deployed on Cloudflare's global edge network via OpenNext.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudflare](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Workers-F38020?logo=cloudflare)](https://workers.cloudflare.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://aliseyedi01.ir)

[Live Demo](https://aliseyedi01.ir) · [Report Bug](https://github.com/aliseyedi01/Next.js-Portfolio/issues) · [Request Feature](https://github.com/aliseyedi01/Next.js-Portfolio/issues)

</div>

---

## 📸 Screenshots

<!--
Paste your image links below (e.g. github.com/user-attachments/assets/... links,
or any other image hosting link). Replace PASTE_..._LINK_HERE with the real URL.
-->

### 🖥️ Desktop

![Desktop screenshot 1](https://github.com/user-attachments/assets/51090adc-ff4d-4cea-846b-7ebfdeaf6c48)
![Desktop screenshot 3](https://github.com/user-attachments/assets/238b5ec2-8790-40bb-a57f-aaf5507ff366)
![Desktop screenshot 2](https://github.com/user-attachments/assets/b21dfd40-745d-4bdc-ad67-7463229c68db)
![Desktop screenshot 3](https://github.com/user-attachments/assets/4a7c37f6-2582-4ba6-a0d1-89861983ae4f)

### 📱 Mobile

<div align="center">
  <img width="49%" src="https://github.com/user-attachments/assets/d844d306-6ff4-4abb-a61f-847dc02bb390" />
  <img width="49%" src="https://github.com/user-attachments/assets/866ec90d-c745-40d2-8afc-9734e11a3936" />
</div>

---

## ✨ Features

- 🎨 Light / dark theme switching (`next-themes`)
- 🪄 Smooth page transitions (`next-view-transitions`)
- 🎬 Rich animations powered by `motion`
- ⌘ Command palette navigation (`cmdk`)
- 🔊 Subtle sound feedback on interactions (`use-sound`)
- 🤖 "Ask AI About Me" — interactive AI chat about my background
- ⭐ Live GitHub stats (stars / forks) for my projects
- 📄 Markdown-powered content rendering (`react-markdown` + `remark-gfm`)
- 📱 Fully responsive, accessible UI built with Radix UI primitives
- ⚡ Deployed on Cloudflare's global edge network for near-instant load times

---

## 🛠 Tech Stack

| Category | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS 4, Radix UI, Tabler Icons, Lucide Icons |
| Animation | Motion, next-view-transitions, DotLottie |
| Hosting | Cloudflare Workers (via [OpenNext](https://opennext.js.org/cloudflare)) |
| Tooling | Wrangler, ESLint |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/aliseyedi01/Next.js-Portfolio.git
cd Next.js-Portfolio
npm install
```

### Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Create a `.env.local` file in the project root:

```dotenv
OPENROUTER_API_KEY=
```

> GitHub stars are fetched client-side directly from the public GitHub API
> (no token required) — see `src/hooks/useGitHubStars.ts`.

---

## ☁️ Deployment (Cloudflare Workers)

This project is deployed to Cloudflare Workers using the [OpenNext](https://opennext.js.org/cloudflare) adapter.

```bash
npm run deploy_cloudflare_full
```

This single command runs, in order:

```bash
npm run build      # next build --webpack
npm run openbuild   # opennextjs-cloudflare build
npm run deploy       # wrangler deploy .open-next/worker.js
```

### Required Cloudflare secrets

Set this once via Wrangler:

```bash
npx wrangler secret put OPENROUTER_API_KEY
```

### Preview locally on the Workers runtime

```bash
npm run preview
```

---

## 📁 Project Structure

```
web-portfolio/
├── public/                      # Static assets
│   ├── lottie/                  # Lottie animation files
│   ├── projects/                # Project showcase screenshots
│   ├── resume/                  # Resume preview images
│   └── aliseyedi01-resume.pdf
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/route.ts    # AI chat endpoint
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── assets/                  # Images & icons used in components
│   │   └── images/
│   │
│   ├── components/
│   │   ├── home/                # Page sections (hero, about, skills, projects, experience, contact)
│   │   ├── layout/               # Navbar, scroll-to-top, chatbot widget, intro overlay
│   │   ├── icon/                  # Custom icon & Lottie components
│   │   └── ui/                    # Reusable UI primitives (buttons, cards, tooltip, theme toggle...)
│   │
│   ├── data/                     # Static content (about, projects, skills, experience, contact)
│   ├── hooks/                     # Custom hooks (useGitHubStars, useCountUp, useActiveSection)
│   ├── lib/                        # Shared utilities
│   └── types/                       # Shared TypeScript types
│
├── open-next.config.ts            # OpenNext (Cloudflare) configuration
├── wrangler.jsonc                  # Cloudflare Worker configuration
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 📬 Contact

- **Email:** aliseyedi07@gmail.com
- **LinkedIn:** [in/aliseyedi01](https://www.linkedin.com/in/aliseyedi01/)
- **GitHub:** [github.com/aliseyedi01](https://github.com/aliseyedi01)
- **Telegram:** [t.me/aliseyedi01](https://t.me/aliseyedi01)

---

## 📄 License

This project is personal portfolio source code. Feel free to use it as
inspiration, but please don't republish it as-is under your own name.
