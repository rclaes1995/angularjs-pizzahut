angular
  .module('app')
  .component('order', {
    templateUrl: 'app/common/order/order.html',
    bindings: {
      selectedPizza: '=',
      selectedCrust: '=',
      selectedSize: '='
    },
    controller: OrderController
  });

/** @ngInject */
function OrderController() {
  var vm = this;
}
