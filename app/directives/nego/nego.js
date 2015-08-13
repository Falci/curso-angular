/**
 * @description nenhum elemento grande oculto
 * @author Peter
 */
angular.module('app.directive.nego', [])
.directive('nego', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<b ng-transclude><i></i></b>',
    scope: {
      nome: '@'
    },
    controller: function ($scope) {
      console.log('nego controller', $scope.nome);
    },
    link: function (scope) {
      console.log('nego link', scope.nome);
    }
  };
});
