# Employee Management System

Employee Management System is a React prototype for viewing employee tasks and exploring an administrator task-assignment interface.

## What it does

- Shows separate administrator and employee dashboards.
- Displays seeded employees, task counts, and cards grouped by task status.
- Includes a task-creation form and a browser-local demonstration login.

## How it works

The React app reads sample employees from browser storage through `AuthProvider`. `App` checks the demonstration login and opens either the employee task view or the administrator dashboard. Everything runs in the browser; no API or database service is required.

## Getting started

Use Node.js and npm. The documented prerequisites are Node.js 22.12+ and npm 10.9+; `package.json` does not enforce engine versions.

```bash
npm ci
npm run dev
```

Open the development URL printed by Vite. Try `ajay@example.com` / `pass123` for the employee view, or `admin@me.com` / `123` for the administrator view. These are public sample accounts, not real authentication. `AuthProvider` seeds browser storage automatically on mount.

Use an employee account to inspect its seeded tasks, or the administrator account to view the task form and employee totals. Task editing and status changes are unfinished; do not rely on this prototype to retain assignments.

## Built with

React 18, Vite 5, Tailwind CSS 3, and browser `localStorage`.

## Project structure

- `src/App.jsx` — demonstration login and dashboard selection.
- `src/context/AuthProvider.jsx` — seeded employee state.
- `src/utils/localStorage.jsx` — sample employees and tasks.
- `src/components/` — login, dashboard, task cards, and assignment form.

## Checks

```bash
npm test
npm run lint
npm run build
npm run preview
```

The tests render the login form and a failed-task card to catch the broken imports and missing task data that previously stopped them working. They do not cover task assignment or browser interactions.

## Deployment

The Pages workflow runs tests, lint, and the Vite build on pull requests. Pushes to `main` and manual runs on `main` publish the built `dist/` directory to [GitHub Pages](https://wtfashwin.github.io/Employee-Management/). Documentation-only pushes skip deployment. Vite's base path is `/Employee-Management/`; Pages must use **GitHub Actions** as its source.

## Limitations

- Login is checked entirely in the browser; there is no backend authentication.
- Seed data overwrites employee storage when the provider mounts.
- Accept, complete, and fail buttons have no action handlers.
- Task creation reads React state immediately after updating it and does not write assignments back to storage.

## Contributing and license

Small fixes and pull requests are welcome. No license file is included.
