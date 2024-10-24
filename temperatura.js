function temperatura() {
    //recibir la temperatura en celcius
    let resultadoElemento = document.getElementById("resultado");
    let celcius = prompt("Ingresa la temperatura en Celcius");
    // Verificamos si el usuario canceló la operación
    if (celcius === null) {
        resultadoElemento.innerHTML = "Operación no válida";
        return false;
    } else {
        // Verificamos si el valor ingresado es un número y si es mayor a 0
        if (isNaN(celcius) || celcius < 0) {
            resultadoElemento.innerHTML = "no es un numero o es menor a 0";
            return false;
        }
        // Realizamos las operaciones para convertir la temperatura a Fahrenheit y Kelvin
        let fahrenheit = (celcius * 9 / 5) + 32;
        let kelvin = celcius + 273.15;
        // Mostramos el resultado en el elemento
        resultadoElemento.innerHTML = "La temperatura en Fahrenheit es " + fahrenheit + " y en Kelvin es " + kelvin;
    }

}

temperatura();