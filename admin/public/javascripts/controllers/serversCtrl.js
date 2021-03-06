'use strict';
app.controller('ServersCtrl', function ($scope, ServersManager, $state) {
  angular.extend($scope, {

    servers: ServersManager.readList(),
    addingMode: false,

    addServer: function () {
      $scope.addingMode = true;
    },

    createServer: function (name) {
      $scope.addingMode = false;
      ServersManager.createServer(name);
    },

    showServer: function (server) {
      $state.go('servers.server', {id: server.id});
    },

    isServerActive: function (server) {
      return $state.is('servers.server') && $state.params.id == server.id;
    }
  })
});