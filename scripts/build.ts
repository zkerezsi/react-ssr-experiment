import { build } from "esbuild";
import postcss from "postcss";
import fs from "fs";
import { clientConfig, serverConfig } from "./config.ts";
import tailwindPlugin from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

await build({
  ...serverConfig,
  minify: true,
});

await build({
  ...clientConfig,
  minify: true,
});

const css = fs.readFileSync("src/style.css");
const processor = postcss([tailwindPlugin, autoprefixer]);
const result = await processor.process(css, {
  from: "src/style.css",
  to: "dist/static/style.css",
});

fs.writeFileSync("dist/static/style.css", result.css);

if (result.map) {
  fs.writeFileSync(`${result.opts.to}.map`, result.map.toString());
}
