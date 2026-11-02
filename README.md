# Punky's Bakery Website

## Folder structure
Place these files alongside your existing `images` folder so the paths resolve correctly:

```
your-project/
├── home.html
├── about.html
├── contact.html
├── gallary.html
├── service.html
├── inquiry.html
├── css/
│   └── stylesheet.css
├── js/
│   └── script.js
└── images/            (your existing folder — logo, all photos, and your video file)
```

All six pages now share the same header, nav, and footer, and link to the same `css/stylesheet.css` and `js/script.js` — the site is consistent end to end.

## What the site now does
- Responsive layout that adapts from desktop down to phone screens
- Sticky navigation bar with a hover/active state, and a hamburger menu on small screens
- Home page images zoom slightly on hover for a more interactive feel
- A "back to top" button fades in once you scroll down and smooth-scrolls back up
- The current page is automatically highlighted in the nav (via `js/script.js`) — this works the same way on every page as long as each page includes the same script and nav markup
- The gallery page shows the photos as a slideshow (see "How the gallery slideshow works" below)
- Phone number and email on the contact page are clickable (`tel:` / `mailto:`)
- An inquiry page where visitors leave their name, surname, email, telephone number and a message about their query or issue, and the details are emailed to the bakery (see "Inquiry page" below)
- Every page shows today's date and the current time in a bar at the very top, ticking forward every second and staying in view as you scroll (see "Live date and time" below)

## Before you use it
1. **Video file**: now points to your actual file, `images/VID-20260918-WA0007.mp4`.
2. **"gallary" spelling**: kept as-is throughout (matching your existing filename) so links don't break. Worth renaming to "gallery" consistently across all files and links if you get the chance, since it's the correct spelling.
3. **Inquiry form**: it won't send anything until you put your own email address into `js/script.js` (see "Inquiry page" below).

## About, Service, Gallery & Contact pages
These now share the same header, sticky nav, and footer as the home page, and link to the same `css/stylesheet.css` and `js/script.js` — so styling and the mobile menu/active-link highlighting work identically across all five pages.

Page-specific changes:
- **About**: split into three sections with real headings (Our Story, What We Offer, Our Commitment to Quality) instead of a stack of `<h3>` tags; fixed "Ms.Monotwe" → "Ms. Monotwe" and "Queens Cakes" → "queen cakes"
- **Contact**: address/phone/email now sit in a proper list instead of loose text; phone and email are clickable (`tel:` / `mailto:` links) so visitors can call or email with one tap
- **Gallery**: the 9 photos are now a slideshow instead of a stacked column of images separated by `<br>` tags. Photos are shown in full (not cropped), and the slideshow replaces the click-to-enlarge lightbox that was in an earlier version of this page
- **Service**: fixed invalid markup where an `<h3>` was wrapped around the `<ul>`'s `<li>` items (not valid HTML); each service now has a gold checkmark and highlights on hover

**Worth double-checking on the gallery page:**
- The original copy mentioned sizes "5L 10L and 20L" for baked goods, which reads like it was copied from a different kind of product (those are liquid volumes). I reworded the paragraph without that specific detail — let me know the actual sizing/pricing info if you'd like it added back in properly.
- There was an empty `<a href="PDF FILE"></a>` with no link text or real destination — removed since it wasn't functional. If it was meant to link to a menu or price list PDF, send it over and I'll wire it up.
- You pasted the gallery page twice (identical) — only one copy was used.

## How the gallery slideshow works
The slideshow lives in `gallary.html` (the markup), `css/stylesheet.css` (the look and fade effect) and `js/script.js` (the behaviour).

| Control | What it does |
|---|---|
| Auto-play | Starts by itself as soon as the page loads (no click needed), moves to the next photo every 2 seconds and loops back to the first after the last |
| Pause / Play button | Sits under the photo. Stops or restarts the auto-play; the label switches between "Pause" and "Play" |
| ‹ and › arrows | Previous / next photo |
| Dots | Jump straight to any photo (one dot is built automatically per photo) |
| Counter | Shows the current position, e.g. "3 / 9" |
| Keyboard | Left and right arrow keys change photo |
| Swipe | Swipe left or right on a phone or tablet |

Good to know:
- **Change the speed**: in `js/script.js`, edit `SLIDE_DELAY = 2000` (milliseconds, so 2000 = 2 seconds; try 3000 for a calmer pace). The fade between photos is the `transition` on `.slide` in `css/stylesheet.css` (currently 0.4s).
- **Add or remove a photo**: add or delete one `<figure class="slide">…</figure>` in `gallary.html`. The dots and counter update on their own. Only the first slide should have `class="slide active"`.
- **Reduced motion**: if a visitor's device is set to reduce motion, the fade becomes an instant swap. Auto-play still starts, and the Pause button stops it.
- **Background tab**: auto-play pauses while the browser tab isn't visible and picks up again when the visitor comes back (unless they pressed Pause).
- **Not starting?** The dots and the "1 / 9" counter are built by `js/script.js`. If you don't see them under the photo, the script isn't loading, so check that the `js` folder sits next to `gallary.html`.

## Inquiry page
`inquiry.html` is a form where visitors leave their **name, surname, email address, telephone number and a message** describing their query or issue (all required). It's linked in the navigation between Gallery and Contact, and it uses the site's cream, brown and gold instead of the blue and white of the sample contact form it was modelled on.

**Set-up (do this once, otherwise nothing is sent):**
1. Open `js/script.js` and find the line `var ADMIN_EMAIL = 'your-email@example.com';` in the "Inquiry form" section.
2. Replace the placeholder with the email address that should receive inquiries. Use an inbox you can open, and not the address shown in the sample code you photographed, which belongs to someone else.
3. Open the page, fill in the form and send one inquiry. FormSubmit normally sends a one-time activation email to that address the first time; click the link in it. After that, each inquiry arrives in your inbox as a table.

Until step 2 is done the form shows "This form is not connected yet" and sends nothing.

How it works:
- **Checks before sending**: the browser checks the required fields and the email format. The script then checks that names contain only letters, spaces, apostrophes and hyphens, and that the telephone number is 9 to 20 characters of digits, `+`, spaces, brackets or hyphens, and that the message is at least 10 characters long (the box holds up to 1000). A problem appears in a message under the button and the cursor jumps to that field.
- **Sending**: the details are posted to the free FormSubmit service (`formsubmit.co`), the same approach as the sample contact form. This means inquiries pass through FormSubmit's servers on their way to your inbox.
- **While sending**: the button is disabled and says "Sending..." so it can't be clicked twice. A success or error message then appears under it, and the form clears after a success.
- **Look**: the `.inquiry-card`, `.form-group` and `.submit-btn` rules in `css/stylesheet.css`. Focus outlines and the button hover are gold, the button is dark brown, and errors use a brick red. The message box matches the other fields and can be stretched taller by dragging its bottom corner.
- **Adding a field** (for example a subject drop-down): add another `<div class="form-group">` to the form in `inquiry.html`, then add its value to the `JSON.stringify` call in `js/script.js`.

## Live date and time
Every page shows today's date and the current time in a gold bar at the very top, above the logo, and it ticks forward every second. The bar stays in view as you scroll, with the navigation bar fixed just beneath it. It reads the visitor's own device clock, so someone in another time zone sees their own local time.

- **Markup**: each page has `<div class="top-bar"><time id="liveClock">&nbsp;</time></div>` straight after the opening `<body>` tag, before the header. Keep `id="liveClock"` exactly as written, because `js/script.js` looks for it. Any new page needs the same block.
- **Behaviour**: `js/script.js` fills it in as soon as the page loads and refreshes it every second.
- **Look**: the `.top-bar` rule in `css/stylesheet.css`. To let the bar scroll away with the page instead of staying in view, delete `position: sticky;` and `top: 0;` from `.top-bar`, and change `top: var(--topbar-height);` in `.site-nav` to `top: 0;`.
- **Change the format**: in the clock section of `js/script.js`, remove `second: '2-digit'` to hide the seconds, or add `hour12: false` to the time options for a 24-hour clock.

## Summary of changes to the home page from the original file
| Area | Before | After |
|---|---|---|
| Language tag | `lang="eng"` (invalid) | `lang="en"` |
| Head | No charset/viewport meta tags | Added `charset` and `viewport` meta tags so the page renders correctly and responsively on all devices |
| Styling | Inline `style=""` attributes on images; no real design | All styling moved into `css/stylesheet.css`; warm cream/brown/gold bakery theme |
| Layout tags | `<center>`, `<u>`, `<H1>` (deprecated/inconsistent) | Semantic `<header>`, `<section>`, `<figure>`, styled with CSS instead |
| Accessibility | Images had no `alt` text | Descriptive `alt` attributes added to every image |
| Navigation | Buried at the bottom of `<main>`, links used a literal `"|"` character, no current-page indicator | Moved to a proper `<nav>` at the top, sticky on scroll, active page highlighted automatically, collapses into a hamburger menu on mobile |
| Intro paragraph | Repeated "to see more of our baked goods" twice | Reworded so it reads naturally once |
| Video | `<source src="images/">` — empty, broken, no fallback text | Real filename path, `type` attribute, and fallback text for unsupported browsers |
| Interactivity | None (static HTML only) | Hover/zoom effects on images and nav, mobile menu toggle, scroll-based back-to-top button, JS-driven active nav highlighting (`js/script.js`) |
| Footer | Just the copyright symbol and student number | Bakery name and year added alongside the student number, plus the back-to-top button |
