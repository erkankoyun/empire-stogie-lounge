import { build } from "esbuild";

await build({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  minify: true,
  format: "esm",
  jsx: "automatic",
  outfile: "app.js",
  define: { "process.env.NODE_ENV": '"production"' },
  legalComments: "eof",
});
