const path = require('path');

const PORT = process.env.PORT || 7300;
const ENV = process.env.NODE_ENV;
const pathSrc = path.resolve(__dirname, 'src');
const pathDist = path.resolve(__dirname, 'dist');
const isProd = ENV === 'production';

const aliases = require('./webpack.aliases')();
const plugins = require('./webpack.plugins')(isProd);

const config = {
  entry: `${pathSrc}/index.js`,
  mode: ENV || 'production',
  output: {
    filename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
    path: pathDist,
  },
  devtool: isProd ? 'source-map' : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000'
    //   }
    // },
    contentBase: pathDist,
    compress: true,
    port: PORT,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      ...aliases.reduce((acc, cur) => {
        acc[cur.key] = path.resolve(__dirname, cur.value);
        return acc;
      }, {}),
    },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
