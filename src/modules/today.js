const loadTodayPage = function () {
    const contentContainer = document.querySelector('.contentContainer');
    const title = document.createElement('h2');
    title.textContent = 'Today';
    contentContainer.appendChild(title);
}

export default loadTodayPage;