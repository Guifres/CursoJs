const numero = Number(prompt('Digite um numero:'));
const numemoTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numemoTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz Quadrada:${numero ** 0.5}<p/>
<p>${numero} é inteiro: ${Number.isInteger(numero)}<p/>
<p>É NaN: ${Number.isNaN(numero)}<p>
<p>Arredondando para baixo: ${Math.floor(numero)}<p/>
<p>Arredondando para cima: ${Math.ceil(numero)}<p/>
<p>Com duas casas decimais: ${numero.toFixed(2)}<p/>`;