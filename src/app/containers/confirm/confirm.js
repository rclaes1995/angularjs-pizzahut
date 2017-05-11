angular
  .module('app')
  .component('confirm', {
    templateUrl: 'app/containers/confirm/confirm.html',
    controller: ConfirmController
  });

function ConfirmController($state, $stateParams) {
  var vm = this;
  var database = firebase.database();

  vm.pizza = $stateParams.pizza;
  vm.crust = $stateParams.crust;
  vm.size = $stateParams.size;

  if (!vm.pizza || !vm.crust || !vm.size) {
    $state.go('app');
  }

  vm.confirmOrder = function (name, remarks) {
    if (!name) {
      return;
    }

    var now = new Date().getTime();
    var order = {
      pizza: vm.pizza.description,
      crust: vm.crust.label,
      size: vm.size.label,
      name: name,
      remarks: remarks || '',
      timestamp: now
    };

    database.ref('orders').push(order);
    $state.go('success');
  };
}
