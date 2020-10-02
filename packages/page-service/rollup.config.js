import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import hotcss from "rollup-plugin-hot-css";
import externals from "rollup-plugin-node-externals";
import linaria from "linaria/rollup";
import resolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

let config = {
  input: "./build/handler.js",
  output: {
    assetFileNames: "[name][extname]",
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    linaria({ sourceMap: true }),
    hotcss({ file: "styles.css" }),
    babel({
      babelHelpers: "bundled",
    }),
    externals(),
    resolve(),
    commonjs(),
    sourcemaps(),
  ],
};

export default config;
