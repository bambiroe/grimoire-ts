// src/utils/plants.ts
import { plants } from "../data/plants.js";
const elementIcons = {
    Air: '<i class="fa-solid fa-wind"></i>',
    Fire: '<i class="fa-solid fa-fire"></i>',
    Water: '<i class="fa-solid fa-droplet"></i>',
    Earth: '<i class="fa-solid fa-seedling"></i>'
};
export function renderPlants(element) {
    const plantsSection = document.getElementById("plants");
    if (!plantsSection)
        return;
    let plantsList = plantsSection.querySelector("ul");
    if (!plantsList) {
        plantsList = document.createElement("ul");
        plantsSection.appendChild(plantsList);
    }
    plantsList.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const processedPlants = [...plants]
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((plant) => element === "All" || plant.element === element);
    processedPlants.forEach((plant) => {
        const item = document.createElement("li");
        item.classList.add("card");
        const icon = elementIcons[plant.element] || '✦';
        item.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="card-image" />
      <div class="card-content">
        <strong>${plant.name}</strong><br />
        <em>Element:</em> ${icon} ${plant.element}<br />
        <em>Uses:</em> ${plant.uses.join(", ")}<br />
        <span>${plant.notes}</span>
      </div>
    `;
        fragment.appendChild(item);
    });
    plantsList.appendChild(fragment);
}
