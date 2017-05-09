angular
  .module('app')
  .component('pizzaMenuItem', {
    templateUrl: 'app/common/pizza-menu-item/pizza-menu-item.html',
    bindings: {
      pizza: '<',
      selectPizza: '&',
      selectedPizza: '='
    },
    controller: PizzaMenuItemController
  });

/** @ngInject */
function PizzaMenuItemController() {
  var vm = this;
}
