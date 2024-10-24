function calcularDias() {
    // Obtenemos el elemento donde se mostrará el resultado
    let resultadoElemento = document.getElementById("resultado");
    // Solicitamos al usuario el número de días
    let totalDias = prompt("Ingresa el número de días");
    // Verificamos si el usuario canceló la operación
    if (totalDias === null) {
        // Mostramos un mensaje de error Y retornamos false para salir de la función
        resultadoElemento.innerHTML = "Operación no válida";
        return false;
    } else {
        if (isNaN(totalDias) || totalDias < 0) {
            // Mostramos un mensaje de error Y retornamos false para salir de la función
            resultadoElemento.innerHTML = "no es un número o es menor a 0";
            return false;
        }
        // Realizamos las operaciones para convertir los días a años, semanas y días
        //usamos math.floor para redondear al entero más cercano hacia abajo
        let años = Math.floor(totalDias / 365);
        let diasRestantes = totalDias % 365;
        let semanas = Math.floor(diasRestantes / 7);
        let diasFinales = diasRestantes % 7;
        // Mostramos el resultado en el elemento
        resultadoElemento.innerHTML = `${totalDias} días equivalen a ${años} año(s), ${semanas} semana(s) y ${diasFinales} día(s)`;
    }
}

calcularDias();373