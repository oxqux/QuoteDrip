import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://raw.githubusercontent.com/oxqux/QuoteDrip/refs/heads/quotes",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
