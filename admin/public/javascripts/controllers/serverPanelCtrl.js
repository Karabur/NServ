'use strict';

app.controller('ServerPanelCtrl', function ($scope, $stateParams, ServersManager) {
  $scope.server = ServersManager.loadServer($stateParams.id);
});
