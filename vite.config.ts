import { execSync } from 'node:child_process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function getLastUpdated(): string {
  try {
    const iso = execSync('git log -1 --format=%cI', { encoding: 'utf-8' }).trim()
    const date = new Date(iso)
    if (!Number.isNaN(date.getTime())) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}.${month}.${day}`
    }
  } catch {
    // fall through to build time
  }

  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastUpdated()),
  },
})
