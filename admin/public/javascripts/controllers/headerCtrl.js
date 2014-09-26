'use strict';
app.controller('HeaderCtrl', function ($scope, $state){
  $scope.activeItem = $state.current.name;
});