const relogio = document.querySelector('.relogio');
const inicar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

inicar.addEventListener('click', function(event){
    alert('Cliquei no iniciar');
});

pausar.addEventListener('click', function(event) {
    alert('Cliquei no pausar')
})

zerar.addEventListener('click', function(event){
    alert('Cliquei no zerar')

})