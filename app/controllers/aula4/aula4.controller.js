angular.module('app.controller.Aula4Controller', [])
.controller('Aula4Controller', function (AreaModel) {

  var vm = this;

  vm.salvar = salvar;
  vm.atualizar = listar;
  vm.excluir = excluir;
  vm.editar = editar;
  listar();

  function listar() {
    vm.items = AreaModel.getItems();
  }

  function salvar() {
    AreaModel.salvar(vm.item)
    .then(listar)
    .then(function () {
      vm.item = {};
    });
  }

  function excluir(item) {
    AreaModel.excluir(item)
    .then(listar);
  }

  function editar(item) {
    AreaModel.editar(item)
    .then(listar);
  }

});
