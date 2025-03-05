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