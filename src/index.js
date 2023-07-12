import loadSideBar from "./modules/sideBar";
import loadInboxPage from "./modules/inbox";
import loadTodayPage from "./modules/today";
import loadWeekPage from "./modules/thisWeek";

loadSideBar();
loadInboxPage();

const inboxButton = document.querySelector('.inboxContainer');
const todayButton = document.querySelector('.todayContainer');
const weekButton = document.querySelector('.weekContainer');

function clear () {
    const sideBarContainer = document.querySelector('.sideBarContainer');
    let sibling = sideBarContainer.nextElementSibling;
    while (sibling) {
        const nextSibling = sibling.nextElementSibling;
        sibling.remove();
        sibling = nextSibling;
    }
}

inboxButton.addEventListener("click", () => {
    clear();
    loadInboxPage();
})

todayButton.addEventListener("click", () => {
    clear();
    loadTodayPage();
})

weekButton.addEventListener("click",() => {
    clear();
    loadWeekPage();
})