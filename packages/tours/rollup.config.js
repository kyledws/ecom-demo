import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs-alternate";
import hotcss from "rollup-plugin-hot-css";
import linaria from "linaria/rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import refresh from "rollup-plugin-react-refresh";
import sourcemaps from "rollup-plugin-sourcemaps";

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
    babel(),
    commonjs({
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    nodeResolve(),
    refresh(),
  ],
};

export default config;
