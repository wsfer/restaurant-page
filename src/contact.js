import image from './margherita-pizza.jpg';

export default function createContactPage (eventTarget) {
    eventTarget.id = 'selectedTab';
    const container = document.getElementById('content');

    //This will reset the container.
    container.removeAttribute('style');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //This will apply styles to the container.
    container.style.backgroundImage = `linear-gradient(135deg, black 40%, rgba(0, 0, 0, 0) 40%), url(${image})`;
    container.style.backgroundSize = 'cover';

    //This will create the content of container.
    const contact = document.createElement('section');
    contact.id = 'contact-container';

    const frag = document.createDocumentFragment();
    const informations = [
        ['Phone: +0-123-456-7890'],
        ['Email: dummyemail@nonexistent.com'],
        ['Localization: 1234 Undefined, St. Nothing']
    ]
    for (let i=0; i<3; i++) {
        const p = document.createElement('p');
        p.textContent = informations[i];
        frag.appendChild(p);
    }
    contact.appendChild(frag);

    container.appendChild(contact);
}