function encontrarNumeroMasGrande() {
    const numerosInput = document.getElementById('numerosInput').value;
    const numerosArray = numerosInput.split(',').map(Number);

    if (numerosArray.length === 0) {
        document.getElementById('resultado').textContent = "No se ingresaron números.";
        return;
    }

    let maxNumero = numerosArray[0];

    for (let i = 1; i < numerosArray.length; i++) {
        if (numerosArray[i] > maxNumero) {
            maxNumero = numerosArray[i];
        }
    }

    document.getElementById('resultado').textContent = maxNumero.toString();
}
