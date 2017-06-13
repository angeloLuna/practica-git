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
      .when('/rap',
      {
        template:'<rap-component></rap-component>'
      })
      .when("/rap/aleman",
      {
        template:"<aleman-component></aleman-component>"
      })
      .when("/rap/guadaloops",
      {
        template:"<guada-component></guada-component>"
      })
      .when("/rap/baston",
      {
        template:"<baston-component></baston-component>"
      })
      .when("/rap/simpson",
      {
        template:"<simpson-component></simpson-component>"
      })
      .when("/rap/zaque",
      {
        template:"<zaque-component></zaque-component>"
      })
      .when("/rap/tino",
      {
        template:"<tino-component></tino-component>"
      })




  }

})();
