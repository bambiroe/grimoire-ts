// src/utils/spells.ts
import { spells } from "../data/spells.js";

export function renderSpells(query: string) {
  const spellsSection = document.getElementById("spells");
  if (!spellsSection) return;

  let spellsList = spellsSection.querySelector("ul");
  if (!spellsList) {
    spellsList = document.createElement("ul");
    spellsSection.appendChild(spellsList);
  }

  spellsList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  const filteredSpells = spells
    .filter((spell) => spell.name.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name));

  filteredSpells.forEach((spell) => {
    const item = document.createElement("li");
    item.classList.add("card");

    item.innerHTML = `
      <img src="${spell.image}" alt="${spell.name}" class="card-image" loading="lazy" />
      <div class="card-content">
        <strong>${spell.name}</strong><br />
        <em>Intent:</em> ${spell.intent}<br />
        <em>Focus:</em> ${spell.focus}<br />
        <span>${spell.notes}</span>
      </div>
    `;

    fragment.appendChild(item);
  });

  spellsList.appendChild(fragment);
}
