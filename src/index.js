// console.log("js is running");
import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


const content = document.querySelector("#content");

const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", () => {
    content.textContent = "";
    tabs[button.dataset.tab]();
  });
});


loadHome();