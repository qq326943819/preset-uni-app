import { defineConfig } from "vite";
// @ts-ignore
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [uni(), UnoCSS()],
});
