const hamburger = document.querySelector(`.hamburger`);
const navLinks = document.querySelector(`.nav-links`);
const link = document.querySelectorAll(`.nav links li`);
// const lines = document.querySelectorAll(`.hamburger div`);
const lines = document.querySelectorAll(`.lines`);

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle(`open`);
    lines.forEach(line => {
        line.classList.toggle(`active`);
        console.log('Toggle ACTIVATED');
    })
})
