# Employee Management System

Employee Management System is a React prototype for viewing employee tasks and exploring an administrator task-assignment interface.

## What it does

- Shows separate administrator and employee dashboards.
- Displays seeded employees, task counts, and cards grouped by task status.
- Includes a task-creation form and a browser-local demonstration login.

## Getting started

Use Node.js and npm. The documented prerequisites are Node.js 22.12+ and npm 10.9+; `package.json` does not enforce engine versions.

```bash
npm install
npm run dev
```

Open the development URL printed by Vite. Demonstration account values are defined in `src/App.jsx` and `src/utils/localStorage.jsx`; the administrator login uses the values in `App.jsx`. `AuthProvider` seeds browser storage automatically on mount.

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
npm run lint
npm run build
npm run preview
```

These scripts are defined in `package.json`. No automated test script is defined.

## Limitations

- Login is checked entirely in the browser; there is no backend authentication.
- Seed data overwrites employee storage when the provider mounts.
- Accept, complete, and fail buttons have no action handlers.
- Task creation reads React state immediately after updating it and does not write assignments back to storage.
- The deployment script references `gh-pages` and `build`, while the dependency is absent and Vite uses its default output directory. Deployment needs repair.

## Contributing and license

Small fixes and pull requests are welcome. No license file is included.
