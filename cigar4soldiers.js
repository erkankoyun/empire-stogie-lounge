(() => {
  if (document.getElementById('cigar-4-soldier')) return;

  const style = document.createElement('style');
  style.textContent = `
    .c4s-section{padding:96px 24px;background:linear-gradient(180deg,#0b0a09 0%,#080706 100%);border-top:1px solid rgba(201,154,76,.18);color:#f4efe7}
    .c4s-shell{width:min(1180px,100%);margin:0 auto}
    .c4s-head{display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center;margin-bottom:34px}
    .c4s-logo{display:block;width:clamp(160px,18vw,230px);height:auto;filter:drop-shadow(0 14px 30px rgba(0,0,0,.36))}
    .c4s-eyebrow{margin:0 0 10px;color:#d5a857;font:700 .82rem/1.2 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase}
    .c4s-title{margin:0;color:#f4efe7;font:600 clamp(2.5rem,5vw,4.9rem)/.95 'Cormorant Garamond',serif}
    .c4s-subtitle{margin:14px 0 0;max-width:680px;color:#bdb5aa;font:400 1rem/1.7 Inter,sans-serif}
    .c4s-media{overflow:hidden;border:1px solid rgba(201,154,76,.26);border-radius:20px;background:#0d0b0a;box-shadow:0 28px 70px rgba(0,0,0,.28)}
    .c4s-media img{display:block;width:100%;height:auto;object-fit:cover}
    .c4s-text{margin:30px 0 0;max-width:880px;color:#c9c1b7;font:500 1.12rem/1.8 Inter,sans-serif}
    @media(max-width:760px){.c4s-section{padding:68px 16px}.c4s-head{grid-template-columns:1fr;gap:20px}.c4s-logo{width:160px}.c4s-media{border-radius:14px}.c4s-title{font-size:2.7rem}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'cigar-4-soldier';
  section.className = 'c4s-section';
  section.innerHTML = `
    <div class="c4s-shell">
      <div class="c4s-head">
        <img class="c4s-logo" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2018_00_10.png?v=1" alt="Cigars 4 Soldiers logo" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/cigars4soldiers-logo.png?v=2'" />
        <div>
          <p class="c4s-eyebrow">Cigar 4 Soldier</p>
          <h2 class="c4s-title">Cigars 4 Soldiers</h2>
          <p class="c4s-subtitle">Supporting the mission, one cigar at a time.</p>
        </div>
      </div>
      <div class="c4s-media">
        <img src="assets/cigars4soldiers-photo.webp?v=3" alt="Cigars 4 Soldiers donation box, hats, and information cards" loading="lazy" decoding="async" />
      </div>
      <p class="c4s-text" id="c4sText">Collection point for our service members deployed.</p>
    </div>
  `;

  const main = document.querySelector('main');
  if (main) main.insertBefore(section, main.querySelector('#drinks'));
})();
