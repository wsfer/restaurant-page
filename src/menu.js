import image from './menu-image.jpg';
import data from './menu.json';
import img1 from './margherita-pizza.jpg';
import img2 from './shrimp-pizza.jpg';
import img3 from './pepperoni-pizza.jpg';
import img4 from './chicken-pizza.jpeg';

const flavorsImages = [img1, img2, img3, img4];

export default function createMenuPage (eventTarget) {
    eventTarget.id = 'selectedTab';
    const container = document.getElementById('content');

    //This will reset the container.
    container.removeAttribute('style');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //This will apply styles to the container.
    container.style.backgroundImage = `url(${image})`;
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = 'right';
    container.style.backgroundSize = '50%';
    container.style.backgroundColor = 'beige';

    //This will create the menu list
    const menu = document.createElement('section');
    menu.id = 'menu-container';

    //All data is stored on menu.json.
    const frag = document.createDocumentFragment();
    for (let i=0; i< data.name.length; i++) {
        const section = document.createElement('section');
        section.classList.add('flavor');
        const img = document.createElement('img');
        img.src = flavorsImages[i];
        section.appendChild(img);
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = data.name[i];
        div.appendChild(h3);
        const p = document.createElement('p');
        p.textContent = data.price[i];
        p.style.color = 'goldenrod';
        p.style.fontWeight = 'bold';
        p.style.fontSize = '1.5rem';
        div.appendChild(p);
        section.appendChild(div);
        frag.appendChild(section);
    }
    menu.appendChild(frag);
    container.appendChild(menu);
}