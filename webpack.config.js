const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.json$/,
        type: "asset/resource",
        include: path.resolve(__dirname, "public/json"),
      },
      {
        test: /\.html$/,
        type: "asset/source",
        include: path.resolve(__dirname, "public/html"),
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [["postcss-preset-env", {}]] },
            },
          },
          { loader: "resolve-url-loader" },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src/img"),
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: "asset/resource",
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    "imagemin-gifsicle",
                    "imagemin-mozjpeg",
                    "imagemin-pngquant",
                  ],
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac)$/,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
    ],
  },
};
