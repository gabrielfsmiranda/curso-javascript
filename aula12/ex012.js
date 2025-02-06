/*
var hora = 8
console.log(`Agora são ${hora}h.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}

aqui ficaria bugado a partir de 1h da manhã, onde diria bom dia kkkkk

se prof nao acertar isso, eu tento criar um com essa condição
*/


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

/*
var agora = new Date()
    pega horario do sistema
        rodando no pc, hora do pc
        rodando no servidor, hora do servidor
var hora = agora.getHours()
    usa horario do sistema em horas..tb tem getYear etc etc...
*/