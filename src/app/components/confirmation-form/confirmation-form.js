angular
  .module('app')
  .component('confirmationForm', {
    templateUrl: 'app/components/confirmation-form/confirmation-form.html',
    bindings: {
      pizza: '=',
      crust: '=',
      size: '=',
      confirmOrder: '&'
    }
  });
