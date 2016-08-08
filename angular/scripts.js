
var demoApp = angular.module('demoApp', ["ngRoute"]);



var controllers1 = {};


controllers1.simpleController = function($scope){
  $scope.customers = [{name: 'James Hatch', city: 'Austin'},
  {name: 'Hank Brigham', city: 'Boulder'}];

};

demoApp.controller(controllers1);


demoApp.config(function($routeProvider){
  $routeProvider.when('/', {
      controller: 'simpleController',
      templateUrl: './partials/view1.html'
  }).when('/view2', {
      controller: 'simpleController',
      templateUrl: './partials/view2.html'
  }).otherwise({ redirectTo: '/' });
});
