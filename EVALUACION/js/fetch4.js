const tabla = document.querySelector('#lista-todo tbody');

function cargartodo() {
    fetch('http://jsonplaceholder.typicode.com/users/1/todos')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(todos => {
            todos.forEach(todo => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${todo.userId}</td>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                                   
                `;
                tabla.appendChild(row);

               
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargartodo(); 
