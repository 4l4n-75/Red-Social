//simulacion de ingreso a la red social
let email_1 = document.getElementById('email')
let password_1 = document.getElementById('password')
// boton = document.getElementById('boton')
let usuario = {
    nombre: 'Jose',
    email: 'jose@gmail.com',
    password: 'hola123',
    ingreso : function (){
        document.write ('Bienvenido' + nombre)
    }
}
document.getElementById("boton").addEventListener("click", function(event){
    event.preventDefault()
    console.log(email_1.value)
    if (usuario.email != email_1.value){
        alert('El usuario no existe, favor de registrarse')
    }else{
        usuario.ingreso()
    }
  });

// boton.onclick = function(event){
//     event.preventDefault()
   
//     if (usuario.email != email.nodeValue){
//         alert('El usuario no existe, favor de registrarse')
//     }else{
//         usuario.ingreso()
//     }
// }