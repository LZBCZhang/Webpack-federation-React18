const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
          alias: {
            components: path.resolve('./src/components'),
            features: path.resolve("./src/features"),
            routing: path.resolve('./src/routing'),
            static: path.resolve('./src/static')
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(ts|js)?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          },
          {
            test: /\.(woff|woff2|ttf|eot|png|jpg|jpeg)$/i,
            use: ['file-loader']
          },
          {
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
          },
          { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        ],
      }
}
