/*
function parimp(n) {
    if (n%2==0) {
        console.log(`O número ${n} é PAR!`)
    } else {
        console.log(`O número ${n} é ÍMPAR!`)
    }
}

parimp(21)

//Desse meu jeito funcionou.. fiz antes do prof, mas vou anotar como ele fez dps tb
*/

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

/*
let res = parimpar(4)
console.log(res)

Primeiro modo..
Abaixo segundo modo q o prof demonstrou
colocou essas duas linhas em uma só
*/

console.log(parimpar(223))