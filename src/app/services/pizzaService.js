function PizzaService($http) {
  this.get = function () {
    return $http.get('pizzas.json')
      .then(function (response) {
        return response.data.products;
      });
  };
}

angular
  .module('app')
  .service('PizzaService', PizzaService);

