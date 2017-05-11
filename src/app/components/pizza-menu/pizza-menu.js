angular
  .module('app')
  .component('pizzaMenu', {
    templateUrl: 'app/components/pizza-menu/pizza-menu.html',
    bindings: {
      pizzas: '<',
      selectPizza: '&',
      selectedPizza: '='
    }
  });
