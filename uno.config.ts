import { defineConfig } from "unocss";
import { transformerApplet, presetApplet } from "unocss-applet";

export default defineConfig({
  presets: [presetApplet()],
  transformers: [transformerApplet()],
});
