export default function loadMenu() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const list = document.createElement("ul");
    
    ["Spaghetti Carbonara", "Margherita Pizza", "Tiramisu"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  container.append(heading, list);
  content.appendChild(container);

}