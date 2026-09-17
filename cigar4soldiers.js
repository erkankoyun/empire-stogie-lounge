(() => {
  const statusRow = document.querySelector('.hero .status-row');
  if (statusRow && !document.querySelector('.hero-plan-link')) {
    const planLink = document.createElement('a');
    planLink.className = 'hero-plan-link';
    planLink.href = '#visit';
    planLink.textContent = 'Plan Your Visit';
    statusRow.parentNode.insertBefore(planLink, statusRow);
  }

  const applyHeroImage = () => {
    const heroImage = document.querySelector('.hero-visual > img');
    if (!heroImage) return;
    const newHero = 'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_17_58.png?v=2';
    heroImage.setAttribute('src', newHero);
    heroImage.removeAttribute('srcset');
    heroImage.removeAttribute('sizes');
    heroImage.removeAttribute('width');
    heroImage.removeAttribute('height');
    heroImage.alt = 'Empire Stogie Lounge';
  };

  applyHeroImage();
  requestAnimationFrame(applyHeroImage);
  window.addEventListener('load', applyHeroImage, { once: true });

  const heroAgeText = Array.from(document.querySelectorAll('.hero-trust small'))
    .find((element) => element.textContent.trim() === 'Adults-only lounge');
  if (heroAgeText) {
    heroAgeText.textContent = 'Only in humidors';
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

  const galleryGrid = document.querySelector('#gallery .gallery-grid');
  if (galleryGrid && !galleryGrid.classList.contains('gallery-user-images')) {
    galleryGrid.classList.add('gallery-user-images');
    galleryGrid.innerHTML = `
      <figure>
        <button class="gallery-card" data-caption="Empire Stogie Lounge" data-full="assets/ChatGPT%20Image%2016%20Eyl%202026%2020_57_27.png?v=1" type="button">
          <img alt="Empire Stogie Lounge gallery photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2020_57_27.png?v=1" />
        </button>
      </figure>
      <figure>
        <button class="gallery-card" data-caption="Empire Stogie Lounge" data-full="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_02_52.png?v=1" type="button">
          <img alt="Empire Stogie Lounge gallery photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_02_52.png?v=1" />
        </button>
      </figure>
    `;
  }

  const updateImageSources = [
    'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_08_20%20(9).png?v=1',
    'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_08_18%20(1).png?v=1',
    'assets/ChatGPT%20Image%2016%20Eyl%202026%2021_08_20%20(7).png?v=1'
  ];

  document.querySelectorAll('#updates .update-card-media img').forEach((image, index) => {
    if (!updateImageSources[index]) return;
    image.src = updateImageSources[index];
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
    image.removeAttribute('width');
    image.removeAttribute('height');
  });

  const socialGrid = document.querySelector('#social .instagram-grid');
  if (socialGrid && !socialGrid.classList.contains('social-user-images')) {
    socialGrid.classList.add('social-user-images');
    socialGrid.innerHTML = `
      <a class="instagram-tile" href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">
        <img alt="Empire Stogie Lounge social photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_36_25%20(5).png?v=1" />
      </a>
      <a class="instagram-tile" href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">
        <img alt="Empire Stogie Lounge social photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_36_24%20(3).png?v=1" />
      </a>
      <a class="instagram-tile" href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">
        <img alt="Empire Stogie Lounge social photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_08_19%20(6).png?v=1" />
      </a>
      <a class="instagram-tile" href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">
        <img alt="Empire Stogie Lounge social photo" decoding="async" loading="lazy" src="assets/ChatGPT%20Image%2016%20Eyl%202026%2021_36_28%20(9).png?v=1" />
      </a>
    `;
  }

  const addHumidorsOnlyNotes = () => {
    document.querySelectorAll('h3, strong').forEach((element) => {
      if (element.textContent.trim() !== 'Adults 21+') return;
      const next = element.nextElementSibling;
      if (next?.classList.contains('humidors-only-note')) return;

      const note = document.createElement('span');
      note.className = 'humidors-only-note';
      note.textContent = 'Only in humidors.';
      element.insertAdjacentElement('afterend', note);
    });
  };

  addHumidorsOnlyNotes();

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
