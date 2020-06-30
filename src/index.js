import {mainPage, mainContent} from "./home.js"
import {menuContent} from "./menu.js"
import {visitContent} from "./visit.js"
mainPage();
mainContent();
const tabContent = document.querySelector("#tab-content");
function resetPage() {
    tabContent.innerHTML = "";
}
function setEventListeners() {
    const inputList = document.querySelectorAll(".nav-div");
    inputList[0].addEventListener("click", () => {
        resetPage();
        mainContent();
    });
    inputList[1].addEventListener("click", () => {
        resetPage();
        menuContent();
    });
    inputList[2].addEventListener("click", () => {
        resetPage();
        visitContent();
    })
}
setEventListeners();