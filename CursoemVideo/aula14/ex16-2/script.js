function calcular() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let int = document.getElementById('txtint')
    let res = document.getElementById('res')
    
    res.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        window.alert('Insira os dados antes de prosseguir!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let n = Number(int.value)
        
        if (n <= 0) {
            window.alert('O intervalo selecionado é inválido. Mudando o intervalo para 1...')
            n = 1
        } if (i <= f) {
            for (let c = i; c <= f; c += n) {
                res.innerHTML += `\u{1F449}${c} `
            }
        } else {
            for (let c = i; c >= f; c -= n) {
                res.innerHTML += `\u{1F449}${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}