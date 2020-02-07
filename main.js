document.getElementById("send").onclick = function(){
    alert("Se ha enviado el formulario, muchas gracias por contactarme!")
    var nombre = "luis";

    console.log("Su nombre es: " + document.getElementById("name").value);
    console.log("Su email es: " + document.getElementById("email").value);
    console.log("Su mensaje es: " + document.getElementById("msg").value);
}