// src/utils/plants.ts
import { plants } from "../data/plants.js";
const elementIcons = {
    Air: "🌪️",
    Fire: "🔥",
    Water: "🌊",
    Earth: "🌱",
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
    const sortedPlants = [...plants].sort((a, b) => a.name.localeCompare(b.name));
    const filteredPlants = element === "All"
        ? sortedPlants
        : sortedPlants.filter((plant) => plant.element === element);
    filteredPlants.forEach((plant) => {
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
        plantsList.appendChild(item);
    });
}
