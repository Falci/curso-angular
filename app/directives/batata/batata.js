angular.module('app.directive.batata', [])
.directive('batata', function (){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/batata/batata.html',
    scope: {
      texto: '@descricao',
      value: '='
    },
    controller: function ($scope) {
      $scope.limpar = function () {
        $scope.value = undefined;
      };
    },
    link: function(scope, element, attr, parent) {

    }
  };
});
