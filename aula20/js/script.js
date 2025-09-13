function meuEscopo() {
    const form = document.querySelector('.form');
    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobreNome.value,
            peso: peso.value,
            altura: altura.value

        });

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm)



}

meuEscopo();