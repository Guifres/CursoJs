const h1 = document.querySelector('.contenier h1');const data = new Date();
const DiaDoMes = data.getUTCDate()
const AnoAtual = data.getFullYear()
const HoraAtual = data.getHours()
const Minutos = data.getMinutes()
function criarMes() {
    let mes = data.getMonth()
    switch (mes) {
        case 0:
            mes = 'Janeiro'
            return mes
        case 1:
            mes = 'Fevereiro'
            return mes
        case 2:
            mes = 'Março'
            return mes
        case 3:
            mes = 'Abril'
            return mes
        case 4:
            mes = 'Maio'
            return mes
        case 5:
            mes = 'Junho'
            return mes
        case 6:
            mes = 'Julho'
            return mes
        case 7:
            mes = 'Agosto'
            return mes
        case 8:
            mes = 'Setembro'
            return mes
        case 9:
            mes = 'Outubro'
            return mes
        case 10:
            mes = 'Novembro'
            return mes
        case 11:
            mes = 'Dezembro'
            return mes
        
    }
}

function dia() {
    let diaSemana = data.getDay()
    switch (diaSemana){
        
        case 0:
            diaSemana = 'Domingo'
            return diaSemana
        case 1:
            diaSemana = 'Segunda-Feira'
            return diaSemana
        case 2:
            diaSemana = 'Terça-Feira'
            return diaSemana
        case 3:
            diaSemana = 'Quarta-Feira'
            return diaSemana
        case 4:
            diaSemana = 'Quinta-Feira'
            return diaSemana
        case 5:
            diaSemana = 'Sexta-Feira'
            return diaSemana
        case 6:
            diaSemana = 'Sabado'
            return diaSemana
        
        

    }
    
    
    


}

h1.innerHTML =  `${dia()}, ${DiaDoMes} de ${criarMes()} de ${AnoAtual} ${HoraAtual}:${Minutos}`