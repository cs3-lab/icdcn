/* =============================================================
   ICDCN 2027 — script.js
   Clean, consolidated JavaScript
   ============================================================= */

(function () {
    'use strict';

    // ===== MOBILE NAV TOGGLE =====
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks      = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ===== MOBILE DROPDOWN TOGGLE =====
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.closest('.dropdown').classList.toggle('open');
            }
        });
    });

    // Close mobile nav when a final link (non-toggle) is clicked
    document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // ===== HEADER SCROLL STATE =====
    const header = document.querySelector('header');

    function updateHeader() {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.classList.remove('transparent');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
        }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // run once on load

    // ===== SMOOTH SCROLLING for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== HERO FADE-IN =====
    // CSS animation handles this via opacity + @keyframes fadeInUp.
    // The JS fallback below ensures visibility even if the animation
    // hasn't triggered (e.g. prefers-reduced-motion).
    window.addEventListener('load', () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animationPlayState = 'running';
        }
    });

    // ===== SWIPER GALLERY =====
    if (typeof Swiper !== 'undefined') {
        new Swiper('.gallerySwiper', {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320:  { slidesPerView: 1 },
                640:  { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            },
        });
    }

})();
