const menuContent = () => {
    const tabContent = document.querySelector("#tab-content");
    const menuHeading = document.createElement("h1");
    menuHeading.setAttribute("style", "text-align: center; font-family: Georgia, 'Times New Roman', Times, serif");
    menuHeading.innerHTML = "Enjoy our selection of grilled appetizers, international cuisine, hand-made breads and heavenly deserts";
    const menuImage = document.createElement("img");
    menuImage.setAttribute("id", "menu-image");
    menuImage.setAttribute("alt", "menu");
    menuImage.setAttribute("style", "margin: auto; display: block");
    menuImage.setAttribute("src", "../images/menu.jpg");
    tabContent.appendChild(menuHeading);
    tabContent.appendChild(menuImage);
}
export {menuContent};