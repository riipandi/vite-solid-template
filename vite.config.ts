import { resolve } from 'pathe'
import { process } from 'std-env'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],
  server: { port: 3000, host: true },
  build: {
    manifest: true,
    emptyOutDir: true,
    minify: !process.dev,
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
    outDir: resolve('.output'),
  },
})
