'use strict';
app.controller('ServersCtrl', function ($scope, ServersManager, $state){
  ServersManager.readList().then(function (res) {
    $scope.servers = res;
  });

  $scope.showServer = function (server) {
    $state.go('servers.server', {id: server.id});
  };

  $scope.isServerActive = function (server) {
    return $state.is('servers.server') && $state.params.id == server.id;
  }
});