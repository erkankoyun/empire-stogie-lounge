const gate = document.getElementById('ageGate');
const enter = document.getElementById('enterSite');
const allowed = localStorage.getItem('empireAgeVerified') === 'true';
if (allowed) gate.classList.add('hidden');
enter.addEventListener('click', () => {
  localStorage.setItem('empireAgeVerified','true');
  gate.classList.add('hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();
