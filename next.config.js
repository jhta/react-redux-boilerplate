require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const prod = process.env.NODE_ENV === 'production'

const envPath = prod ? '.env.prod' : '.env.develop'

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, envPath),
        systemvars: true,
      }),
    ]

    return config
  },
}
