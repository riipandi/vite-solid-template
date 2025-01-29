import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'pathe'
import { isProduction } from 'std-env'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  plugins: [solid(), tailwindcss(), tsconfigPaths()],
  define: { 'import.meta.env.APP_VERSION': `"${pkg.version}"` },
  server: { port: 3000, host: true },
  build: {
    manifest: true,
    emptyOutDir: true,
    minify: isProduction,
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
    outDir: resolve('.output'),
  },
})
