(() => {
  const statusRow = document.querySelector('.hero .status-row');
  if (statusRow && !document.querySelector('.hero-plan-link')) {
    const planLink = document.createElement('a');
    planLink.className = 'hero-plan-link';
    planLink.href = '#visit';
    planLink.textContent = 'Plan Your Visit';
    statusRow.parentNode.insertBefore(planLink, statusRow);
  }

  const visitHeading = document.querySelector('#visit .visit-title h2');
  if (visitHeading) {
    visitHeading.textContent = visitHeading.textContent.replace('Stay awhile.', 'Stay a while.');
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
        <p class="c4s-text" id="c4sText">Collection point for our service members deployed.</p>
      </div>
    </div>
  `;

  const main = document.querySelector('main');
  if (main) main.insertBefore(section, main.querySelector('#drinks'));
})();
