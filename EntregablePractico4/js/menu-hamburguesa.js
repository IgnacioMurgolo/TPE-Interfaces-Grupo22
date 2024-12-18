"use strict";

const menuBurger = document.querySelector('.menu-hamburguesa');
const itemsMenu = document.querySelector('.container-header .items-menu');

menuBurger.addEventListener('click', e => {       
    menuBurger.classList.toggle('active');
    itemsMenu.classList.toggle('open');  
    if(itemsMenu.classList.contains('open')){
        itemsMenu.style.transform = 'translateX(100px)';
        itemsMenu.style.transition = 'transform 1s ease-out';
    }
    else {
        itemsMenu.style.transform = 'translateX(-100px)';
        itemsMenu.style.transition = 'transform 1s ease-out'; 
    }
        
});
