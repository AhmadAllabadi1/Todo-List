import '../styles/sideBar.css'

const loadSideBar = function () {
    const body = document.querySelector('body');

    const headerContainer = document.createElement('div');

    const title = document.createElement('div');
    title.textContent = 'Todo List'
    title.classList.add('main-title');

    const hamBurgerIcon = document.createElement('button');
    hamBurgerIcon.setAttribute('id','hamBurgerIcon');
    hamBurgerIcon.classList.add('fas','fa-bars');


    headerContainer.appendChild(title);
    headerContainer.appendChild(hamBurgerIcon);
    headerContainer.classList.add('headerContainer');
    

    const sideBarContainer = document.createElement('div');
    sideBarContainer.classList.add('sideBarContainer');

    const inboxContainer = document.createElement('button');
    inboxContainer.classList.add('inboxContainer');
    const inboxIcon = document.createElement('i');
    inboxIcon.classList.add('fas', 'fa-inbox');
    inboxIcon.setAttribute('id','inboxIcon')
    inboxContainer.appendChild(inboxIcon);
    const inboxText = document.createElement('div');
    inboxText.classList.add('inboxText');
    inboxText.textContent = 'Inbox';
    inboxContainer.appendChild(inboxText);


    const todayContainer = document.createElement('button');
    todayContainer.classList.add('todayContainer');
    const todayIcon = document.createElement('i');
    todayIcon.classList.add('fas', 'fa-calendar');
    todayIcon.setAttribute('id','todayIcon')
    todayContainer.appendChild(todayIcon);
    const todayText = document.createElement('div');
    todayText.classList.add('todayText');
    todayText.textContent = 'Today';
    todayContainer.appendChild(todayText);

    const weekContainer = document.createElement('button');
    weekContainer.classList.add('weekContainer');
    const weekIcon = document.createElement('i');
    weekIcon.classList.add('fas', 'fa-calendar-alt');
    weekIcon.setAttribute('id','weekIcon')
    weekContainer.appendChild(weekIcon);
    const weekText = document.createElement('div');
    weekText.classList.add('weekText');
    weekText.textContent = 'This Week';
    weekContainer.appendChild(weekText);


    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    navContainer.appendChild(inboxContainer);
    navContainer.appendChild(todayContainer);
    navContainer.appendChild(weekContainer);


    body.appendChild(headerContainer);
    sideBarContainer.appendChild(navContainer);
    body.appendChild(sideBarContainer);

    hamBurgerIcon.addEventListener('click', () => {
        sideBarContainer.classList.toggle('active');    
    })


    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitle');
    projectTitle.textContent = 'Projects';
    projectContainer.appendChild(projectTitle);
    sideBarContainer.appendChild(projectContainer)

    
}

export default loadSideBar;