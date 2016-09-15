var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

/*
В entry - указывается откуда webpack'у начинать сборку 
В output - куда сгенерировать
В devtool указываем, что нам нужен source-map для отладки кода с парой настроек
Строка 'webpack-hot-middleware/client' (NPM) нужна нам для 
поддержки hot-reload, вместе с одним из плагинов - webpack.HotModuleReplacementPlugin
*/

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
  'webpack-hot-middleware/client',
  'babel-polyfill',
  './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new NpmInstallPlugin()
  ],
  module: {
    // preLoaders: [ //ESlint loader для рефакторинга кода
    //   {
    //     test: /\.js$/,
    //     loaders: ['eslint'],
    //     include: [
    //       path.resolve(__dirname, "src"),
    //     ],
    //   }
    // ],
    loaders: [ //Теперь все js файлы в src директории будут обрабатываться loader'ами
    {
      loaders: ['react-hot','babel-loader'],  //Настройки babel-loader'а в .babelrc
      include: [
      path.resolve(__dirname, "src"),
      ],
      test: /\.js$/,
      plugins: ['transform-runtime'],
    },
    {
      test:   /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}