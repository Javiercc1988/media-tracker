import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = process.cwd() + "/environments";
  loadEnv(mode, envDir, "");

  return {
    plugins: [react(), tailwindcss()],
    envPrefix: "VITE_",
    envDir,
    resolve: {
      alias: {
        "@": process.cwd() + "/src",
      },
    },
  };
});
