angular.module('app.controller.ControllerController', [])
.controller('ControllerController', Controller);

function Controller (UserModel) {
  var vm = this;
  var id = 11;
  var copia;

  vm.adicionar = adicionar;
  vm.editar = editar;
  vm.excluir = excluir;
  vm.cancelar = cancelar;

  function adicionar () {
    if(!vm.item.id){
      vm.item.id = id++;
      vm.participantes.push( vm.item );
    }

    vm.item = {}; // new Object();
  }

  function editar (item) {
    copia = angular.copy(item);

    vm.item = item;
  }

  function cancelar () {
    angular.copy(copia, vm.item);
    vm.item = {};
  }

  function excluir (item) {
    vm.participantes = vm.participantes.filter(function (batata) {
      return item != batata;
    });
  }


  vm.participantes = UserModel.getItems();
}
