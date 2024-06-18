import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure files in public folder are served correctly
    assetsDir: 'public'
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
