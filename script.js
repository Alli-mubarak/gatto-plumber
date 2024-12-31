const menu = document.querySelector(".menu");
const nav = document.querySelector('nav');

menu.onclick = () =>{
    menu.classList.toggle('active');
    nav.classList.toggle('active');

}
