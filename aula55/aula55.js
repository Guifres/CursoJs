// IIFE -> Immediately invoked function expression

(function()
{
    const sobreNome = 'Miranda'
    function criaNome(nome) {
        return `${nome} ${sobreNome}`
    }

    function falaNome(){
        console.log(criaNome('Luiz'))
    }

    falaNome();
})();