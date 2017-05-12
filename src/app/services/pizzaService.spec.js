describe('PizzaService service', function () {
  var PizzaService;
  var $httpBackend;

  beforeEach(module('app'));

  beforeEach(angular.mock.inject(function (_PizzaService_, _$httpBackend_) {
    PizzaService = _PizzaService_;
    $httpBackend = _$httpBackend_;
  }));

  it('should get the pizzas', function (done) {
    $httpBackend
      .expectGET('pizzas.json')
      .respond(200, {
        products: [
          { id: 1, name: 'Pizza Margherita' },
          { id: 2, name: 'Pizza Bolognese' }
        ]
      });

    PizzaService.get()
      .then(function (pizzas) {
        expect(pizzas.length).toBe(2);
        expect(pizzas[0].id).toEqual(1);
        done();
      });

    $httpBackend.flush();
  });
});
