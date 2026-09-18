# Punky's Bakery — Home Page

## Folder structure
Place these files alongside your existing `images` folder so the paths resolve correctly:

```
your-project/
├── home.html
├── about.html
├── contact.html
├── gallary.html
├── service.html
├── css/
│   └── stylesheet.css
├── js/
│   └── script.js
├── images/            (your existing folder — logo + all photos)
└── videos/
    └── bakery-process.mp4   (add your actual video file here)
```

All five pages now share the same header, nav, and footer, and link to the same `css/stylesheet.css` and `js/script.js` — the site is consistent end to end.

## What this page now does
- Responsive layout that adapts from desktop down to phone screens
- Sticky navigation bar with a hover/active state, and a hamburger menu on small screens
- Gallery images zoom slightly on hover for a more interactive feel
- A "back to top" button fades in once you scroll down and smooth-scrolls back up
- The current page is automatically highlighted in the nav (via `js/script.js`) — this works the same way on every page as long as each page includes the same script and nav markup

## Before you use it
1. **Video file**: the original file had an empty video `src`. It now points to `videos/bakery-process.mp4` — replace this with the actual path/filename of your video.
2. **Other pages**: `about.html`, `service.html`, `gallary.html`, and `contact.html` aren't included here — this task only covered the home page. To keep the site consistent, copy the same `<header>`, `<nav>`, and `<footer>` markup into those pages and link the same `css/stylesheet.css` and `js/script.js`.
3. **"gallary" spelling**: kept as-is throughout (matching your existing filename) so links don't break. Worth renaming to "gallery" consistently across all files and links if you get the chance, since it's the correct spelling.

## About, Contact & Gallery pages
These now share the same header, sticky nav, and footer as the home page, and link to the same `css/stylesheet.css` and `js/script.js` — so styling and the mobile menu/active-link highlighting work identically across all four pages.

Page-specific changes:
- **About**: split into three sections with real headings (Our Story, What We Offer, Our Commitment to Quality) instead of a stack of `<h3>` tags; fixed "Ms.Monotwe" → "Ms. Monotwe" and "Queens Cakes" → "queen cakes"
- **Contact**: address/phone/email now sit in a proper list instead of loose text; phone and email are clickable (`tel:` / `mailto:` links) so visitors can call or email with one tap
- **Gallery**: the 9 photos are now a responsive grid instead of a stacked column with `<br>` tags, and clicking any photo opens it enlarged in a lightbox (click outside it, the ✕, or press Esc to close)
- **Service**: fixed invalid markup where an `<h3>` was wrapped around the `<ul>`'s `<li>` items (not valid HTML); each service now has a gold checkmark and highlights on hover

**Worth double-checking on the gallery page:**
- The original copy mentioned sizes "5L 10L and 20L" for baked goods, which reads like it was copied from a different kind of product (those are liquid volumes). I reworded the paragraph without that specific detail — let me know the actual sizing/pricing info if you'd like it added back in properly.
- There was an empty `<a href="PDF FILE"></a>` with no link text or real destination — removed since it wasn't functional. If it was meant to link to a menu or price list PDF, send it over and I'll wire it up.
- You pasted the gallery page twice (identical) — only one copy was used.

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
