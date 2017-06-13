(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/tino/tino.html'
  }
  angular.module("Practica")
  .component("tinoComponent", component)
    function componentCtrl(){
      var com = this;


    }
})();
