<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — tasks-planner

## Project Overview

`tasks-planner` is a task management application built with Next.js (App Router), React, TypeScript, and Tailwind CSS, focusing on modern front-end architecture, code quality, and maintainable git history.

## Tech Stack & Commands

- Framework: Next.js (App Router)
- Core: React 19 (React Compiler enabled)
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: npm

### Essential Commands

- `npm run dev` — Start development server
- `npm run lint` — Run linter check
- `npm run build` — Build production application

## Architecture & Standards

### Git & Commit Messages

- Conventional Commits: All commit messages must follow the Conventional Commits specification.
  - Examples: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.

### React & Next.js

- Server Components by Default: Keep components as React Server Components (RSC). Use `'use client'` only when state, event listeners, or browser APIs are required.
- State Immutability: Never mutate state directly. Always use immutable updates (`.map()`, `.filter()`, spread operator).

### TypeScript

- Type Safety: Avoid using `any`. Use explicit types, generics, or `unknown` with proper type guards.
- Component Props: Always define props using explicit `interface` or `type` declarations.

### Styling

- Tailwind CSS: Primary styling strategy. Avoid inline styles or unnecessary custom CSS files.

## Prohibitions & Constraints

- Do NOT use `any` in TypeScript code.
- Do NOT add `'use client'` at the root layout level.
- Do NOT mutate arrays or objects in React state directly.
- Do NOT install third-party dependencies without explicit confirmation.
- Do NOT write non-conventional commit messages.
