export default function loadPage () {
    const tabsNames = ['Home', 'Menu', 'Contact'];
    //Create header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';
    header.appendChild(h1);
    const ul = document.createElement('ul');
    for (let name of tabsNames) {
        const li = document.createElement('li');
        li.textContent = name;
        li.classList.add(name.toLowerCase());
        ul.appendChild(li);
    }
    header.appendChild(ul);
    document.body.appendChild(header);
    //Create main content container element
    const main = document.createElement('main');
    main.id = 'content';
    document.body.appendChild(main);
    //Create footer
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'A project idea from ';
    const anchor = document.createElement('a');
    anchor.href = 'https://www.theodinproject.com';
    anchor.textContent = 'The Odin Project';
    p.appendChild(anchor);
    footer.appendChild(p);
    document.body.appendChild(footer);
}