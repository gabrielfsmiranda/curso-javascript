/*
function verificar () {
    window.alert('FUNCIONOU!') //só alert tb vai...
}
*/

/*
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Tudo OK!')
    }
}

Primeira validação ok 
Podia ate botar Number(fano.value) na ultima ali...

vou fazer contínuo agora, mas lembra de ir testando cada etapa assim como o prof fez na aula!!!
*/

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-m.png')
                // criança
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            } // agora é só copiar pra parte de mulher tb
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-f.png')
                // criança
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}