'use strict';

var _ = require('lodash');
var fs = require('fs');

function ServersRepo(dataPath) {
  this.dataPath = dataPath;
  this.servers = null;
}

ServersRepo.prototype = {
  /** @private */
  loadServers: function () {
    if (this.servers) return;
    this.servers = require(this.dataPath);
  },

  getServers: function () {
    this.loadServers();
    return this.servers;
  },

  getServer: function (id) {
    this.loadServers();
    return _.find(this.servers, function (srv) {
      return srv.id == id;
    });
  },

  /** @private */
  getNewId: function () {
    return this.servers.reduce(function (prev, srv) {
        return Math.max(srv.id, prev);
      }, 1) + 1;
  },

  create: function (name) {
    this.loadServers();
    var server = {
      id: this.getNewId(),
      'name': name,
      'type': 'static',
      'basePath': '',
      'port': 0,
      'static': [
        'public'
      ],
      'less': 'public',
      'logger': true,
      'locked': false
    };
    this.servers.push(server);
    this.saveServers();
    return server;
  },

  saveServers: function () {
    //todo: add fault-tolerance
    fs.writeFileSync(this.dataPath, JSON.stringify(this.servers));
  }
};


var repo = new ServersRepo(__dirname+'/../data/servers.json');

module.exports = repo;