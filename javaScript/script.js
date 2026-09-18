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

    // ---- Gallery lightbox (click a photo to enlarge it) ----
    var galleryImages = document.querySelectorAll('.gallery-item img');
    var overlay = document.getElementById('lightboxOverlay');
    var overlayImg = document.getElementById('lightboxImage');
    var overlayClose = document.getElementById('lightboxClose');

    if (galleryImages.length && overlay && overlayImg && overlayClose) {
        var closeLightbox = function () {
            overlay.hidden = true;
            overlayImg.src = '';
        };

        galleryImages.forEach(function (img) {
            img.addEventListener('click', function () {
                overlayImg.src = img.src;
                overlayImg.alt = img.alt;
                overlay.hidden = false;
            });
        });

        overlayClose.addEventListener('click', closeLightbox);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }

});