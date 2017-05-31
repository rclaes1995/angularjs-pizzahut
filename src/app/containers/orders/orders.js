angular
  .module('app')
  .component('orders', {
    templateUrl: 'app/containers/orders/orders.html',
    controller: OrdersController
  });

function OrdersController($rootScope) {
  var vm = this;

  var database = firebase.database();

  var calculateStartTime = function () {
    if ((moment().weekday() === 2 && moment().hour() < 13) || moment().weekday() < 2) {
      return moment().weekday(-5).hour(13).minute(0).second(0).valueOf();
    }
    return moment().weekday(2).hour(13).minute(0).second(0).valueOf();
  };

  var ordersRef = database.ref('orders').orderByChild('timestamp').startAt(calculateStartTime());

  vm.orders = null;

  ordersRef.on('value', function (orders) {
    vm.orders = orders.val();
    vm.ordersLength = vm.orders ? Object.keys(vm.orders).length : 0;
    vm.isOrdersLoaded = true;
    $rootScope.$digest();
  });
}
