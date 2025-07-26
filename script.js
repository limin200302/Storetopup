// Filter kategori
function filterItems(category, event) {
  const cards = document.querySelectorAll(".game-card");
  const buttons = document.querySelectorAll(".tab-buttons button");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.classList.remove("hidden");
    } else {
      card.classList.toggle("hidden", !card.classList.contains(category));
    }
  });
}

// Hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
