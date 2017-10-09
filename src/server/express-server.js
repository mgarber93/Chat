const Promise = require('bluebird');
const express = require('express');
const app = express();
const path = require('path');
const _ = require('lodash');
const defaultConfig = require('electrode-confippet').config;
const Confippet = require('electrode-confippet');
const { users, auths } = require('./routes');

const {
  auth,
  passport,
  morgan,
  bodyParser,
  cookieParser
} = require('./middlewares');

const loadConfigs = function(userConfig) {
  //use confippet to merge user config and default config
  if (_.get(userConfig, 'plugins.electrodeStaticPaths.enable')) {
    userConfig.plugins.electrodeStaticPaths.enable = false;
  }

  return Confippet.util.merge(defaultConfig, userConfig);
};

const setStaticPaths = function() {
  app.use(
    express.static(
      path.join(
        __dirname,
        '../..',
        defaultConfig.$('plugins.electrodeStaticPaths.options.pathPrefix')
      )
    )
  );
  app.use('/api/users', users); 
  app.use('/api/auths', auths)
};

const setRouteHandler = () =>
  new Promise((resolve, reject) => {
    const webapp = p => (p.startsWith('.') ? path.resolve(p) : p);
    const registerRoutes = require(webapp(defaultConfig.$("plugins.webapp.module"))); 

    return registerRoutes(app, defaultConfig.$('plugins.webapp.options'), err => {
      if (err) {
        console.error(err); 
        reject(err);
      } else {
        resolve();
      }
    });
  });

const setMidlewares = () => 
  new Promise((resolve, reject) => {
    // set up middlewares
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(auth.session);
    app.use(passport.initialize());
    app.use(passport.session());
    resolve();
  })

const startServer = () =>
  new Promise((resolve, reject) => {
    app.listen(defaultConfig.$('connections.default.port'), err => {
      if (err) {
        reject(err);
      } else {
        console.log(`App listening on port: ${defaultConfig.$("connections.default.port")}`);
        resolve();
      }
    });
  });

module.exports = function electrodeServer(userConfig, callback) {
  const promise = Promise.resolve(userConfig)
    .then(loadConfigs)
    .then(setStaticPaths)
    .then(setRouteHandler)
    .then(startServer);

  return callback ? promise.nodeify(callback) : promise;
};
