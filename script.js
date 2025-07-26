function filterItems(category) {
  const cards = document.querySelectorAll(".game-card");
  const buttons = document.querySelectorAll(".tab-buttons button");

  // Reset tombol aktif
  buttons.forEach(btn => btn.classList.remove("active"));

  // Aktifkan tombol yang diklik
  event.target.classList.add("active");

  // Tampilkan atau sembunyikan kartu sesuai kategori
  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });

  // ✅ Paksa browser reflow biar layout Flexbox tetap center
  const grid = document.querySelector(".game-grid");
  grid.style.display = "none";
  void grid.offsetHeight; // Hack untuk force reflow
  grid.style.display = "flex";
}

console.log("TopUp Website siap, Ketua!");
