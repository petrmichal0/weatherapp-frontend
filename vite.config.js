import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180, // Frontend běží na portu 5180
    https: false, // Přidáno pro HTTPS
    proxy: {
      "/api": {
        target: "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com/",
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
