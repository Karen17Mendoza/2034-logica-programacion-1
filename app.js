let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10:");

console.log(numeroUsuario);

if(numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario}!` +` tu elegiste ` +numeroUsuario);
} else {
    alert("Lo siento, no acertaste el numero");
}

let respuesta = prompt("Que dia de la semana es?:");

if (respuesta == "sabado" || respuesta == "domingo") {
    alert("Buen fin de semana");
} else {
    alert("Buena semana");
}

let numero = prompt("Ingrese un numero:");

if(numero > 0) {
    alert("El numero es positivo");
} else {
    alert("El numero es negativo");
}

let puntuacion = prompt("Tu puntuacion es:");
if(puntuacion >= 100) {
    alert("Felicidades, has ganado!");
} else{
    alert("Intentalo nuevamente para ganar");
}
let saldoCuenta = 500;
alert(`Tu saldo es ${saldoCuenta} `)

let nombre = prompt("Ingresa tu nombre:");
alert(`Hola ${nombre}`);
