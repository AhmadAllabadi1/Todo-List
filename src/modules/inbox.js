const loadInboxPage = function () {
    const contentContainer = document.querySelector('.contentContainer');
    const title = document.createElement('h2');
    title.textContent = 'Inbox';
    contentContainer.appendChild(title);
}

export default loadInboxPage;