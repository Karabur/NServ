'use strict';
app.controller('ServersCtrl', function ($scope, ServersManager){
  ServersManager.readList().then(function (res) {
    $scope.servers = res;
  });

  $scope.showServer = function (server) {

  }
});