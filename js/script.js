// ===== MOBILE NAV TOGGLE =====
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== DROPDOWN TOGGLE FOR MOBILE =====
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        }
    });
});

// Enhanced scroll effect for transparent header (your existing code)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

// Smooth scrolling for anchor links (updated to exclude dropdown links)
document.querySelectorAll('a[href^="#"]:not(.dropdown-menu a)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close dropdowns when clicking outside (optional enhancement)
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateY(-10px)';
        });
    }
});

// Hero animation on load (your existing code)
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '1';
});