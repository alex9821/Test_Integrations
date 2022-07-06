const tabla = document.querySelector('#lista-coment tbody');

function cargarcomentario() {
    fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(comentarios => {
            comentarios.forEach(coment => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${coment.postId}</td>
                    <td>${coment.id}</td>
                    <td>${coment.name}</td>
                    <td>${coment.email}</td>
                    <td>${coment.body}</td>

                    
                `;
                tabla.appendChild(row);

               
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarcomentario(); 
