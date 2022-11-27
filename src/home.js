import image from './home-image.jpg';

export default function createHomePage (eventTarget) {
    eventTarget.id = 'selectedTab';
    const container = document.getElementById('content');

    //This will reset the container.
    container.removeAttribute('style');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //This will apply styles to the container.
    container.style.backgroundImage = `url(${image})`;
    container.style.backgroundOrigin = 'center';
    container.style.backgroundSize = 'cover';

    //This will create the content of container.
    const descriptor = document.createElement('section');
    descriptor.id = 'home-descriptor';
    const h2 = document.createElement('h2');
    h2.textContent = 'Pizzas';
    descriptor.appendChild(h2);

    const ul = document.createElement('ul');
    const frag = document.createDocumentFragment();
    const information = ['Best Pizzas', 'Cheap Pizzas', 'Fast Delivery']
    for (let inf of information) {
        const li = document.createElement('li');
        li.textContent = inf;
        frag.appendChild(li);
    }
    ul.appendChild(frag);
    descriptor.appendChild(ul);
    container.appendChild(descriptor);
}