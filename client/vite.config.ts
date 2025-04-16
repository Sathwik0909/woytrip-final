// import react from "@vitejs/plugin-react";
// import tailwind from "tailwindcss";
// import { defineConfig } from "vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   publicDir: "./static",
//   base: "./",
//   css: {
//     postcss: {
//       plugins: [tailwind()],
//     },
//   },
// });


import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Correct the base path for GitHub Pages
  base: '/',  // This should match your repository name exactly

  publicDir: 'public', // Ensure your static assets are inside the public folder

  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },

  build: {
    outDir: 'dist', // Ensure the build output is directed to 'dist' folder
    rollupOptions: {
      output: {
        manualChunks: undefined, // Bundle everything into a single chunk
      },
    },
  },
});
