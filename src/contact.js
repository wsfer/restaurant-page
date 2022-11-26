export default function createContactPage (eventTarget) {
    eventTarget.id = 'selectedTab';
    const container = document.getElementById('content');

    //This will reset the container.
    container.removeAttribute('style');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}