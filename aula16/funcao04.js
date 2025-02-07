//Fatorial

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

//5! = 5 x 4 x 3 x 2 x 1 = 120

console.log(fatorial(4))


/*

Exemplo do q entendi pelo calculo da função acima
n = 5
let fat = 1

função.. (c = n...)
fat *= c
1 *= 5
5 *= 4
20 *= 3
60 *= 2
fat = 120


Ele pega as duas pontas do fatorial pra calular e aí vai multiplicando o resultado de maneira decrescente.. é só o comecinho diferente do jeito q eu faria no papel, mas no fim da no msm, pq multiplicação não importa a ordem dos fatores heehehe entendi finalmente kkkkk

*/