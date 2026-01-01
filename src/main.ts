// src/main.ts
import { renderPlants } from "./utils/plants.js";
import { renderSpells } from "./utils/spells.js";

// ------ Initialization ------
function init() {
  document.body.setAttribute("data-theme", "dark");
  renderPlants("All");
  renderSpells("");
}

// ------ Dark/Light Mode ------
const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton?.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  document.body.setAttribute("data-theme", newTheme);
  
  if (themeToggleButton) {
    themeToggleButton.innerHTML = newTheme === "dark" 
      ? `<i class="fa-solid fa-moon"></i>` 
      : `<i class="fa-solid fa-sun"></i>`;
  }
});

// ------ Navigation ------
const pages = document.querySelectorAll<HTMLElement>(".page");
const navLinks = document.querySelectorAll<HTMLElement>("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.dataset.target;
    if (!targetId) return;

    pages.forEach((page) => {
      page.classList.toggle("active", page.id === targetId);
    });
  });
});

// ------ Plant Filtering ------
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const element = button.dataset.element || "All";

    filterButtons.forEach((b) => b.classList.toggle("active", b === button));
    renderPlants(element);
  });
});

// ------ Spell Search ------
const spellSearchInput = document.getElementById("spellSearch") as HTMLInputElement;

spellSearchInput?.addEventListener("input", (e) => {
  const query = (e.target as HTMLInputElement).value.toLowerCase();
  renderSpells(query);
});

init();
