/*Tentando melhorar o exercício de horas*/

/*
Modelo p usar no final

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
*/

/*Modelo p testar*/

/* Testado e aprovado

var hora = 4
console.log(`Agora são ${hora}h.`)
if (hora < 12 && hora >= 5) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
*/

/*Modelo final*/

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora}h.`)
if (hora < 12 && hora >= 5) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}