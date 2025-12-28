// src/utils/spells.ts
import { spells } from "../data/spells.js";
export function renderSpells(query) {
    const spellsSection = document.getElementById("spells");
    if (!spellsSection)
        return;
    let spellsList = spellsSection.querySelector("ul");
    if (!spellsList) {
        spellsList = document.createElement("ul");
        spellsSection.appendChild(spellsList);
    }
    spellsList.innerHTML = "";
    const filteredSpells = spells.filter((spell) => spell.name.toLowerCase().includes(query));
    filteredSpells.forEach((spell) => {
        const item = document.createElement("li");
        item.classList.add("card");
        item.innerHTML = `
      <img src="${spell.image}" alt="${spell.name}" class="card-image" />
      <div class="card-content">
        <strong>${spell.name}</strong><br />
        <em>Intent:</em> ${spell.intent}<br />
        <em>Focus:</em> ${spell.focus}<br />
        <span>${spell.notes}</span>
      </div>
    `;
        spellsList.appendChild(item);
    });
}
