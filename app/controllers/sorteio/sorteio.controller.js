angular.module('app.controller.SorteioController', [])
.controller('SorteioController', function ($interval, UserModel) {
  var vm = this, timer;

  vm.items = UserModel.getItems();
  vm.sortear = sortear;
  vm.sorteando = false;

  function sortear() {
    vm.sorteando = true;

    timer = $interval(function () {
      var validos = vm.items.filter(function (item) {
        return item.pontos;
      });

      if(validos.length === 1){
        validos[0].vencedor = true;
        return $interval.cancel(timer);
      }

      var rand = Math.floor(Math.random() * validos.length);

      validos[rand].pontos--;

    }, 1000);
  }
});
