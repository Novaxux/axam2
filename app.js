
let arrayeventos=['Perro','gato','pájaro','insecto','casa','mueble','pitufo','persona','niño','abuelito',];
let entrada=0;

enseñar_dom("lista_desordenada",arrayeventos); //enseñar lista inicial

function crear (){

    let entrada= document.getElementById("entrada").value
    arrayeventos.push(entrada);
    enseñar_dom("lista_desordenada",arrayeventos);    

}

console.log(arrayeventos)
function enseñar_dom(elemento,array){
    document.getElementById(elemento).innerHTML="";
     for (let i=0;i<array.length;i++){

        document.getElementById(elemento).innerHTML+=
        `<li>${array[i]}</li>`;
    } 
}

function borrar(){
    arrayeventos.pop();
    enseñar_dom("lista_desordenada",arrayeventos);   
}