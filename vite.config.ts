import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: process.env.VERCEL ? "vercel" : "cloudflare-module",
      output: process.env.VERCEL
        ? undefined
        : {
            dir: "dist",
            serverDir: "dist/server",
            publicDir: "dist/client",
          },
    }),
    tailwindcss(),
    tsconfigPaths(),
    react(),
  ],
});
