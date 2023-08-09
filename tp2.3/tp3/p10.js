const tabla = document.getElementById('tabla');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const fila = document.createElement('tr');

            const nombreTd = document.createElement('td');
            nombreTd.textContent = user.name;
            fila.appendChild(nombreTd);

            const apellidoTd = document.createElement('td');
            apellidoTd.textContent = user.username;
            fila.appendChild(apellidoTd);

            const emailTd = document.createElement('td');
            emailTd.textContent = user.email;
            fila.appendChild(emailTd);

            const nombreEmpresaTd = document.createElement('td');
            nombreEmpresaTd.textContent = user.company.name;
            fila.appendChild(nombreEmpresaTd);

            const direccionTd = document.createElement('td');
            direccionTd.textContent = user.address.street + ', ' + user.address.city;
            fila.appendChild(direccionTd);

            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
