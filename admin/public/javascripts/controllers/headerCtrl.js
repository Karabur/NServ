'use strict';
app.controller('HeaderCtrl', function ($scope, $rootScope){
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState){
      $scope.activeItem = toState.name.split(".")[0];
    });
});