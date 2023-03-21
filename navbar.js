const ham = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__ul")



ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    navMenu.classList.toggle("active")
})


document.querySelectorAll(".nav__li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))