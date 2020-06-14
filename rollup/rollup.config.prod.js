module.exports = {
  input: "./src/index.js",
  output: {
    file: "./dist/router.bundle.js",
    format: "umd",
    name: "router",
    sourcemap: true,
    compact: true,
  },
};
