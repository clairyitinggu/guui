const path = (require("path").exports = {
  entry: {
    inde: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: `awesome-typescript-loader`,
      },
    ],
  },
});
