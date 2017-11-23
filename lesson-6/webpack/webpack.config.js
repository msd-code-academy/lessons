module.exports = {
  entry: [
    './app.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, 
        include:  __dirname,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 80000
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}