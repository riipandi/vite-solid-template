import solid from '@solidjs/vite-plugin'
import { fileRoutes } from 'filesystem-routing/vite'
import { defineConfig } from 'vitest/config'

const storybook = process.argv.some((arg) => arg.includes('storybook'))

export default defineConfig({
  plugins: [
    solid({
      diagnostics: false,
      extensions: ['.jsx', '.tsx'],
      ...(storybook ? {} : { start: true, ssr: true })
    }),
    storybook ? null : fileRoutes({ types: true })
  ],
  server: { port: 3000, strictPort: true },
  build: {
    assetsInlineLimit: 0,
    target: 'esnext'
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: '.output/coverage',
      reporter: ['text-summary', 'html', 'json-summary'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['**/*.d.ts']
    },
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./vitest-setup.ts'],
    globals: false,
    isolate: false
  }
})
