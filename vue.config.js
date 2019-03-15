
module.exports = {
  devServer: {
    port: 5656,
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
}
