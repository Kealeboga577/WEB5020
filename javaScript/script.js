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

    // ---- Live date & time (shown in the top bar of every page) ----
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

});
