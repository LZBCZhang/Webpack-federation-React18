const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8081,
    hot: true, //enable webpack hot module replacement
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('React web site dev'), //defining a env var 'name' having value 'DAT UI dev'
    }),
  ],
};
