angular.module('app.controller.sorteio', [
  'ngRoute',
  'app.controller.SorteioController'
  ])
.config(function($routeProvider) {

  $routeProvider.when('/sorteio', {
    templateUrl: 'controllers/sorteio/sorteio.html',
    controller: 'SorteioController',
    controllerAs: 'vm'
  });


});
