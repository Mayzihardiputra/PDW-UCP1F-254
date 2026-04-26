// pop up
window.addEventListener('load', function () {
  setTimeout(function () {
    const overlay = document.createElement('div');
    overlay.id = 'popupOverlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.65); display: flex; align-items: center;
      justify-content: center; z-index: 9999; backdrop-filter: blur(4px);
    `;
    overlay.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #161b22, #1a1f2e);
        border: 1px solid rgba(88,166,255,0.3);
        border-radius: 24px; padding: 40px 36px;
        max-width: 430px; width: 90%;
        text-align: center;
        box-shadow: 0 25px 80px rgba(0,0,0,0.6);
        position: relative;
        color: white;
      ">
        <span onclick="document.getElementById('popupOverlay').remove()" style="
          position:absolute; top:14px; right:20px;
          cursor:pointer; font-size:1.4rem; color:#8b949e; line-height:1;
        ">✕</span>
        <div style="font-size:2.8rem; margin-bottom:14px;">🚀</div>
        <span style="
          background: rgba(88,166,255,0.15);
          border: 1px solid rgba(88,166,255,0.4);
          color: #58a6ff; padding: 4px 14px;
          border-radius: 50px; font-size: 0.8rem; font-weight: 700;
        ">INFO EVENT TERBARU</span>
        <h4 style="font-weight:800; margin: 16px 0 8px; font-size:1.3rem;">
          Hackathon Tech Community 2026
        </h4>
        <p style="color:#8b949e; font-size:0.9rem; margin-bottom:20px; line-height:1.6;">
          Ikuti kompetisi coding terbesar tahun ini!<br>
          📅 <strong style="color:#e6edf3;">10–12 Mei 2026</strong> &nbsp;|&nbsp;
          💰 Total hadiah <strong style="color:#ffa500;">Rp 10.000.000</strong><br>
          Daftar sebelum <strong style="color:#e6edf3;">30 April 2026</strong> untuk early bird slot!
        </p>
        <a href="./form.html" onclick="document.getElementById('popupOverlay').remove()" style="
          display: inline-block;
          background: linear-gradient(135deg, #1f6feb, #58a6ff);
          color: white; text-decoration: none;
          padding: 12px 30px; border-radius: 50px;
          font-weight: 700; font-size: 0.95rem;
        ">Daftar Sekarang</a>
        <p style="color:#8b949e; font-size:0.78rem; margin-top:14px; margin-bottom:0;">
          Klik di luar kotak untuk menutup
        </p>
      </div>
    `;
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
  }, 1500);
});