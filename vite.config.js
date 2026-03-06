import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import preact from "@preact/preset-vite";
import vue from "@vitejs/plugin-vue";
import solidPlugin from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: "./",
  plugins: [
    react({
      include: /apps\/react-wrapper\/src\/.*\.(tsx|ts)$/
    }),
    preact({
      include: /apps\/preact-app\/src\/.*\.(tsx|ts)$/
    }),
    vue(),
    solidPlugin({
      include: /apps\/solid-trigger\/src\/.*\.(tsx|ts)$/
    }),
    svelte()
  ],
  resolve: {
    alias: {
      // Direct mapping for your shared singleton
      "@org/toast-service": resolve(
        __dirname,
        "libs/shared-utility/src/toast-service.ts"
      )
    }
  },
  server: {
    port: 5173,
    cors: true
  },
  build: {
    rollupOptions: {
      input: {
        // The orchestrator file in the root
        main: resolve(__dirname, "index.html")
      },
      output: {
        // This ensures the filenames stay predictable for debugging
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
