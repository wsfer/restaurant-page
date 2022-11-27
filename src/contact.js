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
    container.style.backgroundImage = `linear-gradient(135deg, black 50%, rgba(0, 0, 0, 0) 50%), url(${image})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundOrigin = 'right';
    //This will create the content of container.
    const contact = document.createElement('section');
    contact.id = 'contact-container';

    const frag = document.createDocumentFragment();
    const informations = [
        [['✨ Phone:'], ['   +0-123-456-7890']],
        [['✨ Email:'], ['   dummyemail@nonexistent.com']],
        [['✨ Localization:'], ['   1234 Undefined, St. Nothing']]
    ]
    for (let i=0; i<3; i++) {
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const content = document.createElement('p');
        title.textContent = informations[i][0]
        content.textContent = informations[i][1];
        div.appendChild(title);
        div.appendChild(content);
        frag.appendChild(div);
    }
    contact.appendChild(frag);
    container.appendChild(contact);
}