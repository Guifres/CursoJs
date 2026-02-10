const numeros = [1, 2, 3, 4, 5, 4, 7, 8, 9, 10, 11 , 53, 55, 98, ]
let grande = 0
let pequeno = 0
let impar = 0
let par = 0
for(numero of numeros) {
    
    if (numero <= 10) {
        console.log(`Numero ${numero} é pequeno`)
        pequeno++
    } if(numero > 10){
        console.log(`Numero ${numero} é grande `)
        grande++
    } if (numero % 2 === 0 ){
        console.log(`${numero} impar`)
        par++
    } else{
        impar++
        
    }

   
} 
console.log(`Total de numeros grandes ${grande}`)
console.log(`Total de numeros pequenos ${pequeno}`)
console.log(par, impar)
 