function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    /*
    var hora = 10

    Teste quebrou a hora
        -> lembrei da ordem
        -> coloquei a msg das horas pra depois de definir hora manual
        -> resolveu!

    Teste manual OK!
    */
    

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12 && hora >= 5) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#789fca'
        document.getElementById('msg2').innerText = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#9d8549'
        document.getElementById('msg2').innerText = 'Boa tarde!'
    } else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#4a4d50'
        document.getElementById('msg2').innerText = 'Boa noite!'
    }
}