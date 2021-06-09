const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    // library: 'MyLib',
    // umdNamedDefine: true
    // library: "webpackNumbers",

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  devtool: 'source-map',


  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  
};