$(function () {                                         //función para los iconos de la sección_2 ¿Quiénes somos?
  $('[data-toggle="tooltip"]').tooltip()
});

$(function (){                                          //función para el modal
  $("#form-suscripcion").on("submit", function (e) {
    e.preventDefault();
    var nombre = $("#nombre", this).val();
    var apellido = $("#apellido", this).val();
    var email = $("#correo", this).val();

    alert(`Gracias ${nombre} ${apellido} por preferirnos, te contactaremos al ${email}.`)
  })
});