angular
  .module('app')
  .component('pizzaMenu', {
    templateUrl: 'app/common/pizza-menu/pizza-menu.html',
    bindings: {
      pizzas: '<',
      selectPizza: '&',
      selectedPizza: '='
    },
    controller: PizzaMenuController
  });

/** @ngInject */
function PizzaMenuController(PizzaService) {
  var vm = this;
}
