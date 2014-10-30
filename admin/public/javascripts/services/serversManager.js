'use strict';
app.service('ServersManager', function ($q, $http, $resource) {
  var apiBase = '/api/';
  var servers = $resource(apiBase + 'servers/:id', {
    id: '@id'
  }, {
    list: {
      isArray: true
    }
  });

  return {
    readList: function () {
      return servers.list();
    },
    loadServer: function (id) {
      return servers.get({id: id});
    },
    createServer: function (name) {
    }
  }
});