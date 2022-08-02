const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3006/',

    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3006,
    historyApiFallback: true,
    hot: true,

    static: {
      directory: path.join(__dirname, './dist'),
    },
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: ['image/png', 'image/jpg', 'image/gif'],
              encoding: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
