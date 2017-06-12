(function(){
  'use strict'

  var formUser = {
    controller: formCtrl,
    templateUrl: "app/components/form/form.html"
  }

  angular
  .module("Practica")
  .component("formUser", formUser)

  function formCtrl(){
    var formulario = this;
  }

})();
