const path = require('path')    ;

module.exports = 
{
  entry: "./app.js",
    output:{
    filename:"bundle.js",
    path:path.resolve('./')
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: [
          {
            loader:'babel-loader',
            options:{presets: 'es2015'}
          },
          {
            loader:'nativejsx-loader',
          }
        ]
      },
    ]
  }
};
