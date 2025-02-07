function calcular() {
    let num = document.getElementById('inum')
    let mult = 1
    let n = Number(num.value)
    let tab = document.getElementById('itab')
    tab.innerHTML = ''

    while (mult <= 10) {
        let res = document.createElement('option')
        res.text = `${n} x ${mult} = ${n * mult}`
    //    res.value = `opt${mult}` opcional p php
        tab.appendChild(res)
        mult ++
    }

}