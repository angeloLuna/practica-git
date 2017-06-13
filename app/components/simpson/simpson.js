(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/simpson/simpson.html'
  }
  angular.module("Practica")
    .component("simpsonComponent", component)
    function componentCtrl(){
      var com = this;


    }
})();
