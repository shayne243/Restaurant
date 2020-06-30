const visitContent = () => {
    const tabContent = document.querySelector("#tab-content");
    const visitHeading = document.createElement("h1");
    visitHeading.setAttribute("style", "text-align: center; font-family: Georgia, 'Times New Roman', Times, serif");
    visitHeading.innerHTML = "You can visit us at the following locations:"
    tabContent.appendChild(visitHeading);
    const visitDesc = document.createElement("ul");
    visitDesc.setAttribute("style", "list-style-type: none; text-align: center; font-family: Georgia, 'Times New Roman', Times, serif");
    const dubaiLoc = document.createElement("li");
    dubaiLoc.innerHTML = "Downtown Dubai, Dubai. Next to Crowne Plaza Hotel";
    const sharjahLoc = document.createElement("li");
    sharjahLoc.innerHTML = "King Faisal Street, Sharjah. Opposite City Centre";
    visitDesc.appendChild(dubaiLoc);
    visitDesc.appendChild(sharjahLoc);
    tabContent.appendChild(visitDesc);
    const phoneHeading = document.createElement("h2");
    phoneHeading.setAttribute("style", "text-align: center; font-family: Georgia, 'Times New Roman', Times, serif");
    phoneHeading.innerHTML = "You can also contact us at +971506549873210 <br> to make bookings and reservations";
    const resImage = document.createElement("img");
    resImage.setAttribute("id", "reservation");
    resImage.setAttribute("src", "../images/reserve.jpg");
    resImage.setAttribute("style", "margin: auto; display: block");
    tabContent.appendChild(resImage);
    tabContent.appendChild(phoneHeading);
}
export {visitContent};