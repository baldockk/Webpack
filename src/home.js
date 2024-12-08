import homeImg from './home.jpg';

function loadHome() {
    console.log("home loaded");

    //Get the div where the content will be loaded
    const div = document.getElementById("content");

    //Create the elements
    const header = document.createElement("h1");
    const imgAddress = document.createElement("a");
    const img = document.createElement("img");
    const para = document.createElement("p");

    //Append values to the elements
    header.textContent = "Food For You";
    header.classList.add("homeHeader");

    //Image handling to link still using the DOM.
    imgAddress.href = "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    imgAddress.target = "_blank";

    //Use the imported image
    img.src = homeImg;
    img.alt = "spices";
    img.style = "width:300px; height:400px";
    img.classList.add("homeImg");

    para.textContent = "Don't know what to have for dinner? Well we have everything your heart could desire!";
    para.classList.add("homePara");

    //Append the elements to the div parent
    div.appendChild(header);
    div.appendChild(imgAddress);
    //Append the image to the address
    imgAddress.appendChild(img);
    div.appendChild(para);
}

export default loadHome;