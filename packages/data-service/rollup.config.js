import commonjs from "@rollup/plugin-commonjs";
import node_resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import sourcemaps from "rollup-plugin-sourcemaps";

let config = {
  input: "./build/handler.js",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [sourcemaps(), json(), node_resolve(), commonjs()],
};

export default config;
