(function(){
  'use strict'

  angular
    .module("Practica")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<main-component></main-component>'
      })
      // .when('/pate',{
      //   template: '<pate-component></pate-component>'
      // })
      // .when('/paramore',{
      // template: "<practica-componentp></practica-componentp>"
      // })
      .when('/genero',{
        template: '<genero-component></genero-component>'
      })


    .otherwise({ redirectTo: '/' })
  }

})();
