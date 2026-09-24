# Tasks Planner

`tasks-planner` is a task management application built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. 

The project is designed to apply modern front-end architecture, clean code practices, reusable components, and AI-assisted development workflows.

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

Install dependencies:
```sh
npm install
```

Run the development server:
```sh
npm run dev
```

Open http://localhost:3000 in your browser.