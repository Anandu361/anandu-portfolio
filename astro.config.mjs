// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://anandu361.github.io",
  base: "/anandu-portfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});