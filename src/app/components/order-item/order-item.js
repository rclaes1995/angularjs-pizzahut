angular
  .module('app')
  .component('orderItem', {
    templateUrl: 'app/components/order-item/order-item.html',
    bindings: {
      orderTitle: '<'
    }
  });
