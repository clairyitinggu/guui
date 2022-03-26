const path = (require("path").exports = {
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "guui", //如果不加这个，别人无法使用你的库
    libraryTarget: "umd",
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
