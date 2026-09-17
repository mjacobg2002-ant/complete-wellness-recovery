import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base is set to "./" so the build works both on Vercel/Netlify (root) and on
// GitHub Pages served from a project subpath.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
