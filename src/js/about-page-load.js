import Coke from "../imgs/coke.png"
import mozza2 from "../imgs/mozza2.png"

export function displayAboutPage(){


    const contentDiv = document.getElementById("content");
    const divAboutAdText = document.createElement("div");
    const spanAdText = document.createElement("span");
    const pAdText = document.createElement("p");
    const br = document.createElement("br")

    const divAdImg = document.createElement("div")
    const imgAd = new Image();

    const divContactImg = document.createElement("div");
    const imgContact = new Image();

    const divContact = document.createElement("div");
    const pContact = document.createElement("p");
    const liContact = document.createElement("li")
    const ulContact1 = document.createElement("ul")
    const ulContact2 = document.createElement("ul")
    const ulContact3 = document.createElement("ul")

    divAboutAdText.setAttribute("id", "contact-ad-text");
    spanAdText.textContent = "zero delivery charge"
    pAdText.innerHTML = "Double the pizzas, " + spanAdText.outerHTML + ", plus a mind-blowing,<br> ice-cold Coca-Cola - because winning tastes even better when it's free ! <br>Unleash flavor domination now !"
    divAboutAdText.appendChild(pAdText);

    divAdImg.setAttribute("id", "contact-ad-img");
    imgAd.src = Coke;
    divAdImg.appendChild(imgAd);

    divContactImg.setAttribute("id", "contact-ingr");
    imgContact.src = mozza2;
    divContactImg.appendChild(imgContact);

    divContact.setAttribute("id", "contact")
    pContact.textContent = "Contact us at: "

    ulContact1.textContent = "+51 25 75 89 55"
    ulContact2.textContent = "27 Tonyo's Alley"
    ulContact3.textContent = "Tonyo's City"

    liContact.appendChild(ulContact1)
    liContact.appendChild(ulContact2)
    liContact.appendChild(ulContact3)

    divContact.appendChild(pContact)
    divContact.appendChild(br)
    divContact.appendChild(liContact)

   
    contentDiv.appendChild(divAboutAdText);
    contentDiv.appendChild(divAdImg);
    contentDiv.appendChild(divContactImg);
    contentDiv.appendChild(divContact);



}
