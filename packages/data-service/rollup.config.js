import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

let config = {
  input: "./build/handler.js",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [json(), externals(), resolve(), commonjs(), sourcemaps()],
};

export default config;
