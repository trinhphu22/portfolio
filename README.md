# Trinh Mach Huy Phu — Portfolio

Personal portfolio site built from my CV, showing experience, freelance
projects, and skills as a React Native developer.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/profile.ts     # all CV content (experience, projects, skills...)
  components/         # Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
  App.tsx             # assembles the sections
```

To update the content (new job, new project, new skill), edit
`src/data/profile.ts` — the components render straight from that file.

## Deploying

The build output in `dist/` is a static site — deploy it to Vercel,
Netlify, GitHub Pages, or any static host.
