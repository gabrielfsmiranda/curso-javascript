const colors = []

colors.push("red")
colors.push("orange")
colors.push("yellow")
colors.push("green")
colors.push("blue")
colors.push("indigo")
colors.push("violet")

const button = document.getElementById("button")
const background = document.getElementById("div")
const text = document.getElementById("text")

button.addEventListener("click", changeColor)

function changeColor() {
    let x = Math.round(Math.random() * 6)
    //alert(`Cor selecionada foi ${colors[x]}`)
    background.style.backgroundColor = colors[x]
    text.innerHTML = `Cor selecionada aleatoriamente: ${colors[x]}`
    text.style.color = "white"
    text.style.textShadow = "1px 1px 2px black"
}