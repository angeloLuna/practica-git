(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/baston/baston.html'
  }
  angular.module("Practica")
    .component("bastonComponent", component)
    function componentCtrl(){
      var com = this;


    }
})();
