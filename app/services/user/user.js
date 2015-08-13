angular.module('app.service.user', [])
.service('UserModel', function () {
  var banco = [
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

  return {
    getItems: getItems
  };

  function getItems() {
    return banco;
  }
});
