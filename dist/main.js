// src/main.ts
import { plants } from "./data/plants.js";
const plantsSection = document.getElementById("plants");
if (plantsSection) {
    const list = document.createElement("ul");
    plants.forEach((plant) => {
        const item = document.createElement("li");
        item.innerHTML = `
      <strong>${plant.name}</strong><br />
      <em>Element:</em> ${plant.element}<br />
      <em>Uses:</em> ${plant.uses.join(", ")}<br />
      <span>${plant.notes}</span>
    `;
        list.appendChild(item);
    });
    plantsSection.appendChild(list);
}
// Show/Hide Pages
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll("nav a");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        pages.forEach((page) => {
            page.classList.toggle("active", page.id === targetId);
        });
    });
});
