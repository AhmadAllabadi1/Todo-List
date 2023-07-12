const loadWeekPage = function () {
    const contentContainer = document.querySelector('.contentContainer');
    const title = document.createElement('h2');
    title.textContent = 'This Week';
    contentContainer.appendChild(title);
}

export default loadWeekPage;