//creacion del array que almacenara los nombres de los amigos
let = amigos[];

//fucion que agregara los nombres al array 
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
