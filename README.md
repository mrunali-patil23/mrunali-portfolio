# mrunali-portfolio

Personal portfolio website for **Mrunali Patil** — Full-Stack Developer.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Zero external dependencies, no environment variables required.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter + Fira Code (Google Fonts)

## Design

- Deep navy/void dark theme with electric indigo + warm amber accents
- Fira Code for monospace elements (code tags, labels, typewriter)
- Scroll-triggered reveal animations via IntersectionObserver
- Terminal-aesthetic hero with typewriter role cycling
- Fully responsive — mobile-first

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/mrunali-patil23/mrunali-portfolio.git
cd mrunali-portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
npm run build
npm start
```

No environment variables required. Builds cleanly out of the box.

---

## Deployment

Deploy to [Vercel](https://vercel.com) in one click:

1. Push to GitHub
2. Import repo at vercel.com/new
3. Deploy (default settings work — Next.js is auto-detected)

---

## Customisation

All portfolio content lives in a single file:

```
src/lib/data.ts
```

Edit name, bio, projects, experience, skills, and links there. The rest of the UI reads from it automatically.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Base styles, Tailwind directives, animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page assembly
├── components/
│   ├── Nav.tsx           # Sticky navigation
│   ├── Footer.tsx        # Footer
│   └── sections/
│       ├── Hero.tsx      # Typewriter hero + CTA
│       ├── About.tsx     # Bio + education + community
│       ├── Projects.tsx  # Featured work cards
│       ├── Experience.tsx# Timeline + certifications
│       ├── Skills.tsx    # Skill grid + achievements
│       └── Contact.tsx   # Contact links + email form
└── lib/
    ├── data.ts           # ← All portfolio content here
    └── useReveal.ts      # Scroll-triggered reveal hook
```
