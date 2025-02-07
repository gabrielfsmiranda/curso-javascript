let num = [5, 8, 2, 9, 3]

// console.log(`Nosso vetor é o ${num}`)

console.log(`Array inicial:`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Agora o num[2] é esse:`)
console.log(num[2])
console.log(`Acrescentando '1' no final`)
num.push(1)
console.log(`Agora o vetor tem ${num.length} posições`)
console.log(num)
num.sort()
console.log(`Após ordenar, fica assim:`)
console.log(num)
console.log(`Agora o num[2] é esse:`)
console.log(num[2])

let busca = 10
let pos = num.indexOf(busca)

if (pos == -1) {
    console.log(`Buscando o valor ${busca}`)
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`Buscando o valor ${busca}`)
    console.log(`O valor ${busca} está na posição ${pos}`)
}