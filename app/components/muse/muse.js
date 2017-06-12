(function(){
  'use strict'

  var component = {
    controller: componentCtrl,
    templateUrl: 'app/components/muse/muse.html'
  }

  angular
    .module("Practica")
    .component("practicaComponent", component)

  function componentCtrl(){

    var com = this;
    
    com.array = [
    {
      nombre: "angelo",
      area: "tecnología",
      empresa: "jelpmi",
      horario: "tarde"
    },
    {
      nombre: "Melina",
      area: "CEO",
      empresa: "jelpmi",
      horario: "tarde"
    },
    {
      nombre: "Tello",
      area: "Representante legal",
      empresa: "jelpmi",
      horario: "tarde"
    },
    {
      nombre: "Baza",
      area: "Producto",
      empresa: "jelpmi",
      horario: "mañana"
    },
    {
      nombre: "Diana",
      area: "Logistica",
      empresa: "jelpmi",
      horario: "mañana"
    },
    {
      nombre: "Caro",
      area: "Estratega digital",
      empresa: "jelpmi",
      horario: "tarde"
    },
    ]

  }
})();