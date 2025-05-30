/* eslint-disable no-undef */
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detecta se é um build SSR
const isSSR = process.env.BUILD_TARGET === "ssr";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    ssr: isSSR ? "src/entry-server.jsx" : false,
    outDir: isSSR ? "dist/server" : "dist/client",
    rollupOptions: !isSSR
      ? {
          input: "index.html",
        }
      : {},
  },
});
