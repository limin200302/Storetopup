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

console.log("TopUp Website anti-miring aktif, Ketua!");
