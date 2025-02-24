/*
var idade = 18

if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto facultativo')
    } else {
        console.log('Voto obrigatório')
    }
}

abaixo ta sem a parte >=16, já que todos que chegam naquela parte do cálculo já satisfazem essa condição
*/

/*
var idade = 17

if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('Voto facultativo')
    } else {
        console.log('Voto obrigatório')
    }
}

Simplificando mais ainda, da pra colocar else if direto como está abaixo
*/

/*
var idade = 18

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
        console.log('Voto facultativo')
} else if (idade >= 18) {
        console.log('Voto obrigatório')
    }

ou só else no final...
*/

/*
var idade = 17

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
        console.log('Voto facultativo')
} else {
        console.log('Voto obrigatório')
}

agora adicionando a parte do facultativo acima de 65...fui pesquisar e é a partir dos 70 agora, entao...
*/

var idade = 70

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 70) {
        console.log('Voto facultativo')
} else {
        console.log('Voto obrigatório')
}