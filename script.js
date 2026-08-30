const gate = document.getElementById('ageGate');
const enter = document.getElementById('enterSite');
const header = document.querySelector('.site-header');
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');

async function loadOfficialLogo() {
  try {
    const parts = await Promise.all(
      [1, 2, 3].map(async (n) => {
        const response = await fetch(`assets/logo.part${n}.txt`, { cache: 'force-cache' });
        if (!response.ok) throw new Error(`Logo asset ${n} unavailable`);
        return response.text();
      })
    );

    const base64 = parts.join('').replace(/\s+/g, '');
    const logoSrc = `data:image/jpeg;base64,${base64}`;

    document.querySelectorAll('.official-logo').forEach((img) => {
      img.src = logoSrc;
    });

    const favicon = document.getElementById('siteFavicon');
    if (favicon) favicon.href = logoSrc;
  } catch (error) {
    console.warn('Official logo could not be loaded; using fallback logo.', error);
  }
}

loadOfficialLogo();

const allowed = localStorage.getItem('empireAgeVerified') === 'true';
if (allowed && gate) gate.classList.add('hidden');

if (enter && gate) {
  enter.addEventListener('click', () => {
    localStorage.setItem('empireAgeVerified', 'true');
    gate.classList.add('hidden');
  });
}

if (menuButton && header && nav) {
  menuButton.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
