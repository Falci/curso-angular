angular.module('app.service.area', [])
.service('AreaModel', function ($http, baseUrl, $resource) {

  var instance = $resource(baseUrl.concat('/areas/:id'), {id: 'areaId', treeId: 'tree'}, {
    funcionarios: {
      isArray: true,
      url: '/areas/:id/funcionarios'
    }
  });

  return {
    getItems: getItems,
    excluir: excluir,
    salvar: salvar
  };

  function transformer(item) {
    return {
      nome: item.nome,
      id: item._id.$oid
    };
  }

  function getItems() {
    return instance.query();
    item.remove().then();
  }

  function salvar(item) {
    if(item.id){
      return editar(item);
    } else {
      return adicionar(item);
    }
  }

  function adicionar(item) {
    return $http.post(baseUrl.concat('/areas'), item);
  }

  function excluir(item) {
    return instance.remove(item);
  }

  function editar(item) {
    return $http.put(baseUrl.concat('/areas/').concat(item.id), item);
  }

});
