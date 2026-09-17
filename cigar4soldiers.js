(() => {
  const statusRow = document.querySelector('.hero .status-row');
  if (statusRow && !document.querySelector('.hero-plan-link')) {
    const planLink = document.createElement('a');
    planLink.className = 'hero-plan-link';
    planLink.href = '#visit';
    planLink.textContent = 'Plan Your Visit';
    statusRow.parentNode.insertBefore(planLink, statusRow);
  }

  const heroImage = document.querySelector('.hero-visual > img');
  if (heroImage) {
    heroImage.src = 'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_17_58.png?v=1';
    heroImage.removeAttribute('srcset');
    heroImage.removeAttribute('sizes');
    heroImage.removeAttribute('width');
    heroImage.removeAttribute('height');
  }

  const visitHeading = document.querySelector('#visit .visit-title h2');
  if (visitHeading) {
    visitHeading.textContent = visitHeading.textContent.replace('Stay awhile.', 'Stay a while.');
  }

  const humidorImage = document.querySelector('#humidor .humidor-media img');
  if (humidorImage) {
    humidorImage.src = 'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_15_23.png?v=1';
    humidorImage.removeAttribute('srcset');
    humidorImage.removeAttribute('sizes');
    humidorImage.removeAttribute('width');
    humidorImage.removeAttribute('height');
    humidorImage.alt = 'Premium cigars displayed in the Empire Stogie Lounge humidor';
  }

  if (document.getElementById('cigar-4-soldier')) return;

  const section = document.createElement('section');
  section.id = 'cigar-4-soldier';
  section.className = 'c4s-section';
  section.innerHTML = `
    <div class="c4s-shell">
      <div class="c4s-head">
        <img class="c4s-logo" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2018_00_10.png?v=1" alt="Cigars 4 Soldiers logo" width="1254" height="1254" loading="lazy" decoding="async" style="display:block;width:clamp(92px,10vw,160px);max-width:30vw;height:auto;max-height:160px;object-fit:contain" onerror="this.onerror=null;this.src='assets/cigars4soldiers-logo.png?v=2'" />
      </div>
      <div class="c4s-media">
        <div class="c4s-content">
          <div class="c4s-photo-wrap">
            <img class="c4s-photo" src="assets/cigars4soldiers-display..png?v=1" alt="Cigars 4 Soldiers collection display with donation can, hats, and cards" loading="lazy" decoding="async" />
          </div>
          <div class="c4s-copy">
            <h2 class="c4s-title">CIGAR 4 SOLDIER</h2>
            <p class="c4s-text" id="c4sText">Collection point for our service members deployed.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const main = document.querySelector('main');
  if (!main) return;

  const drinksSection = main.querySelector('#drinks');
  if (drinksSection) {
    main.insertBefore(section, drinksSection);
  } else {
    main.appendChild(section);
  }
})();
