const nome = 'Guilherme';
const sobrenome = 'Freitas';
const idade = 26;
const peso = 70;
const alturaEmM = 1.70;
let imc = peso / alturaEmM ** 2
console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}kg tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)} `) 
