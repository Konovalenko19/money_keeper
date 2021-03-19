const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 31338,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
    },
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    importLoaders: 1,
                    modules: true,
                }
            },
        ],
      },
    ]
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});