import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite"; 

export default defineConfig({
  plugins: [
    react(),
    tailwind(), 
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
      "/uploads": {
        target: process.env.VITE_API_URL || "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
