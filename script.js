


function sortear() {

const minimo = Math.ceil(document.querySelector(".input-minimo").value)
const maximo = Math.floor(document.querySelector(".input-maximo").value)


if(minimo<maximo){

    let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    alert(numeroAleatorio)
}
    else {
 alert("numero minimo maior ou igual que o numero máximo, favor corrigir")
}
}


