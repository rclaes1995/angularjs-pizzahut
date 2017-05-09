angular
  .module('app')
  .component('orderItem', {
    templateUrl: 'app/common/order-item/order-item.html',
    bindings: {
      orderTitle: '<'
    },
    controller: OrderItemController
  });

/** @ngInject */
function OrderItemController() {
  var vm = this;
}
