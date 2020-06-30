const mainPage = () => {
    const mainDiv = document.querySelector("#content"); 
    let mainHeading = document.createElement("h1");
    mainHeading.setAttribute("id", "restaurant-name");
    mainHeading.setAttribute("style", "text-align: center; font-family: Georgia, 'Times New Roman', Times, serif")
    mainHeading.innerHTML = "Welcome to Cactus Restaurant and Grill";
    let descriptionHeading = document.createElement("h2");
    descriptionHeading.setAttribute("id", "description-heading");
    descriptionHeading.setAttribute("style", "text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    descriptionHeading.innerHTML = "Our world class flavors combined with our system of an unlimited buffet results in a premium dining experience for our guests."
    let foodImage = document.createElement("img");
    foodImage.setAttribute("id", "food");
    foodImage.setAttribute("src", "../images/food.jpg");
    foodImage.setAttribute("style", "width: 600px; height: 337.5px; display: block; margin: 10 auto;");
    let setupImage = document.createElement("img");
    setupImage.setAttribute("id", "setup");
    setupImage.setAttribute("src", "../images/setup.jpg");
    setupImage.setAttribute("style", "width: 600px; height: 337.5px; display: block; margin: auto;");
    mainDiv.appendChild(mainHeading);
    mainDiv.appendChild(descriptionHeading);
    mainDiv.appendChild(foodImage);
    mainDiv.appendChild(setupImage);
};

export {mainPage};

