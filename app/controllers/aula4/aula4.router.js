angular.module('app.controller.aula4',
  ['app.controller.Aula4Controller'])
.config(function ($routeProvider) {

  $routeProvider.when('/aula4', {
    controller: 'Aula4Controller',
    controllerAs: 'vm',
    templateUrl: 'controllers/aula4/aula4.html'
  });
});
