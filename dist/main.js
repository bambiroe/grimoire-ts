// src/main.ts
import { plants } from "./data/plants.js";
import { spells } from "./data/spells.js";
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
// Elements
const elementIcons = {
    Air: "🌪️",
    Fire: "🔥",
    Water: "🌊",
    Earth: "🌱"
};
// Import plants
const plantsSection = document.getElementById("plants");
if (plantsSection) {
    const list = document.createElement("ul");
    plants.forEach((plant) => {
        const item = document.createElement("li");
        item.classList.add("card");
        item.innerHTML = `
      <img
        src="${plant.image}"
        alt="${plant.name}"
        class="card-image"
      />
      <div class="card-content">
        <strong>${plant.name}</strong><br />
        <em>Element:</em> ${elementIcons[plant.element]} ${plant.element}<br />
        <em>Uses:</em> ${plant.uses.join(", ")}<br />
        <span>${plant.notes}</span>
      </div>
    `;
        list.appendChild(item);
    });
    plantsSection.appendChild(list);
}
// Import Spells
const spellsSection = document.getElementById("spells");
if (spellsSection) {
    const list = document.createElement("ul");
    spells.forEach((spell) => {
        const item = document.createElement("li");
        item.classList.add("card");
        item.innerHTML = `
      <img
        src="${spell.image}"
        alt="${spell.name}"
        class="card-image"
      />
      <div class="card-content">
        <strong>${spell.name}</strong><br />
        <em>Intent:</em> ${spell.intent}<br />
        <em>Focus:</em> ${spell.focus}<br />
        <span>${spell.notes}</span>
      </div>
    `;
        list.appendChild(item);
    });
    spellsSection.appendChild(list);
}
