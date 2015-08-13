angular.module('app', [
  'app.config.router',

  //services
  'app.service.user',

  // directive
  'app.directive.batata',
  'app.directive.nego',

  // controllers
  'app.controller.home',
  'app.controller.sobre',
  'app.controller.controller'
]);
