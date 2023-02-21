const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.tsx"],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".png", ".jpg", ".svg"],
    alias: {
      "@image": path.resolve(__dirname, "./src/image"),
      "@components": path.relative(__dirname, "./src/components"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./index.html",
      favicon: "./favicon.ico",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/favicon.ico"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader",
      },
      
      {
        test: /\.less$/,
        use: [                    
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
              loader: 'postcss-loader',
              
          },
          {
              loader: 'less-loader',
              
          } 
      ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};
