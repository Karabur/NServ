'use strict';

app.directive('autoFocus', function() {
  return function(scope, element, attrs) {
    scope.$watch(attrs.autoFocus,
      function (newValue) {
        newValue && element[0].focus();
      },true);
  };
});