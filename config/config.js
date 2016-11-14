var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-app-production'
  }
};

module.exports = config[env];
