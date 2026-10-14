import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'
import react from '@vitejs/plugin-react'

async function loadComponent(name, entry) {
  const outDir = resolve('.test-build', name)
  await mkdir(outDir, { recursive: true })
  await build({
    configFile: false,
    plugins: [react()],
    logLevel: 'error',
    build: {
      ssr: resolve(entry),
      outDir,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'component.mjs' } },
    },
  })
  return (await import(pathToFileURL(resolve(outDir, 'component.mjs')).href)).default
}

test('a failed task renders the supplied task details', async () => {
  const FailedTask = await loadComponent('failed-task', 'src/components/TaskList/FailedTask.jsx')
  const markup = renderToStaticMarkup(createElement(FailedTask, { data: {
    category: 'Documentation',
    taskDate: '2026-10-15',
    taskTitle: 'Update the setup guide',
    taskDescription: 'Describe the first local run.',
  } }))
  for (const text of ['Documentation', '2026-10-15', 'Update the setup guide', 'Describe the first local run.', 'Failed']) {
    assert.ok(markup.includes(text), `missing task detail: ${text}`)
  }
})

test('the login entry renders an email/password form', async () => {
  const Login = await loadComponent('login', 'src/components/Auth/Login.jsx')
  const markup = renderToStaticMarkup(createElement(Login, { handleLogin() {} }))
  assert.match(markup, /<form/)
  assert.match(markup, /type="email"/)
  assert.match(markup, /type="password"/)
  assert.match(markup, /type="submit"/)
})
