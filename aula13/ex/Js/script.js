const nome = prompt('Digite seu nome')
document.body.innerHTML += `Seu nome é: ${nome} <br/>`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} `
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <br/>`
document.body.innerHTML += `Qual o ultimo indice da letra a no seu nome? <br/>`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome[-3]} <br/>`
document.body.innerHTML += `As palavras do seu nome são: <br/>`
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br/>`
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase()} <br/>`


