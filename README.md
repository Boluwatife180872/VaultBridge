# VaultBridge Microfinance Bank

A modern, responsive landing page for a microfinance bank built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Motion** (Framer Motion).

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

---

## Features

- **Animated Hero** — Typewriter headline with smooth text reveal animations
- **Feature Cards** — 4-column grid highlighting key banking benefits
- **Stats Section** — Animated counter for businesses & individuals served
- **Product Showcase** — Spotlight cards with mouse-following glow effect
- **Testimonials Carousel** — Horizontally scrollable customer reviews with star ratings
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Smooth Navigation** — Scroll-to-section nav with fixed header glassmorphism effect
- **SEO Optimized** — Metadata, Open Graph tags, and favicon included

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Motion](https://motion.dev/) | Animations (typewriter, blur-in, count-up) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [shadcn/ui](https://ui.shadcn.com/) | UI component patterns |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build

```bash
npm run build
npm start
```

---

## Project Structure

```
app/
├── components/         # Header, TopBar, and reusable UI components
│   └── ui/             # Animation components (typewriter, blur, count-up, spotlight)
├── sections/           # Page sections (Hero, WhyUs, ExtraPage, WhatWeDo, etc.)
├── styles/             # Global CSS (Tailwind config, theme variables, animations)
├── libs/               # Utility functions (cn helper)
├── layout.tsx          # Root layout with SEO metadata
└── page.tsx            # Home page composing all sections
public/
├── images/             # Static images and icons
└── favicon.svg         # SVG favicon
```

---

## License

MIT
