// Capturar Submit do Formulario
con


function Calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    let Peso = Number(peso)
    let Altura = Number(altura)
    

    let imc = Peso / (Altura * Altura)
    

    resultado.innerHTML = `<p>Seu IMC é ${imc}<p/>`
}