(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/aleman/aleman.html'
  }
  angular.module("Practica")
    .component("alemanComponent", component)
    function componentCtrl(){
      var com = this;


    }
})();
