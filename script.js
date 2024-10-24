function operaciones() {
    // Obtenemos el elemento donde se mostrará el resultado
    let nombre = prompt("¿Cuál es tu nombre?");
    // Verificamos si el usuario canceló la operación
    if (nombre === null || nombre === "") {
        nombre = "Invitado";
    }
    console.log("Hola " + nombre + ", bienvenido a la clase de JavaScript");
    // Solicitamos al usuario el operador a utilizar
    let operador = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división, Módulo)");

    if (operador === null) {
        console.log("Operación no válida");
        resultadoElemento.innerHTML = "Operación no válida";
        return false;
    } else {
        // Solicitamos al usuario los números a operar
        let numero1 = parseFloat(prompt("Ingresa el primer número"));
        let numero2 = parseFloat(prompt("Ingresa el segundo número"));
        // decalramos la variable resultado
        let resultado;
        // ewvaluamos si los numeros son validos
        let resultadoElemento = document.getElementById("resultado");
        if (isNaN(numero1) || isNaN(numero2)) {
            resultadoElemento.innerHTML = "no es un numero";
            return false;
        }
        if (numero1 === numero2) {
            resultadoElemento.innerHTML = "Los números son iguales, por favor ingresa números diferentes";
            return false;
        }

        if (numero1 < 0 || numero2 < 0) {
            resultadoElemento.innerHTML = "Operación no válida";
            return false;
        }

        switch (operador) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "división":
                resultado = numero1 / numero2;
                break;
            case "modulo":
                resultado = numero1 % numero2;
                break;
            default:
                console.log("Operación no válida");
                break;
        }
        console.log("El resultado de la " + operador + " es: " + resultado);
        resultadoElemento.innerHTML = "El resultado de la " + operador + " es: " + resultado;
    }
}

operaciones();