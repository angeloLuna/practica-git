(function(){
  'use strict'

  var componentPate = {
    controller: pateCtrl,
    templateUrl: 'app/components/pate/pate.html'
  }

  angular
    .module("Practica")
    .component("pateComponent", componentPate)
  function pateCtrl(){

      var com = this;
      
  }
})();