angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/main/main.html',
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
    });

  vm.selectPizza = function (option) {
    vm.selectedPizza = option;
  };

  vm.selectCrust = function (option) {
    vm.selectedCrust = option;
    var priceGroups = vm.selectedPizza.price_groups.filter(function (val) {
      return val.priceGroup1 === vm.selectedCrust.id;
    });

    vm.sizeOptions = [];
    priceGroups.forEach(function (priceGroup) {
      vm.sizeOptions = vm.sizeOptions.concat(vm.selectedPizza.options[1].values.filter(function (val) {
        return val.id === priceGroup.priceGroup2;
      }));
    });
  };

  vm.selectSize = function (option) {
    vm.selectedSize = option;
  };
}
