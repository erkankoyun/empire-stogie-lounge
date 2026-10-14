(() => {
  'use strict';

  const hero = document.querySelector('.hero-visual[data-slides]');
  if (!hero) return;
  const controls = hero.querySelector('.hero-slideshow-controls');
  const previous = controls.querySelector('.hero-slideshow-previous');
  const next = controls.querySelector('.hero-slideshow-next');
  const toggle = controls.querySelector('.hero-slideshow-toggle');
  const count = controls.querySelector('.hero-slideshow-count');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const interval = 5000;
  let slides = [];
  let active = 0;
  let current = hero.querySelector('.hero-slide');
  let paused = motion.matches;
  let visible = true;
  let busy = false;
  let ready = false;
  let upcoming;
  let timer;
  const failed = new Set();

  function canPlay() {
    return ready && !paused && visible && !document.hidden &&
      !document.documentElement.classList.contains('age-gate-active') && slides.length > 1;
  }

  function schedule() {
    window.clearTimeout(timer);
    if (canPlay()) timer = window.setTimeout(() => advance(1, true), interval);
  }

  function updateControls() {
    count.textContent = `${active + 1} / ${slides.length}`;
    count.setAttribute('aria-label', `Photo ${active + 1} of ${slides.length}`);
    toggle.classList.toggle('is-paused', paused);
    toggle.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    previous.disabled = busy;
    next.disabled = busy;
  }

  function loadPhoto(slide) {
    return new Promise((resolve, reject) => {
      const photo = new Image();
      const timeout = window.setTimeout(() => finish(new Error('Photo load timed out')), 12000);
      function finish(error) {
        window.clearTimeout(timeout);
        photo.onload = photo.onerror = null;
        if (error) reject(error);
        else resolve(photo);
      }
      photo.className = 'hero-slide';
      photo.alt = slide.alt || 'Inside Empire Stogie Lounge';
      photo.decoding = 'async';
      photo.sizes = '(max-width: 820px) 100vw, 55vw';
      photo.onload = () => photo.decode().catch(() => {}).then(() => finish());
      photo.onerror = () => finish(new Error('Photo unavailable'));
      if (slide.srcset) photo.srcset = slide.srcset;
      photo.src = slide.src;
    });
  }

  function display(photo, index) {
    const outgoing = current;
    hero.insertBefore(photo, controls);
    // Establish the transparent frame before starting the crossfade.
    photo.getBoundingClientRect();
    photo.classList.add('is-active');
    outgoing.classList.remove('is-active');
    outgoing.setAttribute('aria-hidden', 'true');
    current = photo;
    active = index;
    hero.dataset.activeSlide = String(index + 1);
    window.setTimeout(() => outgoing.remove(), motion.matches ? 0 : 700);
  }

  function preloadNext() {
    const index = (active + 1) % slides.length;
    upcoming = failed.has(index) ? null : {
      index,
      promise: loadPhoto(slides[index]).catch(() => null)
    };
  }

  async function advance(direction, automatic = false) {
    window.clearTimeout(timer);
    if (!ready) return;
    if (busy) { schedule(); return; }
    busy = true;
    updateControls();
    try {
      for (let offset = 1; offset < slides.length; offset += 1) {
        const index = (active + direction * offset + slides.length) % slides.length;
        if (failed.has(index)) continue;
        let photo;
        try {
          photo = upcoming?.index === index ? await upcoming.promise : await loadPhoto(slides[index]);
          upcoming = null;
          if (!photo) throw new Error('Photo unavailable');
        }
        catch (_) { failed.add(index); continue; }
        // Do not change the photo if playback was paused while it was loading.
        if (automatic && !canPlay()) return;
        display(photo, index);
        break;
      }
    } finally {
      busy = false;
      updateControls();
      preloadNext();
      schedule();
    }
  }

  async function initialize() {
    try {
      const response = await fetch(hero.dataset.slides, { cache: 'no-cache' });
      if (!response.ok) return;
      const data = await response.json();
      slides = Array.isArray(data.slides) ? data.slides.filter((slide) => slide && typeof slide.src === 'string' && slide.src.trim()) : [];
      if (slides.length < 2) return;
      // Keep the original image intact until the configured first photo loads.
      const first = await loadPhoto(slides[0]);
      hero.classList.add('hero-slideshow-ready');
      display(first, 0);
      ready = true;
      controls.hidden = false;
      updateControls();
      preloadNext();
      schedule();
    } catch (_) {
      // The existing hero photo remains available if the manifest cannot load.
    }
  }

  previous.addEventListener('click', () => advance(-1));
  next.addEventListener('click', () => advance(1));
  toggle.addEventListener('click', () => {
    paused = !paused;
    updateControls();
    schedule();
  });
  // Keyboard users can inspect the photo without it changing under focus.
  hero.addEventListener('focusin', (event) => {
    if (!event.target.matches(':focus-visible')) return;
    paused = true;
    updateControls();
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => {
    paused = motion.matches;
    updateControls();
    schedule();
  });
  new MutationObserver(schedule).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: 0 }).observe(hero);
  }
  initialize();
})();
