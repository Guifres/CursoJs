// Factory function 
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
          return `${this.nome} ${this.sobrenome}`  
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },


        fala: function(assunto){
            return `${this.nome} esta ${assunto}`
        },


        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 75);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)

