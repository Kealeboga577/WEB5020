// ==========================================================
// Punky's Bakery — site interactivity
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- Mobile navigation toggle ----
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // ---- Highlight the current page in the nav ----
    var navLinks = document.querySelectorAll('.site-nav a');
    var currentPage = window.location.pathname.split('/').pop() || 'home.html';

    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // ---- Back-to-top button ----
    var backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Live date & time (shown in the header of every page) ----
    var clock = document.getElementById('liveClock');

    if (clock) {
        var updateClock = function () {
            var now = new Date();
            var dateText = now.toLocaleDateString(undefined, {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
            });
            var timeText = now.toLocaleTimeString(undefined, {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
            clock.textContent = dateText + ' \u00B7 ' + timeText;
            clock.setAttribute('datetime', now.toISOString());
        };

        updateClock();                          // show the time straight away
        setInterval(updateClock, 1000);         // then refresh it every second

        // Catch up instantly when the visitor returns to this tab
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) {
                updateClock();
            }
        });
    }

    // ---- Gallery slideshow (gallary.html only) ----
    var slideshow = document.getElementById('slideshow');

    if (slideshow) {
        var slides = slideshow.querySelectorAll('.slide');
        var slidesWrap = slideshow.querySelector('.slides');
        var prevBtn = document.getElementById('slidePrev');
        var nextBtn = document.getElementById('slideNext');
        var playBtn = document.getElementById('slidePlay');
        var counter = document.getElementById('slideCounter');
        var dotsWrap = document.getElementById('slideDots');

        var SLIDE_DELAY = 2000;   // milliseconds between automatic slides — change this to speed up / slow down
        var current = 0;          // index of the slide being shown
        var timer = null;         // holds the auto-advance timer
        var dots = [];

        // The slideshow starts playing by itself as soon as the page loads — no click needed.
        // The Pause button is the only thing that stops it.
        var autoplay = true;

        // Show one slide (wraps around: after the last comes the first)
        var showSlide = function (index) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            dots[current].removeAttribute('aria-current');

            current = (index + slides.length) % slides.length;

            slides[current].classList.add('active');
            dots[current].classList.add('active');
            dots[current].setAttribute('aria-current', 'true');
            counter.textContent = (current + 1) + ' / ' + slides.length;
        };

        // (Re)start the auto-advance timer — or just stop it if autoplay is switched off
        var resetTimer = function () {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            if (autoplay) {
                timer = setInterval(function () {
                    showSlide(current + 1);
                }, SLIDE_DELAY);
            }
        };

        // Update the Play/Pause button's text and screen-reader label
        var updatePlayButton = function () {
            playBtn.textContent = autoplay ? '\u275A\u275A Pause' : '\u25B6 Play';
            playBtn.setAttribute('aria-label', autoplay ? 'Pause slideshow' : 'Play slideshow');
            // Only announce slide changes to screen readers when the slideshow isn't moving by itself
            slidesWrap.setAttribute('aria-live', autoplay ? 'off' : 'polite');
        };

        // Manual navigation: change slide, then restart the timer so it doesn't flip straight after a click
        var goTo = function (index) {
            showSlide(index);
            resetTimer();
        };

        // Build one dot button per slide
        slides.forEach(function (slide, i) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dot';
            dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
            dot.addEventListener('click', function () {
                goTo(i);
            });
            dotsWrap.appendChild(dot);
            dots.push(dot);
        });

        // Set up the first slide's dot and counter
        dots[0].classList.add('active');
        dots[0].setAttribute('aria-current', 'true');
        counter.textContent = '1 / ' + slides.length;

        // Previous / next buttons
        prevBtn.addEventListener('click', function () {
            goTo(current - 1);
        });
        nextBtn.addEventListener('click', function () {
            goTo(current + 1);
        });

        // Play / pause button
        playBtn.addEventListener('click', function () {
            autoplay = !autoplay;
            updatePlayButton();
            resetTimer();
        });

        // Keyboard: left / right arrow keys
        document.addEventListener('keydown', function (e) {
            if (e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (e.key === 'ArrowLeft') {
                goTo(current - 1);
            } else if (e.key === 'ArrowRight') {
                goTo(current + 1);
            }
        });

        // Touch: swipe left / right on phones and tablets
        var touchStartX = null;

        slideshow.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        slideshow.addEventListener('touchend', function (e) {
            if (touchStartX === null) {
                return;
            }
            var distance = e.changedTouches[0].clientX - touchStartX;
            touchStartX = null;
            if (Math.abs(distance) > 50) {
                goTo(distance < 0 ? current + 1 : current - 1);
            }
        }, { passive: true });

        // Don't keep flipping slides while the browser tab is in the background
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
            } else {
                resetTimer();
            }
        });

        // Go!
        updatePlayButton();
        resetTimer();
    }

});
