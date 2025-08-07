1. **Project Title & Badge**  
   - Title:OptiSentry Email Routing Demo  
   - Placeholders for build/status badges (CI, Lighthouse, License).

2. **Project Description**  
   - One‑paragraph overview: a minimal, “Apple‑like” Next.js + TailwindCSS web app that demonstrates an email‑routing system.  
   - Supabase backend (Auth, Postgres, Storage), NodeMailer for email workflows, DeepSeek API for a chatbot, and live batch classification of 150–200 sample emails.

3. **Features**  
   - Clean, Figma‑inspired UI with light/dark mode and gray palette.  
   - Supabase Auth with user & creator roles.  
   - Database schemas & RLS for `profiles`, `resume_requests`, `demo_mails`.  
   - Seed script to populate demo mails and creator profile.  
   - Next.js API routes:  
     - `/api/classify-batch` for batch classification & metrics (F1, p95 latency, cost/1k).  
     - `/api/resume/request` & `/api/resume/respond` for the resume‑request workflow with email notifications.  
     - `/api/chat` as a proxy to the DeepSeek API (streaming SSE).  
   - Frontend pages:  
     - **Home**: YouTube embed + “Lebenslauf anfordern” button.  
     - **Live Demo**: table of emails + KPI badges + “Neu klassifizieren”.  
     - **Documentation**: rendered from Markdown (9 core sections).  
     - **Creator**: rendered from Markdown (Kilian Maier’s profile & GitHub link).  
     - **KI Chat**: interactive chatbot UI.  
   - Navbar: left “OptiSentry”, right: Live Demo | Documentation | Creator | KI Chat, plus theme toggle.  
   - Tailwind config with extended gray palette, `Inter` font, typography plugin.

4. **Tech Stack**  
   - Next.js 14, TypeScript, pnpm/npm  
   - TailwindCSS, @tailwindcss/typography  
   - Supabase JS v2, Supabase CLI  
   - React Query (@tanstack/react-query)  
   - Zod for validation  
   - NodeMailer for SMTP email  
   - Vercel or Supabase Functions deployment  
   - Vitest + React Testing Library (tests)  
   - GitHub Actions for CI (lint, typecheck, build, test, Lighthouse)

5. **Folder Structure**

```text
opticentry-email-routing/
├ .env.example
├ README.md
├ next.config.mjs
├ tailwind.config.mjs
├ supabase/
│   ├ migrations/
│   │   ├ 001_create_profiles.sql
│   │   ├ 002_create_resume_requests.sql
│   │   └ 003_create_demo_mails.sql
│   └ seed.sql
├ src/
│   ├ lib/
│   │   ├ supabaseClient.ts
│   │   ├ auth.ts
│   │   ├ mailer.ts
│   │   └ classify.ts
│   ├ components/
│   │   ├ Navbar.tsx
│   │   ├ Layout.tsx
│   │   ├ ThemeToggle.tsx
│   │   └ DeepSeekChat.tsx
│   └ pages/
│       ├ _app.tsx
│       ├ index.tsx
│       ├ demo.tsx
│       ├ documentation.tsx
│       ├ creator.tsx
│       ├ chat.tsx
│       └ api/
│           ├ classify-batch.ts
│           ├ resume/request.ts
│           ├ resume/respond.ts
│           └ chat.ts
└ public/
    ├ favicon.ico
    └ placeholder.svg
````

6. **Environment Variables**

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=postgresql://postgres:<PASSWORD>@db.<PROJECT_REF>.supabase.co:5432/postgres

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

DEEPSEEK_API_KEY=
YOUTUBE_VIDEO_ID=https://youtu.be/qddqj5A2mJ0?si=w2K2tTJwqrA8VPm2
GITHUB_CREATOR_LINK=https://github.com/kr00x
```

7. **Quickstart / Installation**

   * `git clone <repo>`
   * `cd opticentry-email-routing`
   * `pnpm install` or `npm install`
   * Copy `.env.example` → `.env.local`, fill in values
   * `npx supabase login && supabase link --project-ref <REF>`
   * `supabase db push && supabase db seed`
   * `pnpm run dev` or `npm run dev`
   * Open `http://localhost:3000`

8. **Usage**

   * Sign‑up / Sign‑in flows
   * How to request a resume and approve/deny
   * How to use the live demo and chat

9. **Testing & CI**

   * `pnpm test`
   * `pnpm run lint`
   * `pnpm run build`
   * Brief note on GitHub Actions workflow & Lighthouse thresholds

10. **Contributing, License & Contact**

    * Contribution guidelines
    * MIT License
    * Contact: `killimai05@gmail.com`




