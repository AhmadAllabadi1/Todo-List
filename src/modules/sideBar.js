import { addProject, getProjects } from "./projectManager";

const controlSideBar = function () {

    const updateProjectSection = function () {
        const projectTitle = document.querySelector('#sideBarProjectTitle');
        const projects = getProjects();
        const addProjectButton = document.querySelector('#addProjectButton');
        let sibling = projectTitle.nextSibling;
        while(sibling!=addProjectButton){
            const nextSibling =sibling.nextSibling;
            sibling.parentNode.removeChild(sibling);
            sibling = nextSibling;
        }
        for (let i = projects.length - 1 ; i >= 0; i--) {
            let projectElement = document.createElement('div');
            projectElement.classList.add('projectSideBar', 'active')
            projectElement.innerHTML = `<i class='far fa-circle bullet'></i>${projects[i].name}</div>`
            projectTitle.insertAdjacentElement('afterend',projectElement);
        }
    }

    const submitForm = document.querySelector('#addProjectForm');
    const addProjectButton = document.querySelector('#addProjectButton');
    addProjectButton.addEventListener('click', () => {
        submitForm.classList.toggle('active')
        addProjectButton.classList.toggle('active')
    })

    const submitProjectName = document.querySelector('#submitAddProject');
    submitProjectName.addEventListener('click', function(event){
        event.preventDefault();
        const form = document.querySelector('#addProjectForm');
        const projectName = document.querySelector('#projectNameForm').value;
        addProjectButton.classList.toggle('active');
        submitForm.classList.toggle('active');
        addProject(projectName);
        updateProjectSection();
        form.reset();
    })

    const cancelAddProject = document.querySelector("#cancelAddProject");
    cancelAddProject.addEventListener("click", (event)=>{
        event.preventDefault();
        const form = document.querySelector("#addProjectForm");
        const addProjectButton = document.querySelector('#addProjectButton');
        addProjectButton.classList.toggle("active");
        form.classList.toggle('active');
    })

    const toggleMenuButton = document.querySelector("#toggleButton");
    toggleMenuButton.addEventListener('click',()=>{
        const sideBar = document.querySelector('#sideBar');
        sideBar.classList.toggle("activeMedia");
    })
}

export default controlSideBar;