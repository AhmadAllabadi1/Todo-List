class Project {
    constructor(name,tasks = []){
        this.name = name;
        this.tasks = tasks;
    }
}

const projects = []

export function addProject(projectName) {
    const project = new Project(projectName);
    projects.push(project)
}

export function getProjects() {
    return projects;
}