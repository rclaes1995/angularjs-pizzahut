angular
  .module('app')
  .component('optionMenu', {
    templateUrl: 'app/components/option-menu/option-menu.html',
    bindings: {
      options: '<',
      menuTitle: '@',
      selectOption: '&',
      selectedOption: '='
    }
  });
