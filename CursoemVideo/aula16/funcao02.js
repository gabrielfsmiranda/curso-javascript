/*
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,5))
*/

/*
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2))

Isso da resultado NaN -> Not a Number
Pois considera o outro valor de parâmetro como nulo
Pra resolver isso, só pre-definir os dois valores pra 0 la na função inicial assim abaixo
*/

function soma(n1=0, n2=0) { //assim podemos colocar só um parametro e o outro será 0
    return n1 + n2
}

console.log(soma(2)) //nesse caso, o console mostra '2', pois 2+0=2