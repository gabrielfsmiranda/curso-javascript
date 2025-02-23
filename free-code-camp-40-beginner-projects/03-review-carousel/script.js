const carousel = document.getElementById("carousel")
const btLeft = document.getElementById("buttonLeft")
const btRight = document.getElementById("buttonRight")
const btSurprise = document.getElementById("buttonSurpriseMe")

const reviews = []

let JS = `
            <img src="images/logo-javascript.jpg" alt="logo do JavaScript">
            <h2>JavaScript</h2>
            <p>Linguagem criada para aumentar interatividade nas páginas da web, porém hoje também é usada no backend através do NodeJS</p>
`
let HTML5 = `
            <img src="images/logo-html.jpg" alt="logo do HTML 5">
            <h2>HTML</h2>
            <p>Linguagem de marcação criada para expor textos e mídias através de páginas na internet</p>
`
let CSS3 = `
            <img src="images/logo-css.jpg" alt="logo do CSS 3">
            <h2>CSS</h2>
            <p>Linguagem criada para complementar o HTML, tornando as páginas da web mais bonitas</p>
`
reviews.push(JS)
reviews.push(HTML5)
reviews.push(CSS3)

currentDisplay = 0

carousel.innerHTML = reviews[currentDisplay]

btLeft.addEventListener("click", left)
btRight.addEventListener("click", right)
btSurprise.addEventListener("click", surprise)

function left() {
    if (currentDisplay > 0){
        currentDisplay--
        carousel.innerHTML = reviews[currentDisplay]
    } else
        currentDisplay += 2
        carousel.innerHTML = reviews[currentDisplay]
}

function right() {
    if (currentDisplay < 2){
        currentDisplay++
        carousel.innerHTML = reviews[currentDisplay]
    } else
        currentDisplay -= 2
        carousel.innerHTML = reviews[currentDisplay]
}

function surprise() {
    currentDisplay = Math.floor(Math.random() * 2.99);
    carousel.innerHTML = reviews[currentDisplay];
}

// function surprise() {
//     currentDisplay = Math.round(Math.random() * 2)
//     carousel.innerHTML = reviews[currentDisplay]
// }

//finish!! Fiz sozinho esse também...

//mudei o math.random() pq ali agora fica mais parelho as chances de cair cada elemento..