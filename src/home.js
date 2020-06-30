const mainPage = () => {
    const mainDiv = document.querySelector("#content"); 
    const mainContent = () => {
        const contentDiv = document.querySelector("#tab-content");
        const mainHeading = document.createElement("h1");
        mainHeading.setAttribute("id", "restaurant-name");
        mainHeading.setAttribute("style", "text-align: center; font-family: Georgia, 'Times New Roman', Times, serif")
        mainHeading.innerHTML = "Welcome to Cactus Restaurant and Grill";
        const descriptionHeading = document.createElement("h2");
        descriptionHeading.setAttribute("id", "description-heading");
        descriptionHeading.setAttribute("style", "text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
        descriptionHeading.innerHTML = "Our world class flavors combined with our system of an unlimited buffet results in a premium dining experience for our guests."
        const foodImage = document.createElement("img");
        foodImage.setAttribute("id", "food");
        foodImage.setAttribute("src", "../images/food.jpg");
        foodImage.setAttribute("style", "width: 600px; height: 337.5px; display: block; margin: 10 auto;");
        const setupImage = document.createElement("img");
        setupImage.setAttribute("id", "setup");
        setupImage.setAttribute("src", "../images/setup.jpg");
        setupImage.setAttribute("style", "width: 600px; height: 337.5px; display: block; margin: auto;");
        contentDiv.appendChild(mainHeading);
        contentDiv.appendChild(descriptionHeading);
        contentDiv.appendChild(foodImage);
        contentDiv.appendChild(setupImage);
    }
    const navBar = () => {
        const navDiv = document.createElement("div");
        navDiv.setAttribute("id", "nav-bar");
        mainDiv.appendChild(navDiv);
    }
    const navContent = () => {
        const navDiv = document.querySelector("#nav-bar");
        const firstTab = document.createElement("div");
        firstTab.classList.add("nav-div");
        firstTab.innerHTML = "Menu";
        navDiv.appendChild(firstTab);
        const secondTab = document.createElement("div");
        secondTab.classList.add("nav-div");
        secondTab.innerHTML = "Visit Us";
        navDiv.appendChild(secondTab);
    }
    const page = () => {
        const content = document.createElement("div");
        content.setAttribute("id", "tab-content");
        mainDiv.appendChild(content);
    }
    navBar();
    navContent();
    page();
    mainContent();
};

export {mainPage};

