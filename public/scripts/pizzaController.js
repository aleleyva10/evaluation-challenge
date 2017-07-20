var myApp = angular.module('myApp', ['ngRoute']);

myApp.filter('myFormat', function(){
  return function(phone_number) {
      var newNumber = phone_number.toString();
      var string = newNumber.substr(0, 3) + '-' + newNumber.substr(3, 3) + '-' + newNumber.substr(6, 7);
      console.log(string);
      return string;
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
