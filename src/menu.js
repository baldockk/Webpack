import alfredoImg from './alfredo.jpg';
import steakImg from './steak.jpg';
import porkImg from './porkchop.jpg';

function loadMenu() {
    const div = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Menu: Eat Your Heart Out!";
    div.appendChild(header);

    //Make divs that will hold three things: Name; Cost; Description; Image
    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("menuItem");
    div.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menuItem");
    div.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menuItem");
    div.appendChild(menuItem3);

    /*Menu Item One*/
    const alfredo = document.createElement("h2");
    alfredo.classList.add("dish");
    alfredo.textContent = "Chicken Alfredo";
    menuItem1.appendChild(alfredo);

    const priceOne = document.createElement("h3");
    priceOne.classList.add("price");
    priceOne.textContent = "$10";
    menuItem1.appendChild(priceOne);

    const alfredoDesc = document.createElement("p");
    alfredoDesc.classList.add("description");
    alfredoDesc.textContent = "Tasty Chicken Alfredo, cooked to perfection using a variety of spices. Dig into this classic Italian dish, you will savour every bite!";
    menuItem1.appendChild(alfredoDesc);

    //Image Handling
    const alfredoSrc = document.createElement("a");
    alfredoSrc.href = "https://unsplash.com/photos/a-plate-of-food-on-a-wooden-table-Jrvcg9My0B4";
    alfredoSrc.target = "_blank";
    alfredoSrc.classList.add("image");
    menuItem1.appendChild(alfredoSrc);

    const alfredoImage = document.createElement("img");
    alfredoImage.src = alfredoImg;
    alfredoImage.classList.add("menuDishImage");
    alfredoSrc.appendChild(alfredoImage);

    /*Menu Item Two*/
    const steak = document.createElement("h2");
    steak.classList.add("dish");
    steak.textContent = "Steak";
    menuItem2.appendChild(steak);

    const priceTwo = document.createElement("h3");
    priceTwo.classList.add("price");
    priceTwo.textContent = "$12";
    menuItem2.appendChild(priceTwo);

    const steakDesc = document.createElement("p");
    steakDesc.classList.add("description");
    steakDesc.textContent = "A classic, make your choice between blue, rare, medium rare, slight rare and charcoal. We don't judge! Served with a side of chips with your choice of sauce";
    menuItem2.appendChild(steakDesc);

    //Image Handling
    const steakSrc = document.createElement("a");
    steakSrc.href = "https://unsplash.com/photos/grilled-steak-near-steak-knife-eRyMytuT0yg";
    steakSrc.target = "_blank";
    steakSrc.classList.add("image");
    menuItem2.appendChild(steakSrc);

    const steakImage = document.createElement("img");
    steakImage.src = steakImg;
    steakImage.classList.add("menuDishImage");
    steakSrc.appendChild(steakImage);

    /*Menu Item Three*/
    const pork = document.createElement("h2");
    pork.classList.add("dish");
    pork.textContent = "Pork Chops";
    menuItem3.appendChild(pork);

    const priceThree = document.createElement("h3");
    priceThree.classList.add("price");
    priceThree.textContent = "$9.50";
    menuItem3.appendChild(priceThree);

    const porkDesc = document.createElement("p");
    porkDesc.classList.add("description");
    porkDesc.textContent = "Another classic, the meat will slide right off the bone! Served with a side of chips, sauces and an option to swindle the pork chops in mint sauce!";
    menuItem3.appendChild(porkDesc);

     //Image Handling
     const porkSrc = document.createElement("a");
     porkSrc.href = "https://unsplash.com/photos/raw-meat-on-brown-wooden-chopping-board-Ssb24Sick7E";
     porkSrc.target = "_blank";
     porkSrc.classList.add("image");
     menuItem3.appendChild(porkSrc);
 
     const porkImage = document.createElement("img");
     porkImage.src = porkImg;
     porkImage.classList.add("menuDishImage");
     porkSrc.appendChild(porkImage);
}

export default loadMenu;