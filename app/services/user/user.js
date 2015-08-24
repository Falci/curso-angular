angular.module('app.service.user', [])
.service('UserModel', function () {
  var banco = [
    {id: 1, nome: "Peter", pizza: true, pontos: 4},
    {id: 2, nome: "Presidente", pizza: false, pontos: 4},
    {id: 3, nome: "Zefa", pizza: true, pontos: 4},
    {id: 4, nome: "NoNose", pizza: true, pontos: 2},
    {id: 5, nome: "Marcelo", pizza: true, pontos: 3},
    {id: 6, nome: "Eduardo", pizza: false, pontos: 3},
    {id: 7, nome: "Tonhão", pizza: true, pontos: 4},
    {id: 8, nome: "Beligante", pizza: false, pontos: 2},
    {id: 9, nome: "Igor", pizza: false, pontos: 4},
    {id: 10, nome: "Falci", pizza: true, pontos: 1}
  ];

  return {
    getItems: getItems
  };

  function getItems() {
    return banco;
  }
});
