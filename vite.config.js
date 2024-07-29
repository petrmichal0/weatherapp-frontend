import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "build",
//     sourcemap: false,
//   },
//   server: {
//     port: 5180, // Frontend běží na portu 5180
//     https: true, // Přidáno pro HTTPS
//     proxy: {
//       "/api": {
//         target: "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com",
//         changeOrigin: true,
//         secure: true,
//       },
//     },
//   },
//   esbuild: {
//     jsxFactory: "React.createElement",
//     jsxFragment: "React.Fragment",
//   },
// });

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    proxy: {
      "/api": {
        target: "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        credentials: "include",
      },
    },
  },
});
