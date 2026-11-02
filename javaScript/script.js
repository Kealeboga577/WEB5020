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

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


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

    // ---- Inquiry form (inquiry.html only) ----
    var inquiryForm = document.getElementById('inquiryForm');

    if (inquiryForm) {
        var submitBtn = document.getElementById('submitBtn');
        var formStatus = document.getElementById('formStatus');

        // IMPORTANT: replace this with the email address that should receive the inquiries.
        // (FormSubmit sends a one-time activation email to this address the first time the form is used.)
        var PLACEHOLDER_EMAIL = 'your-email@example.com';
        var ADMIN_EMAIL = 'your-email@example.com';

        // Names: letters (including accented ones), spaces, apostrophes and hyphens
        var namePattern = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF '\-]*$/;
        // Phone: optional +, then 9–20 digits, spaces, brackets or hyphens
        var phonePattern = /^\+?[0-9 ()-]{9,20}$/;

        // Show a message under the button. type is 'info', 'success' or 'error' (matches the CSS classes)
        var showStatus = function (message, type) {
            formStatus.textContent = message;
            formStatus.className = 'form-status ' + type;
        };

        // Report a problem with one field: message + move the cursor to that field
        var fieldError = function (fieldId, message) {
            showStatus(message, 'error');
            document.getElementById(fieldId).focus();
        };

        inquiryForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            // 1. The browser's built-in checks (required fields, email format, length)
            if (!inquiryForm.checkValidity()) {
                inquiryForm.reportValidity();
                return;
            }

            var name = document.getElementById('firstName').value.trim();
            var surname = document.getElementById('surname').value.trim();
            var email = document.getElementById('email').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var message = document.getElementById('message').value.trim();

            // 2. Extra checks for names, the phone number and the message
            if (!namePattern.test(name)) {
                fieldError('firstName', 'Please enter a valid name (letters, spaces, apostrophes and hyphens only).');
                return;
            }
            if (!namePattern.test(surname)) {
                fieldError('surname', 'Please enter a valid surname (letters, spaces, apostrophes and hyphens only).');
                return;
            }
            if (!phonePattern.test(phone)) {
                fieldError('phone', 'Please enter a valid telephone number, for example +27 82 123 4567.');
                return;
            }
            if (message.length < 10) {
                fieldError('message', 'Your message must contain at least 10 characters.');
                return;
            }

            // 3. Has the receiving email address been set up yet?
            if (ADMIN_EMAIL === PLACEHOLDER_EMAIL) {
                showStatus('This form is not connected yet. Add your email address to ADMIN_EMAIL in js/script.js.', 'error');
                return;
            }

            // Stop repeated clicks while sending
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            showStatus('Submitting your inquiry...', 'info');

            try {
                // Send the details to FormSubmit's AJAX endpoint, which emails them to ADMIN_EMAIL
                var response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(ADMIN_EMAIL), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        surname: surname,
                        email: email,
                        phone: phone,
                        message: message,
                        _subject: "New Inquiry from Punky's Bakery Website",
                        _template: 'table'
                    })
                });

                var result = await response.json();

                // Only show success if the service confirms it accepted the message
                if (response.ok && (result.success === true || result.success === 'true')) {
                    showStatus('Thank you, ' + name + '! Your inquiry was sent and we will be in touch soon.', 'success');
                    inquiryForm.reset();
                } else {
                    throw new Error(result.message || 'The email service did not confirm submission.');
                }
            } catch (error) {
                console.error('Inquiry form error:', error);
                showStatus('Sorry, your inquiry could not be confirmed. Please check your connection and try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Inquiry';
            }
        });
    }

});
