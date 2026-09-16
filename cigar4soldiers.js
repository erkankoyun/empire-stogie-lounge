(() => {
  if (document.getElementById('cigar-4-soldier')) return;

  const style = document.createElement('style');
  style.textContent = `
    .c4s-section{padding:96px 24px;background:linear-gradient(180deg,#0b0a09 0%,#080706 100%);border-top:1px solid rgba(201,154,76,.18)}
    .c4s-shell{width:min(1180px,100%);margin:0 auto}
    .c4s-head{display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center;margin-bottom:34px}
    .c4s-logo{display:block;width:clamp(150px,18vw,230px);height:auto;filter:drop-shadow(0 14px 30px rgba(0,0,0,.36))}
    .c4s-eyebrow{margin:0 0 10px;color:#d5a857;font:700 .82rem/1.2 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase}
    .c4s-title{margin:0;color:#f4efe7;font:600 clamp(2.5rem,5vw,4.9rem)/.95 'Cormorant Garamond',serif}
    .c4s-subtitle{margin:14px 0 0;max-width:680px;color:#bdb5aa;font:400 1rem/1.7 Inter,sans-serif}
    .c4s-media{overflow:hidden;border:1px solid rgba(201,154,76,.26);border-radius:20px;background:#0d0b0a;box-shadow:0 28px 70px rgba(0,0,0,.28)}
    .c4s-media img{display:block;width:100%;height:auto;object-fit:cover}
    .c4s-text{margin-top:30px;max-width:880px;color:#c9c1b7;font:400 1.04rem/1.8 Inter,sans-serif}
    .c4s-text:empty{display:none}
    @media(max-width:760px){.c4s-section{padding:68px 16px}.c4s-head{grid-template-columns:1fr;gap:20px}.c4s-logo{width:150px}.c4s-media{border-radius:14px}.c4s-title{font-size:2.7rem}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'cigar-4-soldier';
  section.className = 'c4s-section';
  section.innerHTML = `
    <div class="c4s-shell">
      <div class="c4s-head">
        <img class="c4s-logo" src="assets/cigars4soldiers-logo.webp" alt="Cigars 4 Soldiers logo" loading="lazy" decoding="async" />
        <div>
          <p class="c4s-eyebrow">Cigar 4 Soldier</p>
          <h2 class="c4s-title">Cigars 4 Soldiers</h2>
          <p class="c4s-subtitle">Supporting the mission, one cigar at a time.</p>
        </div>
      </div>
      <div class="c4s-media">
        <img src="assets/cigars4soldiers-photo.webp" alt="Cigars 4 Soldiers donation box, hats, and information cards" loading="lazy" decoding="async" />
      </div>
      <div class="c4s-text" id="c4sText"></div>
    </div>
  `;

  const main = document.querySelector('main');
  if (main) main.appendChild(section);
})();
