function filterItems(category) {
  const cards = document.querySelectorAll(".game-card");
  const buttons = document.querySelectorAll(".tab-buttons button");

  // Reset active state
  buttons.forEach(btn => btn.classList.remove("active"));

  // Set active to clicked
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

console.log("TopUp Website siap, Ketua!");
