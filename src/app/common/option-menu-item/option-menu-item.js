angular
  .module('app')
  .component('optionMenuItem', {
    templateUrl: 'app/common/option-menu-item/option-menu-item.html',
    bindings: {
      option: '<',
      selectOption: '&',
      selectedOption: '='
    },
    controller: OptionMenuItemController
  });

/** @ngInject */
function OptionMenuItemController() {
  var vm = this;
}
