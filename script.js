const gate = document.getElementById('ageGate');
const enter = document.getElementById('enterSite');
const header = document.querySelector('.site-header');
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');

// Verified business facts belong here. Unknown facts stay blank instead of being guessed.
const BUSINESS = {
  phone: '',
  timezone: 'America/New_York',
  instagram: 'https://www.instagram.com/empirestogielounge',
  facebook: 'https://www.facebook.com/share/1Djrby26UD/?mibextid=wwXIfr',
  // Add a verified weekly schedule later, e.g. {0:null,1:['12:00','19:00'],...}
  hours: null
};

// Age gate: accessible focus management without collecting personal data.
const gateFocusable = () => gate ? Array.from(gate.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')) : [];
const backgroundNodes = () => Array.from(document.body.children).filter((node) => node !== gate && node.tagName !== 'SCRIPT');

function setAgeGateOpen(open) {
  document.documentElement.classList.toggle('age-gate-active', open);
  backgroundNodes().forEach((node) => { node.inert = open; });
  if (!gate) return;
  gate.setAttribute('aria-hidden', String(!open));
  if (open) {
    gate.classList.remove('hidden');
    requestAnimationFrame(() => (enter || gateFocusable()[0])?.focus());
  } else {
    gate.classList.add('hidden');
    document.querySelector('.brand')?.focus();
  }
}

let allowed = false;
try { allowed = localStorage.getItem('empireAgeVerified') === 'true'; } catch (_) {}
setAgeGateOpen(!allowed);

if (enter && gate) {
  enter.addEventListener('click', () => {
    try { localStorage.setItem('empireAgeVerified', 'true'); } catch (_) {}
    setAgeGateOpen(false);
  });
  gate.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const items = gateFocusable();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
}

// Mobile navigation.
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

// Header polish on scroll.
function updateHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

// Phone CTA appears only when a verified public number is configured.
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

// Hours status remains conservative until a verified weekly schedule is supplied.
const hoursStatus = document.getElementById('hoursStatus');
const visitHoursText = document.getElementById('visitHoursText');
if (!BUSINESS.hours) {
  if (hoursStatus) hoursStatus.textContent = 'Today’s hours · check latest update';
  if (visitHoursText) visitHoursText.textContent = 'Check today’s update';
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

// Subtle reveal animation with a no-JS-safe default and reduced-motion respect.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
if (!reduceMotion && revealItems.length && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
  revealItems.forEach((item) => observer.observe(item));
}

// Keep the copyright current without a yearly manual edit.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
