// Declaração de função (Function hoisting)
function falaoi() {
    console.log('Oie')
}

// First-class objects (Objetos de primeira classe)
// Function expression

const SouUmDado = function() {
    console.log('Sou um dado. ')
};

SouUmDado();

// Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando')
    }
};

obj.falar()