var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);

function active() {
    if (input.type === "password") {
        input.type = "text";
        show.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
    else {
        input.type = "password";
        show.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
}