// src/main.ts
import { renderPlants } from "./utils/plants.js";
import { renderSpells } from "./utils/spells.js";
// ------ Dark/Light Mode ------
const themeToggleButton = document.getElementById("themeToggle");
themeToggleButton?.addEventListener("click", toggleTheme);
function toggleTheme() {
    // Check current theme and switch it
    const currentTheme = document.body.getAttribute("data-theme");
    if (themeToggleButton) {
        if (currentTheme === "light") {
            document.body.setAttribute("data-theme", "dark");
            themeToggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`; // Moon icon for dark mode
        }
        else {
            document.body.setAttribute("data-theme", "light");
            themeToggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`; // Sun icon for light mode
        }
    }
}
document.body.setAttribute("data-theme", "dark");
// ------ Show/Hide Pages ------
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
// ------ Plant Filtering ------
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const element = button.dataset.element || "All";
        filterButtons.forEach((b) => b.classList.toggle("active", b === button));
        renderPlants(element);
    });
});
renderPlants("All");
// ------ Spell Search ------
const spellSearchInput = document.getElementById("spellSearch");
spellSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    renderSpells(query);
});
renderSpells("");
