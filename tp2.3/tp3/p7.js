function alternarVisibilidad() {
    const miDiv = document.getElementById('miDiv');
    if (miDiv.style.display === 'none' || miDiv.style.display === '') {
        miDiv.style.display = 'block'; // Mostrar el div si está oculto
    } else {
        miDiv.style.display = 'none'; // Ocultar el div si está visible
    }
}
