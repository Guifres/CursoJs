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
