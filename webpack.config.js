const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
        publicPath: '',
    clean: true
  },
  module: {
    rules: [
      {
        rules: [{
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader'
       ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
    new MiniCssExtractPlugin() 
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    watchFiles: ['*/**/*.html']
  },
}


