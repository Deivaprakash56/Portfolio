import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages has no SPA rewrites; 404.html serves the app for any unknown path.
function githubPagesRoutes(): Plugin {
  return {
    name: 'github-pages-routes',
    closeBundle() {
      const dist = resolve('dist')
      const index = resolve(dist, 'index.html')
      copyFileSync(index, resolve(dist, '404.html'))
    },
  }
}

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss(), githubPagesRoutes()],
})
