const increaseButton = document.querySelector("#increase")
const decreaseButton = document.querySelector("#decrease")
const resetButton = document.querySelector("#reset")

increaseButton.addEventListener("click", increaseCounter)
decreaseButton.addEventListener("click", decreaseCounter)
resetButton.addEventListener("click", resetCounter)


const counter = document.querySelector("#counter")
counter.innerHTML = 0

function increaseCounter() {
    let res = Number(counter.innerHTML)
    res ++
    counter.innerHTML = res
}

function decreaseCounter() {
    let res = Number(counter.innerHTML)
    res --
    counter.innerHTML = res
}

function resetCounter() {
    counter.innerHTML = 0
}