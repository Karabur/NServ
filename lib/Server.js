'use strict';

var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


function Server(config) {
  this.app = undefined;
  this.config = config;
  this.name = config.name;
  this.buildApp();
}

Server.prototype = {
  constructor: Server,

  /** @private */
  buildApp: function () {
    var app = express();
    var config = this.config;

    var basePath = config.basePath;

    app.set('views', path.join(basePath, config.viewsPath));
    app.set('view engine', config.viewEngine);
    if (config.favicon) app.use(favicon());

    if (config.logger) app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());

    if (config.less) {
      app.use(require('less-middleware')(path.join(basePath, config.less)));
    }

    if (config.static) {
      for (var i = 0; i < config.static.length; i++) {
        var staticPath = config.static[i];
        app.use(express.static(path.join(basePath, staticPath)));
      }
    }

    for (var route in config.routes) {
      app.use('/', require(path.join(basePath, config.routesBasePath, config.routes[route]+'.js')));
    }

    this.app = app;
  },

  run: function () {
    console.log('starting server %s on port %d', this.name, this.config.port);
    http.createServer(this.app).listen(this.config.port);
  }
};

module.exports = Server;
