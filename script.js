

function sortear() {

    const minimo = Math.ceil(document.querySelector(".input-minimo").value)
    const maximo = Math.floor(document.querySelector(".input-maximo").value)

    let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
                       
   alert (numeroAleatorio)

}




