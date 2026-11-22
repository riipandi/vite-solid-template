import { playwright } from "@vitest/browser-playwright";
import { fileRoutes } from "filesystem-routing/vite";
import { defineConfig } from "vitest/config";
import solid from "@solidjs/vite-plugin";

export default defineConfig({
  plugins: [
    solid({
      ssr: false,
      start: true,
      extensions: [".jsx", ".tsx"],
      diagnostics: true,
    }),
    fileRoutes({ types: true }),
  ],
  build: {
    assetsInlineLimit: 0,
    reportCompressedSize: false,
    target: "esnext",
  },
  server: { port: 3000 },
  preview: { port: 3000 },
  test: {
    globals: false,
    setupFiles: ["./vitest-setup.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
