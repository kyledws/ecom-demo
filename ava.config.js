export default {
  environmentVariables: {
    DEBUG_TRACING: "false",
  },
  files: [
    "packages/data-service/build/**/*.test.js",
    "packages/music/build/**/*.test.js",
  ],
  require: ["esm"],
};
