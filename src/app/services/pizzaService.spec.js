describe('PizzaService service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (PizzaService) {
    expect(PizzaService.getData()).toEqual(3);
  }));
});
