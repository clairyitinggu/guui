module.exports = {
  entry: {
    inde: "./lib/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: `awesome-typescript-loader`,
      },
    ],
  },
};
