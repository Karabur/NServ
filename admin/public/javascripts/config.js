'use strict';
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/servers");
  //
  // Now set up the states
  $stateProvider
    .state('servers', {
      url: "/servers",
      templateUrl: "views/servers",
      controller:'ServersCtrl'
    })
    .state('servers.server', {
      url:'/:id',
      templateUrl: "views/serverPanel",
      controller: "ServerPanelCtrl"
    })
});