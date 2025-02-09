let valores = []
let res = document.querySelector('div#res')
let newnum = document.querySelector('input#newnumtxt')
let check = document.querySelector('select#numcheck')

function Adicionar() {
    let num = Number(newnum.value)
    if (num > 100 || num < 1) {
        alert('Número fora do intervalo')
    } else if (valores.includes(num)) {
        alert('Esse número já está na lista')
    } else if (num >= 1 && num <= 100 && !valores.includes(num)) {
        valores.push(num)
        let checked = document.createElement('option')
        checked.text = `Número ${num} adicionado`
        check.appendChild(checked)
        valores.sort()
    }
}

function Finalizar () {
    let soma = 0
    for (let i = 0; i < valores.length; i++){
        soma += valores[i]
    }

    res.innerHTML = `<p>Números selecionados: ${valores}`
    valores.sort((a, b) => a - b)
    res.innerHTML += `<p>Organizados em ordem crescente: ${valores}`
    res.innerHTML += `<p>Soma dos números selecionados: ${soma}`
    res.innerHTML += `<p>Média dos números selecionados: ${soma / valores.length}`
}

function Resetar () {
    valores = []
    res.innerHTML = ''
    check.innerHTML = ''
}