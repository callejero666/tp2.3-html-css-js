const personas = [
    { nombre: 'Juan', apellido: 'Funes', edad: 25, sexo: 'Masculino', telefono: '1234567890' },
    //{ nombre: 'María', apellido: 'Gómez', edad: 30, sexo: 'Femenino', telefono: '9876543210' },
    //{ nombre: 'Carlos', apellido: 'Rodríguez', edad: 28, sexo: 'Masculino', telefono: '5555555555' }
];

function crearTabla() {
    const tablaContainer = document.getElementById('tablaContainer');
    const tabla = document.createElement('table');

    const encabezados = ['Nombre', 'Apellido', 'Edad', 'Sexo', 'Teléfono'];
    const encabezadoRow = document.createElement('tr');

    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        encabezadoRow.appendChild(th);
    });

    tabla.appendChild(encabezadoRow);

    personas.forEach(persona => {
        const fila = document.createElement('tr');
        
        const datos = [persona.nombre, persona.apellido, persona.edad, persona.sexo, persona.telefono];
        datos.forEach(dato => {
            const td = document.createElement('td');
            td.textContent = dato;
            fila.appendChild(td);
        });

        tabla.appendChild(fila);
    });

    tablaContainer.appendChild(tabla);
}

crearTabla();
