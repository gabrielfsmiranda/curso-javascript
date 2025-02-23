const menuButton = document.querySelector("#menuButton")
const menu = document.querySelector("#navbar")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
})