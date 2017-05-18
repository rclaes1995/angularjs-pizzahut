angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/main/main.html',
    controller: MainController
  });

function MainController($state, PizzaService) {
  var vm = this;

  vm.selectPizza = function (option) {
    vm.selectedPizza = option;
  };

  vm.selectCrust = function (option) {
    vm.selectedCrust = option;
    var priceGroups = vm.selectedPizza.price_groups.filter(function (val) {
      return val.priceGroup1 === vm.selectedCrust.id;
    });

    vm.sizeOptions = [];
    priceGroups.reverse().forEach(function (priceGroup) {
      vm.sizeOptions = vm.sizeOptions.concat(vm.selectedPizza.options[1].values.filter(function (val) {
        return val.id === priceGroup.priceGroup2;
      }));
    });

    vm.selectedSize = null;
  };

  vm.selectSize = function (option) {
    vm.selectedSize = option;
  };

  vm.confirm = function () {
    $state.go('confirm', { pizza: vm.selectedPizza, crust: vm.selectedCrust, size: vm.selectedSize });
  };

  vm.loadPizzas = function () {
    PizzaService.get()
      .then(function (pizzas) {
        vm.pizzas = pizzas;
      });
  };

  vm.loadPizzas();
}
