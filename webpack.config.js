const path = require("path");

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname,'src','app'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: '/'
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  devServer:{
    // If we want to use react router
    historyApiFallback: true
  },
  module:{
    rules:[{
      test: /\.jsx?/,
      loader: 'babel-loader'
    }]
  }
}