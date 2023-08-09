const eventos = {
    '2023-08-10': ['Reunión de Equipo', 'Entrega de Proyecto'],
    '2023-08-11': ['Presentación de Ventas', 'Entrenamiento'],
    '2023-08-12': ['Conferencia', 'Taller de Desarrollo']
};

const diaSelect = document.getElementById('diaSelect');
const mostrarEventosBtn = document.getElementById('mostrarEventos');
const eventosLista = document.getElementById('eventosLista');

mostrarEventosBtn.addEventListener('click', function() {
    const selectedDate = diaSelect.value;
    eventosLista.innerHTML = '';

    if (eventos[selectedDate]) {
        const eventosDia = eventos[selectedDate];
        eventosDia.forEach(evento => {
            const li = document.createElement('li');
            li.textContent = evento;
            eventosLista.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No hay eventos programados para este día.';
        eventosLista.appendChild(li);
    }
});
