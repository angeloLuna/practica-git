(function(){
  'use strict'

  angular
    .module("Practica")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<practica-component></practica-component>'
      })
      .when('/pate',{
        template: '<pate-component></pate-component>'
      })
      .otherwise({ redirectTo: '/' })
  }

})();