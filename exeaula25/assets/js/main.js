// Capturar Submit do Formulario
const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault
    console.log('evento previnido')
    setResultado ('Ola Mundo');
    

});

function setResultado (msg) {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = '';

}




function Calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    let Peso = Number(peso)
    let Altura = Number(altura)
    

    let imc = Peso / (Altura * Altura)
    

    resultado.innerHTML = `<p>Seu IMC é ${imc}<p/>`
}