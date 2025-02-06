var agora = new Date()
var diaSem = agora.getDay()

/*
testar depois direto pra ver se funciona

Testar assim:
var diaSem = new Date().getDay()
*/

/*
//dia da semana de 0-6 em getDay()

0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado

*/

/*
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO! Dia inválido!')
        break //opcional
}

agora sem o número do começo...
*/

/*
testes manuais pra avaliar todo codigo...só mudar o diaSem manualmente
diaSem = 10
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO! Dia inválido!')
        break
}

/*
Se tirar o brake, ele segue executando código até encontrar um break ou o código terminar..

Ex... diaSem = 5
Resultado sem break nenhum:
Sexta
Sábado
ERRO! Dia inválido!
*/