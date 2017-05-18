angular
  .module('app')
  .component('order', {
    templateUrl: 'app/components/order/order.html',
    bindings: {
      selectedPizza: '=',
      selectedCrust: '=',
      selectedSize: '=',
      confirm: '&'
    }
  });
