(function(){
  'use strict'

  angular
    .module("Practica")
    .config(config)

  function config($routeProvider){
    $routeProvider
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
