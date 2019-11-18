const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {

  return ({
    node: false,
    devtool: 'cheap-module-eval-source-map',
    entry: {
      local: path.join(__dirname, 'src/grid-local.js'),
      node: path.join(__dirname, 'src/grid-node.js'),
      vuu: path.join(__dirname, 'src/grid-vuu.js'),
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.join(__dirname, 'src')],
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/react", { modules: false }]],
              plugins: ["@babel/plugin-syntax-dynamic-import"]
            }
          }
        },
        {
          test: /\.css$/,
          // use: production ? [MiniCssExtractPlugin.loader, "css-loader"] : ["css-loader"]
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        chunks: ['vuu']
      }),
      new HtmlWebpackPlugin({
        filename: 'local.html',
        template: path.resolve(__dirname, 'public/index.html'),
        chunks: ['local']
      }),
      new HtmlWebpackPlugin({
        filename: 'node.html',
        template: path.resolve(__dirname, 'public/index.html'),
        chunks: ['node']
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin([
        { from: './public/assets/fonts/MaterialIcons-Regular.woff2', to: 'assets/fonts' },
        { from: './node_modules/@heswell/viewserver/dist/dataTables/instruments/dataset.mjs', to: 'dataTables/instruments.js' },
        { from: './node_modules/@heswell/data-remote/dist/server-proxy', to: 'server-proxy' }
      ]),
    ]
  });

}