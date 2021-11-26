//simulacion de registro de un usuario para la red social

let miembros = new Array();
let nombre = document.getElementById('nombre')
let apellidoM = document.getElementById('apellidoM')
let apellidoP = document.getElementById('apellidoP')
let edad = document.getElementById('edad')
let email = document.getElementById('email')
let hobbies = document.getElementById('hobbies')
let sexo = document.getElementById('sexo')
let fecha_nacimiento = document.getElementById('fecha_nacimiento')
let password = document.getElementById('password')

class N_usuario{
    constructor (nombre, apellidoM, apellidoP, edad, hobbies, email, sexo, fecha_nacimiento, password){
        this.nombre = nombre;
        this.apellidoM = apellidoM;
        this.apellidoP = apellidoP;
        this.edad = edad;
        this.hobbies = hobbies;
        this.email = email;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.password = password;
    }
    logIn(){
        document.write(`Bienvenido ${this.nombre} ${this.apellidoP}. Ya eres un usuario de Chatboot.`)
    }
}
function registro(){
    console.log(nombre.value)
    let usuario = new N_usuario(nombre.value, apellidoM.value, apellidoP.value, edad.value, hobbies.value, email.value, sexo.value, fecha_nacimiento.value, password.value)
    miembros.push(usuario)
    usuario.logIn()
    return miembros
}
boton.onclick = function(){
    registro()
    console.log(miembros)
    alert('Usuario registrado con éxito')
}


