# Hamzat Ajibola — Portfolio

A modern, production-ready portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Dark theme** with crimson red accent — Bebas Neue / Syne / Outfit fonts
- **Animated hero** with staggered fade-up reveals
- **Scroll-triggered animations** via IntersectionObserver
- **Project carousel cards** with arrow navigation, dot indicators, and hover overlay
- **Lightbox** with keyboard navigation (← → Esc) and touch swipe
- **Expandable service cards**
- **Contact form** powered by FormSubmit (no backend needed)
- **AI Assistant** floating button
- **Fully responsive** — mobile, tablet, desktop
- **Noise texture** + grid background for depth

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Add your profile photo

Place your photo at:
```
public/page.jpeg
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Global styles, fonts, animations
│   ├── page.tsx            # Home page (assembles all sections)
│   └── contact/
│       ├── layout.tsx
│       └── page.tsx        # Contact page with form
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   ├── Hero.tsx            # Full-screen hero section
│   ├── Services.tsx        # Services with expand/collapse
│   ├── About.tsx           # About with image + skills
│   ├── Projects.tsx        # Project grid with lightbox
│   ├── ProjectCard.tsx     # Individual project carousel card
│   ├── Lightbox.tsx        # Fullscreen image lightbox
│   ├── Hobbies.tsx         # Hobbies + Priorities section
│   ├── Quote.tsx           # Motivational quote + CTA
│   ├── Footer.tsx          # Footer with links + socials
│   ├── AIButton.tsx        # Floating AI assistant button
│   └── ScrollReveal.tsx    # Scroll animation runner
├── hooks/
│   └── useReveal.ts        # IntersectionObserver hook
├── lib/
│   └── data.ts             # Projects + services data
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    ├── images/             # All project screenshots
    └── page.jpeg           # ← Add your photo here!
```

---

## 🌐 Deployment (Netlify / Vercel)

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder or connect your GitHub repo
```

---

## 🎨 Customisation

- **Projects** — edit `lib/data.ts` to add/remove projects
- **Colors** — update `tailwind.config.ts` under `colors.crimson`
- **Fonts** — swap Google Fonts imports in `app/globals.css`
- **Contact email** — update the FormSubmit URL in `app/contact/page.tsx`
- **Social links** — update `components/Footer.tsx` and `components/About.tsx`

---

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Bebas Neue, Syne, Outfit |
| Icons | Font Awesome 6 |
| Images | next/image (optimised) |
| Forms | FormSubmit (no backend) |
| Animations | CSS keyframes + IntersectionObserver |

---

© 2024 Hamzat Ajibola
