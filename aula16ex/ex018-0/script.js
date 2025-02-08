/*
Primeira tentativa: sozinho

Fiz quase tudo. Só empaquei na soma e na média.

*/

let valores = []

function Adicionar() {
    let monitor = document.getElementById('monitor')

    let n = Number(document.getElementById('numadd').value)
    
    if (n < 1 || n > 100){
        alert('O número inserido tem que ser de 1 a 100')
    } else {
        valores.push(n)
        valores.sort()
        let check = document.createElement('option')
        check.text = `Número ${n} adicionado`
        monitor.innerHTML += ''
        monitor.appendChild(check)
    }

}






function Finalizar() {
    
    monitor.innerHTML = ''
    let ultimo = valores.length
    
    if (ultimo <= 0) {
        alert('Adicione ao menos um número antes de finalizar')
    } else if (ultimo >= 1) {


    let res = document.getElementById('resultado')
    
    res.innerHTML = 
        `
        <p>Ao todo, temos ${ultimo} número cadastrados.
        <p>Números adicionados: ${valores}
        <p>O maior valor informado foi ${valores[valores.length - 1]}
        <p>O menor valor informado foi ${valores[0]}
        <p>Somando todos os valores, temos ... 
        <p>A média dos valores digitados é ... 
        
        `

    }
}
