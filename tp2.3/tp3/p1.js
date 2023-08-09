document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página
  
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = sumar(numero1, numero2);
  
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
  });
  
  function sumar(a, b) {
    let resultado = a + b;
    return resultado;
  }