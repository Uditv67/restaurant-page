import resImage from "./res.png";

export default function loadHome() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("home");

    const image = document.createElement("img");
    image.src = "res.png";
    image.alt = "Restaurant photo";

    const heading = document.createElement("h1");
    heading.textContent = "Bon apetite!";

    const text1 = document.createElement("p");
    text1.textContent = "welcome to our restaurant";

    const text2 = document.createElement("p");
    text2.textContent = "smoking not allowed inside the restaurant";

    container.append(image, heading, text1, text2);
    content.appendChild(container);
}