function ordenarNumeros() {
    const numerosInput = document.getElementById('numerosInput').value;

    // Convertimos la cadena de números en un array
    const numerosArray = numerosInput.split(',').map(Number);

    // Utilizamos la función sort para ordenar el array de forma ascendente
    const numerosOrdenados = numerosArray.sort((a, b) => a - b);

    // Mostramos el resultado en la página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = numerosOrdenados.join(', ');
}
