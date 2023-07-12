import loadSideBar from "./modules/sideBar";
loadSideBar();

const inboxButton = document.querySelector('.inboxContainer');
const todayButton = document.querySelector('.todayContainer');
const weekButton = document.querySelector('.weekContainer');

inboxButton.addEventListener("click", () => {
    console.log('Hello World');
})