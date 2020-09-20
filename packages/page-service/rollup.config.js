import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import linaria from "linaria/rollup";
import node_resolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import virtual from "@rollup/plugin-virtual";

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
    node_resolve(),
    commonjs(),
  ],
};

export default config;
