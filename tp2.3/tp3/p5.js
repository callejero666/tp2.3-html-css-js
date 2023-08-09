function calcularSumaPrimos() {
    function esPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        
        return true;
    }

    const numeroInput = parseInt(document.getElementById('numeroInput').value);
    
    let suma = 0;
    for (let i = 2; i <= numeroInput; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }
    
    document.getElementById('resultado').textContent = suma.toString();
}
