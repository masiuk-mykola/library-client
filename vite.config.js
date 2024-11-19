import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import babel from "vite-plugin-babel";

// eslint-disable-next-line no-undef
const root = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: resolve(root, "assets")
      },
      {
        find: "@components",
        replacement: resolve(root, "components")
      },
      {
        find: "@pages",
        replacement: resolve(root, "pages")
      },
      {
        find: "@constants",
        replacement: resolve(root, "constants")
      },
      {
        find: "@utils",
        replacement: resolve(root, "utils")
      },
      {
        find: "@hooks",
        replacement: resolve(root, "hooks")
      },
      {
        find: "@store",
        replacement: resolve(root, "store")
      }
    ]
  },
  plugins: [react(), babel()],
  server: { host: "localhost", port: 3000 }
});
