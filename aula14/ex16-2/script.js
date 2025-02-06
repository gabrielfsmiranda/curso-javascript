function calcular() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let int = document.getElementById('txtint')
    let res = document.getElementById('res')
    

    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        window.alert('Insira os dados antes de prosseguir!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let n = Number(int.value)
        if (i <= f) {
            window.alert('OK') // continuar daqui..
        } else {
            window.alert('Intervalo inválido! Selecione um intervalo positivo para realizar uma sequência válida de número')
        }
    } 
}


/*
o resto nao ta certo...o else tem q ser o ultimo trem da funçao kkk tipo.. na vdd o } do else tem q englobar td q vem na frente.. se fechar antes de abrir o prox, acaba a função inteira!!
*/