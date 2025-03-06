/*

//creacion del array que almacenara los nombres de los amigos
let = amigos[];

//funcion que agregara los nombres al array 
function agregarAmigos(){
    const input=document.getElementById("amigo"); //se obtiene el elemento de DOM mediante el id "amigo"
    const nombre = input.value.trim(); //se obtiene la informacion del campo de entrada y se quitan los espacios en blanco al inicio y al final

//verificamos la condición para entradas vacías o con solo espacios.
    if (nombre){ 
        amigos.push(nombre);
        actualizarLista();
        input.value="";
    }
}

//accedemos al DOM y obtenemos el nodo de id 'listaAmigos'
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  //aqui vaciamos el contenido actual dentro de `lista`
//creacion de la funcion que nos permite iterar el array de amigos y añadir lis nuevos elementos en 'li'
    amigos.forEach((amigo, index) => {  //
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//creacion de la funcion que sorteara amigos 
function sortearAmigo() {
    if (amigos.length === 0) {  //verificamos si esta vacio el array 
        alert("ingresa al menos a 2 amigos para sortear");  //definimos el mensaje del alert en caso de estar vacio
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);  //generamos el numero aleatorio
    const amigoSorteado = amigos[indiceAleatorio];  //seleccionamos el amigos aleatorio 

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;  //agregamos el resultado a una lista no ordenada
}

*/


//codigo escrito con ayuda del modelos de IA phi4

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        // Agregar texto del amigo con su número
        li.textContent = `${index + 1}. ${amigo}`;

        // Crear un botón para eliminar el amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn-eliminar'); // Añade una clase específica al boton para poder editarlo mediante css
        botonEliminar.onclick = () => eliminarAmigo(index);

        // Añadir el botón al elemento de lista
        li.appendChild(botonEliminar);

        lista.appendChild(li);
    });
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1); // Eliminar el amigo en la posición dada
    actualizarLista(); // Actualizar la lista después de la eliminación
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Ingresar al menos a 2 amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    // Actualizar la lista de amigos para reflejar el cambio
    actualizarLista();
}