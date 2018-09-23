const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    return config
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || 'http://localhost:8081',
    UI_URL: process.env.UI_URL || 'http://localhost:3000',
  }
})