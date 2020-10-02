import babel from "@rollup/plugin-babel";
import cjsAlt from "rollup-plugin-commonjs-alternate";
import commonjs from "@rollup/plugin-commonjs";
import hotcss from "rollup-plugin-hot-css";
import injectEnv from "rollup-plugin-inject-process-env";
import linaria from "linaria/rollup";
import resolve from "@rollup/plugin-node-resolve";
import prefresh from "@prefresh/nollup";
import sourcemaps from "rollup-plugin-sourcemaps";
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
  watch: {
    exclude: ["node_modules/**", ".git/**", "@prefresh"],
  },

  plugins: [
    // injectEnv({
    //   NODE_ENV: "development",
    // }),
    linaria({
      sourceMap: true,
    }),
    hotcss({
      file: "styles.css",
      hot: true,
    }),
    babel({
      babelHelpers: "bundled",
    }),
    resolve(),
    cjsAlt({
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    // terser(),
    // visualizer(),
    sourcemaps(),
    prefresh(),
  ],
};

export default config;
