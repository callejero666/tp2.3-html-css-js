function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

function mostrarNumerosPares() {
    const numerosInput = document.getElementById('numerosInput').value;

    // Convertimos la cadena de números en un array
    const numerosArray = numerosInput.split(',').map(Number);

    // Verificamos que haya al menos 10 elementos
    if (numerosArray.length >= 10) {
        // Filtrar los números pares
        const numerosPares = filtrarNumerosPares(numerosArray);

        // Mostrar los números pares en la página
        const numerosParesDiv = document.getElementById('numerosPares');
        numerosParesDiv.textContent = numerosPares.join(', ');
    } else {
        alert("Ingrese al menos 10 números separados por comas.");
    }
}
