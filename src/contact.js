export default function loadContact() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact";

    const address = document.createElement("p");
    address.textContent = "468 Chandi Chowk, Kolkata";

    const phone = document.createElement("p");
    phone.textContent = "Phone No.: +91 9898544620";

  container.append(heading, address, phone);
  content.appendChild(container);

}