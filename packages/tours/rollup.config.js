import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs-alternate";
import postcss from "rollup-plugin-postcss";
import hotcss from "rollup-plugin-hot-css";
import linaria from "linaria/rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import refresh from "rollup-plugin-react-refresh";
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
    // sourcemap: true,
  },
  plugins: [
    // sourcemaps(),
    linaria({
      sourceMap: true,
    }),
    // hotcss({
    //   file: "styles.css",
    //   hot: true,
    // }),
    postcss({
      output: "styles.css",
    }),
    babel(),
    commonjs({
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    nodeResolve(),
    terser(),
    visualizer(),
    // refresh(),
  ],
};

export default config;
