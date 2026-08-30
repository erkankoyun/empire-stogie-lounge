const gate = document.getElementById('ageGate');
const enter = document.getElementById('enterSite');
const header = document.querySelector('.site-header');
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');

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

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
