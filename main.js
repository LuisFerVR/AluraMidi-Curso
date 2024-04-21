function pomp () {
    document.querySelector('#sonido_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick=pomp;

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas.forEach(function (tecla) {
    console.log(tecla);
});