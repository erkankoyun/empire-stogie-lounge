(() => {
  if (document.getElementById('cigar-4-soldier')) return;

  const section = document.createElement('section');
  section.id = 'cigar-4-soldier';
  section.className = 'c4s-section';
  section.innerHTML = `
    <div class="c4s-shell">
      <div class="c4s-head">
        <img class="c4s-logo" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2018_00_10.png?v=1" alt="Cigars 4 Soldiers logo" width="1254" height="1254" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/cigars4soldiers-logo.png?v=2'" />
        <div>
          <p class="c4s-eyebrow">Cigar 4 Soldier</p>
          <h2 class="c4s-title">Cigars 4 Soldiers</h2>
          <p class="c4s-subtitle">Supporting the mission, one cigar at a time.</p>
        </div>
      </div>
      <div class="c4s-media">
        <img src="assets/cigars4soldiers-photo.webp?v=3" alt="Cigars 4 Soldiers donation box, hats, and information cards" width="640" height="348" loading="lazy" decoding="async" />
      </div>
      <p class="c4s-text" id="c4sText">Collection point for our service members deployed.</p>
    </div>
  `;

  const main = document.querySelector('main');
  if (main) main.insertBefore(section, main.querySelector('#drinks'));
})();
