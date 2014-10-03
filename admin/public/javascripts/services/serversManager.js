'use strict';
app.service('ServersManager', function ($q, $http) {
  var apiBase = '/api/';
  function executeRequest(path) {
    path = apiBase + path;
    return $http.get(path).then(function (res) {
      return res.data;
    });
  }

  return {
    readList: function () {
      return executeRequest('servers');
    }
  }
});