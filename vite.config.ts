import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./", // 🔹 relative paths fix blank page on GitHub Pages
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
