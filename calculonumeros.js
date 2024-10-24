function calculoNumeros() {
    //declaro el array de numeros
    let numeros = [];
    // pido al usuario que ingrese los numeros
    for (let i = 1; i < 6; i++) { 
        let numero = parseFloat(prompt("Ingresa el número " + i + ":"));

        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
            i--; // Restar 1 al contador para volver a pedir el número
        }else{
            numeros.push(numero);//agrego el numero al array
        }
    }

    let suma = numeros.reduce((a, b) => a + b, 0); 
    // Sumar todos los números del array ocupando el método reduce que recibe una función y un valor inicial
    let promedio = suma / numeros.length; // Calcular el promedio y usamos length para obtener la cantidad de elementos en el array

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "La suma de los números es: " + suma + "<br>El promedio de los números es: " + promedio;
}

calculoNumeros();