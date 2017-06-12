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
      .when('/form',{
        template: '<form-user></form-user>'
      })
      .otherwise({ redirectTo: '/' })
      .when('/paramore',{
      template: "<practica-componentp></practica-componentp>"
    })
  }

})();
