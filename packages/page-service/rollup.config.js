import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import linaria from "linaria/rollup";
import node_resolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

let config = {
  input: "./build/handler.js",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    linaria({ sourceMap: true }),
    postcss({ output: "styles.css" }),
    node_resolve(),
    commonjs(),
  ],
};

export default config;
