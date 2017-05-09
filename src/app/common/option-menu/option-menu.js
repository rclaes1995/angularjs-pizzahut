angular
  .module('app')
  .component('optionMenu', {
    templateUrl: 'app/common/option-menu/option-menu.html',
    bindings: {
      options: '<',
      menuTitle: '@',
      selectOption: '&',
      selectedOption: '='
    },
    controller: OptionMenuController
  });

/** @ngInject */
function OptionMenuController() {
  var vm = this;
}
