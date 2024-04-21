function reproducirSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
let listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

while(contador < 9){
    listaDeTeclas[contador].onclick = function(){
        reproducirSonido('#idElemento');
    };
    contador += 1;
}