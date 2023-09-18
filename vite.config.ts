import { defineConfig } from "vite";
// @ts-ignore
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  plugins: [uni()],
});
