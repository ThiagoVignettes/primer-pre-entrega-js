function calcularEdad(añoNacimiento) {
  let añoActual = 2023;
  let edad = añoActual - añoNacimiento;
  return edad;
}

function verificarEdad(nombre, apellido, edad){
  if (edad >= 18){
    alert("¡Bienvenido(a) a nuestra página, " + nombre + " " + apellido +"!");

  }else{
    alert("Lo sentimos, " + nombre + " " + apellido + ", no dispones de la edad necesaria para acceder a esta web.");
  }
}

let respuesta;

do{
  let nombreUsuario = prompt("Ingresa tu nombre:");
  let apellidoUsuario = prompt("Ingresa tu apellido:");
  let añoNacimientoUsuario = prompt("Ingresa tu año de nacimiento:");
  let edadUsuario = calcularEdad(añoNacimientoUsuario);
  verificarEdad(nombreUsuario, apellidoUsuario, edadUsuario);

  respuesta = prompt("Deseas salir? (Escriba 'Salir' para salir).").toLowerCase();

}while(respuesta != "salir")