const input = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

const inputs = Array.from(input).concat(Array.from(textarea));

const enviar = document.getElementsByClassName("enviar")[0];

const obrigatorio = document.querySelectorAll(".obrigatorio");

enviar.addEventListener("click", function () {
    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            input.classList.remove("preenchido");
            input.classList.add("vazio");
            obrigatorio[index].classList.add("visivel");
        } else {
            input.classList.remove("vazio");
            input.classList.add("preenchido");
            obrigatorio[index].classList.remove("visivel");
        }
    });

});