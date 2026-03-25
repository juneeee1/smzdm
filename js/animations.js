/**
 * animations.js - Scroll animations, nav behavior, interactions
 */

function initAnimations() {
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
    initHamburger();
    initContactSlider();
    initNavActiveState();
}

/* Scroll reveal using Intersection Observer */
function initScrollReveal() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
    });
}

/* Nav background on scroll */
function initNavScroll() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var lastScroll = 0;
    window.addEventListener('scroll', function() {
        var scrollY = window.pageYOffset;
        if (scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }, { passive: true });
}

/* Smooth scroll for anchor links */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                var navHeight = 70;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            var mobileMenu = document.getElementById('mobile-menu');
            var hamburger = document.getElementById('hamburger');
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
}

/* Hamburger menu toggle */
function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
}

/* Active nav state based on scroll position */
function initNavActiveState() {
    var sections = ['home', 'about', 'product-value', 'cooperation', 'contact'];
    var navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        var scrollY = window.pageYOffset + 200;

        var currentSection = '';
        sections.forEach(function(id) {
            var el = document.getElementById(id);
            if (el && el.offsetTop <= scrollY) {
                currentSection = id;
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* Contact section slider */
function initContactSlider() {
    var cards = document.getElementById('contact-cards');
    var progressFill = document.getElementById('contact-progress-fill');
    if (!cards || !progressFill) return;

    var isDragging = false;
    var startX = 0;
    var scrollLeft = 0;

    cards.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - cards.offsetLeft;
        scrollLeft = cards.scrollLeft;
        cards.style.cursor = 'grabbing';
    });

    cards.addEventListener('mouseleave', function() {
        isDragging = false;
        cards.style.cursor = 'grab';
    });

    cards.addEventListener('mouseup', function() {
        isDragging = false;
        cards.style.cursor = 'grab';
    });

    cards.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - cards.offsetLeft;
        var walk = (x - startX) * 2;
        cards.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    cards.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
        scrollLeft = cards.scrollLeft;
    }, { passive: true });

    cards.addEventListener('touchmove', function(e) {
        var x = e.touches[0].pageX;
        var walk = (startX - x);
        cards.scrollLeft = scrollLeft + walk;
    }, { passive: true });

    // Update progress on scroll
    cards.addEventListener('scroll', function() {
        var maxScroll = cards.scrollWidth - cards.clientWidth;
        var percent = maxScroll > 0 ? cards.scrollLeft / maxScroll : 0;
        progressFill.style.transform = 'translateX(' + (percent * 100) + '%)';
    }, { passive: true });

    cards.style.cursor = 'grab';
    cards.style.overflowX = 'auto';
    cards.style.scrollbarWidth = 'none';
    cards.style.msOverflowStyle = 'none';
}

/* Add parallax effect to blur circles */
function initParallax() {
    var blurs = document.querySelectorAll('.blur-circle');
    window.addEventListener('scroll', function() {
        var scrollY = window.pageYOffset;
        blurs.forEach(function(blur) {
            var rect = blur.parentElement.getBoundingClientRect();
            var speed = 0.05;
            blur.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
        });
    }, { passive: true });
}
