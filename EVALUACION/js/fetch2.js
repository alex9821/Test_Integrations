const tabla = document.querySelector('#lista-posts tbody');

function cargarpublicacion() {
    fetch('http://jsonplaceholder.typicode.com/users/1/posts')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(publicacion => {
            publicacion.forEach(publi => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${publi.userId}</td>
                    <td>${publi.id}</td>
                    <td>${publi.title}</td>
                    <td>${publi.body}</td>

                    
                `;
                tabla.appendChild(row);

               
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarpublicacion(); 

