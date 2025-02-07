let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
console.log(`Este Array possui ${valores.length} elementos`)
console.log(`Ordenando os valores com o .sort()`)
valores.sort()
console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
// console.log(valores[6]) ...esse deu undefined pq não tinha kkk

OU

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*
Testei mudar todos POS pra X e funcionou...então podemos usar qqr termo msm...
*/