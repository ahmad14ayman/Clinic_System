let PassContainer = document.querySelector(".PassContainer");
let docPass = document.querySelector(".docPass");
let Pass = document.querySelector(".Pass").value;;
let content = document.querySelector(".content-text");
let button = document.querySelector(".passButton");

button.onclick = function () {
    if (docPass.value === Pass) {
        content.classList.remove("d-none");
        PassContainer.classList.add("d-none")
    }
}
document.body.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (docPass.value === Pass) {
            content.classList.remove("d-none");
            PassContainer.classList.add("d-none")
        }
    }
})