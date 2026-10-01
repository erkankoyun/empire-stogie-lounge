# Cigar Explorer

This is the React showroom from the supplied V8.2.4 desktop project, with the Empire branding, lounge link and shared age confirmation retained.

From this directory, run `npm ci` then `npm run build`. Commit both source changes and the generated `app.js`; the existing static host serves `index.html`, `style.css` and `app.js` without a server-side build. Bump the script query in `index.html` when shipping a new build.

React updates existing product elements and assigns dynamic styles through the DOM style API. Keep the site's current Content Security Policy: no inline HTML style or script permission is required. Do not replace this renderer with `innerHTML` on every animation frame.

The active showroom uses nine remote product photos. The older ZIP's GLB models and texture files are not imported by this version and are not needed for deployment. If a remote image fails, its product name is displayed as a fallback.
