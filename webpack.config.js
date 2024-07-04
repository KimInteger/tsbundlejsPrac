const path = require('path');

module.exports = {
  entry : "./dist/menu.js",
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        test: /\.ts$/,
        use : 'ts-loader',
        exclude : /node_modules/
      }
    ]
  }
}