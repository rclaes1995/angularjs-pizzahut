angular
  .module('app')
  .component('app', {
    templateUrl: 'app/components/main/main.html',
    controller: MainController
  });

function MainController(PizzaService) {
  var vm = this;
  vm.pizzas = null;

  vm.selectedPizza = null;
  vm.selectedCrust = null;
  vm.selectedSize = null;

  PizzaService.get()
    .then(function (pizzas) {
      vm.pizzas = pizzas;
      console.log(pizzas);
    });

  vm.selectPizza = function (option) {
    vm.selectedPizza = option;
  };

  vm.selectCrust = function (option) {
    vm.selectedCrust = option;
  };

  vm.selectSize = function (option) {
    vm.selectedSize = option;
  };
}
