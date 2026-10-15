# Uttam Kumar Sirmour — AI-Powered Interactive Portfolio

An interactive conversational portfolio web application built with **Next.js 15**, **React 19**, and **Framer Motion**, powered by the **Vercel AI SDK** with ultra-fast LLM inference via **Groq** (`qwen/qwen3.8-27b`).

Visitors can explore Uttam's background, projects, technical skills, and experience either conversationally with an intelligent interactive assistant or through curated visual cards.

---

## ✨ Features

- 🤖 **Interactive AI Assistant**: Conversational AI assistant with custom tool-calling that dynamically presents rich interactive UI components (Projects, Skills, Experience, Resume, and Contact).
- ⚡ **Blazing Fast AI Inference**: Powered by Groq API (`qwen/qwen3.8-27b`) delivering sub-second streaming answers.
- 🎨 **Modern Visual Aesthetics**: Fluid cursor effects, responsive dark/light mode, glassmorphism, Framer Motion micro-animations, and Apple-inspired interactive project cards.
- 💼 **Showcase of Real Projects**:
  - **CodeLens AI**: AI-powered code reviewer providing actionable structured feedback.
  - **AI Interview Report Generator**: Full-stack application generating structured candidate reports, PDF generation, and automated assessment.
- 📄 **One-Click Resume**: Instant download for Uttam's official resume (`Uttam_Kumar_Sirmour_Resume.pdf`).
- 📱 **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **AI Engine**: [Vercel AI SDK](https://sdk.vercel.ai/docs), [@ai-sdk/groq](https://www.npmjs.com/package/@ai-sdk/groq), [Groq Cloud](https://groq.com/)
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18 or higher (v20+ recommended)
- **npm** or **pnpm**
- **Groq API Key**: Get a free API key at [console.groq.com/keys](https://console.groq.com/keys)

### 1. Clone the repository

```bash
git clone https://github.com/Uttam7898/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
# Groq API Key for the portfolio chat assistant
# Get your free key at: https://console.groq.com/keys
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To verify and run a production build locally:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (images, avatar, resume PDF)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/       # Streaming chat endpoint with Groq & AI SDK tools
│   │   │   │   ├── prompt.ts   # System prompt defining persona & context
│   │   │   │   ├── route.ts    # POST handler streaming responses
│   │   │   │   └── tools/      # AI tools (getProjects, getSkills, getResume, etc.)
│   │   │   └── github-stars/
│   │   ├── chat/           # Dedicated chat page route
│   │   ├── globals.css     # Global theme & typography styles
│   │   ├── layout.tsx      # Root layout & SEO metadata
│   │   └── page.tsx        # Landing hero page with quick prompt triggers
│   ├── components/         # Reusable React components
│   │   ├── chat/           # Chat interface, message bubbles, tool renderer
│   │   ├── projects/       # Carousel and interactive project cards
│   │   ├── ui/             # Radix UI primitives & styled components
│   │   ├── InternshipCard.tsx  # Work & internship details card
│   │   ├── presentation.tsx    # Interactive bio card
│   │   ├── resume.tsx          # Resume card & download trigger
│   │   └── skills.tsx          # Categorized technical skills grid
│   ├── hooks/              # Custom React hooks (fluid cursor, outside click)
│   └── lib/                # Utility helper functions
└── package.json
```

---

## 📬 Contact & Connect

- **Author**: Uttam Kumar Sirmour
- **Email**: [soniuttamkumar747@gmail.com](mailto:soniuttamkumar747@gmail.com)
- **LinkedIn**: [linkedin.com/in/uttam-kumar-sirmour-5aa93a298](https://www.linkedin.com/in/uttam-kumar-sirmour-5aa93a298)
- **GitHub**: [@Uttam7898](https://github.com/Uttam7898)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
