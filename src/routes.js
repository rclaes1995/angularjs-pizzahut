angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('confirm', {
      url: '/confirm',
      component: 'confirm',
      params: {
        pizza: null,
        crust: null,
        size: null
      }
    })
    .state('success', {
      url: '/success',
      component: 'success'
    })
    .state('orders', {
      url: '/orders',
      component: 'orders'
    });
}
