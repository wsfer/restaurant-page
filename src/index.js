import './style.css';
import loadPage from './load.js';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

loadPage();

document.querySelector('.home').addEventListener('click', (e) => {
    if (e.target !== document.getElementById('selectedTab')) {
        document.getElementById('selectedTab').removeAttribute('id');
        createHomePage(e.target);
    }
});
document.querySelector('.menu').addEventListener('click', (e) => {
    if (e.target !== document.getElementById('selectedTab')) {
        document.getElementById('selectedTab').removeAttribute('id');
        createMenuPage(e.target);
    }
});
document.querySelector('.contact').addEventListener('click', (e) => {
    if (e.target !== document.getElementById('selectedTab')) {
        document.getElementById('selectedTab').removeAttribute('id');
        createContactPage(e.target);
    }
});

createHomePage(document.querySelector('.home')); 