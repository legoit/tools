const path = require('path')

module.exports = {
  apps: [
    {
      name: 'tools',
      namespace: 'legoit',
      script: 'yarn start',
      instances:
        process.env.NODE_ENV === 'development'
          ? 1
          : require('os').cpus().length,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 3150,
      },
    },
  ],
}
