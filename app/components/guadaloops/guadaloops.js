(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/guadaloops/guadaloops.html'
  }
  angular.module("Practica")
    .component("guadaComponent", component)
    function componentCtrl(){
      var com = this;


    }
})();
