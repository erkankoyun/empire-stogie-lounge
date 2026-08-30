const gate = document.getElementById('ageGate');
const enter = document.getElementById('enterSite');
const header = document.querySelector('.site-header');
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');

// Keep factual business data centralized here. Add a verified public phone number
// when Empire publishes one; the Call buttons will appear automatically.
const BUSINESS = {
  phone: '',
  instagram: 'https://www.instagram.com/empirestogielounge',
  facebook: 'https://www.facebook.com/share/1Djrby26UD/?mibextid=wwXIfr'
};

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

// Phone CTA is intentionally hidden until a verified public number is configured.
if (BUSINESS.phone) {
  const tel = `tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`;
  ['callEmpire', 'mobileCallEmpire'].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = tel;
      link.classList.remove('is-hidden');
    }
  });
}

// Premium gallery lightbox.
const galleryItems = Array.from(document.querySelectorAll('.gallery-card'));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let activeGalleryIndex = 0;
let lastGalleryTrigger = null;

function renderLightbox(index) {
  if (!galleryItems.length || !lightboxImage) return;
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  const image = item.querySelector('img');
  lightboxImage.src = item.dataset.full || image?.src || '';
  lightboxImage.alt = image?.alt || 'Empire Stogie Lounge photo';
  if (lightboxCaption) lightboxCaption.textContent = item.dataset.caption || image?.alt || '';
}

function openLightbox(index, trigger) {
  if (!lightbox) return;
  lastGalleryTrigger = trigger || null;
  renderLightbox(index);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastGalleryTrigger?.focus();
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index, item));
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', () => renderLightbox(activeGalleryIndex - 1));
lightboxNext?.addEventListener('click', () => renderLightbox(activeGalleryIndex + 1));

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox?.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') renderLightbox(activeGalleryIndex - 1);
  if (event.key === 'ArrowRight') renderLightbox(activeGalleryIndex + 1);
});

// Keep the copyright current without a yearly manual edit.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
