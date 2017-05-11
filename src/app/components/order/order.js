angular
  .module('app')
  .component('order', {
    templateUrl: 'app/components/order/order.html',
    bindings: {
      selectedPizza: '=',
      selectedCrust: '=',
      selectedSize: '='
    },
    controller: OrderController
  });

/** @ngInject */
function OrderController($state) {
  var vm = this;

  vm.confirm = function (selectedPizza, selectedCrust, selectedSize) {
    $state.go('confirm', { pizza: selectedPizza, crust: selectedCrust, size: selectedSize });
  };
}
