function reproducirSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

/* while(contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        reproducirSonido(idAudio);
    };
    
    contador += 1;
} */

for(contador;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        reproducirSonido(idAudio);
    };
    tecla.onkeydown=function(evento){
        if(evento.code==='Space' || evento.code==='Enter' ){
            tecla.classList.add('activa');
            reproducirSonido(idAudio);
        }
    };
    tecla.onkeyup=function(){
        tecla.classList.remove('activa');
    };

}