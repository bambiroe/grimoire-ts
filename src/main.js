"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const plants_1 = require("./data/plants");
const plantsSection = document.getElementById("plants");
if (plantsSection) {
    const list = document.createElement("ul");
    plants_1.plants.forEach((plant) => {
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
//# sourceMappingURL=main.js.map