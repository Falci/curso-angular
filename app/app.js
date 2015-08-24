angular.module('app', [
  'ngResource',

  //rooters
  'app.config.router',

  //services
  'app.service.user',
  'app.service.area',

  // directive
  'app.directive.batata',
  'app.directive.nego',

  // controllers
  'app.controller.home',
  'app.controller.sorteio',
  'app.controller.sobre',
  'app.controller.controller',

  'app.controller.aula4'

])
.constant('baseUrl', 'http://cursoangular.herokuapp.com');
