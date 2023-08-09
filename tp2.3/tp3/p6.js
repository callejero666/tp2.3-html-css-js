const colorButton = document.getElementById('colorButton');
colorButton.style.width = '150px';
colorButton.style.height = '50px';
colorButton.style.fontSize = '16px';
colorButton.style.backgroundColor = 'gray';
colorButton.style.color = 'white';
colorButton.style.border = 'none';
colorButton.style.cursor = 'pointer';

colorButton.addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
});

function cambiarUbicacion(posicion) {
    const valores = posicion.split(',');
    const x = parseInt(valores[0]) || 0;
    const y = parseInt(valores[1]) || 0;

    colorButton.style.position = 'absolute';
    colorButton.style.left = x + 'px';
    colorButton.style.top = y + 'px';
}

// Cambiar la ubicación los num segun preferencia de la ubicacion del boton en la pantalla
cambiarUbicacion("69x, 500y");
