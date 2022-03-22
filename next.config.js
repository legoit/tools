module.exports = {
  poweredByHeader: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/u,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
