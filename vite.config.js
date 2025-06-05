import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import adsense from "vite-plugin-adsense";

export default defineConfig({
  plugins: [react(), adsense()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
