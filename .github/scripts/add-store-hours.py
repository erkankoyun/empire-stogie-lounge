from pathlib import Path

index = Path('index.html')
html = index.read_text(encoding='utf-8')

replacements = [
    (
        '        "telephone": "+1-518-280-2139",\n        "address": {',
        '        "telephone": "+1-518-280-2139",\n        "openingHoursSpecification": [\n          {\n            "@type": "OpeningHoursSpecification",\n            "dayOfWeek": ["Sunday", "Monday", "Tuesday"],\n            "opens": "12:00",\n            "closes": "19:00"\n          },\n          {\n            "@type": "OpeningHoursSpecification",\n            "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday"],\n            "opens": "11:00",\n            "closes": "21:00"\n          }\n        ],\n        "address": {'
    ),
    (
        '<span class="status-note">Hours can change. Check before traveling.</span>',
        '<span class="status-note">Sun–Tue 12 PM–7 PM · Wed–Sat 11 AM–9 PM</span>'
    ),
    (
        'The lounge’s social channels are the current source for today’s hours, newly stocked cigars, announcements, and confirmed special events.',
        'Regular hours are published here. Follow the lounge’s social channels for newly stocked cigars, announcements, special events, and any game-night hour changes.'
    ),
    (
        '<span class="event-tag">Today’s Hours</span><h3>Check the current schedule before traveling.</h3><p>Operating hours can change. Use Empire’s latest social update for the current day.</p>',
        '<span class="event-tag">Regular Hours</span><h3>Sun–Tue 12 PM–7 PM · Wed–Sat 11 AM–9 PM.</h3><p>Empire is open late for NFL games. Check the lounge’s social channels for game-night updates.</p>'
    ),
    (
        '<div class="visit-detail"><span>Hours</span><strong id="visitHoursText">Check today’s update</strong><a href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">View current hours →</a></div>',
        '<div class="visit-detail"><span>Hours</span><strong id="visitHoursText">Sun–Tue · 12 PM–7 PM<br/>Wed–Sat · 11 AM–9 PM</strong><a href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">Open late for NFL games →</a></div>'
    ),
    (
        '<div class="visit-status-card"><span class="status-dot"></span><div><strong>Check current hours before you head over.</strong><small>When a verified weekly schedule is published, this site is ready to show automatic Open / Closed status.</small></div></div>',
        '<div class="visit-status-card"><span class="status-dot"></span><div><strong>Regular hours are now published.</strong><small>Sun–Tue 12 PM–7 PM · Wed–Sat 11 AM–9 PM. Open late for NFL games.</small></div></div>'
    ),
    (
        '<details class="faq-item"><summary>What are today’s hours?</summary><p>Current operating hours can change. Check <a href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">Instagram</a> or <a href="https://www.facebook.com/share/1Djrby26UD/?mibextid=wwXIfr" rel="noopener" target="_blank">Facebook</a> before traveling.</p></details>',
        '<details class="faq-item"><summary>What are the lounge hours?</summary><p>Sunday through Tuesday: 12 PM–7 PM. Wednesday through Saturday: 11 AM–9 PM. Empire is open late for NFL games; check <a href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">Instagram</a> or <a href="https://www.facebook.com/share/1Djrby26UD/?mibextid=wwXIfr" rel="noopener" target="_blank">Facebook</a> for game-night updates.</p></details>'
    ),
    (
        '<div class="footer-col"><h4>Visit</h4><span>15 Park Ave, Suite 14</span><span>Clifton Park, NY</span><a href="https://www.instagram.com/empirestogielounge" rel="noopener" target="_blank">Check today’s hours</a><a href="https://www.google.com/maps/search/?api=1&amp;query=15+Park+Ave+Suite+14+Clifton+Park+NY" rel="noopener" target="_blank">Directions</a></div>',
        '<div class="footer-col"><h4>Visit</h4><span>15 Park Ave, Suite 14</span><span>Clifton Park, NY</span><span>Sun–Tue · 12 PM–7 PM</span><span>Wed–Sat · 11 AM–9 PM</span><a href="https://www.google.com/maps/search/?api=1&amp;query=15+Park+Ave+Suite+14+Clifton+Park+NY" rel="noopener" target="_blank">Directions</a></div>'
    ),
    ('script.js?v=3.1.1', 'script.js?v=3.2')
]

for old, new in replacements:
    if old not in html:
        raise SystemExit(f'Expected HTML text not found: {old[:80]}')
    html = html.replace(old, new, 1)

index.write_text(html, encoding='utf-8')

script = Path('script.js')
js = script.read_text(encoding='utf-8')

old_hours = "  // Add a verified weekly schedule later, e.g. {0:null,1:['12:00','19:00'],...}\n  hours: null"
new_hours = """  hours: {
    0: ['12:00', '19:00'],
    1: ['12:00', '19:00'],
    2: ['12:00', '19:00'],
    3: ['11:00', '21:00'],
    4: ['11:00', '21:00'],
    5: ['11:00', '21:00'],
    6: ['11:00', '21:00']
  }"""
if old_hours not in js:
    raise SystemExit('Expected BUSINESS hours placeholder not found')
js = js.replace(old_hours, new_hours, 1)

old_block = """// Hours status remains conservative until a verified weekly schedule is supplied.
const hoursStatus = document.getElementById('hoursStatus');
const visitHoursText = document.getElementById('visitHoursText');
if (!BUSINESS.hours) {
  if (hoursStatus) hoursStatus.textContent = 'Today’s hours · check latest update';
  if (visitHoursText) visitHoursText.textContent = 'Check today’s update';
}
"""
new_block = """// Verified regular hours. NFL game nights may run later than the posted closing time.
const hoursStatus = document.getElementById('hoursStatus');
const visitHoursText = document.getElementById('visitHoursText');

function formatBusinessTime(value) {
  const [hourText, minuteText] = value.split(':');
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const displayHour = hour % 12 || 12;
  const suffix = hour >= 12 ? 'PM' : 'AM';
  return `${displayHour}${minute ? `:${String(minute).padStart(2, '0')}` : ''} ${suffix}`;
}

function updateTodayHours() {
  if (!BUSINESS.hours || !hoursStatus) return;
  const weekdayName = new Intl.DateTimeFormat('en-US', {
    timeZone: BUSINESS.timezone,
    weekday: 'long'
  }).format(new Date());
  const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(weekdayName);
  const schedule = BUSINESS.hours[dayIndex];
  if (!schedule) return;
  hoursStatus.textContent = `Today’s hours · ${formatBusinessTime(schedule[0])}–${formatBusinessTime(schedule[1])}`;
}

updateTodayHours();
if (visitHoursText) {
  visitHoursText.innerHTML = 'Sun–Tue · 12 PM–7 PM<br>Wed–Sat · 11 AM–9 PM';
}
"""
if old_block not in js:
    raise SystemExit('Expected old hours status block not found')
js = js.replace(old_block, new_block, 1)
script.write_text(js, encoding='utf-8')
