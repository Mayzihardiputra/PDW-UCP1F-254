// =============================================
// POPUP EVENT - BONUS JAVASCRIPT
// =============================================
window.addEventListener("load", function () {
  setTimeout(function () {

    // 1. Buat elemen overlay (latar belakang gelap)
    var overlay = document.createElement("div");
    overlay.id = "popupOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.65)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";
    overlay.style.backdropFilter = "blur(4px)";

    // 2. Buat elemen kotak popup
    var popup = document.createElement("div");
    popup.style.background = "linear-gradient(135deg, #161b22, #1a1f2e)";
    popup.style.border = "1px solid rgba(88,166,255,0.3)";
    popup.style.borderRadius = "24px";
    popup.style.padding = "40px 36px";
    popup.style.maxWidth = "430px";
    popup.style.width = "90%";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 25px 80px rgba(0,0,0,0.6)";
    popup.style.position = "relative";
    popup.style.color = "white";

    // 3. Buat tombol tutup (X)
    var btnTutup = document.createElement("span");
    btnTutup.textContent = "✕";
    btnTutup.style.position = "absolute";
    btnTutup.style.top = "14px";
    btnTutup.style.right = "20px";
    btnTutup.style.cursor = "pointer";
    btnTutup.style.fontSize = "1.4rem";
    btnTutup.style.color = "#8b949e";
    btnTutup.style.lineHeight = "1";
    btnTutup.addEventListener("click", function () {
      overlay.remove();
    });

    // 4. Buat ikon emoji
    var ikon = document.createElement("div");
    ikon.style.fontSize = "2.8rem";
    ikon.style.marginBottom = "14px";

    // 5. Buat label badge
    var badge = document.createElement("span");
    badge.textContent = "INFO EVENT TERBARU";
    badge.style.background = "rgba(88,166,255,0.15)";
    badge.style.border = "1px solid rgba(88,166,255,0.4)";
    badge.style.color = "#58a6ff";
    badge.style.padding = "4px 14px";
    badge.style.borderRadius = "50px";
    badge.style.fontSize = "0.8rem";
    badge.style.fontWeight = "700";

    // 6. Buat judul
    var judul = document.createElement("h4");
    judul.textContent = "Saint Tech Community 2026";
    judul.style.fontWeight = "800";
    judul.style.margin = "16px 0 8px";
    judul.style.fontSize = "1.3rem";

    // 7. Buat deskripsi
    var deskripsi = document.createElement("p");
    deskripsi.innerHTML =
      "Ikuti kompetisi coding terbesar tahun ini!<br>" +
      " <strong style='color:#e6edf3;'>10–12 Mei 2026</strong> &nbsp;|&nbsp; " +
      " Total hadiah <strong style='color:#ffa500;'>Rp 10.000.000</strong><br>" +
      "Daftar sebelum <strong style='color:#e6edf3;'>30 April 2026</strong> untuk early bird slot!";
    deskripsi.style.color = "#8b949e";
    deskripsi.style.fontSize = "0.9rem";
    deskripsi.style.marginBottom = "20px";
    deskripsi.style.lineHeight = "1.6";

    // 8. Buat tombol daftar
    var btnDaftar = document.createElement("button");
    btnDaftar.textContent = "Oke, Siap Daftar!";
    btnDaftar.style.background = "linear-gradient(135deg, #1f6feb, #58a6ff)";
    btnDaftar.style.color = "white";
    btnDaftar.style.border = "none";
    btnDaftar.style.padding = "12px 30px";
    btnDaftar.style.borderRadius = "50px";
    btnDaftar.style.fontWeight = "700";
    btnDaftar.style.fontSize = "0.95rem";
    btnDaftar.style.cursor = "pointer";
    btnDaftar.addEventListener("click", function () {
      overlay.remove();
      window.location.href = "./contact.html";
    });

    // 9. Buat teks keterangan bawah
    var keterangan = document.createElement("p");
    keterangan.textContent = "Klik ✕ atau di luar kotak untuk menutup";
    keterangan.style.color = "#8b949e";
    keterangan.style.fontSize = "0.78rem";
    keterangan.style.marginTop = "14px";
    keterangan.style.marginBottom = "0";

    // 10. Susun semua elemen ke dalam popup
    popup.appendChild(btnTutup);
    popup.appendChild(ikon);
    popup.appendChild(badge);
    popup.appendChild(judul);
    popup.appendChild(deskripsi);
    popup.appendChild(btnDaftar);
    popup.appendChild(keterangan);

    // 11. Masukkan popup ke dalam overlay
    overlay.appendChild(popup);

    // 12. Klik area gelap di luar popup = tutup
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    // 13. Tampilkan overlay ke halaman
    document.body.appendChild(overlay);

  }, 1500); // popup muncul 1.5 detik setelah halaman terbuka
});