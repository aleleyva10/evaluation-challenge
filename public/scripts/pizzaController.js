var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'routes/restaurants.js'
  };
});

myApp.controller('PizzaController', function(PizzaService) {
      var vm = this;

      vm.getPizzaInfo = function() {
        console.log('in getPizzaInfo');
        PizzaService.getPizzaInfo().then(function(res) {
          console.log('back in controller with:', res);
          vm.pizza = res.data;
        });
      };
    });
