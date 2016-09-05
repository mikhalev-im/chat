module.exports = {
  context: __dirname,
  
  entry: './client/app.js',
  
  output: {
    path: './public/js',
    filename: 'app.bundle.js'
  },

  watch: true,

  module: {
    loaders: [{
      test: /\.js[x]{0,1}$/,
      loaders: ['babel-loader'],
    }]
  }
}