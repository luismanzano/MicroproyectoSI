document.getElementById("send").onclick = function(){
    
    var nombre = "luis";

    if(document.getElementById("name").value !="" && document.getElementById("email").value != "" && document.getElementById("msg").value!="" && document.getElementById("phone").value!="") {
    console.log("Su nombre es: " + document.getElementById("name").value);
    console.log("Su telefono es: " + document.getElementById("phone").value);
    console.log("Su email es: " + document.getElementById("email").value);
    console.log("Su mensaje es: " + document.getElementById("msg").value);
    alert("Se ha enviado el formulario, muchas gracias por contactarme!")

    } else{
        alert("Debe rellenar todos los elementos del formulario")
    }
}