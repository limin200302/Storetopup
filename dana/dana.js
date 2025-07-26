document.getElementById("danaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomor = document.getElementById("nomor").value.trim();
  const nominal = document.getElementById("nominal").value;

  if (!nomor || !nominal) {
    alert("Mohon isi semua field!");
    return;
  }

  const pesan = `Halo kak, saya ingin top up Dana\nNomor: ${nomor}\nNominal: Rp ${parseInt(nominal).toLocaleString()}`;
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

  window.open(waLink, "_blank");
});
