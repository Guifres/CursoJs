function Calcular(){
    let peso = document.getElementById('peso').valeu
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    let Peso = Number(peso)
    let Altura = Number(altura)
    

    let imc = Peso / (Altura * Altura)
    

    resultado.innerHTML = `<p>Seu peso e Altura ${Peso}<p/>`
}