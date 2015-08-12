angular.module('app.controller.ControllerController', [])
.controller('ControllerController', Controller);

function Controller () {
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


  vm.participantes = [
    {id: 1, nome: "Peter", pizza: true},
    {id: 2, nome: "Presidente", pizza: false},
    {id: 3, nome: "Zefa", pizza: true},
    {id: 4, nome: "NoNose", pizza: true},
    {id: 5, nome: "Marcelo", pizza: true},
    {id: 6, nome: "Eduardo", pizza: false},
    {id: 7, nome: "Tonhão", pizza: true},
    {id: 8, nome: "Beligante", pizza: false},
    {id: 9, nome: "Igor", pizza: false},
    {id: 10, nome: "Falci", pizza: true}
  ];
}
