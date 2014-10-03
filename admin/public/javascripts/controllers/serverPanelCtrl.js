'use strict';

app.controller('ServerPanelCtrl', function ($scope, $stateParams, ServersManager) {
  ServersManager.loadServer($stateParams.id).then(function (res) {
    $scope.server = res;
  })
});
