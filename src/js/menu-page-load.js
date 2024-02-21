import Coppapizza from "../imgs/coppapizza.png"
import Pepperonnipizza from "../imgs/pepperonnipizza.png"

export function displayMenuPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const spanPepp2 = document.createElement("span")
    const pPepp = document.createElement("p");

    const divImgRight = document.createElement("div")
    const imgRight = new Image();

    const divImgLeft = document.createElement("div");
    const imgLeft = new Image();


    const divCoppa = document.createElement("div");
    const pCoppa = document.createElement("p");
    const spanCoppa = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    spanPepp2.textContent = "bestseller"
    pPepp.innerHTML = "The classic " + spanPepp.outerHTML + ". Unrivaled and unparalleled, our absolute " + spanPepp2.outerHTML + " crafted by the hands of Tonyo's, our head chef. Made with a perfect blend of premium ingredients, including high-qualit pizza dough, rich tomate sauce, gooey mozzarella cheese, and flavorful pepperoni slices, it's a taste sensation that stands alone.";

    divPepp.appendChild(pPepp);

    divImgRight.setAttribute("id", "imgright");
    imgRight.src = Pepperonnipizza;
    divImgRight.appendChild(imgRight);

    divImgLeft.setAttribute("id", "imgleft");
    imgLeft.src = Coppapizza;
    divImgLeft.appendChild(imgLeft);

    divCoppa.classList.add("text-content2");
    spanCoppa.textContent = "Coppa"
    pCoppa.innerHTML = "The " + spanCoppa.outerHTML + " Carnival: A pizza party hosted by Tonyo's, our maestro of merriment in the kitchen. Picture this - primo pizza dough, a saucy soiree of tomato goodness, mozzarella doing the melty dance, and slices of coppa bringing the flavor fiesta. It's not just a pizza; it's a Coppa Cabana in your mouth!"
    divCoppa.appendChild(pCoppa);


    contentDiv.appendChild(divPepp);
    contentDiv.appendChild(divCoppa);
    contentDiv.appendChild(divImgLeft);
    contentDiv.appendChild(divImgRight);

    const changeJContentLeft = document.getElementById("imgleft")
    changeJContentLeft.style.justifyContent = "center";

    const changeJContentRight = document.getElementById("imgright");
    changeJContentRight.style.justifyContent = "center"


}
