#part 2 imporvements
1. Overview
The site started as five separate HTML pages. Each repeated its own inline styling, used outdated tags such as <center> and <u>, had no alt text on images and, apart from the home page, did not link to a stylesheet at all. The navigation sat at the bottom of every page and nothing on the site was interactive.
The final project keeps the same five pages (plus a sixth, the inquiry page, added later; see section 16), but they now share one stylesheet (css/stylesheet.css) and one script (js/script.js), with a consistent header, sticky navigation bar and footer. The gallery page shows the photos in a grid (it ran as a slideshow for a while, see section 15) and the home page plays your own video file.

2. Final improvement
• home.html, about.html, service.html, gallary.html, contact.html — the original five pages (inquiry.html was added later, see section 16)
• css/stylesheet.css — all styling (new)
• js/script.js — all interactivity (new)
• README.md — project notes and instructions (new)
• images/ — your existing folder: logo, photos, and the video file VID-20260918-WA0007.mp4

3. Improvenments on HTML
• Language code: the lang value eng is not valid, so every page now uses en.
• Added <meta charset=UTF-8>, a viewport meta tag (so pages scale correctly on phones) and a short description meta tag to every page.
• Page titles now follow one pattern, for example “About | Punky's Bakery”.
• Every page links to css/stylesheet.css (four of the five pages did not link any stylesheet before) and loads js/script.js at the end of the body.
• Outdated or purely visual tags were replaced: <center>, <u> and the upper-case <H1> became a normal <h1>, with centring and underlining done in CSS.
• Semantic structure: <header>, <nav>, <main>, <section>, <figure> and <footer> are used so each part of the page has a clear role.
• Headings are used as headings. Body text that was wrapped in <h3> is now in <p>, and each block of content has an <h2> heading.
• Invalid markup was fixed. On the Service page the list items were wrapped in an <h3> inside the <ul>. On the Gallery page an empty <h3></h3> was followed by a stray closing </h3>.
• The navigation was rebuilt as a <nav> containing a list of links and moved to the top of the page, directly under the header.
• The footer is the same on every page: © 2026 Punky's Bakery — ST10512970, plus the back-to-top button

4. What is taken out
• All inline style attributes (image sizes and the pink body background on the About, Service, Contact and Gallery pages). Their purpose now lives in the stylesheet.
• The typed “|” characters inside the navigation link text.
• The sentence “Please find the following as a navigation around the website for help.” from every page, because the navigation is now a real bar at the top.
• The line breaks (<br>) that stacked the images on the home and gallery pages.
• On the About page, the sub-line “Here is some information about our bakery.”
• On the Gallery page: the empty link whose destination was the placeholder text PDF FILE, the sentence about sizes of 5L, 10L and 20L, and the closing all-caps sales line (“I KNOW YOU WILL ORDER SOME OF OUR BACKED GOODS”). The typos in that paragraph (“Puncky's”, “diffferent”, “BACKED”) went with the rewrite.
• The second, identical copy of the gallery page that was pasted in.
• Intermediate gallery code that was later replaced: the photo grid and the click-to-enlarge lightbox (see section 9).

5. Accessiblty improvements
• Every image now has alt text. The logo says “Punky's Bakery logo”, the three home page photos describe bread, pastries and cupcakes, and the nine gallery photos are labelled “Baked good 1” to “Baked good 9”.
• The menu button, back-to-top button and slideshow buttons have labels for screen readers. The menu button reports whether it is open or closed.
• The slideshow is marked as a carousel, the current dot is flagged, and slide changes are only announced to screen readers while the slideshow is paused (so a screen reader is not interrupted every two seconds).
• Buttons and links show their hover style when reached with the keyboard as well.
• Visitors whose device is set to reduce motion get an instant slide swap instead of a fade (auto-play still runs, and the Pause button stops it).

6. CSS
• Colour palette stored as CSS variables so it is easy to change in one place: cream (#fdf6ec) for the page, dark brown (#3e2723) for text and the navigation bar, medium brown (#6f4e37) for headings, and gold (#c9973a) for accents. This replaces the pink background used on four pages.
• Fonts: Georgia for headings and the system sans-serif font for body text, so nothing has to be downloaded.
• Header: the logo is shown at a fixed height with its proportions kept (before, it was stretched to the full page width), and the main title is underlined in gold.
• Navigation: a dark brown bar that stays in view while scrolling (directly under the clock bar described in section 14), with a gold hover colour and a gold underline on the current page.
• Content cards: the About, Service and Contact content sits on white cards with rounded corners and a soft shadow. The main content area is centred with a maximum width of 1000 pixels.
• Home page photos sit side by side in a centred row (they were stacked in a column) and zoom slightly on hover. The video has rounded corners and never overflows small screens.
• Hover effects: navigation links, text links, photos, service list items and slideshow controls all change smoothly rather than jumping.
• Responsive design: below 700 pixels wide the navigation collapses into a menu button, the home photos shrink and the slideshow becomes square.
• Slideshow styles for the gallery page, including the fade between photos (section 9).

7. JS
The file is shared by every page. Each feature only switches on when the elements it needs exist on that page.
• Mobile menu: the three-line button opens and closes the navigation on small screens.
• Current page highlight: the script reads the page's file name and adds the gold underline to the matching navigation link, so no page needs to be marked by hand.
• Back-to-top button: hidden at first, fades in after scrolling 300 pixels, and scrolls smoothly to the top when clicked.
• Gallery slideshow: described in full in section 9.

8. Page to page 
Home page (home.html)
• The header logo no longer stretches across the page, and the title is now centred by CSS instead of <center>.
• The navigation moved from the bottom of the main content to a sticky bar under the header.
• The three photos have alt text and are shown as a row of equal squares (cropped to fit), with a zoom on hover.
• The video has a type, fallback text for browsers that cannot play it, and the logo as its poster image (the picture shown before pressing play). Its size is now 400 by 300 and it shrinks on small screens.
• Wording changes: the title is now in normal capitals (“Welcome to Punky's Bakery”); “Ms.Monotwe” became “Ms. Monotwe”; a heading “Freshly Baked With Love” was added above the intro; the gallery sentence now reads “See more of our baked goods in the gallery. Click here to view the full gallery.” (the old version repeated “to see more of our baked goods” twice); the video sentence was replaced by the heading “Watch Us Bake” and the line “Take a look behind the scenes at how we make our baked goods.”; navigation labels changed from capitals with a bar (HOME|) to normal capitals (Home), and the visible label GALLARY now reads Gallery.
About page (about.html)
• The text is divided into three sections with headings: Our Story, What We Offer, and Our Commitment to Quality. These headings are new.
• Wording changes: the title now reads “About Punky's Bakery” instead of “WELCOME TO PUNKY'S ABOUT PAGE.”; “Ms.Monotwe” became “Ms. Monotwe”; “Cookies, Scones, Jam Tarts, Queens Cakes and more” became “cookies, scones, jam tarts, queen cakes, and more”; the sub-line “Here is some information about our bakery.” was removed. The remaining paragraphs are your original sentences.
Service page (service.html)
• The invalid heading-around-list markup was replaced with a normal list under a heading.
• Each service now has a gold tick and shifts slightly with a highlight when hovered.
• Wording changes: the title now reads “Punky's Bakery Services”; the intro line reads “Here are the services we offer at Punky's Bakery.” (it was in capitals); the heading “What We Offer” was added. The four services themselves are unchanged.
Contact page (contact.html)
• The address, phone and email were loose text. They now sit in a list inside a card.
• The phone number and email address are clickable links, so a visitor can call or write with one tap.
• Wording changes: the title now reads “Contact Punky's Bakery”; the heading “Get In Touch” was added. Your intro sentence and the three contact details are unchanged.
Gallery page (gallary.html)
• The nine photos are shown in a responsive grid (they were a slideshow for a while; see sections 9 and 15).
• Wording changes: the title now reads “Punky's Gallery”; the intro paragraph was rewritten as “Here's a look at some of Punky's baked goods. Everything is made to order, so it's always as fresh as the last batch.” followed by a short sentence explaining how to browse the photos. The idea that goods are made to order was kept; the sizes sentence and the all-caps closing line were dropped (see section 4).

9. The gallery page, step by step
The gallery changed three times.
• Original: nine images, each forced to 200 by 200 pixels (which squashes photos that are not square) and separated by line breaks, so they formed one long column.
• Second version: a responsive grid of photos. Clicking a photo opened it enlarged in a lightbox that closed with the cross, a click outside the photo, or the Esc key.
• Current version: a slideshow. The grid, the lightbox, and all of the CSS and JavaScript that belonged to them were removed, so no unused code is left behind. A later adjustment made auto-play always start when the page loads (even on devices set to reduce motion) and removed the pause-on-hover behaviour, so the Pause button is the only thing that stops it.
How the slideshow behaves:
• Auto-play: it starts by itself as soon as the page loads, then moves to the next photo every 2 seconds and loops back to the first photo after the ninth. The speed is the number in SLIDE_DELAY near the top of the slideshow section of js/script.js.
• Pause / Play button (under the photo; its label switches between Pause and Play), previous and next arrows, a row of dots (one per photo, built automatically) and a counter such as “3 / 9”.
• Left and right arrow keys change photo, and swiping left or right works on phones and tablets.
• Auto-play pauses only while the browser tab is in the background, or when someone presses Pause. Hovering the mouse over the slideshow does not pause it.
• Photos fade into each other over 0.4 seconds and are shown in full inside a dark brown frame (they are not cropped).
• To add or remove a photo, add or delete one <figure> with the class slide in gallary.html; the dots and counter update on their own. Only the first slide should also carry the class active.

10. The video
The original video tag pointed to the images/ folder with no file name, so nothing could play. It first pointed to a placeholder (videos/bakery-process.mp4) and now points to your real file, images/VID-20260918-WA0007.mp4. The README was updated to match, and the placeholder videos/ folder was removed from the project structure.

11. The README
The README was created with the home page and has been updated each time the site changed. It now contains: the project folder structure; what the site does; notes on the About, Service, Gallery and Contact pages; items worth double-checking; a table explaining every slideshow control, with how to change the speed and add photos; and a before-and-after table for the home page.

12. Worth double-checking
• Wording: some page titles and a few sentences were reworded (listed page by page in section 8). If your assignment requires the original wording, such as the “WELCOME TO PUNKY'S … PAGE.” titles, those lines can be restored.
• Logo shape: the logo is displayed with a fully rounded (circular) frame. If the logo is not square, its corners may be cut off. Removing the border-radius line from the logo rule in the stylesheet shows it uncropped.
• Alt text: the descriptions of the three home page photos (bread, pastries, cupcakes) were written without seeing the photos. Edit them to match what each picture shows. The gallery alt text is generic (“Baked good 1” and so on) and could be made more specific.
• Sizes: the original gallery text listed sizes of 5L, 10L and 20L, which are volumes and did not seem to suit baked goods. Add the correct sizing or pricing if you want it on the page.
• Contact details: the address, phone number and email look like sample values. Replace them with the real ones before the site goes public.
• File name: the gallery page is still called gallary.html, matching your original links. Renaming it to gallery.html would be more correct, but every link to it would need to change as well.

13. Testing
The slideshow logic was checked with an automated test that loads the gallery page without a browser window. All 17 checks passed, covering the photo count, dots, next and previous with wrap-around, jumping with a dot, the arrow keys, pause and resume, automatic advancing, and the mobile menu button. A second test (16 more checks, all passed) confirmed that the slideshow starts moving by itself with no clicks, both with and without a reduce-motion setting, and that the Pause / Play button works. A third test confirmed that the live clock (section 14) appears in the top bar above the logo and ticks forward on all five pages, and that the slideshow reaches photo 2 after about 2 seconds and photo 3 after about 4. The pages have not been viewed in a real browser with your actual photos and video, so open each page once and click through the slideshow to confirm everything looks right.

14. Later additions: faster slideshow and a live clock
The slideshow felt slow and the site had no time display, so two changes were made.
• Slideshow speed: the delay between photos was cut from 4 seconds to 2 seconds (SLIDE_DELAY in js/script.js), and the fade between photos from 0.6 to 0.4 seconds (the transition on .slide in the stylesheet). SLIDE_DELAY is in milliseconds, so 3000 gives three seconds per photo.
• Live date and time: every page now shows today's date and the current time in a bar at the very top of the page, updated every second. It reads the visitor's own device clock and language settings, so it shows their local time in a format such as Sunday, 1 November 2026 · 14:55:17, or the equivalent in their language.
• How it is built: a <div class=top-bar> holding a <time id=liveClock> element was added to all five pages inside a slim gold bar at the very top, directly after the opening body tag. It first appeared under the main title in the header, then was moved to the top so it is easier to see. js/script.js fills it in on load, refreshes it every second, and updates it straight away when a visitor returns to the tab. The stylesheet makes the bar gold with bold dark-brown text and equal-width digits, so the numbers do not shift as they change. The bar stays in view while scrolling, with the navigation bar fixed just beneath it. The datetime attribute on the <time> element is kept current, and screen readers are not told about every tick.
• Files changed: all five HTML pages, css/stylesheet.css, js/script.js and README.md, which gained a Live date and time section and the new slideshow speed.

15. Slideshow removed
The gallery slideshow was removed at your request, together with everything that belonged to it.
• Removed from gallary.html: the slideshow container, the previous and next arrows, the Pause / Play button, the photo counter, the dots, and the sentence telling visitors to use the arrows and dots.
• Removed from css/stylesheet.css: every slideshow rule (the frame, the fading slides, the arrow buttons, the controls, the dots, and the reduced-motion and phone-size adjustments).
• Removed from js/script.js: the whole slideshow section, including auto-play, the speed setting (SLIDE_DELAY), Pause / Play, and the arrow, dot, keyboard and swipe controls.
• Replaced with: a plain grid of the same nine photos that reflows to fit the screen width and zooms slightly when a photo is hovered. It needs no JavaScript. The click-to-enlarge lightbox from the earlier version was not brought back.
• Kept: the live clock bar at the top of every page, the mobile menu, the current-page highlight and the back-to-top button. After the removal, all five pages loaded without script errors and the clock still ticked on each.
• The README was left unchanged at your request, so it still describes the slideshow. Sections 5, 7, 9 and 13, and the slideshow-speed part of section 14, also describe the slideshow as it was built. They are kept as a record of the project's history, and this section describes the current state.

16. Inquiry page added
A new page, inquiry.html, lets visitors leave their details so the bakery can contact them.
• Based on: the photos you sent of a contact form and its script (required fields, built-in plus extra validation, and sending through the FormSubmit service). The layout and logic were adapted for this site rather than copied.
• Fields: name, surname, email address and telephone number, all required. The sample form's subject and message fields were left out because you listed only these four. Adding a field later takes one new block in the form and one new line in the script.
• Colours: the sample's navy and white were replaced with the site palette. The page and the field backgrounds are cream, the card is white, the button and text are dark brown, and the focus outline and button hover are gold. Error messages use a brick red so they stand out.
• Validation: the browser checks the required fields and the email format. The script then checks that names contain only letters, spaces, apostrophes and hyphens, and that the telephone number is 9 to 20 characters of digits, plus signs, spaces, brackets or hyphens. A problem is shown in a message under the button and the cursor jumps to the field concerned.
• Sending: once the form passes, js/script.js posts the details to FormSubmit, a free service that emails them to the bakery. While sending, the button is disabled and reads Sending so it cannot be clicked twice. A success or failure message then appears under the button, and the form clears after a success. Inline messages are used instead of the pop-up alert boxes in the sample.
• Navigation: an Inquiry link was added between Gallery and Contact on all six pages, and the current-page highlight works for it automatically.
• Files changed: inquiry.html (new), the navigation in the five existing pages, css/stylesheet.css (form styles and one new colour variable for errors), js/script.js (form logic) and README.md (a new Inquiry page section, set-up steps and the new folder entry).
• Set-up still needed: the address that receives inquiries is the ADMIN_EMAIL line in the inquiry section of js/script.js, and it currently holds a placeholder. The email address visible in your photographed code was deliberately not copied, because it belongs to someone else and inquiries would have gone to their inbox. FormSubmit normally sends a one-time activation email to the address the first time the form is used. Until the placeholder is replaced, the form shows a not-connected message and sends nothing.
• Testing: the form logic was checked with an automated test that uses a pretend FormSubmit (28 checks, all passed). It covered empty and invalid input, a valid submission, the exact data sent, a refusal from the service, a network failure, the disabled button while sending, the placeholder safeguard, and the navigation link on all six pages. Real sending was not tested, because it needs an internet connection to FormSubmit and an activated address, and the page has not been viewed in a real browser.