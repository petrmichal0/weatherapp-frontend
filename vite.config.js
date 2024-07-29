import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180, // Frontend běží na portu 5180
    proxy: {
      "/api": {
        target: "http://localhost:3017", // Backend běží na portu 3017
        changeOrigin: true,
        secure: false,
      },
    },
  },
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
});
