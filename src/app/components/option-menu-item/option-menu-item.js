angular
  .module('app')
  .component('optionMenuItem', {
    templateUrl: 'app/components/option-menu-item/option-menu-item.html',
    bindings: {
      option: '<',
      selectOption: '&',
      selectedOption: '='
    }
  });
