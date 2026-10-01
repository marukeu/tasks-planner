# Tasks Planner

`tasks-planner` is a task management application built with **Next.js (App Router)**, **React**, **TypeScript** and **Tailwind CSS**, featuring automated testing and CI/CD.

The project is designed to apply modern front-end architecture, clean code practices, reusable components, and AI-assisted development workflows.

https://tasks-planner-maru.vercel.app/

## Tech Stack

- **Framework:** Next.js (App Router)
- **Core Library:** React 19 (React Compiler enabled)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Architecture & Best Practices

- **Server Components by Default:** Prioritize React Server Components (RSC) for performance, restricting `'use client'` to interactive elements and state management.
- **State Immutability:** Enforce immutable state updates in React.
- **Strict Typing:** Consistent use of explicit TypeScript interfaces and types, prohibiting `any`.
- **Conventional Commits:** Standardized git commit history (`feat`, `fix`, `docs`, `refactor`, etc.).

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/your-username/tasks-planner.git
```

2. Install dependencies:

```sh
npm install
```

3. Run the development server:

```sh
npm run dev
```

4. Open http://localhost:3000 in your browser.

## Available Scripts

Run the test suite:

```sh
npm test
```

Create an optimized production build:

```sh
npm run build
```

## CI/CD

This project uses **GitHub Actions** for continuous integration and **Vercel** for continuous deployment.

### Continuous Integration

Every pull request to `main` automatically runs:

- Dependency installation with `npm ci`
- Automated tests with Jest and React Testing Library
- Production build validation with Next.js

The `main` branch is protected and requires the CI checks to pass before merging.

### Continuous Deployment

Production deployments are automatically triggered when changes are merged into `main`.

Pull requests also generate Vercel Preview Deployments, allowing changes to be reviewed before they reach production.