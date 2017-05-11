angular
  .module('app')
  .component('pizzaMenuItem', {
    templateUrl: 'app/components/pizza-menu-item/pizza-menu-item.html',
    bindings: {
      pizza: '<',
      selectPizza: '&',
      selectedPizza: '='
    }
  });
