import '../styles/sideBar.css'

const loadSideBar = function () {
    const body = document.querySelector('body');

    const headerContainer = document.createElement('div');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
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
    inboxContainer.classList.add('inboxContainer','activePage');
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

    const addProjectContainer = document.createElement('button');
    addProjectContainer.classList.add('addProjectContainer');
    const addProjectIcon = document.createElement('i');
    addProjectIcon.classList.add('fas','fa-plus')
    addProjectIcon.setAttribute('id','addProjectIcon');
    addProjectContainer.appendChild(addProjectIcon);
    const addProjectText = document.createElement('div');
    addProjectText.textContent = 'Add Project';
    addProjectText.classList.add('addProjectText');
    addProjectContainer.appendChild(addProjectText);
    projectContainer.appendChild(addProjectContainer);

    const form = document.createElement('form');
    form.id = 'projectNameForm';
    form.classList.add('notActive');
    const input = document.createElement('input');
    input.id = 'projectNameForm';
    input.type = 'text';
    form.appendChild(input);
    const submitFormButtonContainer = document.createElement('div');
    submitFormButtonContainer.classList.add('submitFormButtonContainer','notActive');
    const submitProjectNameButton = document.createElement('button');
    submitProjectNameButton.classList.add('submitProjectNameButton');
    submitProjectNameButton.textContent = 'Add';
    const cancelProjectNameButton = document.createElement('button');
    cancelProjectNameButton.textContent = 'Cancel';
    cancelProjectNameButton.type = 'Button';
    cancelProjectNameButton.classList.add('cancelProjectNameButton');
    submitFormButtonContainer.appendChild(submitProjectNameButton);
    submitFormButtonContainer.appendChild(cancelProjectNameButton);
    projectContainer.appendChild(form);
    projectContainer.appendChild(submitFormButtonContainer);

    sideBarContainer.appendChild(projectContainer)


    inboxContainer.addEventListener("click", () => {
        inboxContainer.classList.add("activePage")
        todayContainer.classList.remove("activePage");
        weekContainer.classList.remove("activePage");
    })
    

    todayContainer.addEventListener("click", () => {
        todayContainer.classList.add("activePage")
        inboxContainer.classList.remove("activePage");
        weekContainer.classList.remove("activePage");
    })

    weekContainer.addEventListener("click", () => {
        weekContainer.classList.add("activePage")
        todayContainer.classList.remove("activePage");
        inboxContainer.classList.remove("activePage");
    })

    body.appendChild(contentContainer);
    contentContainer.appendChild(sideBarContainer);


    addProjectContainer.addEventListener("click", () => {
        console.log('h')
        addProjectContainer.classList.toggle('notActive');
        form.classList.toggle('notActive');
        submitFormButtonContainer.classList.toggle('notActive');
    })


    form.addEventListener("click", function (event) {
        if (input.value.length < 1) {
            event.preventDefault();
        }
    })

    cancelProjectNameButton.addEventListener('click', () => {
        form.classList.toggle('notActive');
        submitFormButtonContainer.classList.toggle('notActive');
        addProjectContainer.classList.toggle('notActive')
    })
}

export default loadSideBar;