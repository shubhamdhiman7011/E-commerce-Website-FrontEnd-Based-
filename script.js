function myFunction(x) {
    x.classList.toggle("change");
}

const bar = document.getElementById('mobile');
const nav = document.getElementById('navbar');
const close = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}