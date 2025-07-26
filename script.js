function filterItems(category) {
  const cards = document.querySelectorAll(".game-card");
  const buttons = document.querySelectorAll(".tab-buttons button");

  // Reset tombol aktif
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Tampilkan kartu berdasarkan kategori
  cards.forEach(card => {
    if (category === "all") {
      card.classList.remove("hidden");
    } else {
      if (card.classList.contains(category)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
}
// Hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-brand");
  const menu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

console.log("TopUp Website anti-miring aktif, Ketua!");
