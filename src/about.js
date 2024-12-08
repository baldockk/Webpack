
function loadAbout() {
    const div = document.getElementById("content");

    //Make a container that will hold all of the about information
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutUs");
    div.appendChild(aboutDiv);

    const motto = document.createElement("h2");
    const aboutPara = document.createElement("p");
    const contact = document.createElement("p");

    motto.classList.add("motto");
    aboutPara.classList.add("about");
    contact.classList.add("contact");

    motto.textContent = "Satiating Hunger Since 2020";
    aboutPara.textContent = "This is some about information to do with us. Our main goal is to feed people the best, cooked by the best. We are located on 5th Avenue of Somewhere in the world. Come through";
    contact.textContent = "Email: example@extra.co.nz; Phone: 07 *** ****";

    aboutDiv.appendChild(motto);
    aboutDiv.appendChild(aboutPara);
    aboutDiv.appendChild(contact);
}

export default loadAbout;