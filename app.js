let numeroSecreto = 0;
console.log(numeroSecreto);
let listaNumerosSorteados = [];
let intentos = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos=== 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario< numeroSecreto){
            asignarTextoElemento ('p','numero secreto es mayor');
        } else{
            asignarTextoElemento ('p','numero secreto menor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    // si el nro generado esta incluido en la lista
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'ya se sortearon todos los numeros');

    }else{

    
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
     }
    
}
function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del numero secreto');
    asignarTextoElemento ('p', 'ingrese el nro del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');



    
}


condicionesIniciales();