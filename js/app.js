const linkMenu = document.querySelectorAll('.menu');

linkMenu.forEach((link) => {
    link.addEventListener('mouseover', () => {
        const menu = link.querySelector('ul');
        menu.style.display = "block"
        const image = link.querySelector('img');
        image.src = "http://127.0.0.1:5500/ressources/icon-arrow-up.svg"
    });

    link.addEventListener('mouseleave', () => {
        const menu = link.querySelector('ul');
        menu.style.display = "none"
        const image = link.querySelector('img');
        image.src = "http://127.0.0.1:5500/ressources/icon-arrow-down.svg"
    });


});

const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
    const image = menuBurger.querySelector('img');
    const navbar = document.querySelector('header ul');
    if(image.src == "http://127.0.0.1:5500/ressources/icon-close-menu.svg"){
        image.src = "http://127.0.0.1:5500/ressources/icon-menu.svg"
        navbar.style.display = "none"
    }else{
        image.src = "http://127.0.0.1:5500/ressources/icon-close-menu.svg"
        navbar.style.display = "block"
    }
})