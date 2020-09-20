import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs-alternate";
import postcss from "rollup-plugin-postcss";
import hotcss from "rollup-plugin-hot-css";
import linaria from "linaria/rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import prefresh from "@prefresh/nollup";
import sourcemaps from "rollup-plugin-sourcemaps";
import virtual from "@rollup/plugin-virtual";
import visualizer from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";

let config = {
  input: "./build/home.js",
  output: {
    assetFileNames: "[name][extname]",
    dir: "dist",
    entryFileNames: "[name].js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    linaria({
      sourceMap: true,
    }),
    hotcss({
      file: "styles.css",
      hot: true,
    }),
    // postcss({
    //   output: "styles.css",
    // }),
    babel(),
    virtual({
      react: `
          export * from "preact/compat"
          export {default} from "preact/compat"
          `,
      "react-dom": `
          export * from "preact/compat"
          export {default} from "preact/compat"
          `,
    }),
    commonjs({
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    nodeResolve(),
    // terser(),
    // visualizer(),
    prefresh(),
  ],
};

export default config;
