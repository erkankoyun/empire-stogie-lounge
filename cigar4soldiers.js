(() => {
  if (document.getElementById('cigar-4-soldier')) return;

  const section = document.createElement('section');
  section.id = 'cigar-4-soldier';
  section.setAttribute('style', 'padding:96px 24px;background:#0b0a09;color:#f4efe7;border-top:1px solid rgba(201,154,76,.18);');
  section.innerHTML = `
    <div style="width:min(1180px,100%);margin:0 auto;">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center;margin-bottom:34px;">
        <img src="assets/cigars4soldiers-logo.webp?v=2" alt="Cigars 4 Soldiers logo" loading="lazy" decoding="async" style="display:block;width:clamp(150px,18vw,230px);height:auto;filter:drop-shadow(0 14px 30px rgba(0,0,0,.36));" />
        <div>
          <p style="margin:0 0 10px;color:#d5a857;font:700 .82rem/1.2 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase;">Cigar 4 Soldier</p>
          <h2 style="margin:0;color:#f4efe7;font:600 clamp(2.5rem,5vw,4.9rem)/.95 'Cormorant Garamond',serif;">Cigars 4 Soldiers</h2>
          <p style="margin:14px 0 0;max-width:680px;color:#bdb5aa;font:400 1rem/1.7 Inter,sans-serif;">Supporting the mission, one cigar at a time.</p>
        </div>
      </div>
      <div style="overflow:hidden;border:1px solid rgba(201,154,76,.26);border-radius:20px;background:#0d0b0a;box-shadow:0 28px 70px rgba(0,0,0,.28);">
        <img src="assets/cigars4soldiers-photo.webp?v=2" alt="Cigars 4 Soldiers donation box, hats, and information cards" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;object-fit:cover;" />
      </div>
      <p style="margin:30px 0 0;max-width:880px;color:#c9c1b7;font:500 1.12rem/1.8 Inter,sans-serif;">Collection point for our service members deployed.</p>
    </div>
  `;

  const main = document.querySelector('main');
  if (main) main.appendChild(section);
})();
